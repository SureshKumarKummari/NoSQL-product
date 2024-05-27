const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://sureshk28560:hKTN5c156buzGltA@cluster0.qnirk70.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
    .then(client => {
      console.log('Connected!');
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;
