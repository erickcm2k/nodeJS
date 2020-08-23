const mongodb = require('mongodb');

const { MongoClient, ObjectId } = mongodb;

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

const id = ObjectId();
console.log(id.id);
console.log(id.toHexString());

// MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
//   if (error) {
//     return console.log('Unable to connect with database.');
//   }

//   const db = client.db(dbName);

//   db.collection('users').insertMany([{
//     _id: 10,
//     name: 'George',
//     age: 22,
//   }, {
//     _id: 20,
//     name: 'Georgina',
//     age: 22,
//   }], (error, result) => {
//     if (error) {
//       console.log('Unable to insert a new user.');
//     } else {
//       console.log(result.ops);
//     }
//   });
// });
