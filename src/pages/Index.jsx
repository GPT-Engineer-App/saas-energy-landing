import { Box, Button, Flex, Heading, Icon, Image, Stack, Text, useColorModeValue, useColorMode, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaBolt, FaChartLine, FaCloud, FaRocket } from "react-icons/fa";
import EnergyHeatmap from "./EnergyHeatmap.jsx";
import DailyEnergyUsage from "./DailyEnergyUsage.jsx";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={"center"} textAlign={"center"}>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("blue.500", "blue.300")} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue("gray.600", "gray.400")}>{text}</Text>
    </Stack>
  );
};

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box px={4} py={20} mx="auto">
      <Flex justify="flex-end" mb={4}>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="md" alignSelf="flex-start" onClick={toggleColorMode} aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`} />
      </Flex>
      <Flex align={"center"} w={"full"} justifyContent={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useColorModeValue("20%", "30%"),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Energy Saving
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Monitoring Software
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={useColorModeValue("gray.600", "gray.300")}>
            Optimize your energy consumption with real-time monitoring and actionable insights.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} colorScheme={"blue"} bg={"blue.400"} _hover={{ bg: "blue.500" }}>
              Get started
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Box mt={20}>
        <Stack spacing={12} align={"center"} justify={"center"} direction={{ base: "column", md: "row" }}>
          <Feature icon={<Icon as={FaBolt} w={10} h={10} />} title={"Real-time Monitoring"} text={"Track energy usage in real-time across your entire operation."} />
          <Feature icon={<Icon as={FaChartLine} w={10} h={10} />} title={"Analytics & Reports"} text={"Analyze patterns and create reports to find saving opportunities."} />
          <Feature icon={<Icon as={FaCloud} w={10} h={10} />} title={"Cloud-Based"} text={"Access your monitoring dashboard from anywhere, at any time."} />
          <Feature icon={<Icon as={FaRocket} w={10} h={10} />} title={"Fast Integration"} text={"Easy to set up with minimal downtime, so you can start saving quickly."} />
        </Stack>
      </Box>
      <Box mt={20}>
        <Flex wrap={"wrap"} justify={"center"} spacing={10}>
          <Box maxW={"445px"} w={"full"} boxShadow={"2xl"} rounded={"md"} p={6} overflow={"hidden"}>
            <Box h={"210px"} bg={"blue.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
              <Image src="https://images.unsplash.com/photo-1515191107209-c28698631303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBtb25pdG9yaW5nJTIwZGFzaGJvYXJkfGVufDB8fHx8MTcwOTI3Njc0Mnww&ixlib=rb-4.0.3&q=80&w=1080" layout={"fill"} />
            </Box>
            <Stack>
              <Text color={"green.500"} textTransform={"uppercase"} fontWeight={800} fontSize={"sm"} letterSpacing={1.1}>
                Dashboard
              </Text>
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Control Your Energy
              </Heading>
              <Text color={"gray.500"}>Get a clear view of your energy consumption and make adjustments on the fly with our intuitive dashboard.</Text>
            </Stack>
          </Box>
        </Flex>
      </Box>
      <EnergyHeatmap />
      <DailyEnergyUsage />
    </Box>
  );
};

export default Index;
