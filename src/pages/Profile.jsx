/* eslint-disable no-unused-vars */
/* eelelint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full text-white leading-[150%] min-h-[525px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2904668d711cf1b956d1c14fe4572e8b3306b2c4e33f33a8d4752dd35e463afd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2904668d711cf1b956d1c14fe4572e8b3306b2c4e33f33a8d4752dd35e463afd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2904668d711cf1b956d1c14fe4572e8b3306b2c4e33f33a8d4752dd35e463afd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2904668d711cf1b956d1c14fe4572e8b3306b2c4e33f33a8d4752dd35e463afd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2904668d711cf1b956d1c14fe4572e8b3306b2c4e33f33a8d4752dd35e463afd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2904668d711cf1b956d1c14fe4572e8b3306b2c4e33f33a8d4752dd35e463afd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2904668d711cf1b956d1c14fe4572e8b3306b2c4e33f33a8d4752dd35e463afd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2904668d711cf1b956d1c14fe4572e8b3306b2c4e33f33a8d4752dd35e463afd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mt-28 mb-24 max-md:my-10">
          <div className="text-5xl font-black max-md:text-4xl">PROFIL KAMI</div>
          <div className="mt-1 text-lg font-bold">
            10 Tahun Menemani Wisata Dalam Negeri
          </div>
        </div>
      </div>
      <div className="pt-11 pr-7 pb-16 pl-20 w-full bg-zinc-300 bg-opacity-20 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-4 px-11 py-2.5 text-3xl font-black leading-10 text-indigo-500 bg-white rounded-3xl border border-indigo-500 border-solid shadow-sm max-md:flex-wrap max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8bd012f503f781ab90011a3b3f98c6f166be99e0b4c373e35432cbb8468586f9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd012f503f781ab90011a3b3f98c6f166be99e0b4c373e35432cbb8468586f9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd012f503f781ab90011a3b3f98c6f166be99e0b4c373e35432cbb8468586f9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd012f503f781ab90011a3b3f98c6f166be99e0b4c373e35432cbb8468586f9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd012f503f781ab90011a3b3f98c6f166be99e0b4c373e35432cbb8468586f9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd012f503f781ab90011a3b3f98c6f166be99e0b4c373e35432cbb8468586f9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd012f503f781ab90011a3b3f98c6f166be99e0b4c373e35432cbb8468586f9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bd012f503f781ab90011a3b3f98c6f166be99e0b4c373e35432cbb8468586f9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                  className="shrink-0 aspect-[1.45] w-[99px]"
                />
                <div className="flex-auto my-auto">
                  <span className="font-bold text-orange-500">Discover</span>
                  <span className="font-bold text-indigo-500">
                    Bulukumba.Com
                  </span>
                </div>
              </div>
              <div className="mt-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="overflow-hidden relative flex-col grow px-7 pt-24 pb-3 text-lg leading-6 text-white border-4 border-white border-solid aspect-[1.47] max-md:px-5 max-md:mt-7">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ac32ed389c2836e223f35404ada749bbf9573696220a56395b5bbd93f4b646fa?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac32ed389c2836e223f35404ada749bbf9573696220a56395b5bbd93f4b646fa?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac32ed389c2836e223f35404ada749bbf9573696220a56395b5bbd93f4b646fa?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac32ed389c2836e223f35404ada749bbf9573696220a56395b5bbd93f4b646fa?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac32ed389c2836e223f35404ada749bbf9573696220a56395b5bbd93f4b646fa?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac32ed389c2836e223f35404ada749bbf9573696220a56395b5bbd93f4b646fa?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac32ed389c2836e223f35404ada749bbf9573696220a56395b5bbd93f4b646fa?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac32ed389c2836e223f35404ada749bbf9573696220a56395b5bbd93f4b646fa?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="object-cover absolute inset-0 size-full"
                      />
                      Pantai Tanjung Bira
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="overflow-hidden relative flex-col self-stretch px-9 pt-24 pb-3 my-auto text-lg leading-6 text-white border-4 border-white border-solid shadow-sm aspect-[1.49] max-md:px-5 max-md:mt-8">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/540ae6bc4ae70a98ff131e37a3ca192d92b1826820f055aaf005f37554f6e983?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/540ae6bc4ae70a98ff131e37a3ca192d92b1826820f055aaf005f37554f6e983?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/540ae6bc4ae70a98ff131e37a3ca192d92b1826820f055aaf005f37554f6e983?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/540ae6bc4ae70a98ff131e37a3ca192d92b1826820f055aaf005f37554f6e983?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/540ae6bc4ae70a98ff131e37a3ca192d92b1826820f055aaf005f37554f6e983?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/540ae6bc4ae70a98ff131e37a3ca192d92b1826820f055aaf005f37554f6e983?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/540ae6bc4ae70a98ff131e37a3ca192d92b1826820f055aaf005f37554f6e983?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/540ae6bc4ae70a98ff131e37a3ca192d92b1826820f055aaf005f37554f6e983?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="object-cover absolute inset-0 size-full"
                      />
                      Pantai Pusahelu
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="overflow-hidden relative flex-col self-stretch px-10 pt-24 pb-3 my-auto text-lg leading-6 text-white border-4 border-white border-solid shadow-sm aspect-[1.5] max-md:px-5 max-md:mt-8">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/92483d7540d798bbe784f489a59655f0322120c0dee88d1e3c66ea0fb43a4309?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/92483d7540d798bbe784f489a59655f0322120c0dee88d1e3c66ea0fb43a4309?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92483d7540d798bbe784f489a59655f0322120c0dee88d1e3c66ea0fb43a4309?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/92483d7540d798bbe784f489a59655f0322120c0dee88d1e3c66ea0fb43a4309?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/92483d7540d798bbe784f489a59655f0322120c0dee88d1e3c66ea0fb43a4309?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92483d7540d798bbe784f489a59655f0322120c0dee88d1e3c66ea0fb43a4309?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/92483d7540d798bbe784f489a59655f0322120c0dee88d1e3c66ea0fb43a4309?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/92483d7540d798bbe784f489a59655f0322120c0dee88d1e3c66ea0fb43a4309?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="object-cover absolute inset-0 size-full"
                      />
                      Pantai Kaluku
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="overflow-hidden relative flex-col grow px-8 pt-24 pb-2 text-lg leading-6 text-white border-4 border-white border-solid shadow-sm aspect-[1.49] max-md:px-5 max-md:mt-7">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/06bc7d276f81c66c8ed457a6dc1d31863fdb02c886ace2b5ed6f151355930e2f?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/06bc7d276f81c66c8ed457a6dc1d31863fdb02c886ace2b5ed6f151355930e2f?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06bc7d276f81c66c8ed457a6dc1d31863fdb02c886ace2b5ed6f151355930e2f?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/06bc7d276f81c66c8ed457a6dc1d31863fdb02c886ace2b5ed6f151355930e2f?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/06bc7d276f81c66c8ed457a6dc1d31863fdb02c886ace2b5ed6f151355930e2f?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06bc7d276f81c66c8ed457a6dc1d31863fdb02c886ace2b5ed6f151355930e2f?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/06bc7d276f81c66c8ed457a6dc1d31863fdb02c886ace2b5ed6f151355930e2f?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/06bc7d276f81c66c8ed457a6dc1d31863fdb02c886ace2b5ed6f151355930e2f?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="object-cover absolute inset-0 size-full"
                      />
                      Pantai Ujung Trio
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="overflow-hidden relative flex-col grow px-8 pt-24 pb-2 text-lg leading-6 text-white border-4 border-white border-solid shadow-sm aspect-[1.5] max-md:px-5 max-md:mt-7">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/db55d43990817b2ff51a6636631c5aab4d9c9403731a2a906e16d9d2a3c1bae3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/db55d43990817b2ff51a6636631c5aab4d9c9403731a2a906e16d9d2a3c1bae3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db55d43990817b2ff51a6636631c5aab4d9c9403731a2a906e16d9d2a3c1bae3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/db55d43990817b2ff51a6636631c5aab4d9c9403731a2a906e16d9d2a3c1bae3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/db55d43990817b2ff51a6636631c5aab4d9c9403731a2a906e16d9d2a3c1bae3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/db55d43990817b2ff51a6636631c5aab4d9c9403731a2a906e16d9d2a3c1bae3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/db55d43990817b2ff51a6636631c5aab4d9c9403731a2a906e16d9d2a3c1bae3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/db55d43990817b2ff51a6636631c5aab4d9c9403731a2a906e16d9d2a3c1bae3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="object-cover absolute inset-0 size-full"
                      />
                      Pantai Samboang
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="overflow-hidden relative flex-col grow px-6 pt-24 pb-2 text-lg leading-6 text-white border-4 border-white border-solid shadow-sm aspect-[1.5] max-md:px-5 max-md:mt-7">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0b7f13538e584551392dce97a32ca90557c3ab8a3f194ac4450cbe3bfa1ae3b2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7f13538e584551392dce97a32ca90557c3ab8a3f194ac4450cbe3bfa1ae3b2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7f13538e584551392dce97a32ca90557c3ab8a3f194ac4450cbe3bfa1ae3b2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7f13538e584551392dce97a32ca90557c3ab8a3f194ac4450cbe3bfa1ae3b2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7f13538e584551392dce97a32ca90557c3ab8a3f194ac4450cbe3bfa1ae3b2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7f13538e584551392dce97a32ca90557c3ab8a3f194ac4450cbe3bfa1ae3b2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7f13538e584551392dce97a32ca90557c3ab8a3f194ac4450cbe3bfa1ae3b2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b7f13538e584551392dce97a32ca90557c3ab8a3f194ac4450cbe3bfa1ae3b2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="object-cover absolute inset-0 size-full"
                      />
                      Pantai Liukang Loe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex gap-0 items-start mt-1.5 text-xl leading-7 text-justify text-black max-md:flex-wrap max-md:mt-10">
              <div className="flex-auto self-end mt-28 max-md:mt-10 max-md:max-w-full">
                Discover Bulukumba merupakan perusahaan penyedia layanan
                petualangan alam terkemuka yang berbasis di Bogor. Kami secara
                khusus mengkhususkan diri dalam memberikan pengalaman tak
                terlupakan melalui berbagai paket seru, termasuk rafting,
                paintball, offroad, outbound, dan akomodasi di hotel.
                <br />
                Tim kami terdiri dari para profesional yang berpengalaman dan
                ahli di bidangnya masing-masing. Kami bangga dapat memberikan
                pengalaman petualangan yang sesuai dengan ekspektasi Anda dan
                memberikan kenangan tak terlupakan di tengah keindahan alam yang
                memukau. Bergabunglah dengan kami di Green Adventure dan temukan
                petualangan sejati yang akan membuat Anda terinspirasi dan
                terpukau!
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7bba8f32832caeb5f77e39d1decc8d8c05bc4939dce41f75815fa9cf3924610?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                className="shrink-0 self-start aspect-square w-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-8 text-6xl font-black text-center text-orange-500 border-white border-solid border-[3px] leading-[90px] max-md:max-w-full max-md:text-4xl">
        Tiga Pilar Kami
      </div>
      <div className="self-center px-5 mt-11 w-full max-w-[1168px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-8 pt-7 w-full border-orange-500 border-solid shadow-sm bg-zinc-300 bg-opacity-30 border-[3px] rounded-[35px] max-md:px-5 max-md:mt-10">
              <div className="text-3xl font-bold leading-10 text-indigo-500 border-2 border-white border-solid">
                Harga Termurah
              </div>
              <div className="mt-3 text-xs font-medium leading-5 text-neutral-400">
                Kami memberikan harga paket wisata dengan harga yang terjangkau
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e09307dccf220eef590601b3321021f018ab762f6f724c6e3b4b0f3bea3e2d0b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                className="self-center mt-7 w-40 max-w-full aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e72ca95a48629ccc8d6ddb066373fdd87b82ed08167bff972c1366586b1dc295?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                className="z-10 self-end aspect-[1.2] w-[84px]"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-8 py-7 w-full border-orange-500 border-solid shadow-sm bg-zinc-300 bg-opacity-30 border-[3px] rounded-[35px] max-md:px-5 max-md:mt-10">
              <div className="text-3xl font-bold leading-10 text-indigo-500 border-2 border-white border-solid">
                Terpercaya
              </div>
              <div className="self-stretch mt-3 text-xs font-medium leading-5 text-neutral-400">
                Sudah banyak dipercaya oleh banyak perusahaan ataupun individu
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e6b3767fcbb551fc924fa74365852bbb3b6bf5c8cd1bfd178cdeef0c5dba6b7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                className="mt-7 max-w-full aspect-square w-[172px]"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-7 py-7 w-full border-orange-500 border-solid shadow-sm bg-zinc-300 bg-opacity-30 border-[3px] rounded-[35px] max-md:px-5 max-md:mt-10">
              <div className="text-3xl font-bold leading-10 text-indigo-500 border-2 border-white border-solid">
                Berpengalaman
              </div>
              <div className="mt-3 text-xs font-medium leading-5 text-neutral-400">
                Didukung oleh tim kami yang sudah berpengalaman.
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/04eae1f936e3fe7d09fa57e50dcd220fa14177688e3d9697eab0803333f63712?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                className="self-center mt-7 max-w-full aspect-square w-[174px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center px-16 pt-2.5 pb-16 mt-24 w-full shadow-sm bg-zinc-300 bg-opacity-20 max-w-[1220px] rounded-[69px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[945px]">
          <div className="self-center text-6xl font-black text-center text-orange-500 border-white border-solid border-[3px] leading-[90px] max-md:max-w-full max-md:text-4xl">
            Kami Bagian Dari
          </div>
          <div className="mt-7 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4d0214ae6acc65fc50a9dd2d259d2221c90a021af9c03ff74913787c992f0c6e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d0214ae6acc65fc50a9dd2d259d2221c90a021af9c03ff74913787c992f0c6e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d0214ae6acc65fc50a9dd2d259d2221c90a021af9c03ff74913787c992f0c6e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d0214ae6acc65fc50a9dd2d259d2221c90a021af9c03ff74913787c992f0c6e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d0214ae6acc65fc50a9dd2d259d2221c90a021af9c03ff74913787c992f0c6e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d0214ae6acc65fc50a9dd2d259d2221c90a021af9c03ff74913787c992f0c6e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d0214ae6acc65fc50a9dd2d259d2221c90a021af9c03ff74913787c992f0c6e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4d0214ae6acc65fc50a9dd2d259d2221c90a021af9c03ff74913787c992f0c6e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                  className="grow shrink-0 mt-7 max-w-full aspect-[0.87] w-[172px] max-md:mt-10"
                />
              </div>
              <div className="flex flex-col ml-5 w-[53%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7a8f12454a5f71600aa662913e377d98209727cc484c2fc9d0924ccc1c2b17e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a8f12454a5f71600aa662913e377d98209727cc484c2fc9d0924ccc1c2b17e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a8f12454a5f71600aa662913e377d98209727cc484c2fc9d0924ccc1c2b17e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a8f12454a5f71600aa662913e377d98209727cc484c2fc9d0924ccc1c2b17e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a8f12454a5f71600aa662913e377d98209727cc484c2fc9d0924ccc1c2b17e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a8f12454a5f71600aa662913e377d98209727cc484c2fc9d0924ccc1c2b17e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a8f12454a5f71600aa662913e377d98209727cc484c2fc9d0924ccc1c2b17e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a8f12454a5f71600aa662913e377d98209727cc484c2fc9d0924ccc1c2b17e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                  className="self-stretch my-auto w-full aspect-[2.5] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1d368a5fb8c56a7ea1de1a33d841875f28df21e0de64840ab5cddafc2a77ecd6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d368a5fb8c56a7ea1de1a33d841875f28df21e0de64840ab5cddafc2a77ecd6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d368a5fb8c56a7ea1de1a33d841875f28df21e0de64840ab5cddafc2a77ecd6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d368a5fb8c56a7ea1de1a33d841875f28df21e0de64840ab5cddafc2a77ecd6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d368a5fb8c56a7ea1de1a33d841875f28df21e0de64840ab5cddafc2a77ecd6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d368a5fb8c56a7ea1de1a33d841875f28df21e0de64840ab5cddafc2a77ecd6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d368a5fb8c56a7ea1de1a33d841875f28df21e0de64840ab5cddafc2a77ecd6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d368a5fb8c56a7ea1de1a33d841875f28df21e0de64840ab5cddafc2a77ecd6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                  className="grow shrink-0 max-w-full aspect-[0.87] w-[196px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 pt-6 pb-20 mt-28 w-full shadow-sm bg-zinc-300 bg-opacity-20 max-md:mt-10 max-md:max-w-full">
        <div className="self-center text-6xl font-black text-orange-500 capitalize border-white border-solid border-[3px] leading-[90px] max-md:max-w-full max-md:text-4xl">
          100 Testimoni Terbaik
        </div>
        <div className="flex overflow-x-auto gap-5 py-5 pl-3 mt-3 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex-1 flex-auto pr-11 mt-1 bg-white rounded-xl shadow max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c653a2ef203009899978d01ced9e79b91cb4405338805c9680f0663d42d886b5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c653a2ef203009899978d01ced9e79b91cb4405338805c9680f0663d42d886b5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c653a2ef203009899978d01ced9e79b91cb4405338805c9680f0663d42d886b5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c653a2ef203009899978d01ced9e79b91cb4405338805c9680f0663d42d886b5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c653a2ef203009899978d01ced9e79b91cb4405338805c9680f0663d42d886b5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c653a2ef203009899978d01ced9e79b91cb4405338805c9680f0663d42d886b5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c653a2ef203009899978d01ced9e79b91cb4405338805c9680f0663d42d886b5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c653a2ef203009899978d01ced9e79b91cb4405338805c9680f0663d42d886b5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                  className="grow w-full aspect-[1.02] max-md:mt-3"
                />
              </div>
              <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-12 max-md:mt-10">
                  <div className="flex flex-col items-center pl-8 max-md:pl-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/430e8c5288ce85685e07faf8a408111160e48425d71e25042f3febb71fbff36a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                      className="ml-4 w-5 aspect-[0.95]"
                    />
                    <div className="mt-2.5 ml-4 text-xs font-bold leading-5 text-indigo-500">
                      Galih Ario Prayudo
                    </div>
                    <div className="flex gap-0.5 mt-1.5 ml-4">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb4391ee9d5195b81137137fe2e4496739dce3c18186ef625d3dcf18850df10b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-4 aspect-square fill-orange-500"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb4391ee9d5195b81137137fe2e4496739dce3c18186ef625d3dcf18850df10b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-4 aspect-square fill-orange-500"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb4391ee9d5195b81137137fe2e4496739dce3c18186ef625d3dcf18850df10b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-4 aspect-square fill-orange-500"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb4391ee9d5195b81137137fe2e4496739dce3c18186ef625d3dcf18850df10b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-4 aspect-square fill-orange-500"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb4391ee9d5195b81137137fe2e4496739dce3c18186ef625d3dcf18850df10b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-4 aspect-square fill-orange-500"
                      />
                    </div>
                    <div className="self-start mt-1 text-sm leading-5 text-center text-black">
                      Discover Bulukumba merupakan perusahaan penyedia layanan
                      petualangan alam terkemuka yang berbasis di Bogor. Kami
                      mendapatkan best price dari Bulukumba!
                    </div>
                  </div>
                  <div className="mt-10 text-xs font-bold leading-5 text-orange-500 text-opacity-90">
                    Pantai <span className="text-orange-500">Carita</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-auto pr-11 bg-white rounded-xl shadow max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/81b331d77d1cf265e2c26f940ccc63732ae97003be6c1655343fa42dcdf33b5d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b331d77d1cf265e2c26f940ccc63732ae97003be6c1655343fa42dcdf33b5d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b331d77d1cf265e2c26f940ccc63732ae97003be6c1655343fa42dcdf33b5d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b331d77d1cf265e2c26f940ccc63732ae97003be6c1655343fa42dcdf33b5d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b331d77d1cf265e2c26f940ccc63732ae97003be6c1655343fa42dcdf33b5d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b331d77d1cf265e2c26f940ccc63732ae97003be6c1655343fa42dcdf33b5d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b331d77d1cf265e2c26f940ccc63732ae97003be6c1655343fa42dcdf33b5d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b331d77d1cf265e2c26f940ccc63732ae97003be6c1655343fa42dcdf33b5d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                  className="grow w-full aspect-[1.02] max-md:mt-3"
                />
              </div>
              <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-12 max-md:mt-10">
                  <div className="flex flex-col items-center pl-8 max-md:pl-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5da27556bca7870ee761d3a8047dd5e90f4d64dc742c653f6c59f0758eff4440?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                      className="ml-4 w-5 aspect-[0.95]"
                    />
                    <div className="mt-2.5 ml-4 text-xs font-bold leading-5 text-indigo-500">
                      Aria Wardana
                    </div>
                    <div className="flex gap-0.5 ml-4">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f31615300cd4e322e2018718bee404036b99b39b01ba0af8307ae677d3e4fd10?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-4 aspect-square fill-orange-500"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f31615300cd4e322e2018718bee404036b99b39b01ba0af8307ae677d3e4fd10?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-4 aspect-square fill-orange-500"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f31615300cd4e322e2018718bee404036b99b39b01ba0af8307ae677d3e4fd10?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-4 aspect-square fill-orange-500"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f31615300cd4e322e2018718bee404036b99b39b01ba0af8307ae677d3e4fd10?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-4 aspect-square fill-orange-500"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f31615300cd4e322e2018718bee404036b99b39b01ba0af8307ae677d3e4fd10?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-4 aspect-square fill-orange-500"
                      />
                    </div>
                    <div className="self-start mt-1 text-sm leading-5 text-center text-black">
                      Discover Bulukumba merupakan perusahaan penyedia layanan
                      petualangan alam terkemuka yang berbasis di Bogor. Kami
                      mendapatkan best price dari Bulukumba!
                    </div>
                  </div>
                  <div className="mt-10 text-xs font-bold leading-5 text-orange-500 text-opacity-90">
                    Pantai <span className="text-orange-500">Carita</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-auto pr-11 bg-white rounded-xl shadow max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e108344c7cc60e3704bca020f4aea1e373d37f6db02b99537c43174e57839b47?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e108344c7cc60e3704bca020f4aea1e373d37f6db02b99537c43174e57839b47?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e108344c7cc60e3704bca020f4aea1e373d37f6db02b99537c43174e57839b47?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e108344c7cc60e3704bca020f4aea1e373d37f6db02b99537c43174e57839b47?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e108344c7cc60e3704bca020f4aea1e373d37f6db02b99537c43174e57839b47?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e108344c7cc60e3704bca020f4aea1e373d37f6db02b99537c43174e57839b47?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e108344c7cc60e3704bca020f4aea1e373d37f6db02b99537c43174e57839b47?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e108344c7cc60e3704bca020f4aea1e373d37f6db02b99537c43174e57839b47?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                  className="grow w-full aspect-[1.02] max-md:mt-3"
                />
              </div>
              <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-12 max-md:mt-10">
                  <div className="flex flex-col items-center pl-8 max-md:pl-5">
                    <div className="shrink-0 ml-4 w-5 h-[21px]" />
                    <div className="mt-2.5 ml-4 text-xs font-bold leading-5 text-indigo-500">
                      Muhammad Hafidz
                    </div>
                    <div className="flex gap-0.5 ml-4">
                      <div className="shrink-0 w-4 h-4 bg-orange-500" />
                      <div className="shrink-0 w-4 h-4 bg-orange-500" />
                      <div className="shrink-0 w-4 h-4 bg-orange-500" />
                      <div className="shrink-0 w-4 h-4 bg-orange-500" />
                      <div className="shrink-0 w-4 h-4 bg-orange-500" />
                    </div>
                    <div className="self-start mt-1 text-sm leading-5 text-center text-black">
                      Discover Bulukumba merupakan perusahaan penyedia layanan
                      petualangan alam terkemuka yang berbasis di Bogor. Kami
                      mendapatkan best price dari Bulukumba!
                    </div>
                  </div>
                  <div className="mt-10 text-xs font-bold leading-5 text-orange-500 text-opacity-90">
                    Pantai <span className="text-orange-500">Carita</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 flex-1 flex-auto pr-11 bg-white rounded-xl shadow max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a71b7ba55160622d9347e6e7c737d90d27271378e333cbfe4a5b5f78f49f9e31?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a71b7ba55160622d9347e6e7c737d90d27271378e333cbfe4a5b5f78f49f9e31?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a71b7ba55160622d9347e6e7c737d90d27271378e333cbfe4a5b5f78f49f9e31?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a71b7ba55160622d9347e6e7c737d90d27271378e333cbfe4a5b5f78f49f9e31?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a71b7ba55160622d9347e6e7c737d90d27271378e333cbfe4a5b5f78f49f9e31?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a71b7ba55160622d9347e6e7c737d90d27271378e333cbfe4a5b5f78f49f9e31?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a71b7ba55160622d9347e6e7c737d90d27271378e333cbfe4a5b5f78f49f9e31?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a71b7ba55160622d9347e6e7c737d90d27271378e333cbfe4a5b5f78f49f9e31?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                  className="grow w-full aspect-[1.02] max-md:mt-3"
                />
              </div>
              <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-12 max-md:mt-10">
                  <div className="flex flex-col items-center pl-8 max-md:pl-5">
                    <div className="shrink-0 ml-4 w-5 h-[21px]" />
                    <div className="mt-2.5 ml-4 text-xs font-bold leading-5 text-indigo-500">
                      Ananda Saputra
                    </div>
                    <div className="flex gap-0.5 ml-4">
                      <div className="shrink-0 w-4 h-4 bg-orange-500" />
                      <div className="shrink-0 w-4 h-4 bg-orange-500" />
                      <div className="shrink-0 w-4 h-4 bg-orange-500" />
                      <div className="shrink-0 w-4 h-4 bg-orange-500" />
                      <div className="shrink-0 w-4 h-4 bg-orange-500" />
                    </div>
                    <div className="self-start mt-1 text-sm leading-5 text-center text-black">
                      Discover Bulukumba merupakan perusahaan penyedia layanan
                      petualangan alam terkemuka yang berbasis di Bogor. Kami
                      mendapatkan best price dari Bulukumba!
                    </div>
                  </div>
                  <div className="mt-10 text-xs font-bold leading-5 text-orange-500 text-opacity-90">
                    Pantai <span className="text-orange-500">Carita</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center px-5 mt-14 w-full max-w-[1274px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
            <div className="self-stretch my-auto text-6xl font-black text-orange-500 border-white border-solid border-[3px] leading-[90px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
              Dokumentasi
              <br />
              Kegiatan
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fecef476-d6bc-4893-ada2-c5e83f5cbfc5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fecef476-d6bc-4893-ada2-c5e83f5cbfc5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fecef476-d6bc-4893-ada2-c5e83f5cbfc5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fecef476-d6bc-4893-ada2-c5e83f5cbfc5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fecef476-d6bc-4893-ada2-c5e83f5cbfc5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fecef476-d6bc-4893-ada2-c5e83f5cbfc5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fecef476-d6bc-4893-ada2-c5e83f5cbfc5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fecef476-d6bc-4893-ada2-c5e83f5cbfc5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
              className="grow w-full shadow-sm aspect-[1.32] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="btn justify-center mx-12 w-[20%] px-7 py-4 text-lg font-bold leading-6 text-white rounded-md bg-black bg-opacity-50">
      <Link to='/Dokumentasikegiatan'>Semua Foto</Link>
      </div>
      <Footer />
    </div>
  );
}
export default Profile;

