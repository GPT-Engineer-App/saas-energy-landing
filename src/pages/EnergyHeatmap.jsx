import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";

const EnergyHeatmap = () => {
  return (
    <Box my={10} textAlign="center">
      <Image src="https://via.placeholder.com/600x300?text=Energy+Usage+Heatmap" alt="Energy Usage Heatmap" mb={4} />
      <Text color={useColorModeValue("gray.600", "gray.400")} mb={2}>
        Heatmap of Energy Usage
      </Text>
      <Text color={useColorModeValue("gray.600", "gray.400")}>The heatmap highlights areas of high energy consumption in red. Facility management should take corrective actions to address these issues.</Text>
    </Box>
  );
};

export default EnergyHeatmap;
