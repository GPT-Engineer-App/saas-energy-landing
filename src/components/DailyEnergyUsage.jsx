import { Box, Flex, keyframes } from "@chakra-ui/react";

// Keyframes for the animation of the bars
const animateBar = keyframes`
  0% { height: 20%; }
  50% { height: 50%; }
  100% { height: 80%; }
`;

const DailyEnergyUsage = () => {
  // Array to hold the bars representing each day of the week
  const bars = [1, 2, 3, 4, 5, 6, 7];

  // Function to determine the color of the bar based on its value
  const getBarColor = (value) => {
    if (value <= 6) return "blue.400";
    if (value <= 12) return "green.400";
    return "red.500";
  };

  return (
    <Flex justify="space-around" align="flex-end" h="300px" mt="4" mb="8" p="4" bg="gray.50" borderRadius="md">
      {bars.map((value) => (
        <Box key={value} width="40px" bg={getBarColor(value)} borderRadius="md" animation={`${animateBar} infinite 1.5s ease-in-out alternate`} />
      ))}
    </Flex>
  );
};

export default DailyEnergyUsage;
