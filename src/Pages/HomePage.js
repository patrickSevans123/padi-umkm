import React from 'react';
import { FaUser, FaStore } from 'react-icons/fa'; // Importing icons from react-icons
import { useNavigate } from 'react-router-dom';

const Box = ({ label, Icon, onClick, backgroundColor }) => (
  <div
    onClick={onClick}
    style={{
      backgroundColor: backgroundColor,
      color: 'white',
      padding: '40px',
      margin: '20px',
      textAlign: 'center',
      cursor: 'pointer',
      borderRadius: '10px',
      transition: 'background-color 0.3s',
      width: '200px',
      height: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
  >
    <Icon style={{ fontSize: '70px', marginBottom: '10px' }} />
    <h2>{label}</h2>
  </div>
);

const HomePage = () => {
  const navigate = useNavigate();

  const handleBuyerClick = () => {
    navigate('/buyer');
  };

  const handleSellerClick = () => {
    navigate('/seller');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: 'black', marginBottom: '20px' }}>Please Login As Buyer or Seller</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          label="Buyer"
          Icon={FaUser} // Using FaUser icon for Buyer
          onClick={handleBuyerClick}
          backgroundColor="#009ea9"
        />
        <Box
          label="Seller"
          Icon={FaStore} // Using FaStore icon for Seller
          onClick={handleSellerClick}
          backgroundColor="#182958"
        />
      </div>
    </div>
  );
};

export default HomePage;
