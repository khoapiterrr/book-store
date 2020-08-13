const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect(process.env.dbLocalURI, {
      useUnifiedTopology: true,
      keepAlive: 1,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      // autoIndex: false,
    });

    console.log('Mongodb connected...');
    return mongoose.connection;
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
