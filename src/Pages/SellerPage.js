import React from 'react';
import './SellerPage.css';
import { FaStore, FaTruck, FaFileInvoice } from 'react-icons/fa';
import { TbFileInvoice } from 'react-icons/tb'; // Import the TbFileInvoice icon
import SellerNavbar from '../Components/SellerNavbar'; // Adjust the path as necessary

function SellerPage() {
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="app">
      <SellerNavbar onSearch={handleSearch} />

      {/* Green Gradient Section */}
      <div className="header-gradient">
        <div className="header-title">
          <h1>Penilaian Penjual</h1>
          <p>Tingkatkan penilaian toko Anda untuk mendapatkan banyak keuntungan.</p>
        </div>

        <header className="header">
          <div className="header-row">
            <div className="shop-info">
              <FaStore className="store-icon" />
              <div>
                <h2 className="shop-name">PT. Sawah dan Ladang</h2>
                <p className="shop-established">Berdiri sejak April 2021</p>
              </div>
            </div>

            <div className="score">
              <h3>Skor Rating</h3>
              <span className="score-value">72.6</span>
            </div>

            <div className="rating-value">
              <h3>Nilai Rating</h3>
              <span className="rating-good">
                <i className="fas fa-thumbs-up"></i> Bagus
              </span>
            </div>
          </div>
        </header>
      </div>

      {/* Main Content with Four Boxes */}
      <div className="main-content">
        <div className="grid-container">
          <div className="box history-orders">
            <h3>Riwayat Pesanan Diproses</h3>
            <p>Lihat penilaian dari pesanan yang berhasil diproses.</p>
            <div className="score-indicator">
              <span className="score-value-green">Skor Pesanan Diproses: 30%</span>
            </div>
            <div className="order-status">
              <div className="status-item">
                <FaTruck className="status-icon" />
                <p>Berhasil Diproses: 16%</p>
                <span>3 dari 19 Pesanan</span>
              </div>
              <div className="status-item">
                <FaTruck className="status-icon" />
                <p>Pesanan Dibatalkan: 38 %</p>
                <span>3 dari 19 Pesanan</span>
              </div>
            </div>
          </div>

          <div className="box history-transactions">
            <h3>Riwayat Transaksi</h3>
            <p>Lihat tingkat keberhasilan transaksi oleh penjual.</p>
            <div className="score-indicator">
              <span className="score-value-green">Skor Transaksi Berhasil: 8.2%</span>
            </div>
            <div className="transaction-status">
              <FaFileInvoice className="bill-icon" />
              <div>
                <p>Transaksi Selesai</p>
                <span>27 dari 331 Transaksi</span>
              </div>
            </div>
          </div>

          <div className="box shop-documents">
            <h3>Lengkapi Data dan Dokumen Toko Anda</h3>
            <p>Dapatkan kemudahan pengajuan pinjaman di PaDi UMKM dengan melengkapi data dan dokumen yang dibutuhkan.</p>
            <div className="progress-container">
              <div className="progress">
                <div className="progress-bar" style={{ width: '75%' }}></div>
              </div>
              <span className="progress-percentage gray">75%</span>
            </div>
            <br />
            <div className="documents-container">
              <div className="document-item">
                <div className="circle-checkbox">
                  <i className="fas fa-check" aria-hidden="true"></i>
                </div>
                <span className="document-text">KTP</span>
              </div>
              <div className="document-item">
                <div className="circle-checkbox">
                  <i className="fas fa-check" aria-hidden="true"></i>
                </div>
                <span className="document-text">NPWP</span>
              </div>
              <div className="document-item">
                <div className="circle-checkbox">
                  <i className="fas fa-check" aria-hidden="true"></i>
                </div>
                <span className="document-text">SIUP</span>
              </div>
              <div className="document-item">
                <div className="circle-checkbox">
                  <i className="fas fa-check" aria-hidden="true"></i>
                </div>
                <span className="document-text">TDP</span>
              </div>
              <div className="document-item">
                <div className="circle-checkbox">
                  <i className="fas fa-check" aria-hidden="true"></i>
                </div>
                <span className="document-text">Akta Pendirian</span>
              </div>
              <div className="document-item">
                <div className="circle-checkbox">
                  <i className="fas fa-check" aria-hidden="true"></i>
                </div>
                <span className="document-text">Akta Penyesuaian</span>
              </div>
            </div>
          </div>

          <div className="box loan-history">
            <h3>Riwayat Pinjaman</h3>
            <p>Lihat riwayat pengajuan dan tingkat keberhasilan pinjaman oleh penjual.</p>
            <div className="score-indicator">
              <span className="score-value-green">Skor Pinjaman Disetujui: 0%</span>
            </div>
            <div className="loan-status">
              <div className="invoice-status">
                <TbFileInvoice className="invoice-icon" /> {/* New icon added */}
                <p>Invoice Financing: 67,9%</p>
              </div>
              <span>0 Pinjaman Sukses dari 6 Pengajuan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerPage;
