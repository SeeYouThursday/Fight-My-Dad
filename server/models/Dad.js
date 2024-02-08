const { Schema, model } = require('mongoose');

const dadSchema = new Schema(
  {
    dadName: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
      unique: true,
    },
    entryMusic: {
      type: String,
      required: true,
    },
    dadJoke: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      default: 0,
      required: true,
    },
    armLength: {
      type: Number,
      default: 0,
      required: true,
    },
    weapon: {
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
      Icon: {
        type: String,
      },
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

// const Dad = model('Dad', dadSchema); //! Changed to just a schema instead of a model to use in reference

module.exports = dadSchema;
