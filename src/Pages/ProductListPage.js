import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Select, Text, Flex } from '@chakra-ui/react';
import Sidebar from '../Components/Sidebar';
import ProductCard from '../Components/ProductCard';
import Navbar from '../Components/Navbar';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sellers, setSellers] = useState({});
  const [filters, setFilters] = useState({
    kategori: [],
    lokasi: [],
    hargaTerendah: '',
    hargaTertinggi: '',
  });
  const [sortOption, setSortOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://padi-umkm-api.famuwa.my.id/product');
        const data = await response.json();
        if (data.success) {
          setProducts(data.data);
          setFilteredProducts(data.data);
          fetchSellers(data.data.map(product => product.seller_id)); // Fetch sellers based on product seller IDs
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchSellers = async (sellerIds) => {
      try {
        const sellerPromises = sellerIds.map(id =>
          fetch(`http://padi-umkm-api.famuwa.my.id/sellers/${id}`).then(res => res.json())
        );
        const sellerData = await Promise.all(sellerPromises);
        const sellersMap = {};
        sellerData.forEach(seller => {
          if (seller.success) {
            sellersMap[seller.data.id] = seller.data.name; // Map seller IDs to names
          }
        });
        setSellers(sellersMap);
      } catch (error) {
        console.error('Error fetching sellers:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  useEffect(() => {
    const applyFilters = () => {
      let filtered = products;

      // Filter by Kategori
      if (filters.kategori.length > 0) {
        filtered = filtered.filter((product) => {
          const categories = Array.isArray(product.category) ? product.category : [product.category];
          return categories.some(category => filters.kategori.includes(category));
        });
      }

      // Filter by Lokasi
      if (filters.lokasi.length > 0) {
        filtered = filtered.filter((product) => filters.lokasi.includes(product.location));
      }

      // Filter by Rentang Harga
      if (filters.hargaTerendah !== '') {
        filtered = filtered.filter((product) => product.price >= Number(filters.hargaTerendah));
      }
      if (filters.hargaTertinggi !== '') {
        filtered = filtered.filter((product) => product.price <= Number(filters.hargaTertinggi));
      }

      // Filter by Search Query
      if (searchQuery) {
        filtered = filtered.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
      }

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filters, products, searchQuery]);

  useEffect(() => {
    const sortProducts = () => {
      let sortedProducts = [...filteredProducts];

      if (sortOption === 'hargaTertinggi') {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sortOption === 'hargaTerendah') {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === 'terbaru') {
        sortedProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      } else if (sortOption === 'terlaris') {
        sortedProducts.sort((a, b) => b.ratingCount - a.ratingCount);
      }
      
      setFilteredProducts(sortedProducts);
    };

    sortProducts();
  }, [sortOption, filteredProducts]);

  const productCount = filteredProducts.length;

  return (
    <Box>
      <Navbar onSearch={setSearchQuery} />

      <Flex>
        <Box w="20%" p={5}>
          <Sidebar onFilterChange={handleFilterChange} />
        </Box>

        <Box w="80%" p={5}>
          <Flex justifyContent="space-between" mb={5}>
            <Text>Menampilkan {productCount} produk</Text>
            <Select
              w="200px"
              placeholder="Urutkan berdasarkan"
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="terlaris">Terlaris</option>
              <option value="terpopuler">Terpopuler</option>
              <option value="terbaru">Terbaru</option>
              <option value="hargaTertinggi">Harga Tertinggi</option>
              <option value="hargaTerendah">Harga Terendah</option>
            </Select>
          </Flex>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5, '2xl': 10 }} spacing={3}>
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                productName={product.name}
                productPrice={product.price}
                productImage={product.images[0]}
                sellerName={sellers[product.seller_id] || 'Loading...'} // Use fetched seller names
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
