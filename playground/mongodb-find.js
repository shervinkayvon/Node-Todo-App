// const MongoClient = require('mongodb').MongoClient;
// es6 below 
const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c019fdf93fb2f816413b37b')
    // }).toArray().then(docs => {
    //     console.log('Todos', docs);
    // }, err => {
    //     console.log('Unable to fetch todos', err);
    // });
    
    // db.collection('Todos').find().count().then(count => {
    //     console.log('Todos count:', count);
    // }, err => {
    //     console.log('Unable to fetch todos', err);
    // });
    
    db.collection('Users').find({ name: 'tom' }).toArray().then(docs => {
        console.log('Todos count:', docs);
    }, err => {
        console.log('Unable to fetch todos', err);
    });
    
    // db.close();
});