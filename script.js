const container = document.querySelector('.container');
const searchButton = document.querySelector('.search-box button');
const error404 = document.querySelector('.not-found');
const weatherBox = document.querySelector('.weather-box');

searchButton.addEventListener('click', () => {
    const APIKey = '98740f4ebc0d63bc0f8ba70090e5a091';
    const cityInput = document.querySelector('.search-box input');
    const city = cityInput.value.trim();

    if (city === '') return;

    // Reset error message and hide weather details
    container.style.height = ''; // Reset container height
    error404.classList.remove('active'); // Hide error message
    weatherBox.style.display = 'none'; // Hide weather details

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.style.height = '400px';
                error404.classList.add('active');
                return;
            }

            const image = weatherBox.querySelector('img');
            const temperature = weatherBox.querySelector('.temperature');
            const description = weatherBox.querySelector('.description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;
                case 'Mist':
                case 'Haze': // Handling both Mist and Haze with the same image
                    image.src = 'images/mist.png';
                    break;
                default:
                    image.src = 'images/cloud.png';
            }

            temperature.innerHTML = `${Math.round(json.main.temp)}<span>°C</span>`; // Round temperature to nearest integer
            description.innerHTML = json.weather[0].description;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${Math.round(json.wind.speed)} Km/h`; // Round wind speed to nearest integer

            // Show weather details
            weatherBox.style.display = 'block';
            document.querySelector('.weather-details').style.display = 'flex'; // Ensure the weather details container is displayed as flex
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            container.style.height = '400px'; // Show container to display error message
            error404.classList.add('active'); // Show error message

            // Hide weather details in case of error
            weatherBox.style.display = 'none';
            document.querySelector('.weather-details').style.display = 'none';
        });

    cityInput.value = ''; // Clear input after search
});

var map = L.map('map').setView([0, 0], 1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([0, 0], { draggable: true }).addTo(map);

marker.on('dragend', function (e) {
    var latlng = marker.getLatLng();
    console.log(latlng.lat, latlng.lng); // Retrieve latitude and longitude
});
