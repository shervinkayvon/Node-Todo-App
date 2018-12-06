const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [
    {
        _id: userOneId,
        email: 'shervinkayvon@gmail.com',
        password: '123abc',
        tokens: [{
            access: 'auth',
            token: jwt.sign({ _id: userOneId, access: 'auth' }, process.env.JWT_SECRET).toString()
        }]
    },
    {
        _id: userTwoId,
        email: 'me@gmail.com',
        password: '123abc'
    }
];

const todos = [
    {
        _id: new ObjectID(), 
        text: 'Here is some text' 
    },
    { 
        _id: new ObjectID(), 
        text: 'Here is more text',
        completed: true,
        completedAt: 333
    }
];

const populateTodos = done => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = done => {
    User.remove({}).then(() => {
        const userOne = new User(users[0]).save();
        const userTwo = new User(users[1]).save();
        
        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = { todos, populateTodos, users, populateUsers };