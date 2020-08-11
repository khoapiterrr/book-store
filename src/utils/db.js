const mongodb = require('mongoose');

module.exports = async () => {
  try {
    await mongodb.connect(process.env.dbURI, {
      useUnifiedTopology: true,
      keepAlive: 1,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      // autoIndex: false,
    });

    console.log('Mongodb connected...');
    return mongodb.connection;
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
