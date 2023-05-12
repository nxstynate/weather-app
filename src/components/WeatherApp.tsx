import { Text } from "@chakra-ui/react";
import React from "react";
import weatherAPI from "../weather-api";
import { WeatherData } from "../weather-api";

const WeatherApp: React.FC = () => {
  const [weatherInfo, setWeatherInfo] = React.useState<WeatherData | null>(
    null
  );

  React.useEffect(() => {
    weatherAPI()
      .then((data: WeatherData) => {
        const weatherInfoText = `Today's weather in ${data.location}, ${data.state}...\nTemperature: ${data.temperature}°F\nCurrent Conditions: ${data.condition}`;
        setWeatherInfo(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <Text>
        {weatherInfo ? (
          <pre>{weatherInfo.temperature}</pre>
        ) : (
          <p>Loading weather information...</p>
        )}
      </Text>
    </>
  );
};

export default WeatherApp;
