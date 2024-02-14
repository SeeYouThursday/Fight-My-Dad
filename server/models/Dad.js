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
    experience: {
      type: Number,
      default: 0,
      required: true,
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
    icon: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Dad = model('Dad', dadSchema);

module.exports = Dad;

// default: "../assets/images/defaultIcon" for icon, future dev: add in a default for the card
