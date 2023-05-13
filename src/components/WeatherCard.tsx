import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { WeatherData } from "../weather-api";
import weatherAPI from "../weather-api";

export default function WeatherCard() {
  const [weatherInfo, setWeatherInfo] = React.useState<WeatherData | null>(
    null
  );
  const [dateStr, timeStr] = weatherInfo?.localtime.split(" ") || [];

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
      <Card maxW="lg" padding={10} borderRadius={20}>
        <HStack spacing={80}>
          <Text>{dateStr}</Text>
          <Text>{timeStr}</Text>
        </HStack>
        <Divider />
        <CardBody>
          <VStack>
            <Heading>{weatherInfo?.location}</Heading>
            <Text>{weatherInfo?.state}</Text>
            <Heading size="4xl">{weatherInfo?.temperature}</Heading>
            <Heading size="md">{weatherInfo?.condition}</Heading>
          </VStack>
          <Stack mt="3" spacing="3">
            <Text>Timezone: {weatherInfo?.timezone}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <HStack spacing={60}>
            <Text>Longitude: {weatherInfo?.longitude}</Text>
            <Text>Latitude: {weatherInfo?.latitude}</Text>
          </HStack>
        </CardFooter>
      </Card>
    </>
  );
}
