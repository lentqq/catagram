const express = require('express');
const middleware = require('./middlewares/middleware');
const checkCatIdMiddleware = require('./middlewares/middleware');
const loggerMiddleware = require('./middlewares/loggerMiddleware')
const app = express();
const PORT = 5000;
// app.use(loggerMiddleware);
// app.use(checkCatIdMiddleware);
const hbs = require('express-handlebars');
app.engine('hbs', hbs({
    extname: 'hbs',
}));
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    let name = 'Parsy';
    res.render('home', {name});
    // res.status(200).send('<h1>Hello from express server:)))</h1>');
});

app.get('/download', (req, res) => {
    // res.download('./views/index.html');
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/converter', (req, res) => {
    res.status(200).send('<h1>Welcome to converter page</h1>');
});

app.get('/cats', (req, res) => {
   res.render('cats');
    // res.send('<h1>Some cute cats:)))</h1>')
});

app.get('/cats/json', (req, res) => {
    // res.json([
    //     'Navcho',
    //     'Parsy',
    //     'Nikal'
    // ]);
    res.redirect('/converter');

});

app.get('/cats/:catId?', (req, res) => {
    console.log(req.params);
    // if (req.params.catId === 'Parsy') {
    //     res.status(200).send(`<h1>My name is ${req.params.catId}, m-q-u-u-u:)))</h1>`);
    // }

    // else {
    res.status(404).send(`<h1>Sorry, but you are not  a Parsy. Get out?!?!?</h1>`);
    // return;
    // }
});

app.post('/cats', (req, res) => {
    console.log(req.body);
    console.log('create cat');
    res.status(201);
    res.send('<h1>Cat created!</h1>')
    res.end();
});

app.all('/', (req, res) => {
    console.log('handle all requests');
    res.send('all requests');
    res.end();
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`))

