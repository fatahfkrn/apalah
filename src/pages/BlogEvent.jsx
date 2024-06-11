/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const BlogEvent = () => {
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
            <div className="justify-center px-11 py-8 whitespace-nowrap bg-orange-500 rounded-xl border border-orange-500 border-solid max-md:px-5">
            <Link to='/BlogArtikel'>Artikel</Link>
            </div>
            <div className="justify-center px-12 py-8 text-orange-500 whitespace-nowrap bg-white rounded-xl border border-white border-solid max-md:px-5">
              Event
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center mt-12 w-full max-w-[1125px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow justify-center text-sm font-extrabold aspect-[0.81] max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4a6b9c35e7ea73b40db697e33a3561e5d545247138c03c7d9d235ad7572bd70a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a6b9c35e7ea73b40db697e33a3561e5d545247138c03c7d9d235ad7572bd70a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a6b9c35e7ea73b40db697e33a3561e5d545247138c03c7d9d235ad7572bd70a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a6b9c35e7ea73b40db697e33a3561e5d545247138c03c7d9d235ad7572bd70a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a6b9c35e7ea73b40db697e33a3561e5d545247138c03c7d9d235ad7572bd70a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a6b9c35e7ea73b40db697e33a3561e5d545247138c03c7d9d235ad7572bd70a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a6b9c35e7ea73b40db697e33a3561e5d545247138c03c7d9d235ad7572bd70a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a6b9c35e7ea73b40db697e33a3561e5d545247138c03c7d9d235ad7572bd70a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col px-5 pt-20 pb-10 rounded-3xl max-md:pr-5">
                    <div className="mt-16 leading-5 text-white max-md:mt-10">
                      Festival Pinis Bersama Walikota
                      <br />
                      Bulukumba 2022
                    </div>
                    <div className="justify-center self-center px-3 py-2.5 mt-16 text-orange-500 whitespace-nowrap bg-white rounded-xl shadow-sm leading-[150%] max-md:mt-10">
                      Selengkapnya
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow justify-center text-sm font-extrabold leading-5 aspect-[0.81] max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d510fe8a4dbadbc0c70936f76e5a8bf90d414ed66523e7f6bb4ae2cb63a9c6d5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d510fe8a4dbadbc0c70936f76e5a8bf90d414ed66523e7f6bb4ae2cb63a9c6d5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d510fe8a4dbadbc0c70936f76e5a8bf90d414ed66523e7f6bb4ae2cb63a9c6d5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d510fe8a4dbadbc0c70936f76e5a8bf90d414ed66523e7f6bb4ae2cb63a9c6d5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d510fe8a4dbadbc0c70936f76e5a8bf90d414ed66523e7f6bb4ae2cb63a9c6d5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d510fe8a4dbadbc0c70936f76e5a8bf90d414ed66523e7f6bb4ae2cb63a9c6d5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d510fe8a4dbadbc0c70936f76e5a8bf90d414ed66523e7f6bb4ae2cb63a9c6d5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d510fe8a4dbadbc0c70936f76e5a8bf90d414ed66523e7f6bb4ae2cb63a9c6d5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col pt-20 pr-20 pb-10 pl-5 rounded-3xl max-md:pr-5">
                    <div className="self-start mt-16 text-white max-md:mt-10">
                      Festival Budaya
                    </div>
                    <div className="justify-center self-end px-3 py-2.5 mt-24 text-orange-500 whitespace-nowrap bg-white rounded-xl shadow-sm max-md:mt-10">
                      Selengkapnya
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow justify-center text-sm font-extrabold aspect-[0.81] max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2340c3d754b65214c7701848cdfef3995211217f2643d38002e3da0b20c707ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2340c3d754b65214c7701848cdfef3995211217f2643d38002e3da0b20c707ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2340c3d754b65214c7701848cdfef3995211217f2643d38002e3da0b20c707ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2340c3d754b65214c7701848cdfef3995211217f2643d38002e3da0b20c707ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2340c3d754b65214c7701848cdfef3995211217f2643d38002e3da0b20c707ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2340c3d754b65214c7701848cdfef3995211217f2643d38002e3da0b20c707ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2340c3d754b65214c7701848cdfef3995211217f2643d38002e3da0b20c707ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2340c3d754b65214c7701848cdfef3995211217f2643d38002e3da0b20c707ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col px-5 pt-20 pb-10 rounded-3xl max-md:pr-5">
                    <div className="mt-16 leading-5 text-white max-md:mt-10">
                      15 Cabang Lomba Diadakan Pada
                      <br />
                      Acara 63 Tahun Bulukumba
                    </div>
                    <div className="justify-center self-center px-3 py-2.5 mt-16 text-orange-500 whitespace-nowrap bg-white rounded-xl shadow-sm leading-[150%] max-md:mt-10">
                      Selengkapnya
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c325bb5ecee2993de5055963a5da3a89e7f0bbc6f251c68b3f126486e4eb99a0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
            className="shrink-0 self-start aspect-square w-[50px]"
          />
        </div>
        <div className="flex gap-2 self-center mt-14 text-sm font-bold leading-5 text-center text-gray-800 whitespace-nowrap max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f102351a706c8f276770cee7c343b6328fb2b79d6972dec029d6173af2b2c0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
            className="shrink-0 w-8 aspect-square"
          />
          <div className="flex flex-col justify-center text-violet-700">
            <div className="justify-center items-center px-3.5 w-8 h-8 bg-white rounded border border-violet-700 border-solid">
              1
            </div>
          </div>
          <div className="justify-center items-center px-3 w-8 h-8 bg-white rounded border border-solid border-zinc-200">
            2
          </div>
          <div className="justify-center items-center px-3 w-8 h-8 bg-white rounded border border-solid border-zinc-200">
            3
          </div>
          <div className="justify-center items-center px-3 w-8 h-8 bg-white rounded border border-solid border-zinc-200">
            ...
          </div>
          <div className="justify-center items-center px-2 w-8 h-8 bg-white rounded border border-solid border-zinc-200">
            10
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23876af9ad4b0d6ee5ea49ecba4eb51acef10ffc82ea74800fb87750a5c75f6f?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
            className="shrink-0 w-8 border border-solid aspect-square border-zinc-200"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogEvent;
