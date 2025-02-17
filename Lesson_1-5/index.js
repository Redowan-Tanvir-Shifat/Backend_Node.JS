// console.log('Hello World!');

// const _ = require('lodash');
// console.log(_.camelCase('Hello World!'));
// console.log(_.upperCase('Hello World!'));
// console.log(_.lowerCase('Hello World!'));

// global object just like window object in browser
// console.log(global);

// console.log(__dirname);
// console.log(__filename);

// const _ = require('lodash');
// const people = require('./people');

// console.log(_.last(people.people));




// <-----------------------------------Core Module------------------------------------------>
// <-----------Path Module----------->
const path  = require('path');
const myPath = 'C: /Tanvir Shifat/Backend Development/Backend_Node.JS/index.js';

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));



// <-----------OS Module----------->
const os = require('os');

// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.cpus());



// <-----------File System Module----------->
const fs = require('fs');
// fs.writeFileSync('test.txt', 'Hello World!');
// fs.writeFileSync('test.txt', 'Hello Tanvir!'); // overwrite the file
// fs.appendFileSync('test.txt', ' Hello Tanvir!'); // append the file

// Sycronous way
const readData = fs.readFileSync('test.txt'); // read the file. This data as buffer (Binary foramte data)
//console.log(readData.toString()); // convert buffer to string

// Asycronous way (Best way for Node.js Always) 
fs.readFile('test.txt', (err, data) => {
    //console.log(data.toString());
});
//console.log('Hiiiiiiiiiiii'); // this will run first because of asyncronous way



// <-----------Events Module----------->
const EventEmitter = require('events'); // EventEmitter is a class like Blueprint
const event = new EventEmitter(); // event is an object of EventEmitter class
const MyEvent = require('./people'); // import eventLearning function from people.js

// register a listener for the event bellRing
// event.on('bellRing', (text) => {
//     console.log(`Ring Ring Ring! ${text}`);
// });
// event.on('bellRing', ({name, age}) => {
//     console.log(`Ring Ring Ring! My name is ${name} and I am ${age} years old.`);
// });

// raise an event
// setTimeout(() => {
//     event.emit('bellRing', 'Welcome to Node.js World');
// }, 2000);
// setTimeout(() => {
//     event.emit('bellRing', {
//         name: 'Tanvir Shifat',
//         age: 22
//     });
// }, 2000);

// Raise Event from another js file
const myEvent = new MyEvent(); // create an object of MyEvent class

myEvent.on('bellRing', ({ name, age }) => { // register a listener for the event bellRing
    console.log(`Ring Ring Ring! My name is ${name} and I am ${age} years old.`);
});

myEvent.startEvent(); // call startEvent function from people.js