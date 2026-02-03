// "use client";
// import {
//   Box,
//   Flex,
//   Image,
//   Button,
//   Text,
//   Link,
//   Heading,
//   Grid,
//   HStack,
//   Icon,
//   VStack,
// } from "@chakra-ui/react";
// import React from "react";
// import { IoArrowForward, IoCheckmarkSharp } from "react-icons/io5";
// import { motion } from "framer-motion";
// import { FaStar, FaQuoteLeft } from "react-icons/fa6";
// import { keyframes } from "@emotion/react";
// import { MdOutlineShield, MdOutlineEmail } from "react-icons/md";
// import { HiMiniShoppingBag } from "react-icons/hi2";
// import { FaTruck, FaPhone } from "react-icons/fa6";
// import { IoEllipseSharp } from "react-icons/io5";
// import { IoRocketSharp } from "react-icons/io5";

// const MotionBox = motion(Box);
// const MotionIcon = motion(Icon);

// const slowSpin = keyframes`
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// `;

// const Me = () => {
//   return (
//     <Box
//       p={{ base: 4, md: 8 }}
//       mt={{ base: "2em", md: "5em" }}
//       ml={{ base: "0", md: "5em" }}
//     >
//       {/* Header Navigation */}
//       <Flex
//         alignItems="center"
//         justifyContent="space-between"
//         p={4}
//         bg="white"
//         boxShadow="md"
//         borderRadius="md"
//       >
//         {/* Logo */}
//         <Flex align="center" gap={2} w="9em" color="green.600">
//           <Image src="ahiaoma_text_logo.png" alt="Logo" />
//         </Flex>

//  <Flex gap={6} display={{ base: "none", md: "flex" }}>
//   {/* Features Link */}
//   <Link href="/features">
//     <Text
//       _hover={{ color: "green.500" }}
//       fontWeight="semibold"
//       color="gray.700"
//       cursor="pointer"
//     >
//       Features
//     </Text>
//   </Link>

//   {/* How It Works Link */}
//   <Link href="/works">
//     <Text
//       _hover={{ color: "green.500" }}
//       fontWeight="semibold"
//       color="gray.700"
//       cursor="pointer"
//     >
//       How It Works
//     </Text>
//   </Link>

//   {/* About Us Link */}
//   <Link href="/about">
//     <Text
//       _hover={{ color: "green.500" }}
//       fontWeight="semibold"
//       color="gray.700"
//       cursor="pointer"
//     >
//       About Us
//     </Text>
//   </Link>

//   {/* Contact Us Link */}
//   <Link href="/contact">
//     <Text
//       _hover={{ color: "green.500" }}
//       fontWeight="semibold"
//       color="gray.700"
//       cursor="pointer"
//     >
//       Contact Us
//     </Text>
//   </Link>
// </Flex>



//         {/* Join Waitlist Button */}
//         <Button
//           bg="green.600"
//           rounded="full"
//           px={4}
//           py={2}
//           color="white"
//           _hover={{ bg: "green.700" }}
//           display={{ base: "none", md: "block" }}
//         >
//           Join Waitlist
//         </Button>
//       </Flex>

//       {/* HERO SECTION */}
//       <Flex
//         mt={20}
//         gap={{ base: 10, md: 20 }}
//         // align="center"
//         direction={{ base: "column", md: "row" }}
//         textAlign={{ base: "center", md: "left" }}
//         bg="linear-gradient(to top right, #effdffff, #ffffff)"
//         p={8}
//         py={{ base: 12, md: 20 }}
//         px={{ base: 6, md: 10 }}
//         borderRadius="2xl"
//         position="relative"
//       >
//         {/* Background Decorative Ellipse */}
       

