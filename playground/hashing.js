const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = 'abc123';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

const hashedPass = '$2a$10$nC8PEQSjr8gwkOeuV7/IUOZD005BaL5zBx68muxnXytdITRvwzeL6';

bcrypt.compare(password, hashedPass, (err, result) => {
    console.log(result);
});


// const data = {
//     id: 10
// };
// 
// const token = jwt.sign(data, 'oursecretsalt')
// console.log(token);
// 
// const decoded = jwt.verify(token, 'oursecretsalt');
// console.log(decoded);

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