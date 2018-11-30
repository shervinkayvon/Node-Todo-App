// const MongoClient = require('mongodb').MongoClient;
// es6 below 
const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').deleteOne({text: 'something to do'}).then(result => {
    //     console.log(result.result);
    // }, err => {
    //     console.log('Unable to delete todo', err);
    // });
    
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5c01a58593fb2f816413b50a')}).then(result => {
        console.log(result);
    }, err => {
        console.log('Unable to delete todo', err);
    });
    
    // db.close();
});