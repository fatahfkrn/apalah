/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const HotelDetail = () => {
    return (
        <div className="flex flex-col bg-white">
            <Header />
            <div className="flex gap-5 justify-between self-center mt-3.5 w-full leading-[150%] max-w-[1094px] max-md:flex-wrap max-md:max-w-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/00224885dba0c7eaaa0d4f5c11ad82e6d2b8ed3c13408c4163ede0ea0ba2b3ba?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="shrink-0 my-auto aspect-square w-[52px]"
                />
                <div className="flex flex-col max-md:max-w-full">
                    <div className="text-7xl font-black text-orange-500 border-white border-solid border-[3px] max-md:max-w-full max-md:text-4xl">
                        Sunshine Guest Hotel
                    </div>
                    <div className="self-center mt-1.5 text-lg font-bold text-indigo-500">
                        Bira Beach, Bulukumba Indonesia
                    </div>
                </div>
            </div>
            <div className="mt-9 w-full max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {/* <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                        <div className="flex overflow-hidden relative flex-col grow gap-1.5 items-end px-16 pt-20 pb-1 border-4 border-indigo-500 border-solid min-h-[470px] max-md:flex-wrap max-md:px-5 max-md:mt-6">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/73390879c5149f7a2afd3f7d82a6d23d83a10b8b96f20a3fc48d9323ece198e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/73390879c5149f7a2afd3f7d82a6d23d83a10b8b96f20a3fc48d9323ece198e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73390879c5149f7a2afd3f7d82a6d23d83a10b8b96f20a3fc48d9323ece198e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/73390879c5149f7a2afd3f7d82a6d23d83a10b8b96f20a3fc48d9323ece198e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/73390879c5149f7a2afd3f7d82a6d23d83a10b8b96f20a3fc48d9323ece198e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73390879c5149f7a2afd3f7d82a6d23d83a10b8b96f20a3fc48d9323ece198e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/73390879c5149f7a2afd3f7d82a6d23d83a10b8b96f20a3fc48d9323ece198e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/73390879c5149f7a2afd3f7d82a6d23d83a10b8b96f20a3fc48d9323ece198e0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="object-cover absolute inset-0 size-full"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8b70a9579adf249bba0d2e7a3757ee690293e01837f8b2f306969a9745e6b8d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="shrink-0 mt-80 aspect-[1.08] fill-orange-500 w-[45px] max-md:mt-10"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d54fa7c12e102721fe402499a4c6d5d28a7ce90b79b874d8e0ad63f4adc748d2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="shrink-0 mt-80 w-11 aspect-[1.05] fill-orange-500 max-md:mt-10"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8b70a9579adf249bba0d2e7a3757ee690293e01837f8b2f306969a9745e6b8d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="shrink-0 mt-80 aspect-[1.08] fill-orange-500 w-[45px] max-md:mt-10"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8b70a9579adf249bba0d2e7a3757ee690293e01837f8b2f306969a9745e6b8d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="shrink-0 mt-80 aspect-[1.08] fill-orange-500 w-[45px] max-md:mt-10"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d54fa7c12e102721fe402499a4c6d5d28a7ce90b79b874d8e0ad63f4adc748d2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="shrink-0 mt-80 w-11 aspect-[1.05] fill-orange-500 max-md:mt-10"
                            />
                        </div>
                    </div> */}
                    <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
                            <div className="max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c4625cbe209c1ecb6c0194ca07a63066c452f1c499031485866f442a228d9604?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4625cbe209c1ecb6c0194ca07a63066c452f1c499031485866f442a228d9604?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4625cbe209c1ecb6c0194ca07a63066c452f1c499031485866f442a228d9604?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4625cbe209c1ecb6c0194ca07a63066c452f1c499031485866f442a228d9604?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4625cbe209c1ecb6c0194ca07a63066c452f1c499031485866f442a228d9604?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4625cbe209c1ecb6c0194ca07a63066c452f1c499031485866f442a228d9604?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4625cbe209c1ecb6c0194ca07a63066c452f1c499031485866f442a228d9604?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4625cbe209c1ecb6c0194ca07a63066c452f1c499031485866f442a228d9604?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="grow w-full border-4 border-indigo-500 border-solid aspect-[1.69] max-md:mt-7"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/efa44f55a219fecb02278e06b36aee43d227762971ddafcf0c3f0891f2ebe180?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/efa44f55a219fecb02278e06b36aee43d227762971ddafcf0c3f0891f2ebe180?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/efa44f55a219fecb02278e06b36aee43d227762971ddafcf0c3f0891f2ebe180?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/efa44f55a219fecb02278e06b36aee43d227762971ddafcf0c3f0891f2ebe180?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/efa44f55a219fecb02278e06b36aee43d227762971ddafcf0c3f0891f2ebe180?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/efa44f55a219fecb02278e06b36aee43d227762971ddafcf0c3f0891f2ebe180?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/efa44f55a219fecb02278e06b36aee43d227762971ddafcf0c3f0891f2ebe180?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/efa44f55a219fecb02278e06b36aee43d227762971ddafcf0c3f0891f2ebe180?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="grow w-full border-4 border-indigo-500 border-solid aspect-[1.64] max-md:mt-7"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/546272012262b34578820d0a8420fe84f0a4265095aa58eb65004464283af5e9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/546272012262b34578820d0a8420fe84f0a4265095aa58eb65004464283af5e9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/546272012262b34578820d0a8420fe84f0a4265095aa58eb65004464283af5e9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/546272012262b34578820d0a8420fe84f0a4265095aa58eb65004464283af5e9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/546272012262b34578820d0a8420fe84f0a4265095aa58eb65004464283af5e9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/546272012262b34578820d0a8420fe84f0a4265095aa58eb65004464283af5e9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/546272012262b34578820d0a8420fe84f0a4265095aa58eb65004464283af5e9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/546272012262b34578820d0a8420fe84f0a4265095aa58eb65004464283af5e9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="grow w-full border-4 border-indigo-500 border-solid aspect-[1.69] max-md:mt-7"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex overflow-hidden relative flex-col grow items-end px-16 pt-20 pb-3.5 text-lg font-bold leading-6 text-white border-4 border-indigo-500 border-solid aspect-[1.63] max-md:mt-7">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf124c6a4baf34a3b01531549229886c48ae9d81f918ee1c216ee6719abd0976?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf124c6a4baf34a3b01531549229886c48ae9d81f918ee1c216ee6719abd0976?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf124c6a4baf34a3b01531549229886c48ae9d81f918ee1c216ee6719abd0976?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf124c6a4baf34a3b01531549229886c48ae9d81f918ee1c216ee6719abd0976?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf124c6a4baf34a3b01531549229886c48ae9d81f918ee1c216ee6719abd0976?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf124c6a4baf34a3b01531549229886c48ae9d81f918ee1c216ee6719abd0976?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf124c6a4baf34a3b01531549229886c48ae9d81f918ee1c216ee6719abd0976?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf124c6a4baf34a3b01531549229886c48ae9d81f918ee1c216ee6719abd0976?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="object-cover absolute inset-0 size-full"
                                            />
                                            <div className="relative justify-center px-7 py-4 mt-24 rounded-md bg-black bg-opacity-50 max-md:px-5 max-md:mt-10">
                                                Semua Foto
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-12 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between text-2xl font-medium leading-9 text-neutral-400 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-5xl font-black text-black max-md:max-w-full max-md:text-4xl">
                            Sunshine Guest Hotel
                        </div>
                        <div className="flex gap-4 mt-6 max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30d81bd8c7bec28dc1d2e11ce1249efb0372da29c6c755d21787ea50f5150e2d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="shrink-0 self-start max-w-full aspect-[5.56] w-[145px]"
                            />
                            <div className="flex-auto my-auto text-center">50 Ulasan</div>
                            <div className="text-4xl font-light text-black">|</div>
                            <div className="flex-auto text-center max-md:max-w-full">
                                No. 1 Dari 2 Penginapan Di Bulukumba
                            </div>
                        </div>
                        <div className="flex gap-5 self-start mt-5 text-center max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/55cd36017f2834ec6ed0c4f3944bef23c39ae22a53833119dca21d253e5e9b4c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="shrink-0 w-5 aspect-[0.69]"
                            />
                            <div className="flex-auto max-md:max-w-full">
                                Bira Beach, Bulukumba 92571 Indonesia
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center self-start mt-3 text-center">
                        <div>Mulai Dari</div>
                        <div className="self-stretch mt-7 text-4xl font-bold text-orange-500">
                            IDR 365.500
                        </div>
                        <div className="mt-6">/Kamar/Malam</div>
                    </div>
                </div>
                <div className="shrink-0 mt-16 max-w-full h-0.5 border-2 border-dashed bg-stone-400 border-stone-400 w-[1343px] max-md:mt-10" />
                <div className="mt-16 text-4xl font-semibold text-black leading-[54px] max-md:mt-10 max-md:max-w-full">
                    Serunya Nginep Disini
                </div>
                <div className="flex gap-5 justify-between items-start mt-9 mr-3.5 ml-3 font-medium max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                    <div className="flex gap-3.5 items-start self-stretch">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e173f1a05dc54ca63f89f9596c448f09b14dd04ab82521a7a53822e81de9c165?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="shrink-0 w-11 aspect-square"
                        />
                        <div className="flex flex-col grow shrink-0 mt-3.5 basis-0 w-fit">
                            <div className="text-xl leading-8 text-black">
                                Cocok Untuk Perjalanan Medis
                            </div>
                            <div className="mt-2.5 text-base leading-6 text-neutral-400">
                                Dekat dengan fasilitas kesehatan dan disukai <br />
                                tamu yang melakukan perjalanan medis.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 items-start">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c33f22a560c362152903755bb903152ce2077d097430dcf7e3f5c04ef3d4fb93?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="shrink-0 w-7 aspect-[0.68]"
                        />
                        <div className="flex flex-col grow shrink-0 mt-3 basis-0 w-fit">
                            <div className="text-xl leading-8 text-black">
                                Lokasinya Strategis
                            </div>
                            <div className="mt-2.5 text-base leading-6 text-neutral-400">
                                Dekat dengan fasilitas kesehatan dan disukai <br />
                                tamu yang melakukan perjalanan medis.
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start mt-2">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ae94c0a123125b3a689a0eea24e2d8b4b3d1038a70d07928f1cd4a5ccd0ac83?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="shrink-0 aspect-square w-[42px]"
                        />
                        <div className="flex flex-col grow shrink-0 mt-2 basis-0 w-fit">
                            <div className="text-xl leading-8 text-black">
                                Ada Tempat Hangout Seru
                            </div>
                            <div className="mt-2.5 text-base leading-6 text-neutral-400">
                                Nginep Di Sini, Nggak Perlu Takut Bosan, <br />
                                Ada Cafe Buat Nyantai
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 mx-3.5 mt-24 max-w-full h-0.5 border-2 border-dashed bg-stone-400 border-stone-400 w-[1318px] max-md:mt-10 max-md:mr-2.5" />
                <div className="mt-20 text-4xl font-semibold text-black leading-[54px] max-md:mt-10 max-md:max-w-full">
                    Fasilitas Populer
                </div>
                <div className="flex gap-5 justify-between mt-6 w-full text-xl font-medium leading-8 text-black max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col self-stretch whitespace-nowrap">
                            <div className="flex gap-5 justify-between">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d63fd1d4ba397e9d2887ab74bb1255e54eaf3af452ba6ea00801e90e86830a64?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 w-8 aspect-square"
                                />
                                <div className="my-auto">Wifi</div>
                            </div>
                            <div className="flex gap-5 justify-between mt-7">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d46593673428b3b4047b2d4d0ce322584a48c288c127241f51dfd5b578c71244?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 aspect-square w-[30px]"
                                />
                                <div className="my-auto">Restoran</div>
                            </div>
                        </div>
                        <div className="flex flex-col self-stretch my-auto">
                            <div className="flex gap-5 whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2df9d1941fd335795f09762fe6fc3c511003c140cc81e1cfbe40c51da4d58835?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                                <div className="flex-auto my-auto">Parkir</div>
                            </div>
                            <div className="flex gap-5 mt-7">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0b6b95e8443c37025c32d4483055e31f04c0d5b007cd41d59f5066a5087d9fb?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 w-8 aspect-square"
                                />
                                <div className="flex-auto my-auto">Ruang Tamu</div>
                            </div>
                        </div>
                        <div className="flex flex-col self-stretch my-auto whitespace-nowrap">
                            <div className="flex gap-5 justify-between">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/02002ecdaa00d47e7f0be7e0ad65e6b797d47c257f634d083d70b2d8713cee39?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 w-7 aspect-square"
                                />
                                <div className="my-auto">AC</div>
                            </div>
                            <div className="flex gap-5 justify-between mt-7">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d549611c6b50b4c1fdec884c58f39345c613ea4b900d12676748ba4df332b1e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 aspect-square w-[26px]"
                                />
                                <div className="my-auto">Billiard</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 self-start">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5d9e8784c4412620a098475a7d5e5607736142ec5c491926b28ac517a49bf31?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="shrink-0 aspect-square w-[30px]"
                        />
                        <div className="flex-auto">Antar Jemput Bandara</div>
                    </div>
                </div>
                <div className="shrink-0 mt-24 max-w-full h-0.5 border-2 border-dashed bg-stone-400 border-stone-400 w-[1343px] max-md:mt-10" />
                <div className="flex gap-1.5 self-start mt-16 leading-[150%] max-md:mt-10">
                    <div className="flex flex-col flex-1 text-4xl font-semibold text-black">
                        <div>Review</div>
                        <div className="mt-10">5.0 / 5</div>
                    </div>
                    <div className="flex flex-col flex-1 self-end mt-20 font-medium text-neutral-400 max-md:mt-10">
                        <div className="text-xl">Sangat Bagus</div>
                        <div className="text-xs">Dari 50 Ulasan</div>
                    </div>
                </div>
            </div>
            <div className="flex overflow-x-auto gap-5 py-5 pl-3 mt-7 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex-1 flex-auto pr-11 mt-1 bg-white rounded-xl shadow max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a6f1a15d13ea9db55961a501ef6791aa94d146f346c9045aaad7dfb7423141bf?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6f1a15d13ea9db55961a501ef6791aa94d146f346c9045aaad7dfb7423141bf?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6f1a15d13ea9db55961a501ef6791aa94d146f346c9045aaad7dfb7423141bf?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6f1a15d13ea9db55961a501ef6791aa94d146f346c9045aaad7dfb7423141bf?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6f1a15d13ea9db55961a501ef6791aa94d146f346c9045aaad7dfb7423141bf?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6f1a15d13ea9db55961a501ef6791aa94d146f346c9045aaad7dfb7423141bf?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6f1a15d13ea9db55961a501ef6791aa94d146f346c9045aaad7dfb7423141bf?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6f1a15d13ea9db55961a501ef6791aa94d146f346c9045aaad7dfb7423141bf?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="grow w-full aspect-[1.02] max-md:mt-3"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-12 max-md:mt-10">
                                <div className="flex flex-col items-center pl-8 max-md:pl-5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ed270728f0a35013c650ae1317b9428dc3ce5d269ab12076d4db264e096d7f3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="ml-4 w-5 aspect-[0.95]"
                                    />
                                    <div className="mt-2.5 ml-4 text-xs font-bold leading-5 text-indigo-500">
                                        Galih Ario Prayudo
                                    </div>
                                    <div className="flex gap-0.5 mt-1.5 ml-4">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5c176ea8376351c4f2bfdcb3edda80722cba78075d10fc5aeaabfc06b5ee206?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-4 aspect-square fill-orange-500"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5c176ea8376351c4f2bfdcb3edda80722cba78075d10fc5aeaabfc06b5ee206?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-4 aspect-square fill-orange-500"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5c176ea8376351c4f2bfdcb3edda80722cba78075d10fc5aeaabfc06b5ee206?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-4 aspect-square fill-orange-500"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5c176ea8376351c4f2bfdcb3edda80722cba78075d10fc5aeaabfc06b5ee206?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-4 aspect-square fill-orange-500"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5c176ea8376351c4f2bfdcb3edda80722cba78075d10fc5aeaabfc06b5ee206?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
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
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7f1824c9b23a616b000caa9282cf3bcf9bfa73c796771eef45bf77d32c62795e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f1824c9b23a616b000caa9282cf3bcf9bfa73c796771eef45bf77d32c62795e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f1824c9b23a616b000caa9282cf3bcf9bfa73c796771eef45bf77d32c62795e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f1824c9b23a616b000caa9282cf3bcf9bfa73c796771eef45bf77d32c62795e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f1824c9b23a616b000caa9282cf3bcf9bfa73c796771eef45bf77d32c62795e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f1824c9b23a616b000caa9282cf3bcf9bfa73c796771eef45bf77d32c62795e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f1824c9b23a616b000caa9282cf3bcf9bfa73c796771eef45bf77d32c62795e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f1824c9b23a616b000caa9282cf3bcf9bfa73c796771eef45bf77d32c62795e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="grow w-full aspect-[1.02] max-md:mt-3"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-12 max-md:mt-10">
                                <div className="flex flex-col items-center pl-8 max-md:pl-5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/815591f6a4516f0bcf1af668ca0dc0e81248564f18f757a3d5fbcb940fab372c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="ml-4 w-5 aspect-[0.95]"
                                    />
                                    <div className="mt-2.5 ml-4 text-xs font-bold leading-5 text-indigo-500">
                                        Aria Wardana
                                    </div>
                                    <div className="flex gap-0.5 ml-4">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b7d8b2482c0865ac02fb2e52b278782c40abb1adc12ea8bfd0ab5ccf72f152c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-4 aspect-square fill-orange-500"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b7d8b2482c0865ac02fb2e52b278782c40abb1adc12ea8bfd0ab5ccf72f152c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-4 aspect-square fill-orange-500"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b7d8b2482c0865ac02fb2e52b278782c40abb1adc12ea8bfd0ab5ccf72f152c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-4 aspect-square fill-orange-500"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b7d8b2482c0865ac02fb2e52b278782c40abb1adc12ea8bfd0ab5ccf72f152c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-4 aspect-square fill-orange-500"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b7d8b2482c0865ac02fb2e52b278782c40abb1adc12ea8bfd0ab5ccf72f152c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
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
            <div className="flex justify-center items-center self-center px-16 py-8 mt-12 w-full rounded-xl bg-zinc-300 bg-opacity-40 leading-[150%] max-w-[1380px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center max-w-full w-[968px]">
                    <div className="text-3xl font-semibold text-black max-md:max-w-full">
                        Lihat Harga Untuk Tanggal Wisata Anda
                    </div>
                    <div className="flex gap-5 self-stretch mt-9 w-full max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col flex-1 justify-center whitespace-nowrap">
                            <div className="flex gap-2.5 items-start py-2.5 pr-20 pl-3 bg-white rounded-md max-md:pr-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b90b7f3051b5a9b9908fe2a3d9474cfd6ace6bb29b5ec4cef4e7f8ca4520e23b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 aspect-square w-[34px]"
                                />
                                <div className="flex flex-col">
                                    <div className="text-lg font-bold text-indigo-500">
                                        Check-In
                                    </div>
                                    <div className="mt-1.5 text-base text-stone-300">-/-/-</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 justify-center whitespace-nowrap">
                            <div className="flex gap-2.5 items-start py-2.5 bg-white rounded-md">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8472e8de4e25e6deacc4589776be1ad31bada944701e73add5e4631fe9e8f3f7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 aspect-square w-[34px]"
                                />
                                <div className="flex flex-col">
                                    <div className="text-lg font-bold text-indigo-500">
                                        Check-Out
                                    </div>
                                    <div className="mt-1.5 text-base text-stone-300">-/-/-</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-0.5 py-2.5 pr-6 pl-2 bg-white rounded-md max-md:pr-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d04bf942ffc8f00fcc086fb652087e5f2dea4b266d462bc9d0d69eca7464b4ad?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="shrink-0 aspect-square w-[38px]"
                            />
                            <div className="flex flex-col self-start mt-1">
                                <div className="text-lg font-bold text-indigo-500">Tamu</div>
                                <div className="mt-2 text-base text-stone-300">
                                    1 Kamar, 2 Dewasa, O anak
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-base font-semibold text-black max-md:max-w-full">
                        Hubungi Akomodasi Untuk Mengetahui Ketersediaan.
                    </div>
                    <div className="mt-3.5 text-base text-black">
                        Tersedia Hotel Serupa.
                    </div>
                </div>
            </div>
            <div className="self-center mt-12 text-base font-semibold leading-6 text-black max-md:mt-10 max-md:max-w-full">
                Dengan melakukan pemesanan maka anda menerima syarat dan ketetuan. Harap
                baca terlebih dahulu untuk memastikan.
            </div>
            <div className="justify-center text-center w-[20%] items-center self-center px-16 py-7 mt-3.5 w-full text-2xl font-extrabold leading-10 text-white whitespace-nowrap rounded-lg shadow-sm bg-orange-500 bg-opacity-80 max-w-[1245px] max-md:px-5 max-md:max-w-full">
                <Link to='/DetailPemesanan'>Pesan</Link>
            </div>
            <Footer />
        </div>
    );
}


export default HotelDetail;