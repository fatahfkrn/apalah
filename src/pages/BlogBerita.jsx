/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCarousel from "../components/BlogCarousel";
import { Link } from "react-router-dom";

const BlogBerita = () => {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <BlogCarousel />
      <div className="flex flex-col self-center mt-12 w-full max-w-[1125px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow justify-center text-sm font-extrabold aspect-[0.81] max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col px-5 pt-20 pb-10 rounded-3xl max-md:pr-5">
                    <div className="mt-16 leading-5 text-white max-md:mt-10">
                      Bulukumba Dinobatkan Menjadi
                      <br />
                      Destinasi Wisata Terbaik Di Sulsel
                    </div>
                    <div className="justify-center self-center px-3 py-2.5 mt-16 text-orange-500 whitespace-nowrap bg-white rounded-xl shadow-sm leading-[150%] max-md:mt-10">
                      <Link to='/PageBerita'>Selengkapnya</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow justify-center text-sm font-extrabold aspect-[0.81] max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col px-5 pt-20 pb-10 rounded-3xl">
                    <div className="mt-16 leading-5 text-white max-md:mt-10">
                      Ada Penemuan Kuno Disalah satu
                      <br />
                      Pantai Yang Ada Di Bulukumba
                    </div>
                    <div className="justify-center self-center px-3 py-2.5 mt-16 text-orange-500 whitespace-nowrap bg-white rounded-xl shadow-sm leading-[150%] max-md:mt-10">
                      Selengkapnya
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col grow justify-center text-sm font-extrabold aspect-[0.81] max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col px-5 pt-20 pb-10 rounded-3xl">
                    <div className="mt-16 leading-5 text-white max-md:mt-10">
                      Bulukumba Borong 3 Penghargaan
                      <br />
                      Sebagai Destinasi Terbersih 2025
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/358b5ed196d5cdbfd4a89b0347fb4ea5ebbbd607c5eeede95f6e353e63fe2718?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
            className="shrink-0 self-start aspect-square w-[50px]"
          />
        </div>
        <div className="mt-12 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center text-sm font-extrabold aspect-[0.81] max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/25a34a8ba4889bb612384772ac4e83901d3c100b46cda3bd4a34ffb4f5bec3c4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col px-5 pt-20 pb-10 rounded-3xl max-md:pr-5">
                  <div className="mt-16 leading-5 text-white max-md:mt-10">
                    Bulukumba Dinobatkan Menjadi
                    <br />
                    Destinasi Wisata Terbaik Di Sulsel
                  </div>
                  <div className="justify-center self-center px-3 py-2.5 mt-16 text-orange-500 whitespace-nowrap bg-white rounded-xl shadow-sm leading-[150%] max-md:mt-10">
                    Selengkapnya
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center text-sm font-extrabold aspect-[0.81] max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c0af75a13aa2cec9997e8dbdff08a64c8c7f869532b57806d4ee38f68b6e49c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col px-5 pt-20 pb-10 rounded-3xl">
                  <div className="mt-16 leading-5 text-white max-md:mt-10">
                    Ada Penemuan Kuno Disalah satu
                    <br />
                    Pantai Yang Ada Di Bulukumba
                  </div>
                  <div className="justify-center self-center px-3 py-2.5 mt-16 text-orange-500 whitespace-nowrap bg-white rounded-xl shadow-sm leading-[150%] max-md:mt-10">
                    Selengkapnya
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center text-sm font-extrabold aspect-[0.81] max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe51e9d4b2a6952e975a02ec0fd892ff18a235dd347ff5596cdd7de4e4949649?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col px-5 pt-20 pb-10 rounded-3xl">
                  <div className="mt-16 leading-5 text-white max-md:mt-10">
                    Bulukumba Borong 3 Penghargaan
                    <br />
                    Sebagai Destinasi Terbersih 2025
                  </div>
                  <div className="justify-center self-center px-3 py-2.5 mt-16 text-orange-500 whitespace-nowrap bg-white rounded-xl shadow-sm leading-[150%] max-md:mt-10">
                    Selengkapnya
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 self-center mt-16 text-sm font-bold leading-5 text-center text-gray-800 whitespace-nowrap max-md:mt-10">
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
export default BlogBerita;

