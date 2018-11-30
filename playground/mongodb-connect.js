// const MongoClient = require('mongodb').MongoClient;
// es6 below 
const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo', err);
    //     }
    // 
    //     console.log(result.ops);
    // });
    
    // db.collection('Users').insertOne({
    //     name: 'shervin',
    //     age: 32,
    //     location: 'paris'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert User', err);
    //     }
    // 
    //     console.log(result.ops);
    // });
    // 
    db.close();
})