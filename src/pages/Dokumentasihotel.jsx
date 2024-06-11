/* eslint-disable no-unused-vars */
import React from "react";
import { FilterDokumentasi } from "./FilterDokumentasi";
import { Language } from "./Language";
import { Layanan } from "./Layanan";
import { SearchBar } from "./SearchBar";
import "./dokumentasihotel.css";

export const DokumentasiKegiatan = () => {
  return (
    <div className="dokumentasi-kegiatan">
      <div className="div-2">
        <footer className="footer">
          <div className="overlap">
            <div className="text-wrapper-9">INFO LEBIH LANJUT</div>
            <p className="p">Jangan Ragu Untuk Melihat Akun Media Sosial Kami.</p>
          </div>
          <img className="skill-icons" alt="Skill icons" src="skill-icons-instagram.svg" />
          <img className="logos-whatsapp-icon" alt="Logos whatsapp icon" src="logos-whatsapp-icon.svg" />
          <img className="logos-facebook" alt="Logos facebook" src="logos-facebook.svg" />
          <img className="streamline-web" alt="Streamline web" src="streamline-web.svg" />
          <div className="group">
            <div className="overlap-group-3">
              <p className="text-wrapper-10">2024 Discover Bulukumba. All Rights Reserved</p>
              <img className="mdi-copyright" alt="Mdi copyright" src="mdi-copyright.svg" />
            </div>
          </div>
          <img className="mage-tiktok-circle" alt="Mage tiktok circle" src="mage-tiktok-circle.svg" />
        </footer>
        <div className="text-wrapper-11">Dokumentasi Kegiatan</div>
        <img className="icon-park-solid-back" alt="Icon park solid back" src="icon-park-solid-back.svg" />
        <div className="text-wrapper-12">Galeri Keseruan Discover Bulukumba</div>
        <img className="element" alt="Element" src="2.png" />
        <img className="element-2" alt="Element" src="3.png" />
        <img className="element-3" alt="Element" src="4.png" />
        <img className="element-4" alt="Element" src="5.png" />
        <img className="element-5" alt="Element" src="6.png" />
        <img className="element-6" alt="Element" src="7.png" />
        <img className="element-7" alt="Element" src="8.png" />
        <img className="element-8" alt="Element" src="9.png" />
        <img className="element-9" alt="Element" src="10.png" />
        <FilterDokumentasi className="filter-dokumentasi-instance" polygon="polygon-3-3.svg" property1="variant-4" />
        <div className="header">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-4">
              <img className="bulukumba" alt="Bulukumba" src="bulukumba-logo1.png" />
              <p className="discoverbulukumba">
                <span className="span">Discover</span>
                <span className="text-wrapper-13">Bulukumba.Com</span>
              </p>
            </div>
          </div>
          <div className="text-wrapper-14">Beranda</div>
          <div className="text-wrapper-15">Blog</div>
          <div className="text-wrapper-16">Profil</div>
          <SearchBar className="search-bar" />
          <img className="logos-whatsapp-icon-2" alt="Logos whatsapp icon" src="image.svg" />
          <Layanan className="layanan-instance" polygon="polygon-2-5.svg" property1="default" />
          <Language className="language-instance" polygon="polygon-2-6.svg" property1="default" />
          <img className="skill-icons-2" alt="Skill icons" src="skill-icons-instagram-2.svg" />
        </div>
        <img className="logos-whatsapp-icon-3" alt="Logos whatsapp icon" src="logos-whatsapp-icon-2.svg" />
      </div>
    </div>
  );
};
