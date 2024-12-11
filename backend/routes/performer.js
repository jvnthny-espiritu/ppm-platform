const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path'); 
const User = require('../models/User');
// const PerformerDetails = require('../models/Performer/Details');
const PerformerAchievement = require('../models/Performer/Achievement');
const { Campus, CulturalGroup, Department, Program, PerformerDetails } = require('../models/Performer/Details');

// Setup multer storage for image files
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads/'); // Change the destination folder
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname)); // Filename will be a timestamp
	},
});

const upload = multer({ storage: storage });

// Add performer's details
router.post('/details', upload.single('image'), async (req, res) => {
	const { userId, campus, culturalGroup, department, program, srCode } = req.body;
	const image = req.file ? `/uploads/${req.file.filename}` : undefined;

	try {
		const performerDetails = new PerformerDetails({ user: userId, campus, culturalGroup, department, program, srCode, image });
		await performerDetails.save();

		res.status(201).json({ message: 'Performer details added successfully', performerDetails });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Edit performer's details
router.put('/details/:id', upload.single('image'), async (req, res) => {
	const { id } = req.params;
	const { campus, culturalGroup, department, program, srCode, firstName, lastName, email } = req.body;
	const image = req.file ? `/uploads/${req.file.filename}` : undefined;

	try {
		const updateData = { campus, culturalGroup, department, program, srCode };
		if (image) updateData.image = image;

		const performerDetails = await PerformerDetails.findByIdAndUpdate(id, updateData, { new: true });

		if (!performerDetails) {
			return res.status(404).json({ message: 'Performer details not found' });
		}

		const userId = performerDetails.user;
		const userUpdateData = { firstName, lastName, email };
		const user = await User.findByIdAndUpdate(userId, userUpdateData, { new: true });

		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		res.status(200).json({ message: 'Performer details and user updated successfully', performerDetails, user });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Delete performer's details
router.delete('/details/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const performerDetails = await PerformerDetails.findByIdAndDelete(id);

		if (!performerDetails) {
			return res.status(404).json({ message: 'Performer details not found' });
		}

		res.status(200).json({ message: 'Performer details deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Get performer's details
router.get('/details/:userId', async (req, res) => {
	const { userId } = req.params;

	try {
		const performerDetails = await PerformerDetails.findOne({ user: userId }).populate('campus culturalGroup department program');

		if (!performerDetails) {
			return res.status(404).json({ message: 'Performer details not found' });
		}

		res.status(200).json({ performerDetails });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Add performer's achievement
router.post('/achievement', async (req, res) => {
	const { userId, title, description } = req.body;

	try {
		const performerAchievement = new PerformerAchievement({ user: userId, title, description });
		await performerAchievement.save();

		res.status(201).json({ message: 'Performer achievement added successfully', performerAchievement });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Edit performer's achievement
router.put('/achievement/:id', async (req, res) => {
	const { id } = req.params;
	const { title, description } = req.body;

	try {
		const performerAchievement = await PerformerAchievement.findByIdAndUpdate(id, { title, description }, { new: true });

		if (!performerAchievement) {
			return res.status(404).json({ message: 'Performer achievement not found' });
		}

		res.status(200).json({ message: 'Performer achievement updated successfully', performerAchievement });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Delete performer's achievement
router.delete('/achievement/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const performerAchievement = await PerformerAchievement.findByIdAndDelete(id);

		if (!performerAchievement) {
			return res.status(404).json({ message: 'Performer achievement not found' });
		}

		res.status(200).json({ message: 'Performer achievement deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Get performer's achievements
router.get('/achievements/:userId', async (req, res) => {
	const { userId } = req.params;

	try {
		const performerAchievements = await PerformerAchievement.find({ user: userId });

		if (!performerAchievements) {
			return res.status(404).json({ message: 'Performer achievements not found' });
		}

		res.status(200).json({ performerAchievements });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Get registration values -- GOOD
router.get('/registration-values', async (req, res) => {
	try {
		const campuses = await Campus.find({}, 'label');
		const culturalgroups = await CulturalGroup.find({}, 'label');
		const departments = await Department.find({}, 'label');
		const programs = await Program.find({}, 'label department').populate('department', 'label');
	
		const programsByDepartment = departments.reduce((acc, department) => {
			acc[department.label] = programs
			.filter(program => program.department.label === department.label)
			.map(program => ({ label: program.label, _id: program._id  }));
			return acc;
		}, {});
	
		res.status(200).json({
			campuses,
			culturalgroups,
			departments,
			programs: programsByDepartment,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Get performer's details and achievements
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    // Fetch user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Fetch performer's details
    const performerDetails = await PerformerDetails.findOne({ user: userId }).populate('campus culturalGroup department program');
    if (!performerDetails) {
      return res.status(404).json({ message: 'Performer details not found' });
    }

    // Fetch performer's achievements
    const performerAchievements = await PerformerAchievement.find({ user: userId });
    if (!performerAchievements) {
      return res.status(404).json({ message: 'Performer achievements not found' });
    }

    res.status(200).json({
      user: {
        ...user.toObject(),
        ...performerDetails.toObject()
      },
      performerAchievements,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;