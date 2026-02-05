import { HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  useColorModeValue,
  Box,
  Flex,
  Heading,
  HStack,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useState } from "react";

// Add prop type (you can skip TS if not using strict mode)
interface HeaderProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
}

export default function Header({ projectsRef, aboutRef }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const [activeLink, setActiveLink] = useState<string>("home"); // default 'home'

  // Remove these two lines – they are no longer needed here
  // const projectsRef = useRef<HTMLDivElement>(null);
  // const aboutRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  const handleLinkClick = (
    page: string,
    ref?: React.RefObject<HTMLDivElement>,
  ) => {
    setActiveLink(page);
    if (ref) {
      scrollTo(ref);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg={bg}
      borderBottom="1px solid"
      borderColor={borderColor}
      zIndex={1000}
      py={4}
      shadow="sm"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        align="center"
        justify="space-between"
      >
        <Heading size="lg" color="purple.600">
          Francis
        </Heading>

        {/* Desktop nav */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <ChakraLink
            onClick={() => handleLinkClick("home")}
            cursor="pointer"
            fontWeight="medium"
            _hover={{ color: "purple.600" }}
            color={activeLink === "home" ? "purple.600" : "black"}
          >
            Home
          </ChakraLink>

          <ChakraLink
            onClick={() => handleLinkClick("projects", projectsRef)}
            cursor="pointer"
            fontWeight="medium"
            _hover={{ color: "purple.600" }}
            color={activeLink === "projects" ? "purple.600" : "black"}
          >
            Projects
          </ChakraLink>

          <ChakraLink
            onClick={() => handleLinkClick("about", aboutRef)}
            cursor="pointer"
            fontWeight="medium"
            _hover={{ color: "purple.600" }}
            color={activeLink === "about" ? "purple.600" : "black"}
          >
            About
          </ChakraLink>
          <ChakraLink
              href="/contact"
              cursor="pointer"
                fontWeight="medium"
                _hover={{ color: "purple.600" }}
                            color={activeLink === "about" ? "purple.600" : "black"}
                >
                Contact
              </ChakraLink>
              <ChakraLink href="/contact">
          <Button colorScheme="purple" rounded="full" size="sm" px={6}>
            Get in touch
          </Button>
          </ChakraLink>
        </HStack>

        {/* Mobile menu – still missing onClick for Projects */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="ghost"
          aria-label="Open menu"
          icon={<HamburgerIcon boxSize={6} />}
        />
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={2} mt={4}>
              {/* Fix: add onClick + close drawer */}
              <Button
                variant="ghost"
                size="lg"
                ml={"-1.4em"}
                justifyContent="flex-start"
                onClick={() => {
                  scrollTo(projectsRef);
                  onClose();
                }}
              >
                Projects
              </Button>

              <ChakraLink
                onClick={() => {
                  scrollTo(aboutRef);
                  onClose();
                }}
                cursor="pointer"
                fontWeight="medium"
                _hover={{ color: "purple.600" }}
              >
                About
              </ChakraLink>
              <ChakraLink
              href="/contact"
              cursor="pointer"
                fontWeight="medium"
                _hover={{ color: "purple.600" }}
                >
                Contact
              </ChakraLink>

              <Button
                colorScheme="purple"
                size="lg"
                rounded="full"
                onClick={onClose}
              >
                Get in touch
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
