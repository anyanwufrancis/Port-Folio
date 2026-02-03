import { Box, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
  const bg = useColorModeValue('gray.900', 'gray.800');
  const color = useColorModeValue('white', 'gray.300');

  return (
    <Box as="footer" bg={bg} color={color} py={6} textAlign="center">
      <Text fontSize="sm">
        © 2026 Lucas. All rights reserved.
      </Text>
    </Box>
  );
}