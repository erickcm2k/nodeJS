const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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
    name: 'Erick',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us Section',
    name: 'Erick',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Section',
    message: 'We are here for helping you',
    name: 'Erick',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide a search term',
    });
  }

  const { address } = req.query;

  geocode(address, (error, data) => {
    if (error) {
      return res.send({ error });
    }

    const coordinates = `${data.latitude},${data.longitude}`;
    forecast(coordinates, (error, data) => {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log('Data:', data);
        const { temperature, feelslike, location } = data;
        res.send({
          forecast: `Current temperature is ${temperature}, but feels like ${feelslike}`,
          location,
          address,
        });
      }
    });
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term',
    });
  }

  res.send({
    products: [],
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Erick',
    errorMessage: 'Help article not found.',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Erick',
    errorMessage: 'Page not found.',
  });
});

app.listen(3000, () => {
  console.log('Start listening on port http://localhost:3000.');
});
