import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Heading,
  Stack,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import weatherAPI, { WeatherData } from "../weather-api";

export default function MainTemp() {
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
      <Card maxW="lg" padding={10}>
        <HStack spacing={60}>
          <Text>{weatherInfo?.localtime}</Text>
          <Text>Monday</Text>
        </HStack>
        <Divider />
        <CardBody>
          <VStack>
            <Heading>{weatherInfo?.location}</Heading>
            {/* <Heading size="4xl">75</Heading> */}
            <Heading size="4xl">{weatherInfo?.temperature}</Heading>
            <Image
              src="https://www.clipartmax.com/png/middle/129-1295102_weather-forecast-icon-partially-cloudy-png.png"
              alt="Green double couch with wooden legs"
              boxSize={150}
              objectFit="cover"
              borderRadius="full"
            />
            <Heading size="md">{weatherInfo?.condition}</Heading>
          </VStack>
          <Stack mt="6" spacing="3">
            <Text>description here</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <HStack spacing={60}>
            <Text>H:80</Text>
            <Text>L:60</Text>
          </HStack>
        </CardFooter>
      </Card>
    </>
  );
}
