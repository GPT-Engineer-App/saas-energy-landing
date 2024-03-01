import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const usageKeyframes = keyframes`
  0% { transform: scaleY(0.1); }
  50% { transform: scaleY(1); }
  100% { transform: scaleY(0.1); }
`;

const usageAnimation = `${usageKeyframes} 3s ease-in-out infinite`;

const DailyEnergyUsage = () => {
  const barColors = (value) => {
    if (value < 7) return "blue.400";
    if (value < 13) return "green.400";
    return "red.400";
  };

  return (
    <Flex justify="space-around" mt="4" mb="8">
      {Array.from({ length: 7 }).map((_, index) => {
        const value = Math.floor(Math.random() * 19) + 1;
        return <Box key={index} h={`${value * 5}px`} w="6" bg={useColorModeValue(barColors(value), barColors(value))} animation={usageAnimation} />;
      })}
    </Flex>
  );
};

export default DailyEnergyUsage;
