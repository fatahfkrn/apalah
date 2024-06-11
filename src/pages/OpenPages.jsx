/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const OpenPage = () => {
    return (
        <div className="flex flex-col items-center bg-white">
            <Header />
            <div className="flex gap-5 mt-3.5 w-full text-7xl font-black text-orange-500 leading-[106.5px] max-w-[1067px] max-md:flex-wrap max-md:max-w-full max-md:text-4xl">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a318d35670fa24ba9063ef7724029e88d1849bf4dbf44dacd7e32920c27fea14?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="shrink-0 self-end mt-10 aspect-square w-[52px]"
                />
                <div className="flex-auto border-white border-solid border-[3px] max-md:max-w-full max-md:text-4xl">
                    Pantai Tanjung Bira
                </div>
            </div>
            <div className="mt-1.5 text-lg font-bold leading-6 text-indigo-500">
                Desa Bira, Kecamatan Bonto Bahari
            </div>
            <div className="mt-7 w-full max-w-[1340px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex overflow-hidden relative flex-col grow items-end px-16 pt-20 pb-3 text-lg font-bold leading-6 text-white border-4 border-indigo-500 border-solid min-h-[445px] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/526cc44aefe78099381f12b6a58cb267c0766c4d863379fcb3db6c48d15f5d46?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/526cc44aefe78099381f12b6a58cb267c0766c4d863379fcb3db6c48d15f5d46?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/526cc44aefe78099381f12b6a58cb267c0766c4d863379fcb3db6c48d15f5d46?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/526cc44aefe78099381f12b6a58cb267c0766c4d863379fcb3db6c48d15f5d46?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/526cc44aefe78099381f12b6a58cb267c0766c4d863379fcb3db6c48d15f5d46?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/526cc44aefe78099381f12b6a58cb267c0766c4d863379fcb3db6c48d15f5d46?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/526cc44aefe78099381f12b6a58cb267c0766c4d863379fcb3db6c48d15f5d46?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/526cc44aefe78099381f12b6a58cb267c0766c4d863379fcb3db6c48d15f5d46?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="object-cover absolute inset-0 size-full"
                            />
                            <div className="relative justify-center px-7 py-4 mt-80 rounded-md bg-black bg-opacity-50 max-md:px-5 max-md:mt-10">
                                Semua Foto
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-12 py-8 w-full rounded-xl border-4 border-orange-500 border-solid bg-zinc-300 bg-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-4 items-start self-start leading-[150%]">
                                <div className="shrink-0 w-2 h-2 rounded-full bg-[linear-gradient(0deg,#000_0%,#000_100%),linear-gradient(0deg,#000_0%,#000_100%),#000]" />
                                <div className="flex flex-col mt-2">
                                    <div className="text-xl font-bold text-black">
                                        Pilih Tanggal Trip{" "}
                                    </div>
                                    <div className="mt-2.5 text-sm font-medium text-neutral-500">
                                        Tersedia 2 Keberangkatan
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start mt-7 text-sm font-medium leading-5 text-neutral-500 max-md:flex-wrap">
                                <div className="shrink-0 self-end mt-12 w-2 h-2 rounded-full bg-[linear-gradient(0deg,#000_0%,#000_100%),linear-gradient(0deg,#000_0%,#000_100%),#000] max-md:mt-10" />
                                <div className="flex flex-col grow shrink-0 justify-center self-start basis-0 w-fit max-md:max-w-full">
                                    <div className="flex gap-5 justify-between px-3.5 py-3 w-full bg-white rounded-md max-md:flex-wrap max-md:max-w-full">
                                        <div className="flex gap-1.5 my-auto">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b244d1dc569059bf243d441d70812326a87deb7fb36f2744a6eebbadd937142?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-6 aspect-square"
                                            />
                                            <div className="flex-auto my-auto">
                                                1 Juni 2024 - 3 Juni 2024
                                            </div>
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cae8b3f6ca061fe298cab8f737e07e6ac44e86674566f6ace2f8083e352c91bb?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 aspect-square w-[34px]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow text-sm font-medium leading-5 text-neutral-500 max-md:mt-10">
                                            <div className="text-xl font-bold text-black">
                                                Jumlah Peserta{" "}
                                            </div>
                                            <div className="mt-4">Dewasa</div>
                                            <div className="flex gap-5 items-start py-4 pr-6 pl-3 mt-5 w-full whitespace-nowrap bg-white rounded-md max-md:pr-5">
                                                <div className="flex flex-1 gap-1.5">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b244d1dc569059bf243d441d70812326a87deb7fb36f2744a6eebbadd937142?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                        className="shrink-0 w-6 aspect-square"
                                                    />
                                                    <div className="my-auto">1</div>
                                                </div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c4b8598cf6c8219f7474e6ac566e8ee8fd095ff4e00621b97d15e9717c6e0c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                    className="shrink-0 w-6 aspect-square"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow mt-8 text-sm font-medium leading-5 whitespace-nowrap text-neutral-500 max-md:mt-10">
                                            <div>Anak-Anak</div>
                                            <div className="flex gap-5 items-start py-4 pr-7 pl-2.5 mt-5 w-full bg-white rounded-md max-md:pr-5">
                                                <div className="flex flex-1 gap-1.5">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b244d1dc569059bf243d441d70812326a87deb7fb36f2744a6eebbadd937142?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                        className="shrink-0 w-6 aspect-square"
                                                    />
                                                    <div className="my-auto">0</div>
                                                </div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c4b8598cf6c8219f7474e6ac566e8ee8fd095ff4e00621b97d15e9717c6e0c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                    className="shrink-0 w-6 aspect-square"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-center mt-11 text-2xl font-bold leading-9 text-black max-md:mt-10">
                                Total Rp1.500.000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 mt-10 text-2xl font-light leading-10 text-black max-md:flex-wrap">
                <div className="my-auto font-black">2 Ulasan</div>
                <div className="text-4xl">|</div>
                <div className="flex-auto my-auto font-semibold">
                    #1 Dari 15 Pantai di Bulukumba
                </div>
                <div className="text-4xl">|</div>
                <div className="flex-auto self-start mt-2.5 font-semibold">
                    200 Spot Foto Keluarga
                </div>
            </div>
            <div className="self-stretch mt-7 w-full border-4 border-dashed bg-stone-400 border-stone-400 min-h-[4px] max-md:max-w-full" />
            <div className="flex gap-5 items-start mt-8 max-w-full text-2xl font-semibold leading-10 text-black w-[972px] max-md:flex-wrap">
                <div className="flex flex-1 gap-2 mt-2">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b22899c8807ea50e4a7d6308cc7bfe4b7d932625b1087e4df3fece45d88a9b09?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-14 aspect-square"
                    />
                    <div className="my-auto">Qatar Airways</div>
                </div>
                <div className="flex flex-1 gap-3.5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/025f89513ecabec03f104feccf81f14f8d6efe2ab3abbe9494c3a9c4bbf39a54?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-12 aspect-square"
                    />
                    <div className="my-auto">3 Hari 2 Malam</div>
                </div>
            </div>
            <div className="flex gap-5 justify-between mt-7 w-full text-2xl font-semibold leading-10 text-black max-w-[998px] max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-4 self-start mt-2 max-md:flex-wrap">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/269335d3bbc85b5286b8f1646e6943daa6194e83571827f2defa6aa9cf1fd617?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-10 aspect-square"
                    />
                    <div className="flex-auto my-auto">
                        Hotel Bojone Jijah (Bintang 5)
                    </div>
                </div>
                <div className="flex gap-3.5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/960fe86aef1343302acfb568dfb7ba9a38edc7feaff9bd4e154ff05832579e09?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-12 aspect-square"
                    />
                    <div className="my-auto">2 Keberangkatan</div>
                </div>
            </div>
            <div className="flex flex-col items-center self-stretch pt-9 pr-4 pb-16 pl-14 mt-16 w-full bg-stone-300 bg-opacity-20 rounded-[51px] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl font-semibold text-orange-500 leading-[51px] max-md:max-w-full">
                    Pada perjalanan ini, anda akan diajak :
                </div>
                <div className="self-stretch mt-8 text-2xl font-semibold leading-9 text-indigo-500 max-md:max-w-full">
                    Berfoto dengan latar belakang pantai, bermain ATV, menonton film
                    bersama saat malam keakraban
                    <br />
                    Merasakan sensasi menginap di Hotel Bintang 5 ditengah pantai sambil
                    menikmati pemandangan <br />
                    Mengunjungi salah satu GUA yang digunakan untuk menyembah berhala
                </div>
                <div className="mt-12 max-w-full w-[727px] max-md:mt-10">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/615642950114b2086c5fac1e163112f5637a82a4577987d570e09359145f429d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/615642950114b2086c5fac1e163112f5637a82a4577987d570e09359145f429d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/615642950114b2086c5fac1e163112f5637a82a4577987d570e09359145f429d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/615642950114b2086c5fac1e163112f5637a82a4577987d570e09359145f429d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/615642950114b2086c5fac1e163112f5637a82a4577987d570e09359145f429d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/615642950114b2086c5fac1e163112f5637a82a4577987d570e09359145f429d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/615642950114b2086c5fac1e163112f5637a82a4577987d570e09359145f429d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/615642950114b2086c5fac1e163112f5637a82a4577987d570e09359145f429d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="grow w-full border-4 border-white border-solid aspect-[1.47] max-md:mt-9"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/044a9ef5d8e1673abe30549919ea7360faf3c3f377efb2a0b1f2ae14d31ad744?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/044a9ef5d8e1673abe30549919ea7360faf3c3f377efb2a0b1f2ae14d31ad744?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/044a9ef5d8e1673abe30549919ea7360faf3c3f377efb2a0b1f2ae14d31ad744?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/044a9ef5d8e1673abe30549919ea7360faf3c3f377efb2a0b1f2ae14d31ad744?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/044a9ef5d8e1673abe30549919ea7360faf3c3f377efb2a0b1f2ae14d31ad744?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/044a9ef5d8e1673abe30549919ea7360faf3c3f377efb2a0b1f2ae14d31ad744?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/044a9ef5d8e1673abe30549919ea7360faf3c3f377efb2a0b1f2ae14d31ad744?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/044a9ef5d8e1673abe30549919ea7360faf3c3f377efb2a0b1f2ae14d31ad744?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="shrink-0 self-stretch my-auto max-w-full border-4 border-white border-solid shadow-sm aspect-[1.49] w-[216px] max-md:mt-10"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/af9342a41a5260e06d9a14b8b18351897797c5f0688a3fe8fdc714e97d87231e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9342a41a5260e06d9a14b8b18351897797c5f0688a3fe8fdc714e97d87231e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9342a41a5260e06d9a14b8b18351897797c5f0688a3fe8fdc714e97d87231e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9342a41a5260e06d9a14b8b18351897797c5f0688a3fe8fdc714e97d87231e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9342a41a5260e06d9a14b8b18351897797c5f0688a3fe8fdc714e97d87231e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9342a41a5260e06d9a14b8b18351897797c5f0688a3fe8fdc714e97d87231e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9342a41a5260e06d9a14b8b18351897797c5f0688a3fe8fdc714e97d87231e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9342a41a5260e06d9a14b8b18351897797c5f0688a3fe8fdc714e97d87231e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="shrink-0 self-stretch my-auto max-w-full border-4 border-white border-solid shadow-sm aspect-[1.49] w-[216px] max-md:mt-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 text-4xl font-semibold text-orange-500 leading-[51px] max-md:mt-10">
                Itenerary Perjalanan
            </div>
            <div className="flex flex-col self-stretch mt-9 w-full text-2xl font-semibold leading-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between px-20 py-3.5 w-full bg-stone-300 bg-opacity-20 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 my-auto">
                        <div className="text-orange-500">Hari 1</div>
                        <div className="flex-auto text-black">Jakarta - Makassar</div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db2bdcc96769cb583e4579b6c7c5964732577ad4c11b92f91c1ed09096b885f4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-14 aspect-square"
                    />
                </div>
                <div className="flex gap-5 justify-between px-20 py-3.5 mt-5 w-full bg-stone-300 bg-opacity-20 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 my-auto">
                        <div className="text-orange-500">Hari 2</div>
                        <div className="flex-auto text-black">3 Pantai Bulukumba</div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3a25074e0aa7c3ae41ad5d7d225e35a2bb36387d1cc8d9b466eaa9cf1821d1f?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-14 aspect-square"
                    />
                </div>
                <div className="flex gap-5 justify-between px-20 py-3.5 mt-5 w-full bg-stone-300 bg-opacity-20 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 my-auto">
                        <div className="text-orange-500">Hari 3</div>
                        <div className="flex-auto text-black">Makassar - Jakarta</div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c178b3f7bc20bb037c50a271e6d9de5930ed1cd1b560e428ec6919af5e6c582d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 w-14 aspect-square"
                    />
                </div>
            </div>
            <div className="mt-56 text-base font-semibold leading-6 text-black max-md:mt-10 max-md:max-w-full">
                Dengan melakukan pemesanan maka anda menerima syarat dan ketetuan. Harap
                baca terlebih dahulu untuk memastikan.
            </div>
            <div className="justify-center text-center w-[30%] items-center px-16 py-7 mt-3.5 w-full text-2xl font-extrabold leading-10 text-white whitespace-nowrap rounded-lg shadow-sm bg-orange-500 bg-opacity-80 max-w-[1245px] max-md:px-5 max-md:max-w-full">
                <Link to='/DetailPemesanan'>Pesan Sekarang</Link>
            </div>
            <Footer />
        </div>
    );
}


export default OpenPage;