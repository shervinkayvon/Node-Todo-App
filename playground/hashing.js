const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
    id: 10
};

const token = jwt.sign(data, 'oursecretsalt')
console.log(token);

const decoded = jwt.verify(token, 'oursecretsalt');
console.log(decoded);

// const message = 'Im user number 4';
// const hash = SHA256(message);
// 
// const data = {
//     id: 4
// };
// 
// const token = {
//     data
// };
// 
// 
// console.log(`
//     ${JSON.stringify(token, undefined, 2)}
//     `);