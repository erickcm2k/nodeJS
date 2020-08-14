const express = require('express');
const path = require('path');
const app = express();

// Getting address from public directory.
const publicDirectory = path.join(__dirname, '../public');

// Using the hbs module for rendering views.
app.set('view engine', 'hbs');
app.use(express.static(publicDirectory));

app.get('/', (req, res) => {
    // Renders one view.
    res.render('index', {
        title: 'weather',
        name: 'Erick'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Amazing Company',
        name: 'me'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'We are here for helping you',
        name: 'Erick'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'philadelphia'
    });
});

app.listen(3000, () => {
    console.log('Start listening on port http://localhost:3000.')
});