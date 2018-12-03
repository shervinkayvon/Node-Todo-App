const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

const id = '5c040d14b74b54d180f2f30b';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then(todos => {
//     if (todos.length === 0) {
//         return console.log('ID not found');
//     }
//     console.log(todos);
// }, e => {
//     console.log(e);
// });
// 
// Todo.findOne({
//     _id: id
// }).then(todo => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log(todo);
// }, e => {
//     console.log(e);
// });

// Todo.findById(id).then(todo => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log(todo);
// }, e => {
//     console.log(e.message);
// });

User.findById(id).then(user => {
    if (!user) {
        return console.log('ID not found');
    }
    console.log(user);
}, e => {
    console.log(e.message);
});