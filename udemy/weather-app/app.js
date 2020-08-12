const request = require('postman-request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


geocode('Boston', (error, data) => {
    console.log('Error:', error);
    console.log('Data:', data);
});



forecast('40.7831,-73.9712', (error, data) => {
    console.log('Error:', error);
    console.log('Data', data);
});

{
    // const MAPBOX_API = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&language=ES&country=US&access_token=pk.eyJ1IjoiZXJpY2tjZTQwIiwiYSI6ImNrZHE1cWh1eTBjbHQyeHBibHE0aWFrM3MifQ.asM8QMKQsHcfervqFsenBA';
    // const MAD_KEY_MAPBOX_API = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&language=ES&country=US&access_token=pk.eyJ1IjoiZXJpY2tjZTQwfIiwiYSI6ImNrZHE1cWh1eTBjbHQyeHBibHE0aWFrM3MifQ.asM8QMKQsHcfervqFsenBA';
    // const MAD_COUNTRY_MAPBOX_API = 'https://api.mapbox.com/geocoding/v5/mapbox.places/abcdefghijklmnopqrstuvwxyz.json?limit=1&language=ES&country=US&access_token=pk.eyJ1IjoiZXJpY2tjZTQwIiwiYSI6ImNrZHE1cWh1eTBjbHQyeHBibHE0aWFrM3MifQ.asM8QMKQsHcfervqFsenBA';
    
    // request({url: MAD_COUNTRY_MAPBOX_API, json: true}, (error, response) => {
    //     if(error) 
    //     {
    //         console.log(chalk.red('Unable to connect to mapbox.com API.'));
    //         console.log(chalk.red(error));                
    //     } 
    //     else if(response.body.message) // Warning message shown by the API.
    //     {
    //         console.log(chalk.yellowBright('Warning from mapbox.com API: '));
    //         console.log(chalk.yellowBright(response.body.message));
    //     } 
    //     else if(response.body.features.length === 0) // 
    //     {
    //         console.log(chalk.yellowBright('Warning: Unable to get latitude and longitude'));
    //         console.log(chalk.yellowBright(JSON.stringify(response.body)));
    //     }
    //     else 
    //     {
    //         console.log(chalk.green('Data obtained succesfully.'));
    //         latitude = response.body.features[0].center[1];
    //         longitude = response.body.features[0].center[0];
    //         city = response.body.features[0].place_name_ES;
    //         cityInfo = city.split(', ');
            
    //         console.log(`${city}: Latitud: ${latitude} Longitud: ${longitude}`);
    //     }
    // });
    
    // const WEATHER_STACK_API = 'http://api.weatherstack.com/current?access_key=bcd6cc03ddb33d8629ed8df163d14bda&query=new_york';
    // const MAD_WEATHER_STACK_API = 'http://api.weatherstack.com/current?access_key=bcd6cc03ddb33d8629ed8df163d14bda&qduery=new_york';
    
    // request({url: WEATHER_STACK_API, json: true}, (error, response) => {
    //     //Using json: true parses automatically to a JSON file. Can also be done by writing: const json = JSON.parse(response.body);
    //     if(error) {
    //         console.log(chalk.red('Unable to connect to weatherstack.com API.'));
    //         console.log(chalk.red(error));
    //     } else if(response.body.error) {
    //         console.log(chalk.yellowBright('Unable to find location. Check your querry.'));
    //     } else {
    //         console.log(chalk.green('Data obtained succesfully.'));
    //         temperature = response.body.current.temperature;
    //         feelslike = response.body.current.feelslike;
        
    //         console.log(`Current temperature is ${temperature}, but feels like ${feelslike}.`);
    //     }
    
    // });
    }