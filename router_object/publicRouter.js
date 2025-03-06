const express = require('express');
const publicRouter = express.Router();

const log = (req, res, next) => {
    console.log("I am logging");
    next();
};  

// publicRouter.use('*', log);

publicRouter.get('/', (req, res) => {
    res.send('Home');
});

publicRouter.use('*', log);

publicRouter.get('/about', (req, res) => {
    res.send('About');
});

module.exports = publicRouter;