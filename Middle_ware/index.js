const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const adminrouter = express.Router();

const logger = (req, res, next) => {
    console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`);
    throw new Error('This is an error');
};

adminrouter.use(logger);

adminrouter.get('/dashboard', (req, res) => {
    res.send('Admin Dashboard');
});

app.use('/admin', adminrouter);

app.get('/about', (req, res) => {
    res.send('About');
});

const errorMiddleware = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send('Something went wrong');
};

adminrouter.use(errorMiddleware);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});