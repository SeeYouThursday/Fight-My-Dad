const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Username: {
        type: String,
        required: true,
        unique: true,
    },
});

const User = model('Login', userSchema);

module.exports = User;
