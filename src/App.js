import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductListPage from './Pages/ProductListPage';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buyer" element={<ProductListPage />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
