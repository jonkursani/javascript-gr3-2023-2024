// fetch('http://url.com')
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .then()
//   .catch();

// async await syntax
// async function fetchSomething() {
//   const response = await fetch('http://');
//   const data = await response.json();
//   console.log(data);
// }

async function fetchWeatherAsync() {
  hideCard('error');
  hideCard('card');

  const url = 'https://api.openweathermap.org/data/2.5/weather?appid=YOUR_APP_ID';
  const inpCity = document.getElementById('inp-city');
  const city = inpCity.value.trim();
  const unit = document.querySelector('input[name="inlineRadioOptions"]:checked').value;

  // city === null || city === ''
  if (!city) {
    alert('Shkruani qytetin');
    return;
  }

  const requestUrl = `${url}&q=${city}&units=${unit}`;

  try {
    // kur perdorni operacione asinkrone mos harro "await" nese funksioni eshte "async"
    showSpinner();

    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw new Error('Error fetching weather data');
    }

    const data = await response.json();
    displayWeather(data);

    // console.log(data);
  } catch (e) {
    // console.log(e);
    showCard('error');
  } finally {
    hideSpinner();
  }
}

function displayWeather(data) {
  const cityName = document.getElementById('city-name');
  const currentTemp = document.getElementById('current-temp');
  const feelsLike = document.getElementById('feels-like');
  const maxTemp = document.getElementById('max-temp');
  const minTemp = document.getElementById('min-temp');
  const weatherDesc = document.getElementById('weather-desc');
  const weatherIcon = document.getElementById('weather-icon');

  cityName.textContent = data.name;
  currentTemp.textContent = data.main.temp;
  feelsLike.textContent = data.main.feels_like;
  maxTemp.textContent = data.main.temp_max;
  minTemp.textContent = data.main.temp_min;
  weatherDesc.textContent = data.weather[0].description;

  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  weatherIcon.src = iconUrl;
  weatherIcon.alt = data.weather[0].description;

  showCard('card');
}

function hideCard(id) {
  const card = document.getElementById(id);
  // card.style.display = 'none';
  card.classList.add('d-none');
}

function showCard(id) {
  const card = document.getElementById(id);
  // card.style.display = 'block';
  card.classList.remove('d-none');
}

function hideSpinner() {
  const spinner = document.getElementById('spinner');
  spinner.classList.add('d-none');
}

function showSpinner() {
  const spinner = document.getElementById('spinner');
  spinner.classList.remove('d-none');
}

document.getElementById('btn-search').addEventListener('click', fetchWeatherAsync);
document.getElementById('inp-city').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    fetchWeatherAsync();
  }
});
