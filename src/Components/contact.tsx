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
import { useEffect, useState } from "react";

export default function Contact() {
  const cardBg = useColorModeValue("white", "gray.800");

  const [error, setError] = useState("");
  const [errorCode, setErrorCode] = useState<string>("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const generateCode = (len = 12) =>
    Array.from({ length: len }, () =>
      "ASDFGHJKLPOIUYTREWQZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789!@#$%^&*".charAt(
        Math.floor(Math.random() * 75),
      ),
    ).join("");

  // ✅ generate error code ONCE
  useEffect(() => {
    setErrorCode(generateCode(10));
  }, []);

  const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!EmailRegex.test(form.email)) {
      setError(`Email type not supported. Err code: ${errorCode}`);
      return;
    }

    const mailtoLink = `mailto:anyanwufrancis@example.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(
      form.message + "\n\nFrom: " + form.email,
    )}`;

    window.location.href = mailtoLink;
    setError("");
  };

  return (
    <Box py={{ base: 16, md: 24 }}>
      <Container maxW="5xl">
        <VStack spacing={8}>
          <Heading fontSize={{ base: "3xl", md: "4xl" }}>
            Contact Me<span style={{ color: "#805ad5" }}>.</span>
          </Heading>

          <Text color="gray.500" textAlign="center" maxW="600px">
            Have a project in mind, a job opportunity, or just want to say
            hello?
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
              <FormControl isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="Your Email"
                  onChange={handleChange}
                />
                {error && (
                  <Text color="red.400" mt={2}>
                    {error}
                  </Text>
                )}
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  placeholder="Type A Message"
                  onChange={handleChange}
                />
              </FormControl>

              <Button
                colorScheme="purple"
                size="lg"
                w="full"
                rounded="full"
                onClick={handleSubmit}
                isDisabled={!form.name || !form.email || !form.message}
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
