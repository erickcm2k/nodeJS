const names = ['Erick', 'Andrew', 'Sam', 'Maria', 'Elf'];

// const shortNames = names.filter(name => name.length > 4);
// console.log(shortNames)


const geoCode = (addres, callback) => {
    setTimeout(() => {
        coordinates = {
            longitude: 100,
            latitude: 10
        }
    
        callback(coordinates);        
    }, 2000);
}

geoCode('My Address', (data) => {
    console.log(data)
})

geoCode('My Address', data => console.log(data.longitude != null));
