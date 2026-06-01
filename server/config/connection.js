const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fightmydad',
);

module.exports = mongoose.connection;
