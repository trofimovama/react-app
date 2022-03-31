export const WeatherFunction = async (cityName) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`
  );
  const data = await response.json();
  if (data.cod === "404" || !cityName) {
    return;
  } else {
    const name = data.name;
    const skyDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const minTemperature = data.main.temp_min;
    const maxTemperature = data.main.temp_max;

    const weatherData = [
      {
        title: "",
        value: name,
        tail: "",
      },
      {
        title: "",
        value: temperature,
        tail: "℃",
      },
      {
        title: "",
        value: skyDescription,
        tail: "",
      },
      {
        title: "Максимальная температура сегодня: ",
        value: maxTemperature,
        tail: "℃",
      },
      {
        title: "Минимальная температура сегодня: ",
        value: minTemperature,
        tail: "℃",
      },
    ];

    return weatherData.map((element) => {
      return element.title + element.value + element.tail;
    });
  }
};
