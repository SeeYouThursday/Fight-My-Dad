const { Schema, model } = require('mongoose');

const statsSchema = new Schema({
    Username: {
        type: String,
        required: true,
        unique: true,
    },
    WinNum: {
        type: Number,
        default: 0,
    },
    LossNum: {
        type: Number,
        default: 0,
    },
});

const Stats = model('Stats', statsSchema);

module.exports = Stats;