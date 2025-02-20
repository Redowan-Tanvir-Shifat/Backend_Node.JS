// <-----------------------------------Core Module------------------------------------------>
// <-----------HTTP Module-----------> 
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello Programmers!');
        res.write(' How are you?');
        res.end();
    }
    else if(req.url === '/about') {
        res.write('This is about page');
        res.end();
    }
    else {
        res.write('Not Found!');
        res.end();
    }
});

server.listen(3000); // listen to port 3000
console.log('Server is running on port 3000');