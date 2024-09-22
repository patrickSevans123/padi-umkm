import React from 'react';
import { Box, Flex, Input, InputGroup, InputRightElement, IconButton, Image } from '@chakra-ui/react';
import { BellIcon, ChatIcon, SearchIcon } from '@chakra-ui/icons';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Change this line

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate(); // Use useNavigate instead

  const handleLogoClick = () => {
    navigate('/'); // Navigate to main page
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" p={4} boxShadow="sm" bg="white">
      {/* Logo Button */}
      <IconButton 
        aria-label="Padi UMKM Logo"
        icon={<Image src="/static/padiumkm.png" alt="Padi UMKM Logo" h="40px" />}
        variant="ghost" // Adjusted variant to fit style
        onClick={handleLogoClick} // Handle click
      />

      {/* Search Bar */}
      <InputGroup w="60%">
        <Input
          placeholder="Cari produk, jasa, atau vendor"
          variant="outline"
          size="md"
          onChange={(e) => onSearch(e.target.value)} // Call onSearch prop
        />
        <InputRightElement>
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            size="sm"
            variant="ghost"
          />
        </InputRightElement>
      </InputGroup>

      {/* Icons */}
      <Flex gap={4}>
        <IconButton aria-label="Notifications" icon={<BellIcon />} variant="ghost" />
        <IconButton aria-label="Cart" icon={<FaShoppingCart />} variant="ghost" />
        <IconButton aria-label="Chat" icon={<ChatIcon />} variant="ghost" />
        <IconButton aria-label="Profile" icon={<FaUser />} variant="ghost" />
      </Flex>
    </Flex>
  );
};

export default Navbar;
