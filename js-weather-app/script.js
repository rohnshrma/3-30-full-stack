const form = document.querySelector("form");

const city_name = document.querySelector(".city");
const f_like = document.querySelector(".f_like");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = form.querySelector("input").value;

  const weatherData = await handleRequest(city);

  const temperature = weatherData.main.temp;
  const description = weatherData.weather[0].description;
  const feels_like = weatherData.main.feels_like;

  city_name.innerText = city;
  temp.innerText = `temperature : ${temperature}`;
  desc.innerText = `description : ${description}`;
  f_like.innerText = `feels like : ${feels_like}`;

  console.log(weatherData);
  console.log(temperature);
  console.log(description);
  console.log(feels_like);
});

const fetchWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ed1a8944ae36bde087adc8f67d0f04a&units=metric`;
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.responseText));
      }
      if (request.readyState === 4 && request.status !== 200) {
        reject(`Failed to fetch weather of ${city}`);
      }
    });

    request.open("GET", url);
    request.send();
  });
};

const handleRequest = async (city) => {
  try {
    const data = await fetchWeather(city);
    return data;
  } catch (err) {
    console.log(err);
  }
};
