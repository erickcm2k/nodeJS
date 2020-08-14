const request = require('postman-request');
const chalk = require('chalk');

const forecast = (address, callback) => {
    const WEATHER_STACK_API = `http://api.weatherstack.com/current?access_key=bcd6cc03ddb33d8629ed8df163d14bda&query=${address}`;
    request({url: WEATHER_STACK_API, json: true}, (error, response) => {
        if(error) 
        {
            callback(`Unable to connect to weatherstack.com API.`, undefined);
        } 
        else if(response.body.error) 
        {
            callback(`Weatherstack.com: Unable to find location. Check your querry.`, undefined);
        } else {
            callback(undefined, {
                location: `${response.body.location.name}, ${response.body.location.country}, ${response.body.location.region}`,
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike                            
            })
        }
    });
};

module.exports = forecast;