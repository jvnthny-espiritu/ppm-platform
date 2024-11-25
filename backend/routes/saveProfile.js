const express = require('express');
const router = express.Router();
const Profile = require('../models/createProfile'); // MongoDB model

// Save or update profile
router.post('/save-profile', async (req, res) => {
  try {
    // Debug: Log the entire request body
    console.log('Request body:', req.body);

    // Extract userId from req.user (ensure middleware is setting this correctly)
    const { userId } = req.user;
    console.log('Extracted userId:', userId);

    // Destructure profile data from request body
    const { firstName, lastName, email, culturalGroup, campus, department, program, srCode } = req.body;

    // Debug: Log received profile fields
    console.log('Profile fields:', { firstName, lastName, email, culturalGroup, campus, department, program, srCode });

    if (!userId) {
      console.error('Error: Unauthorized access - userId missing');
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Attempt to save or update the user profile
    console.log('Attempting to save or update the profile...');
    const profile = await Profile.findOneAndUpdate(
      { userId }, // Match by userId
      { firstName, lastName, email, culturalGroup, campus, department, program, srCode },
      { new: true, upsert: true } // Create if not found, and return the new document
    );

    console.log('Profile saved or updated successfully:', profile);

    // Respond with success message
    res.status(200).json({ message: 'Profile saved successfully', profile });
  } catch (error) {
    // Debug: Log the error for troubleshooting
    console.error('Error saving profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
