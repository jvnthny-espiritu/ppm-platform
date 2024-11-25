const mongoose = require('mongoose');

// Define the profile schema
const ProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'accounts', // Reference to the accounts collection
        required: true,
        unique: true, // Ensures each user has one profile
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    culturalGroup: {
        type: String,
        trim: true,
    },
    campus: {
        type: String,
        trim: true,
    },
    department: {
        type: String,
        trim: true,
    },
    program: {
        type: String,
        trim: true,
    },
    srCode: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to update `updatedAt` before saving
ProfileSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Export the model
module.exports = mongoose.model('profiles', ProfileSchema);
