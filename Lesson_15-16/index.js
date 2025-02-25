const express = require('express');
const app = express();

// for parsing application/json
//app.use(express.json()); // Give us Object

// for parsing application/octet-stream
//app.use(express.raw()); // Give us Buffer

//for parsing text/plain
//app.use(express.text()); // Give us String


// Public folder access
app.use(express.static(`${__dirname}/public/`));

app.use(
        express.static(`${__dirname}/public/`, {
        index: 'home.html',
    })
);


app.get('/', (req, res) => {
    res.send('This is home page.');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('This is home page with post request.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});