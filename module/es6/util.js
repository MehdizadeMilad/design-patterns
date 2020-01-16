
const greeting = 'Hello World';

function sum(num1, num2) {
    console.log('Sum', num1, num2);
    return num1 + num2;
}

function privateMethod() {
    console.log('Private Function');
}

module.exports = { greeting, sum };