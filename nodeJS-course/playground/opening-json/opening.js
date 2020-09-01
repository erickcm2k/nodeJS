const fs = require("fs");
const { log } = require("console");

const dataBuffer = fs.readFileSync("data.json");
const dataStr = dataBuffer.toString();
const json = JSON.parse(dataStr);


var confirmed = json.map(country => country.confirmed).reduce(confirmed => confirmed)
var deaths = json.map(country => country.deaths).reduce(deaths => deaths)
var recovered = json.map(country => country.recovered).reduce(recovered => recovered)

console.log(confirmed);
console.log(deaths);
console.log(recovered);
