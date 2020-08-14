const myName = 'Erick';

const user = {
    name: myName,
    age: 20,
    city: 'Mexico City',
    country: 'Mexico'
};

let name = user.name;
let age = user.age;

let {city, country} = user;

//console.log(name, city);

const printData = ({city, country} = {}) => {
    console.log(city, country);
};

printData(user);