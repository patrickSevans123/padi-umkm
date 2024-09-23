import React from 'react';
import { Box, Flex, Input, InputGroup, InputRightElement, IconButton, Image } from '@chakra-ui/react';
import { BellIcon, ChatIcon, SearchIcon } from '@chakra-ui/icons';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SellerNavbar = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" p={4} boxShadow="sm" bg="white">
      <IconButton 
        aria-label="Padi UMKM Logo"
        icon={<Image src="/static/padiumkm.png" alt="Padi UMKM Logo" h="40px" />}
        variant="ghost"
        onClick={handleLogoClick}
      />

      <Flex gap={4}>
        <IconButton aria-label="Notifications" icon={<BellIcon />} variant="ghost" />
        <IconButton aria-label="Chat" icon={<ChatIcon />} variant="ghost" />
        <IconButton aria-label="Profile" icon={<FaUser />} variant="ghost" />
      </Flex>
    </Flex>
  );
};

export default SellerNavbar;
