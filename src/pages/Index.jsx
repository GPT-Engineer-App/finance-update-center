import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white">Home</Link>
          <Link as={RouterLink} to="/world" color="white">World</Link>
          <Link as={RouterLink} to="/business" color="white">Business</Link>
          <Link as={RouterLink} to="/tech" color="white">Tech</Link>
          <Link as={RouterLink} to="/markets" color="white">Markets</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }} spacing={8}>
        {/* Main Section */}
        <Box flex="3">
          <Box mb={8}>
            <Heading as="h2" size="xl">Headline Article</Heading>
            <Text mt={4}>This is the main headline article. It contains the most important news of the day.</Text>
          </Box>
          <Divider />
          <VStack spacing={8} mt={8}>
            <Box>
              <Heading as="h3" size="lg">Article 1</Heading>
              <Text mt={2}>Summary of the first article.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">Article 2</Heading>
              <Text mt={2}>Summary of the second article.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">Article 3</Heading>
              <Text mt={2}>Summary of the third article.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="lg" mb={4}>Trending Articles</Heading>
          <VStack spacing={4}>
            <Box>
              <Heading as="h4" size="md">Trending Article 1</Heading>
              <Text mt={2}>Summary of the trending article.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Trending Article 2</Heading>
              <Text mt={2}>Summary of the trending article.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Trending Article 3</Heading>
              <Text mt={2}>Summary of the trending article.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/contact" color="white">Contact</Link>
            <Link as={RouterLink} to="/privacy" color="white">Privacy Policy</Link>
            <Link as={RouterLink} to="/terms" color="white">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;