import React, { useState } from 'react';
import { Box, Button, Heading, Text, Image, Flex, useToast } from '@chakra-ui/react';
import gloss from './gloss.jpg';
import '@fontsource/open-sans/700.css';

const ProductDetail = () => {
  const [purchased, setPurchased] = useState(false);
  const [quantityAvailable, setQuantityAvailable] = useState(1);

  const handleBuyClick = () => {
    if (quantityAvailable > 0) {
      setPurchased(true);
      setQuantityAvailable(quantityAvailable - 1);
    }
  };

  const toast = useToast();

  return (
    <Box
      maxW="600px"
      m="auto"
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      fontFamily={'Opensas'}
      mb={'20px'}
      boxShadow='base'
      bg={'-moz-initial'}
    >
      <Flex justify={'center'}>
        <Image src={gloss} alt="Gloss" mb="4" w={'40%'} />
      </Flex>
      <Heading as="h2" size="lg" mb="4">
        OH MY GLOSS! PLUMP | RIMMEL LONDON
      </Heading>
      <Text mb="4">
        El brillo de labios Oh My Gloss! Plump es un labial líquido que voluminiza tus labios, es de larga duración, tiene
        brillo tridimensional y color que dura hasta 6 horas. Su fórmula ligera se desliza sobre los labios y se siente
        cómodo para usar todo el día, gracias a una mezcla de ingredientes acondicionadores, como la Vitamina E y el
        aceite de Argán.
      </Text>
      <Text mb="2">Precio: $8.200</Text>
      <Text mb="2">SKU: ABC123</Text>
      <Text mb="2">Cantidad disponible: {quantityAvailable}</Text>

      {!purchased ? (
        <Button
          colorScheme="purple.500"
          onClick={() => {
            const examplePromise = new Promise((resolve, reject) => {
              setTimeout(() => resolve(200), 5000);
            });

            toast.promise(
              examplePromise.then(() => {
                handleBuyClick();
              }),
              {
                success: { title: 'Pago realizado con Exito', description: 'Gracias por su compra' },
                
                loading: { title: 'Revisando datos de su tarjeta', description: 'Espere por favor...' },
              }
            );
          }}
        >
          Comprar
        </Button>
      ) : (
        <Text mt="4" color="green.500">
          ¡Gracias por su compra!
        </Text>
      )}
    </Box>
  );
};

export default ProductDetail;
