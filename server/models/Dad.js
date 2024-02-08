const { Schema, model } = require('mongoose');

const dadSchema = new Schema({
    DadName: {
        type: String,
        required: true,
    },
    Nickname: {
        type: String,
        required: true,
        unique: true,
    },
    Username: {
        type: Number,
        required: true,
    },
    EntryMusic: {
        type: String,
        required: true,
    },
    DadJoke: {
        type: String,
        required: true,
    },
    Weight: {
        type: Number,
        default: 0,
    },
    ArmLength: {
        type: Number,
        default: 0,
    },
    Weapon: {
        type: Number,
        default: 0,
    },
    WinNum: {
        type: Number,
        default: 0,
    },
    LossNum: {
        type: Number,
        default: 0,
    Icon: {
        type: String,
    }
    },
});

const Dad = model('Dad', dadSchema);

module.exports = Dad;
