import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductListPage from './Pages/ProductListPage';
import SellerPage from './Pages/SellerPage';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buyer" element={<ProductListPage />} />
            <Route path="/seller" element={<SellerPage />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
