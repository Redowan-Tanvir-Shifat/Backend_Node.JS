// console.log('Hello World!');

// const _ = require('lodash');
// console.log(_.camelCase('Hello World!'));
// console.log(_.upperCase('Hello World!'));
// console.log(_.lowerCase('Hello World!'));

// global object just like window object in browser
// console.log(global);

// console.log(__dirname);
// console.log(__filename);

const _ = require('lodash');
const people = require('./people');

console.log(_.last(people.people));