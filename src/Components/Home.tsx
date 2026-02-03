// App.tsx
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Header from "./shared/header";
import { useRef } from "react";
// import type { JSX } from "react/jsx-runtime";

export default function Home() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
const projectsRef = useRef<HTMLDivElement>(null!);
  const aboutRef = useRef<HTMLDivElement>(null!);

  return (
    <Box bg={bg} minH="100vh">
      <Header projectsRef={projectsRef} aboutRef={aboutRef} />
      {/* Hero / Intro Section */}
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 12, md: 16 }}
          align="center"
          justify="space-between"
        >
          <VStack align="flex-start" spacing={6} maxW="600px">
            <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }}>
              Hey, I’m Francis. 👋
              <br />
              <Text as="span" color="purple.500">
                Frontend Developer
              </Text>
              .
            </Heading>

            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
              I'm a frontend developer based in Italy. I help businesses build
              beautiful, fast, and user-friendly web applications.
            </Text>

            <HStack spacing={4} pt={4}>
              <Button size="lg" colorScheme="purple" rounded="full" px={8}>
                Get in touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                colorScheme="purple"
                rounded="full"
                px={8}
              >
                Browse Projects
              </Button>
            </HStack>

            <Wrap spacing={3} pt={6}>
              <Tag size="lg" variant="subtle" colorScheme="blue">
                <Icon as={FaReact} mr={2} />
                React
              </Tag>
              <Tag size="lg" variant="subtle" colorScheme="cyan">
                <Icon as={SiChakraui} mr={2} />
                Chakra UI
              </Tag>
              <Tag size="lg" variant="subtle" colorScheme="gray">
                CSS3
              </Tag>
            </Wrap>
          </VStack>

          <Box position="relative">
            <Avatar
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              name="Lucas"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              border="8px solid"
              borderColor="white"
              shadow="2xl"
            />
          </Box>
        </Stack>
      </Container>

      <Divider my={{ base: 12, md: 4 }} />

      {/* Featured Projects */}
      <Box ref={projectsRef} py={20}>
      <Container maxW="7xl" py={{ base: 12, md: 2 }}>
        <VStack spacing={12}>
          <Heading textAlign="center" fontSize={{ base: "4xl", md: "5xl" }}>
            Featured Projects.
          </Heading>
          <Text fontSize="xl" color="gray.500" textAlign="center">
            A selection of applications and platforms I've built.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {/* Project 1 - LUXEHUB */}
            <Box
              bg={cardBg}
              rounded="2xl"
              shadow="md"
              overflow="hidden"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-8px)", shadow: "xl" }}
            >
              <Box bg="pink.500" h="240px" position="relative">
                <Image
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="LUXEHUB"
                  objectFit="cover"
                  w="full"
                  h="full"
                />
                <Box position="absolute" bottom={4} left={4}>
                  <Heading color="white" size="lg">
                    LUXEHUB
                  </Heading>
                </Box>
              </Box>
              <Box p={6}>
                <Heading size="md" mb={2}>
                  E-Commerce Platform
                </Heading>
                <Text color="gray.600" mb={4}>
                  A full-featured e-commerce application, where users can browse
                  products, add items to cart, and log in to access personalized
                  features.
                </Text>
                <Wrap spacing={3} mb={6}>
                  <Tag>React</Tag>
                  <Tag>Chakra UI</Tag>
                  <Tag>API</Tag>
                  <Tag>CSS3</Tag>
                </Wrap>
                <HStack spacing={4}>
                  <Button colorScheme="purple" leftIcon={<ExternalLinkIcon />}>
                    Live Demo
                  </Button>
                  <Button variant="ghost" leftIcon={<FaGithub />}>
                    GitHub
                  </Button>
                </HStack>
              </Box>
            </Box>

            {/* Project 2 - Printing Press */}
            <Box
              bg={cardBg}
              rounded="2xl"
              shadow="md"
              overflow="hidden"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-8px)", shadow: "xl" }}
            >
              <Box bg="gray.100" h="240px" position="relative">
                <Image
                  src="https://images.unsplash.com/photo-1460925898917-b57e8c0e3c8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Printing Press"
                  objectFit="cover"
                  w="full"
                  h="full"
                />
              </Box>
              <Box p={6}>
                <Heading size="md" mb={2}>
                  Printing Press Website
                </Heading>
                <Text color="gray.600" mb={4}>
                  Modern printing & design website with clean UI, created using
                  React and Chakra UI.
                </Text>
                <Wrap spacing={3} mb={6}>
                  <Tag>React</Tag>
                  <Tag>Chakra UI</Tag>
                  <Tag>UI/UX</Tag>
                  <Tag>CSS3</Tag>
                </Wrap>
                <HStack spacing={4}>
                  <Button colorScheme="purple" leftIcon={<ExternalLinkIcon />}>
                    Live Demo
                  </Button>
                  <Button variant="ghost" leftIcon={<FaGithub />}>
                    GitHub
                  </Button>
                </HStack>
              </Box>
            </Box>

            {/* You can add more project cards here */}
          </SimpleGrid>
        </VStack>
      </Container>
      </Box>

      {/* Experience & Skills */}
      <Container maxW="7xl" py={{ base: 16, md: 4 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }}>
          <VStack align="flex-start" spacing={8}>
            <Heading fontSize={{ base: "3xl", md: "4xl" }}>Experience.</Heading>

            <Box>
              <Tag size="lg" colorScheme="purple" mb={3}>
                Freelance
              </Tag>
              <Heading size="md" mt={2}>
                E-Commerce Platform
              </Heading>
              <Text color="gray.500" mt={1}>
                Frontend Developer • Jan 2024 – Present
              </Text>
              <VStack align="start" mt={4} spacing={2}>
                <Text>• Built an interactive e-commerce UI with product listings, cart, auth</Text>
                <Text>• Developed admin dashboard with API calls</Text>
                <Text>• Implemented responsive, intuitive design → ↑ conversions</Text>
              </VStack>
            </Box>

            {/* You can add more experience entries here */}
          </VStack>

          <VStack align="flex-start" spacing={8}>
            <Heading fontSize={{ base: "3xl", md: "4xl" }}>Skills.</Heading>
            <Wrap spacing={4}>
              {[
                "React",
                "Chakra UI",
                "TypeScript",
                "JavaScript",
                "CSS3",
                "Responsive Design",
                "API Integration",
                "UI/UX",
                "Git",
                "Figma",
              ].map((skill) => (
                <Tag
                  key={skill}
                  size="lg"
                  variant="solid"
                  colorScheme="purple"
                >
                  {skill}
                </Tag>
              ))}
            </Wrap>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

