/* eslint-disable no-unused-vars */
import React from "react";
import Beranda from "./pages/Beranda"; // Import the header component
import OTPages from "./pages/OTPages";
import Hotel from "./pages/Hotel";
import MapDirection from "./pages/MapDirection1";
import ReservationContact from "./pages/ReservationContact";
import BlogBerita from "./pages/BlogBerita"
import Profile from "./pages/Profile";
import HotelDetail from "./pages/HotelDetail";
import Restoran from "./pages/Restoran"
import BlogEvent from "./pages/BlogEvent"
import BlogArtikel from "./pages/BlogArtikel";
import PageBerita from "./pages/PageBerita";
import DokumentasiKegiatan from "./pages/DokumentasiKegiatan";
import RestoDetail from "./pages/RestoranDetail";
import OpenPages from "./pages/OpenPages";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import PageArtikel from "./pages/PageArtikel";
import DetailPemesanan from "./pages/DetailPesanan";
import Pembayaran from "./pages/Pembayaran";
import ETicket from "./pages/ETicket";
import Regis from "./pages/Registrasi";
import Login from "./pages/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/Regis" element={<Regis />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/OTPages" element={<OTPages />} />
      <Route path="/OpenPage" element={<OpenPages />} />
      <Route path="/MapDirection" element={<MapDirection />} />
      <Route path="/ReservationContact" element={<ReservationContact />} />
      <Route path="/Blog" element={<BlogBerita />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Hotel" element={<Hotel />} />
      <Route path="/HotelDetail" element={<HotelDetail />} />
      <Route path="/BlogEvent" element={<BlogEvent />} />
      <Route path="/BlogArtikel" element={<BlogArtikel />} />
      <Route path="/PageBerita" element={<PageBerita />} />
      <Route path="/PageArtikel" element={<PageArtikel />} />
      <Route path="/DokumentasiKegiatan" element={<DokumentasiKegiatan />} />
      <Route path="/Restoran" element={<Restoran />} />
      <Route path="/RestoranDetail" element={<RestoDetail />} />
      <Route path="/DetailPemesanan" element={<DetailPemesanan />} />
      <Route path="/Pembayaran" element={<Pembayaran />} />
      <Route path="/ETicket" element={<ETicket />} />
    </Routes>

  );
}

export default App;