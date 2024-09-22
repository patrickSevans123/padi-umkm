// sidebar.js
import React, { useState } from 'react';
import { Box, CheckboxGroup, Stack, Checkbox, Text, Heading, Collapse, IconButton, Flex, Input } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Sidebar = ({ onFilterChange }) => {
  const [isKategoriOpen, setIsKategoriOpen] = useState(false);
  const [isLokasiOpen, setIsLokasiOpen] = useState(false);
  const [isHargaOpen, setIsHargaOpen] = useState(false);
  const [hargaTerendah, setHargaTerendah] = useState('');
  const [hargaTertinggi, setHargaTertinggi] = useState('');

  const handleHargaChange = () => {
    if (onFilterChange) {
      onFilterChange({ hargaTerendah, hargaTertinggi });
    }
  };

  return (
    <Box border="1px" borderColor="gray.200" borderRadius="md" p={4} boxShadow="sm">
      <Heading size="md" mb={4}>Filter</Heading>

      {/* Kategori Section */}
      <Box mb={5}>
        <Flex alignItems="center" justifyContent="space-between" cursor="pointer" onClick={() => setIsKategoriOpen(!isKategoriOpen)}>
          <Text fontSize="lg" fontWeight="bold">Kategori</Text>
          <IconButton
            size="sm"
            icon={isKategoriOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            variant="ghost"
            aria-label="Toggle Kategori"
          />
        </Flex>
        <Collapse in={isKategoriOpen} animateOpacity>
          <CheckboxGroup colorScheme="teal" mt={2}>
            <Stack spacing={1}>
              <Checkbox value="FashionPria">Fashion Pria</Checkbox>
              <Checkbox value="FashionWanita">Fashion Wanita</Checkbox>
              <Checkbox value="Komputer&Laptop">Komputer & Laptop</Checkbox>
              <Checkbox value="Souvenir&Merchandise">Souvenir & Merchandise</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Collapse>
      </Box>

      {/* Lokasi Section */}
      <Box mb={5}>
        <Flex alignItems="center" justifyContent="space-between" cursor="pointer" onClick={() => setIsLokasiOpen(!isLokasiOpen)}>
          <Text fontSize="lg" fontWeight="bold">Lokasi</Text>
          <IconButton
            size="sm"
            icon={isLokasiOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            variant="ghost"
            aria-label="Toggle Lokasi"
          />
        </Flex>
        <Collapse in={isLokasiOpen} animateOpacity>
          <CheckboxGroup colorScheme="teal" mt={2}>
            <Stack spacing={1}>
              <Checkbox value="jakarta">DKI Jakarta</Checkbox>
              <Checkbox value="jawa-tengah">Jawa Tengah</Checkbox>
              <Checkbox value="jawa-timur">Jawa Timur</Checkbox>
              <Checkbox value="jawa-barat">Jawa Barat</Checkbox>
              <Checkbox value="sumatera-barat">Sumatera Barat</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Collapse>
      </Box>

      {/* Rentang Harga Section */}
      <Box mb={5}>
        <Flex alignItems="center" justifyContent="space-between" cursor="pointer" onClick={() => setIsHargaOpen(!isHargaOpen)}>
          <Text fontSize="lg" fontWeight="bold">Rentang Harga</Text>
          <IconButton
            size="sm"
            icon={isHargaOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            variant="ghost"
            aria-label="Toggle Rentang Harga"
          />
        </Flex>
        <Collapse in={isHargaOpen} animateOpacity>
          <Stack mt={2} spacing={2}>
            <Box>
              <Text>Harga Terendah</Text>
              <Flex align="center">
                <Text mr={2}>Rp</Text>
                <Input
                  type="number"
                  placeholder="0"
                  value={hargaTerendah}
                  onChange={(e) => {
                    setHargaTerendah(e.target.value);
                    handleHargaChange();
                  }}
                />
              </Flex>
            </Box>
            <Box>
              <Text>Harga Tertinggi</Text>
              <Flex align="center">
                <Text mr={2}>Rp</Text>
                <Input
                  type="number"
                  placeholder="0"
                  value={hargaTertinggi}
                  onChange={(e) => {
                    setHargaTertinggi(e.target.value);
                    handleHargaChange();
                  }}
                />
              </Flex>
            </Box>
          </Stack>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Sidebar;
