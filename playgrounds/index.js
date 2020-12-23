const nodeFetch = require("node-fetch");

nodeFetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
