const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://kzrkle:C%40s1noEnjoy3r@resumecluster.hln0sdq.mongodb.net/'
);

module.exports = mongoose.connection;
