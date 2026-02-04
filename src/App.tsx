import { ChakraProvider, Box, Flex, Image } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Components/Home";
import { useState, useEffect } from "react";
import Contact from "./Components/contact";


function AppContent() {
  const location = useLocation();

  // Normalize path (remove trailing slash, lowercase)
  const currentPath = location.pathname.toLowerCase().replace(/\/$/, "");

  // Pages without header/footer
  const hideHeaderFooter =
    currentPath === "/login" || currentPath === "/forgotpassword";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Flex align="center" justify="center" height="100vh" bg="white">
        <Image src="src/assets/45.svg" alt="Loading..." boxSize="50px" />
      </Flex>
    );
  }

  return (
    <>
      {/* {!hideHeaderFooter && <Header />} */}

      <Box as="main" mt={!hideHeaderFooter ? 4 : 0}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Box>
    </>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AppContent />
      </Router>
    </ChakraProvider>
  );
}

export default App;
