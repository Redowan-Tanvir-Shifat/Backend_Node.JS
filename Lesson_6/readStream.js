// <-----------------------------Stream & Buffer----------------------------->
// <--------------Read Stream-------------->
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write('<body><form method="POST" action="/process"><input name="message" /></form></body></html>');
        res.end();
    }
    else if(req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            console.log('Stream finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write('Thank you for submitting!');
            res.end();
        }); 
    }
    else {
        res.write('Not Found!');
        res.end();
    }
});

server.listen(3000); // listen to port 3000
console.log('Server is running on port 3000');



// <----------Read Stream with File System------------>
// const fs = require('fs');
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

// ourReadStream.on('data', (chunk) => {
//   console.log(chunk);
// });

// console.log('Hello');