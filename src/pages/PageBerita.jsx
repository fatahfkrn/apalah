/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCarousel from "../components/BlogCarousel";
// import { Link } from "react-router-dom";

const PageBerita = () => {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <BlogCarousel />
      <div className="flex flex-col items-start self-center mt-7 w-full text-base font-semibold leading-6 max-w-[1216px] text-neutral-400 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-center w-full font-light max-w-[1016px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7f5ae0c0ac1db8c9617f7a9df320d77741fcbd609d3673aa0f23c9168a922fd2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f5ae0c0ac1db8c9617f7a9df320d77741fcbd609d3673aa0f23c9168a922fd2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f5ae0c0ac1db8c9617f7a9df320d77741fcbd609d3673aa0f23c9168a922fd2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f5ae0c0ac1db8c9617f7a9df320d77741fcbd609d3673aa0f23c9168a922fd2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f5ae0c0ac1db8c9617f7a9df320d77741fcbd609d3673aa0f23c9168a922fd2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f5ae0c0ac1db8c9617f7a9df320d77741fcbd609d3673aa0f23c9168a922fd2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f5ae0c0ac1db8c9617f7a9df320d77741fcbd609d3673aa0f23c9168a922fd2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f5ae0c0ac1db8c9617f7a9df320d77741fcbd609d3673aa0f23c9168a922fd2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
              className="w-full shadow-sm aspect-[1.37] max-md:max-w-full"
            />
            <div className="self-center mt-4 italic">
              Destinasi Wisata Terbaik 2022-2024
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b75a2d3927e16aa210000675d7fef09239e29b1b9ca10d285c501c34973ee97b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
            className="shrink-0 self-start mt-5 aspect-square w-[50px]"
          />
        </div>
        <div className="self-stretch mt-11 text-3xl font-black leading-10 text-orange-500 max-md:mt-10 max-md:max-w-full">
          Bulukumba Dinobatkan Menjadi Destinasi Wisata Terbaik Di Sulawesi
          Selatan
        </div>
        <div className="flex gap-5 justify-between mt-5 max-md:flex-wrap">
          <div className="flex gap-2 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7838bc9a24fac139ab3dee2413a3d693fb18302e9f487dbeacafbf7dbfa918de?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
              className="shrink-0 w-5 aspect-square"
            />
            <div className="flex-auto my-auto">13 Desember 2023</div>
          </div>
          <div className="flex gap-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e0e880b706ef438dbfe6e56d9a3d6259d6d82b51a799fbf7efd7be95130ff15?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="my-auto">9:00 WIB</div>
          </div>
          <div className="flex gap-px">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b21639f07a8b88a2a87d71bc2a706bec77be4d8e49d53844b6c388a9a07d4954?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="flex-auto my-auto">Events / Update</div>
          </div>
        </div>
        <div className="mt-7 ml-3 leading-6 text-justify text-black max-md:max-w-full">
          Bulukumba diakui sebagai destinasi wisata terbaik di Sulawesi Selatan,
          memperoleh penghargaan yang mengukuhkan posisinya dalam industri
          pariwisata lokal. Keindahan alamnya yang menakjubkan dan beragamnya
          atraksi wisata yang ditawarkan telah menarik perhatian wisatawan dari
          dalam dan luar negeri, menjadikannya sebagai tujuan yang sangat
          diminati bagi para pelancong yang ingin mengeksplorasi kekayaan budaya
          dan alam Sulawesi Selatan.
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ebae8dfcb3e60a711f1e833f1d6f7dd27ccf16bccb436ca0ea38ea202eb76ea?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ebae8dfcb3e60a711f1e833f1d6f7dd27ccf16bccb436ca0ea38ea202eb76ea?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ebae8dfcb3e60a711f1e833f1d6f7dd27ccf16bccb436ca0ea38ea202eb76ea?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ebae8dfcb3e60a711f1e833f1d6f7dd27ccf16bccb436ca0ea38ea202eb76ea?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ebae8dfcb3e60a711f1e833f1d6f7dd27ccf16bccb436ca0ea38ea202eb76ea?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ebae8dfcb3e60a711f1e833f1d6f7dd27ccf16bccb436ca0ea38ea202eb76ea?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ebae8dfcb3e60a711f1e833f1d6f7dd27ccf16bccb436ca0ea38ea202eb76ea?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ebae8dfcb3e60a711f1e833f1d6f7dd27ccf16bccb436ca0ea38ea202eb76ea?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
          className="mt-8 ml-28 max-w-full shadow-sm aspect-[1.72] w-[820px]"
        />
        <div className="self-center mt-4 italic font-light">
          Aria Wardana (2024)
        </div>
        <div className="mt-11 ml-3 leading-6 text-justify text-black max-md:mt-10 max-md:max-w-full">
          Penghargaan ini diberikan berdasarkan berbagai kriteria, termasuk
          pengelolaan destinasi, fasilitas wisata, dan keberlanjutan lingkungan.
          Bulukumba dikenal dengan pantai-pantainya yang mempesona seperti
          Pantai Tanjung Bira, serta warisan budaya yang kaya, seperti perahu
          phinisi yang legendaris. Upaya pemerintah daerah dalam meningkatkan
          infrastruktur dan promosi pariwisata juga berperan penting dalam
          pencapaian ini. Dengan pencapaian ini, Bulukumba diharapkan dapat
          semakin meningkatkan jumlah kunjungan wisatawan dan memberikan dampak
          positif bagi perekonomian lokal.
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default PageBerita;