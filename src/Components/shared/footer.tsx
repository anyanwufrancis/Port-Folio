import { Box, Stack, Text, HStack, IconButton, Link,  } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {

  return (
     <Box bg="gray.800" color="white" py={8} mt={16} as="footer">
      <Stack maxW="7xl" mx="auto" px={4} spacing={4} align="center">
        {/* Social Icons */}
        <HStack spacing={4}>
          <IconButton
            as={Link}
            href="https://github.com/anyanwufrancis"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub />}
            colorScheme="whiteAlpha"
            size="sm"
            _hover={{ bg: "whiteAlpha.200" }}
          />
          <IconButton
            as={Link}
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            colorScheme="whiteAlpha"
            size="sm"
            _hover={{ bg: "whiteAlpha.200" }}
          />
          <IconButton
            as={Link}
            href="https://twitter.com/yourhandle"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            colorScheme="whiteAlpha"
            size="sm"
            _hover={{ bg: "whiteAlpha.200" }}
          />
          <IconButton
            as={Link}
            href="https://instagram.com/yourprofile"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
            colorScheme="whiteAlpha"
            size="sm"
            _hover={{ bg: "whiteAlpha.200" }}
          />
        </HStack>

        {/* Contact Info */}
        <Text fontSize="sm" textAlign="center">
          &copy; {new Date().getFullYear()} Your Francis. All rights reserved.
        </Text>
        <Text fontSize="sm" textAlign="center">
          Email: <Link href="mailto:youremail@example.com" color="purple.400">anyanwufrancis40@gmail.com</Link>
        </Text>
        <Text fontSize="sm" textAlign="center">
          Designed & Built by You
        </Text>
      </Stack>
    </Box>
  );
}