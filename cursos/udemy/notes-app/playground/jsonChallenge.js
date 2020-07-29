const fs = require('fs');

// Getting data from JSON file.
let buffer = fs.readFileSync('myJSON.json');
let data = buffer.toString();
let json = JSON.parse(data);

// Modifying values.
console.log(json);
json.name = 'Erick';
json.age = '20';
console.log(json);

// Overwriting the original JSON with the modified values.
let overwritedData = JSON.stringify(json);
fs.writeFileSync('myJSON.json', overwritedData);


