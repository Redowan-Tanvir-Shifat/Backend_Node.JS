// <-----------------------------Stream & Buffer----------------------------->
// <--------------Write Stream-------------->
// const fs = require('fs');
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// // ourReadStream.on('data', (chunk) => {
// //     ourWriteStream.write(chunk);
// // });



// // <--------------Piping-------------->
// ourReadStream.pipe(ourWriteStream);



// <--------------Overview-------------->
const http = require('http');
const fs  = require('fs');

const server = http.createServer((req, res) => {
   const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
   myReadStream.pipe(res);
});

server.listen(3000); // listen to port 3000
console.log('Server is running on port 3000');