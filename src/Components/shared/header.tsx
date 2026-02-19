import { HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  useColorModeValue,
  Box,
  Flex,
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
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface HeaderProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
}

export default function Header({ projectsRef, aboutRef }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const baseBg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const [activeLink, setActiveLink] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLinkClick = (
    page: string,
    ref?: React.RefObject<HTMLDivElement>,
  ) => {
    setActiveLink(page);
    if (ref) scrollTo(ref);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      py={1}
      shadow="sm"
      borderBottom="1px solid"
      borderColor={borderColor}
      transition="background 0.5s, box-shadow 0.5s"
      bg={scrolled ? "linear-gradient(90deg, #0ff, #f0f, #000eff, #2dee06, #fc0505)" : baseBg}
      style={{
        backgroundSize: "200% 200%",
        animation: scrolled ? "neonGradient 5s ease infinite" : "none",
      }}
    >
      <style>
        {`
          @keyframes neonGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        align="center"
        justify="space-between"
      >
        <Image
          src="ChatGPT Image Feb 16, 2026, 10_43_56 AM.png"
          alt="Francis Anyanwu Logo"
          h="70px"
          objectFit="contain"
        />

        {/* Desktop nav */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {["home", "projects", "about"].map((page) => (
            <ChakraLink
              key={page}
              onClick={() =>
                handleLinkClick(
                  page,
                  page === "projects"
                    ? projectsRef
                    : page === "about"
                      ? aboutRef
                      : undefined,
                )
              }
              cursor="pointer"
              fontWeight="medium"
              _hover={{ color: "purple.600" }}
              color={activeLink === page ? "purple.600" : "black"}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </ChakraLink>
          ))}
          <ChakraLink href="/contact">
            <Button colorScheme="purple" rounded="full" size="sm" px={6}>
              Get in touch
            </Button>
          </ChakraLink>
        </HStack>

        {/* Mobile menu */}
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
              <Button
                variant="ghost"
                size="lg"
                justifyContent="flex-start"
                onClick={() => {
                  scrollTo(projectsRef);
                  onClose();
                }}
              >
                Projects
              </Button>

              <Button
                variant="ghost"
                size="lg"
                justifyContent="flex-start"
                onClick={() => {
                  scrollTo(aboutRef);
                  onClose();
                }}
              >
                About
              </Button>

              <ChakraLink href="/contact">
                <Button colorScheme="purple" size="lg" rounded="full" w="full">
                  Contact
                </Button>
              </ChakraLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
