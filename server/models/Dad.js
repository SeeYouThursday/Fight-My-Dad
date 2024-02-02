const { Schema, model } = require('mongoose');

const dadSchema = new Schema({
  DadName: {
    type: String,
    required: true,
  },
  Nickname: {
    type: String,
    required: true,
  },
  Child: {
    type: Number,
    default: 0,
  },
  EntryMusic: {
    type: Number,
    default: 0,
  },
  DadJoke: {
    type: Number,
    default: 0,
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
  },
});

const Dad = model('Dad', dadSchema);

module.exports = Dad;