//         {/* <Icon
//           as={IoEllipseSharp}
//           color="red"
//           // fontSize="7xl"
//         /> */}
//         {/* Left Section with Heading and Ellipse Icon */}
//         <Box maxW={{ base: "100%", md: "15%" }}>
//           {/* Container for heading and icon */}
//           <Box position="relative" display="inline-block" mb={4}>
//           <HStack
//             gap={2}
//             bg="green.100"
//             color="green.700"
//             px={3}
//             mt={"-2em"}
//             py={1.5}
//             w={"15em"}
//             borderRadius="full"
//             // display="inline-flex"
//             alignItems="center"
//             mb={"5em"}
//           >
//             <Icon as={IoRocketSharp} color="red.400" boxSize={3} />
//             <Text fontSize="sm" fontWeight="semibold">
//               🇳🇬 Nigeria’s #1 Marketplace
//             </Text>
//           </HStack>
//                      {/* Ellipse Icon positioned on top of the heading */}
//            <MotionBox
//           rounded="1em"
//           // overflow="hidden"
//           // bg="gray.200"
//           // position="relative"
//           // display="flex"
//           mt={"-5em"}
//           // alignItems="center"
//           // justifyContent="center"
//         >
//           {/* Floating Rocket Icon at the top */}
//           <MotionIcon
//             as={IoEllipseSharp}
//             color="red.400"
//             boxSize={8}
//             // position="absolute"
//             top="100%"
//             w={"1em"}
//             ml={"2em"}
//             transform="translateX(-50%)"
//             // opacity={0.3}
//             animate={{ y: [0, -15, 0] }}
//             transition={{
//               duration: 1.5,
//               ease: "easeInOut",
//               repeat: Infinity,
//             }}
//           />
//         </MotionBox>
//             {/* Heading */}
//             <Heading
//               fontSize={{ base: "2xl", md: "5xl" }}
//               fontWeight="bolder"
//               color="black"
//               mt={"1em"}
//               w={"7em"}
//               lineHeight="short"
//             >
//               Shop Smarter with{" "}
//               <Box as="span" color="green.500">
//                 Ahiaoma
//               </Box>
//             </Heading>

 
//           </Box>

//           {/* Small Tag */}
          

//           {/* Description */}
//           <Text
//             mt={4}
//             fontSize={{ base: "md", md: "lg" }}
//             color="gray.700"
//             // maxW="90%"
//             w={"25em"}
//             mx={{ base: "auto", md: "0" }}
//           >
//             Experience the future of online shopping in Nigeria. Secure, fast,
//             and reliable comnecting buyers and sellers nationwide.
//           </Text>

//           {/* Buttons */}
//           <Flex
//             mt={6}
//             alignItems="center"
//             justifyContent={{ base: "center", md: "flex-start" }}
//             gap={4}
//             flexWrap="wrap"
//           >
//             <Box w="8em">
//               <Image src="Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" />
//             </Box>
//             <Box w="8em">
//               <Image src="google_playstore_images/GetItOnGooglePlay_Badge_Web_color_English.png" />
//             </Box>

//             <Button
//               colorScheme="green"
//               rounded="full"
//               px={5}
//               py={3}
//               // _icon={<IoArrowForward />}
//               _hover={{ bg: "green.700" }}
//             >
//               Learn More
//             </Button>
//           </Flex>
//         </Box>

//         {/* Right Image + Floating Icons */}
//         <Box position="relative">
//           <MotionBox
//             rounded="1em"
//             overflow="hidden"
//             // bg="gray"
//             ml={{ base: "1em", md: "26em" }}
//             w={{ base: "16em", md: "26em" }}
//             h={{ base: "13em", md: "21em" }}
//             animate={{ y: [0, -10, 0] }}
//             transition={{
//               duration: 2,
//               ease: "easeInOut",
//               repeat: Infinity,
//             }}
//           >
//             <Image
//               src="countryside-woman-holding-plant-leaves.jpg"
//               alt="Shopping"
//               w="100%"
//               h="100%"
    
//               objectFit="cover"
//             />
//           </MotionBox>

//           {/* Floating Star */}
//           <Box
//             bg="green.500"
//             p="0.5em"
//             position="absolute"
//             top="-1.2em"
//             right="-1em"
//             w="3em"
//             h="3em"
//             alignItems="center"
//             justifyContent="center"
//             rounded="md"
//             animation={`${slowSpin} 25s linear infinite`}
//             boxShadow="0 0 20px rgba(72,187,120,0.5)"
//           >
//             <FaStar size="1.2em" color="white" />
//           </Box>

//           {/* Floating Checkmark */}
//           <MotionBox
//             position="absolute"
//             // bottom="-0.6em"
//             left="-0.6em"
//             bgGradient="linear(to-r, #7b2ff5, #f107a3)"
//             p="4px"
//             ml={{ base: "1em", md: "26em" }}
//             top={{ base: "10em", md: "19em" }}
//             borderRadius="full"
//             display="inline-flex"
//             alignItems="center"
//             justifyContent="center"
//             // boxShadow="0 8px 25px rgba(0, 0, 0, 0.15)"
//             animate={{ scale: [1, 1.2, 1] }}
//             transition={{
//               duration: 1.5,
//               ease: "easeInOut",
//               repeat: Infinity,
//             }}
//           >
//             <Box
//               bg="#7b2ff5"
//               p="14px"
//               borderRadius="full"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//             >
//               <IoCheckmarkSharp size="22px" color="white" />
//             </Box>
//           </MotionBox>
//         </Box>
//       </Flex>

