const mongodb = require('mongodb');

const { MongoClient, ObjectId } = mongodb;

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

const id = ObjectId();

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect with database.');
  }

  const db = client.db(dbName);

  db.collection('users').deleteOne({
    age: { $ne: 22 },
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
});
