/**
 *  This is client-side Javascript
 */

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const forecastLabel = document.getElementById('forecast');
// const addressLabel = document.getElementById('address');
const locationLabel = document.getElementById('location');

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const address = search.value;

  fetch(`http://localhost:3000/weather?address=${address}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
        forecastLabel.textContent = data.error;
      } else {
        console.log(data.address);
        console.log(data.location);
        console.log(data.forecast);

        forecastLabel.textContent = data.forecast;
        // addressLabel.textContent = data.address;
        locationLabel.textContent = data.location;
      }
    });
  });
});
