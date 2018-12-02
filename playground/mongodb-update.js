// const MongoClient = require('mongodb').MongoClient;
// es6 below 
const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c03fd6693fb2f816413d1dd'), 
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log(result);
    // });
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c0190498fda8768b499eb1d'), 
    }, {
        $set: {
            name: 'tommy'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    });
    
    // db.close();
});