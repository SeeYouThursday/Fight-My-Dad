const { Schema, model } = require('mongoose');

const loginSchema = new Schema({
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

const Login = model('Login', loginSchema);

module.exports = Login;
