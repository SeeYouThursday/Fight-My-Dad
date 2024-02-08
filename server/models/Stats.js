const { Schema, model } = require('mongoose');

const statsSchema = new Schema({
  dadId: {
    type: Number,
    required: true,
    unique: true,
  },
  winNum: {
    type: Number,
    default: 0,
  },
  lossNum: {
    type: Number,
    default: 0,
  },
});

const Stats = model('Stats', statsSchema);

module.exports = Stats;
