import { Text } from "@chakra-ui/react";
import React from "react";
import weatherAPI, { WeatherData } from "../weather-api";

const WeatherApp: React.FC = () => {
  const [weatherInfo, setWeatherInfo] = React.useState<WeatherData | null>(
    null
  );

  React.useEffect(() => {
    weatherAPI()
      .then((data: WeatherData) => {
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
