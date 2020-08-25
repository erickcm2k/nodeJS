const request = require('postman-request');
const chalk = require('chalk');

const geocode = (address, callback) => {
  const MAPBOX_API = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=pk.eyJ1IjoiZXJpY2tjZTQwIiwiYSI6ImNrZHE1cWh1eTBjbHQyeHBibHE0aWFrM3MifQ.asM8QMKQsHcfervqFsenBA`;
  request({ url: MAPBOX_API, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to mapbox.com API.', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to connect to mapbox.com API. Please provide a valid location name.', undefined);
    } else {
      callback(undefined, {
        location: response.body.features[0].place_name,
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
      });
    }
  });
};

module.exports = geocode;
