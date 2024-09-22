import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Select, Text, Flex } from '@chakra-ui/react';
import Sidebar from '../Components/Sidebar';
import ProductCard from '../Components/ProductCard';
import Navbar from '../Components/Navbar'; // Import Navbar

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [sellers, setSellers] = useState([]);
  const [filters, setFilters] = useState({
    kategori: [],
    lokasi: [],
    hargaTerendah: '',
    hargaTertinggi: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://padi-umkm-api.famuwa.my.id/product');
        const data = await response.json();
        if (data.success) {
          setProducts(data.data);
          setFilteredProducts(data.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchSellers = async () => {
      try {
        const response = await fetch('http://padi-umkm-api.famuwa.my.id/sellers');
        const data = await response.json();
        if (data.success) {
          setSellers(data.data);
        }
      } catch (error) {
        console.error('Error fetching sellers:', error);
      }
    };

    fetchProducts();
    fetchSellers();
  }, []);

  const getSellerName = (sellerId) => {
    const seller = sellers.find((seller) => seller.id === sellerId);
    return seller ? seller.name : 'Unknown Seller';
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  useEffect(() => {
    const applyFilters = () => {
      let filtered = products;

      if (filters.kategori.length > 0) {
        filtered = filtered.filter((product) => filters.kategori.includes(product.category));
      }

      if (filters.lokasi.length > 0) {
        filtered = filtered.filter((product) => filters.lokasi.includes(product.location));
      }

      if (filters.hargaTerendah) {
        filtered = filtered.filter((product) => product.price >= filters.hargaTerendah);
      }
      if (filters.hargaTertinggi) {
        filtered = filtered.filter((product) => product.price <= filters.hargaTertinggi);
      }

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filters, products]);

  const productCount = filteredProducts.length;

  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      <Flex>
        {/* Sidebar */}
        <Box w="20%" p={5}>
          <Sidebar onFilterChange={handleFilterChange} />
        </Box>

        {/* Main Content */}
        <Box w="80%" p={5}>
          <Flex justifyContent="space-between" mb={5}>
            <Text>Menampilkan {productCount} produk</Text>
            <Select w="200px" placeholder="Urutkan berdasarkan">
              <option value="terlaris">Terlaris</option>
              <option value="terpopuler">Terpopuler</option>
              <option value="terbaru">Terbaru</option>
              <option value="hargaTertinggi">Harga Tertinggi</option>
              <option value="hargaTerendah">Harga Terendah</option>
            </Select>
          </Flex>

          {/* Product Cards */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5, '2xl': 10 }} spacing={3}>
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                productName={product.name}
                productPrice={product.price}
                productImage={product.images[0]} // Assuming first image in the array
                sellerName={getSellerName(product.seller_id)}
                location={product.location || 'Unknown Location'}
                rating={product.averageRating}
                sales={product.ratingCount}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductListPage;
