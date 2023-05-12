interface WeatherData {
  location: string;
  state: string;
  temperature: string;
  condition: string;
  localtime: string;
  localtime_epoch: number;
}

export default function weatherAPI(): Promise<WeatherData> {
  const apiKey = "3c19227df3e440f59a441830231201";
  const userInput = "London";
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userInput}`;

  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .then(data => {
      const location = data.location.name;
      const state = data.location.region;
      const temperature = data.current.temp_f;
      const condition = data.current.condition.text;
      const localtime = data.location.localtime;

      const weatherData: WeatherData = {
        location,
        state,
        temperature,
        condition,
        localtime: localtime,
      };

      return weatherData;
    })
    .catch(error => {
      console.error("Error:", error);
      throw error;
    });
}
