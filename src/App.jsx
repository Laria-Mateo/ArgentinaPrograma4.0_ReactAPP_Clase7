import * as React from 'react'
import Header from './components/header/header'
import ProductDetail from './components/productDetail/productDetail'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/footer/footer'
function App() {
  

  return (
    <ChakraProvider>
    <Header/>
<ProductDetail/>
<Footer/>
    </ChakraProvider>
  )
}

export default App
