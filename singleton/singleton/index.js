const User = require('./user');

const user1 = new User();

const user2 = new User();
user2.name = 'same user1 instance will change'

console.log(user1.name);