const express = require('express');
// const handle = require('./handle');
const app = express();
// const admin = express();


// Template Engine
app.set('view engine', 'ejs');

app.locals.title = 'My App';

// app.use ('/admin', admin);


// admin.get('/dashboard', (req, res) => {
//     console.log(admin.mountpath);
//     res.send('Admin Homepage');
// });


app.enable('case sensitive routing'); //case sensitive routing



// app.get('/', handle);

// app.all('/', (req, res) => {
//     res.send('This is home page.');
// });



// If same route is defined
app.route('/home/mission')
    .get((req, res) => {
        // res.render('index.ejs');
        res.render('pages/about.ejs');
    })
    .post((req, res) => {
        res.send('This is about page post');
    })
    .put((req, res) => {
        res.send('This is about page put');
    });  


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});