import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Link,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function About() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you can send formData to your backend or API
    console.log("Form Data Submitted:", formData);
    alert("Your message has been sent!"); // Optional: Show a success message
    // Reset form
    setFormData({ email: "", name: "", message: "" });
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.100", "gray.700")}
      px={4}
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        p={8}
        maxW="400px"
        width="100%"
        borderRadius="md"
        boxShadow="lg"
      >
        <Heading mb={6} textAlign="center" fontSize="2xl" color="purple.600">
          Get in Touch
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel>Message</FormLabel>
              <Input
                as="textarea"
                rows={4}
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
              />
            </FormControl>
            <Button colorScheme="purple" type="submit" width="full" mt={4}>
              Send Message
            </Button>
          </VStack>
        </form>
        <Text mt={4} fontSize="sm" textAlign="center">
          Or <Link color="purple.600" href="#!">contact us directly</Link>
        </Text>
      </Box>
    </Flex>
  );
}