//       {/* Stats Section */}
//       <Flex
//         gap={{ base: "2em", md: "3em" }}
//         textAlign="center"
//         mt={10}
//         direction={{ base: "column", md: "row" }}
//         alignItems="center"
//         justifyContent={{ base: "row", md: "flex-start" }}
//       >
//         <Box>
//           <Text fontSize="xl" fontWeight="bold">
//             50K+
//           </Text>
//           <Text>Happy Users</Text>
//         </Box>
//         <Box>
//           <Text fontSize="xl" fontWeight="bold">
//             10K+
//           </Text>
//           <Text>Products</Text>
//         </Box>
//         <Box>
//           <Text fontSize="xl" fontWeight="bold">
//             99%
//           </Text>
//           <Text>Satisfaction</Text>
//         </Box>
//       </Flex>

//       {/* Section Title */}
//       <Box fontSize="xl" fontWeight="bold" mt={10} color="black" textAlign="center">
//         <Heading fontSize={{ base: "2xl", md: "3xl" }}>Powerful Features</Heading>
//       </Box>
//       <Box color="gray.400" textAlign="center">
//         <Text>Everything you need for a seamless shopping experience</Text>
//       </Box>

//       {/* Cards Section with Grid layout */}
//       <Box
//         display="grid"
//         gap="20px"
//         gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
//         p="4"
//       >
//         {/* Secure Payment */}
//         <Box
//           bg="white"
//           borderRadius="1em"
//           boxShadow="lg"
//           p="20px"
//           _hover={{ transform: "scale(1.05)", bg: "#f0fff0" }}
//           transition="transform 0.2s, background-color 0.2s"
//         >
//           <Box mb="10px" color="#4CAF50" fontSize="30px">
//             <MdOutlineShield />
//           </Box>
//           <Text fontWeight="bold" fontSize="1.1em" mb="4px">
//             Secure Payment
//           </Text>
//           <Text fontSize="0.9em" color="gray.600">
//             Bank-level encryption and fraud protection for every transaction
//           </Text>
//         </Box>

//         {/* Wide Selection */}
//         <Box
//           bg="white"
//           borderRadius="1em"
//           boxShadow="lg"
//           p="20px"
//           _hover={{ transform: "scale(1.05)", bg: "#e0f7fa" }}
//           transition="transform 0.2s, background-color 0.2s"
//         >
//           <Box mb="10px" color="#2196F3" fontSize="30px">
//             <HiMiniShoppingBag />
//           </Box>
//           <Text fontWeight="bold" fontSize="1.1em" mb="4px">
//             Wide Selection
//           </Text>
//           <Text fontSize="0.9em" color="gray.600">
//             Millions of products from verified sellers across Nigeria
//           </Text>
//         </Box>

//         {/* Fast Delivery */}
//         <Box
//           bg="white"
//           borderRadius="1em"
//           boxShadow="lg"
//           p="20px"
//           _hover={{ transform: "scale(1.05)", bg: "#f3e5f5" }}
//           transition="transform 0.2s, background-color 0.2s"
//         >
//           <Box mb="10px" color="#9C27B0" fontSize="30px">
//             <FaTruck />
//           </Box>
//           <Text fontWeight="bold" fontSize="1.1em" mb="4px">
//             Fast Delivery
//           </Text>
//           <Text fontSize="0.9em" color="gray.600">
//             Same-day delivery in major cities, nationwide coverage
//           </Text>
//         </Box>
//       </Box>

//       {/* Testimonials */}
//       <Box bg="linear-gradient(to top right, #effdffff, #ffffff)" p={8} mt={10}>
//         <Heading fontSize={{ base: "2xl", md: "3xl" }} color="black" textAlign="center">
//           Loved by Thousands
//         </Heading>
//         <Text color="gray.400" textAlign="center" mb={10}>
//           See what our community has to say about their experience
//         </Text>

