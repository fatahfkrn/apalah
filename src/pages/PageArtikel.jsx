/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const PageArtikel = () => {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <div className="flex overflow-hidden relative flex-col items-center px-16 pt-20 w-full font-black text-white leading-[150%] min-h-[525px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative z-10 flex-col items-center mt-20 max-w-full w-[767px] max-md:mt-10">
          <div className="self-stretch text-5xl max-md:max-w-full max-md:text-4xl">
            BLOG TERBARU <span className="">BULUKUMBA</span>
          </div>
          <div className="mt-1.5 text-lg font-bold max-md:max-w-full">
            Temukan Kabar Terbaru Dari Destinasi Wisatamu
          </div>
          <div className="flex gap-5 justify-between mt-44 text-xl text-center max-md:flex-wrap max-md:mt-10">
            <div className="justify-center px-12 py-8 bg-orange-500 rounded-xl border border-orange-500 border-solid max-md:px-5">
              <Link to='/Blog'>Berita{" "}</Link>
            </div>
            <div className="justify-center px-11 py-8 text-orange-500 whitespace-nowrap bg-white rounded-xl border border-white border-solid max-md:px-5">
              Artikel
            </div>
            <div className="justify-center px-12 py-8 whitespace-nowrap bg-orange-500 rounded-xl border border-orange-500 border-solid max-md:px-5">
              <Link to='/BlogEvent'>Event</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start self-center mt-7 w-full text-base font-semibold leading-6 max-w-[1216px] text-neutral-400 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-center w-full font-light max-w-[1016px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3fbb286c62f3ecaa3bb79150bd8779a8494a8b34713c8ea830ad6999f94b1cfc?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbb286c62f3ecaa3bb79150bd8779a8494a8b34713c8ea830ad6999f94b1cfc?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbb286c62f3ecaa3bb79150bd8779a8494a8b34713c8ea830ad6999f94b1cfc?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbb286c62f3ecaa3bb79150bd8779a8494a8b34713c8ea830ad6999f94b1cfc?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbb286c62f3ecaa3bb79150bd8779a8494a8b34713c8ea830ad6999f94b1cfc?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbb286c62f3ecaa3bb79150bd8779a8494a8b34713c8ea830ad6999f94b1cfc?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbb286c62f3ecaa3bb79150bd8779a8494a8b34713c8ea830ad6999f94b1cfc?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbb286c62f3ecaa3bb79150bd8779a8494a8b34713c8ea830ad6999f94b1cfc?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
              className="w-full shadow-sm aspect-[1.37] max-md:max-w-full"
            />
            <div className="self-center mt-4 italic">
              Pantai Bidadari - Jovita 2023
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/978e96ce2fcfeb3cce0ea2e02d45eeb3ccd36799b50839ff9c192c87e3b9658a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
            className="shrink-0 self-start mt-5 aspect-square w-[50px]"
          />
        </div>
        <div className="self-stretch mt-16 text-3xl font-black text-orange-500 max-md:mt-10 max-md:max-w-full">
          Menelusuri Kecantikan Pantai Bidadari Bersama Kak Jovita
        </div>
        <div className="flex gap-5 justify-between mt-11 max-md:flex-wrap max-md:mt-10">
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d54344eaa30240f6eeecf78e3bdfcaba2589d0f1645f08e96425d2b42cfa6f9d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
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
        <div className="mt-4 ml-3 leading-6 text-justify text-black max-md:max-w-full">
          Pantai Bidadari, salah satu permata tersembunyi di Sulawesi Selatan,
          semakin populer berkat kunjungan selebriti dan influencer pariwisata,
          Kak Jovita. Dikenal dengan pasir putihnya yang halus dan air laut yang
          jernih, Pantai Bidadari menawarkan panorama alam yang menakjubkan dan
          suasana yang menenangkan. Kak Jovita, yang terkenal dengan petualangan
          wisatanya, berbagi pengalaman serunya menjelajahi keindahan pantai ini
          melalui media sosial, menginspirasi banyak pengikutnya untuk
          mengunjungi tempat ini.
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7f7a5d1ce2e3054b8b0780ab245f5bbf97ba3d91e8423099405cf1e5c3d0aa96?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7a5d1ce2e3054b8b0780ab245f5bbf97ba3d91e8423099405cf1e5c3d0aa96?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7a5d1ce2e3054b8b0780ab245f5bbf97ba3d91e8423099405cf1e5c3d0aa96?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7a5d1ce2e3054b8b0780ab245f5bbf97ba3d91e8423099405cf1e5c3d0aa96?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7a5d1ce2e3054b8b0780ab245f5bbf97ba3d91e8423099405cf1e5c3d0aa96?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7a5d1ce2e3054b8b0780ab245f5bbf97ba3d91e8423099405cf1e5c3d0aa96?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7a5d1ce2e3054b8b0780ab245f5bbf97ba3d91e8423099405cf1e5c3d0aa96?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7a5d1ce2e3054b8b0780ab245f5bbf97ba3d91e8423099405cf1e5c3d0aa96?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
          className="mt-5 ml-28 max-w-full shadow-sm aspect-[1.72] w-[820px]"
        />
        <div className="self-center mt-5 italic font-light">
          Potret Petualang di Bulukumba
        </div>
        <div className="mt-10 ml-3 leading-6 text-justify text-black max-md:max-w-full">
          Dalam perjalanan kali ini, Kak Jovita tidak hanya menikmati keindahan
          alam Pantai Bidadari, tetapi juga berinteraksi dengan masyarakat
          setempat dan memperkenalkan budaya serta tradisi mereka. Ia
          mengunjungi beberapa spot terbaik untuk berfoto, mencicipi kuliner
          khas daerah, dan belajar tentang upaya konservasi lingkungan yang
          dilakukan oleh komunitas lokal. Pengalaman Kak Jovita di Pantai
          Bidadari menggambarkan betapa luar biasanya potensi wisata alam di
          Sulawesi Selatan, sekaligus mengajak lebih banyak wisatawan untuk ikut
          menjaga dan melestarikan keindahan alam Indonesia.
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default PageArtikel;

