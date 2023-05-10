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

export default function MainTemp() {
  return (
    <>
      <Card maxW="lg" padding={10}>
        <HStack spacing={60}>
          <Text>12:30pm</Text>
          <Text>Monday</Text>
        </HStack>
        <Divider />
        <CardBody>
          <VStack>
            <Heading>Portland Or.</Heading>
            <Heading size="4xl">75</Heading>
            <Image
              src="https://www.clipartmax.com/png/middle/129-1295102_weather-forecast-icon-partially-cloudy-png.png"
              alt="Green double couch with wooden legs"
              boxSize={150}
              objectFit="cover"
              borderRadius="full"
            />
            <Heading size="md">Sunny</Heading>
          </VStack>
          <Stack mt="6" spacing="3">
            <Text>Sunny with some clouds rolling through.</Text>
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
