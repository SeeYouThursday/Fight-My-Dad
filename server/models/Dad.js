const { Schema, model } = require('mongoose');

const dadSchema = new Schema(
  {

    dadName: {
      type: String,
    },
    nickname: {
      type: String,
    },
    entryMusic: {
      type: String,
    },
    dadJoke: {
      type: String,
    },
    weight: {
      type: Number,
      default: 0,
    },
    armLength: {
      type: Number,
      default: 0,
    },
    experience: {
      type: Number,
      default: 0,
    },
    winNum: {
      type: Number,
      default: 0,
    },
    lossNum: {
      type: Number,
      default: 0,
    },
    userId: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//leaving weapon as optional

//   Consider showing win/loss through reference to Stat as a virtual

//Should the type be changed to Number?

const Dad = model('Dad', dadSchema);

module.exports = Dad;
