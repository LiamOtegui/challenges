const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    preferences: {
        high_protein: Boolean,
        high_carbs: Boolean,
        high_fat: Boolean,
        glutenFree: Boolean
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;