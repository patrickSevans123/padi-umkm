import React, { useState } from 'react';
import { Box, CheckboxGroup, Stack, Checkbox, Text, Heading, Collapse, IconButton, Flex, Input } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const provinces = [
  "Jakarta", "Jawa Tengah", "Jawa Timur", "Jawa Barat", "Sumatera Barat",
  "Bali", "Yogyakarta", "Sulawesi Selatan", "Kalimantan Barat", "Kalimantan Tengah",
  "Kalimantan Timur", "Nusa Tenggara Timur", "Nusa Tenggara Barat", "Maluku", "Maluku Utara",
  "Papua", "Papua Barat", "Riau", "Sumatera Utara", "Sumatera Selatan",
];

const Sidebar = ({ onFilterChange }) => {
  const [isKategoriOpen, setIsKategoriOpen] = useState(false);
  const [isLokasiOpen, setIsLokasiOpen] = useState(false);
  const [isLokasiExpanded, setIsLokasiExpanded] = useState(false);
  const [isHargaOpen, setIsHargaOpen] = useState(false);
  const [hargaTerendah, setHargaTerendah] = useState('');
  const [hargaTertinggi, setHargaTertinggi] = useState('');
  const [selectedKategori, setSelectedKategori] = useState([]);
  const [selectedLokasi, setSelectedLokasi] = useState([]);

  const handleHargaChange = () => {
    if (onFilterChange) {
      onFilterChange({ hargaTerendah, hargaTertinggi, kategori: selectedKategori, lokasi: selectedLokasi });
    }
  };

  const handleKategoriChange = (value) => {
    setSelectedKategori(value);
    if (onFilterChange) {
      onFilterChange({ kategori: value, hargaTerendah, hargaTertinggi, lokasi: selectedLokasi });
    }
  };

  const handleLokasiChange = (value) => {
    setSelectedLokasi(value);
    if (onFilterChange) {
      onFilterChange({ lokasi: value, hargaTerendah, hargaTertinggi, kategori: selectedKategori });
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
          <CheckboxGroup colorScheme="teal" mt={2} onChange={handleKategoriChange}>
            <Stack spacing={1}>
              <Checkbox value="Fashion Pria">Fashion Pria</Checkbox>
              <Checkbox value="Fashion Wanita">Fashion Wanita</Checkbox>
              <Checkbox value="Komputer dan Laptop">Komputer & Laptop</Checkbox>
              <Checkbox value="Souvenir dan Merchandise">Souvenir & Merchandise</Checkbox>
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
          <CheckboxGroup colorScheme="teal" mt={2} onChange={handleLokasiChange}>
            <Stack spacing={1}>
              <Checkbox value="Jakarta">Jakarta</Checkbox>
              <Checkbox value="Jawa Tengah">Jawa Tengah</Checkbox>
              <Checkbox value="Jawa Timur">Jawa Timur</Checkbox>
              <Checkbox value="Jawa Barat">Jawa Barat</Checkbox>
              <Checkbox value="Sumatera Barat">Sumatera Barat</Checkbox>
              {isLokasiExpanded && provinces.slice(5).map((province) => (
                <Checkbox key={province} value={province}>{province}</Checkbox>
              ))}
            </Stack>
            <Text cursor="pointer" color="teal.500" onClick={() => setIsLokasiExpanded(!isLokasiExpanded)}>
              {isLokasiExpanded ? "Tutup" : "Lihat Semua"}
            </Text>
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