//         <Grid
//           mt={10}
//           gap={10}
//           justifyContent="center"
//           gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
//           placeItems="center"
//         >
//           {[
//             `"Ahiaoma transformed my business! The platform is intuitive and my sales have tripled."`,
//             `"Fast delivery, secure payments, and amazing customer support. Best rising marketplace in Nigeria!"`,
//             `"I found exactly what I needed at great prices. The shopping experience is seamless."`,
//           ].map((quote, index) => (
//             <Box key={index} position="relative" w={{ base: "20em", md: "22em" }}>
//               <Box
//                 position="absolute"
//                 top="-0.5em"
//                 left="1em"
//                 bg="green.500"
//                 color="white"
//                 rounded="full"
//                 p="1em"
//                 boxShadow="lg"
//                 zIndex={3}
//               >
//                 <FaQuoteLeft />
//               </Box>

//               <Box
//                 backgroundColor="#E6E6FA"
//                 p={10}
//                 borderRadius={10}
//                 mt="1.5em"
//                 boxShadow="md"
//                 textAlign="left"
//               >
//                 <Flex gap={2} mb={3}>
//                   {Array(5)
//                     .fill("")
//                     .map((_, i) => (
//                       <FaStar key={i} color="gold" />
//                     ))}
//                 </Flex>
//                 <Text fontStyle="italic" color="gray.700">
//                   {quote}
//                 </Text>
//               </Box>
//             </Box>
//           ))}
//         </Grid>
//       </Box>

//       {/* Footer */}
//       <Box bg="#000" color="#fff" p={8} fontFamily="Arial, sans-serif">
//         <Flex justify="space-between" flexWrap="wrap" maxW="1200px" mx="auto">
//           {/* About Section */}
//           <Box flex="1" minW="200px" mb={4}>
//             <Text fontWeight="bold" fontSize="xl" color="#00C853">
//               Ahiaoma
//             </Text>
//             <Text mt={2} fontSize="sm">
//               Nigeria's premier marketplace connecting millions of buyers and
//               sellers. Shop with confidence, sell with ease.
//             </Text>
//             <Flex mt={4} gap={3}>
//               <Box bg="#3b5998" borderRadius="50%" p={2}>
//                 <Image src="facebook.svg" boxSize="40px" borderRadius="50%" />
//               </Box>
//               <Box bg="#E1306C" borderRadius="50%" p={2}>
//                 <Image src="instagram.svg" boxSize="40px" borderRadius="50%" />
//               </Box>
//               <Box bg="#1DA1F2" borderRadius="50%" p={2}>
//                 <Image src="x_icon_twitter.svg" boxSize="40px" borderRadius="50%" />
//               </Box>
//             </Flex>
//           </Box>

//           {/* Quick Links */}
//           <Box flex="1" minW="200px" mb={4}>
//             <Text fontWeight="bold" fontSize="lg" mb={4}>
//               Quick Links
//             </Text>
//             <VStack align="start" gap={2}>
//               <Text cursor="pointer" fontSize="sm">
//                 About Us
//               </Text>
//               <Text cursor="pointer" fontSize="sm">
//                 How It Works
//               </Text>
//               <Text cursor="pointer" fontSize="sm">
//                 Seller Center
//               </Text>
//               <Text cursor="pointer" fontSize="sm">
//                 Help Center
//               </Text>
//             </VStack>
//           </Box>

//           {/* Contact */}
//           <Box flex="1" minW="200px" mb={4}>
//             <Text fontWeight="bold" fontSize="lg" mb={4}>
//               Contact
//             </Text>
//             <VStack align="start" gap={2}>
//               <HStack align="center" gap={2}>
//                 <Box bg="#4CAF50" p={2} borderRadius="md">
//                   <Icon as={MdOutlineEmail} color="#fff" boxSize={4} />
//                 </Box>
//                 <Text fontSize="sm">ahiaoma37@gmail.com</Text>
//               </HStack>
//               <HStack align="center" gap={2}>
//                 <Box bg="#2196F3" p={2} borderRadius="md">
//                   <Icon as={FaPhone} color="#fff" boxSize={4} />
//                 </Box>
//                 <Text fontSize="sm">+234 907 940 5147</Text>
//               </HStack>
//             </VStack>
//           </Box>
//         </Flex>
//         <Box mt={8} borderColor="#444" />
//         <Text textAlign="center" mt={4} fontSize="sm">
//           © 2025 Ahiaoma. All rights reserved.
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// export default Me;