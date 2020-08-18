const express = require('express');
const path = require('path');
const hbs = require('hbs');

// Creates an Express application.
const app = express();

// Define paths for Express config.
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location.
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectory));

app.get('/', (req, res) => {
    // Renders one view.
    res.render('index', {
        title: 'Main Section',
        name: 'Erick'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us Section',
        name: 'Erick'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Section',
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

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Erick',
        errorMessage: 'Help article not found.'
    });});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Erick',
        errorMessage: 'Page not found.'
    });
});

app.listen(3000, () => {
    console.log('Start listening on port http://localhost:3000.')
});