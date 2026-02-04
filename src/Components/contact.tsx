// ContactSection.tsx
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Contact() {
  const cardBg = useColorModeValue("white", "gray.800");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const mailtoLink = `mailto:anyanwufrancis@example.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(
      form.message + "\n\nFrom: " + form.email
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <Box py={{ base: 16, md: 24 }}>
      <Container maxW="5xl">
        <VStack spacing={8}>
          <Heading fontSize={{ base: "3xl", md: "4xl" }}>
            Contact Me<span style={{ color: "#805ad5" }}>.</span>
          </Heading>

          <Text color="gray.500" textAlign="center" maxW="600px">
            Have a project in mind, a job opportunity, or just want to say hello?
            Fill out the form below and I’ll get back to you.
          </Text>

          <Box
            bg={cardBg}
            p={8}
            rounded="2xl"
            shadow="lg"
            w="full"
            maxW="600px"
          >
            <VStack spacing={6}>
              {/* Name */}
              <FormControl isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                />
              </FormControl>

              {/* Email */}
              <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </FormControl>

              {/* Message */}
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                />
              </FormControl>

              <Button
                colorScheme="purple"
                size="lg"
                w="full"
                rounded="full"
                onClick={handleSubmit}
                isDisabled={
                  !form.name || !form.email || !form.message
                }
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
