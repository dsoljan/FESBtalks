const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true, /// is deprecated without
      useCreateIndex: true,
      useFindAndModify: false,
    }); //returns a promise, hence async

    console.log('MongoDB Connected.');
  } catch (err) {
    console.error(err.message);
    process.exit(1); //exit process with a failure
  }
};

module.exports = connectDB;
