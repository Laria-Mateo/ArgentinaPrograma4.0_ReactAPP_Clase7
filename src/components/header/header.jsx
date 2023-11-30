import { useState } from 'react';
import { Box, Flex, Heading, Spacer, Link, Collapse, Button,Text,SimpleGrid } from '@chakra-ui/react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <Box bg="purple.500" p={9} color="white" boxShadow='2xl' mb={'20px'} fontFamily={'Playfair Display, serif;'}>
      <Flex align="center">
      <Flex direction="column">
        <Box>
        <Heading as="h1" size="md" mr={8}>
          Sara Online
          
        </Heading>
        
        <Text>50 Años Brindando lo mejor a nuestros clientes</Text>
        </Box>
        </Flex>
        <Spacer />
        <Box display={{ base: 'block', md: 'none' }}>
          <Button onClick={toggleMenu}>Menú</Button>
        </Box>
        <Box display={{ base: 'none', md: 'block' }}>
          <Flex>
            <Link href="#" mr={4}>
              Inicio
            </Link>
            <Link href="#" mr={4}>
              Contacto
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          direction="column"
          align={{ base: 'flex-start', md: 'center' }}
          mt={{ base: 4, md: 0 }}
        >
          <Link href="#" mr={4} mb={{ base: 2, md: 0 }}>
            Inicio
          </Link>
          <Link href="#" mr={4} mb={{ base: 2, md: 0 }}>
            Contacto
          </Link>
        </Flex>
      </Collapse>
    </Box>
   
  );
}

export default Header;
