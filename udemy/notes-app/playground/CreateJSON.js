const fs = require('fs');
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
};

// Javascript object to JSON string
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

// JSON string to Javascript object
const parsedBookJSON = JSON.parse(bookJSON);
console.log(parsedBookJSON.title);

// Saves the JSON string into a .json file
fs.writeFileSync('myJSON.json', bookJSON);

// Gets JSON from a file  
let dataBuffer = fs.readFileSync('myJSON.json');
let data = dataBuffer.toString();
let json = JSON.parse(data);
console.log(json); // Here you can access to the json object.






