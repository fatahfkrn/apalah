/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const OTPages = () => {
    return (
        <div className="flex flex-col items-center bg-white">
            <Header />
            <div className="flex overflow-x-auto gap-0 self-stretch max-md:flex-wrap">
                <div className="flex overflow-hidden relative flex-col grow shrink-0 px-10 pt-20 pb-4 basis-0 min-h-[525px] w-fit max-md:px-5 max-md:max-w-full">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3868f4482eee66a42de532046b8e4ed47f45f3545d0a2e0c7380406270ae4750?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3868f4482eee66a42de532046b8e4ed47f45f3545d0a2e0c7380406270ae4750?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3868f4482eee66a42de532046b8e4ed47f45f3545d0a2e0c7380406270ae4750?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3868f4482eee66a42de532046b8e4ed47f45f3545d0a2e0c7380406270ae4750?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3868f4482eee66a42de532046b8e4ed47f45f3545d0a2e0c7380406270ae4750?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3868f4482eee66a42de532046b8e4ed47f45f3545d0a2e0c7380406270ae4750?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3868f4482eee66a42de532046b8e4ed47f45f3545d0a2e0c7380406270ae4750?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3868f4482eee66a42de532046b8e4ed47f45f3545d0a2e0c7380406270ae4750?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative gap-5 items-end mt-12 text-8xl font-black text-white leading-[144px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                        <div className="shrink-0 mt-28 bg-white h-[51px] w-[30px] max-md:mt-10" />
                        <div className="flex-auto self-start max-md:max-w-full max-md:text-4xl">
                            PANTAI <span className="">BULUKUMBA</span>
                        </div>
                        <div className="shrink-0 mt-28 bg-white h-[51px] w-[30px] max-md:mt-10" />
                    </div>
                    <div className="relative self-center mt-2 max-w-full w-[723px]">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
                                <div className="relative grow max-md:mt-7 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 max-w-full border-4 border-white border-solid aspect-[1.49] w-[216px] max-md:mt-2"
                                            />
                                        </div>
                                        <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                                            <div className="flex relative flex-col grow font-black text-white leading-[150%] max-md:mt-2">
                                                <img
                                                    loading="lazy"
                                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                    className="self-end max-w-full border-4 border-white border-solid shadow-sm aspect-[1.49] w-[216px] max-md:mr-2.5"
                                                />
                                                <div className="mt-6 text-xl">
                                                    Periode 15 - 30 Mei 2024
                                                </div>
                                                <div className="self-center text-xs">S & K Berlaku</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6194a2caf9b62b02b7a23e60dd22fa7e29235a20659e0426f9c2ae315213626d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 max-w-full border-4 border-white border-solid shadow-sm aspect-[1.49] w-[216px] max-md:mt-7"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex overflow-hidden relative flex-col flex-auto gap-5 justify-between px-10 py-5 w-full font-black text-white min-h-[525px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f300c0eb96b0bcc7e5f7cab73c1a427a043ef252440ef9e3f80fd5fee627e73?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f300c0eb96b0bcc7e5f7cab73c1a427a043ef252440ef9e3f80fd5fee627e73?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f300c0eb96b0bcc7e5f7cab73c1a427a043ef252440ef9e3f80fd5fee627e73?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f300c0eb96b0bcc7e5f7cab73c1a427a043ef252440ef9e3f80fd5fee627e73?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f300c0eb96b0bcc7e5f7cab73c1a427a043ef252440ef9e3f80fd5fee627e73?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f300c0eb96b0bcc7e5f7cab73c1a427a043ef252440ef9e3f80fd5fee627e73?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f300c0eb96b0bcc7e5f7cab73c1a427a043ef252440ef9e3f80fd5fee627e73?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f300c0eb96b0bcc7e5f7cab73c1a427a043ef252440ef9e3f80fd5fee627e73?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5b5bd5d39887bd74f8f5eebc57ca9c4818ef3aa8bcf3ae8c24030754db575d0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 my-auto aspect-[0.59] fill-white w-[30px]"
                    />
                    <div className="flex relative gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col max-md:max-w-full">
                            <div className="text-8xl text-right leading-[146px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
                                Penawaran Terbaik Ke <span className="">Bulukumba</span>
                            </div>
                            <div className="flex flex-col self-start mt-2.5 ml-36 leading-[150%] max-md:ml-2.5">
                                <div className="text-xl">Periode 15 - 30 Mei 2024</div>
                                <div className="self-center text-xs">S & K Berlaku</div>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65e004a1dc0df470a26e51403da09fae3f21af6a6dcbc35355a20d87990a4d6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="shrink-0 my-auto aspect-[0.59] fill-white w-[30px]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-5 self-end mt-5 mr-7 max-w-full text-7xl font-black text-orange-500 leading-[106.5px] w-[868px] max-md:flex-wrap max-md:mr-2.5 max-md:text-4xl">
                <div className="flex-auto border-white border-solid border-[3px] max-md:text-4xl">
                    OPEN TRIP{" "}
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/910483e006f3259344facc3fbd9307a2a03e05b0b4c8e84c1d060a99b182e01d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="shrink-0 my-auto aspect-square w-[50px]"
                />
            </div>
            <div className="px-14 py-7 mt-10 max-w-full bg-white rounded-xl border-orange-500 border-solid shadow-sm border-[3px] w-[1302px] max-md:px-5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-5 text-lg font-bold leading-6 text-black max-md:flex-wrap max-md:mt-10">
                            <div className="flex flex-col flex-1 justify-center whitespace-nowrap">
                                <div className="flex gap-1.5 px-16 py-5 bg-gray-200 rounded-xl max-md:px-5">
                                    <div className="grow">Promo</div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f3c844f88ca18d949cd03f6812822ed076caf1f9b14c64778150cbbff4ffb5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 self-start w-3.5 aspect-[1.56] fill-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 justify-center">
                                <div className="flex gap-1.5 px-12 py-3.5 bg-gray-200 rounded-xl max-md:px-5">
                                    <div className="grow">Waktu Trip</div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f3c844f88ca18d949cd03f6812822ed076caf1f9b14c64778150cbbff4ffb5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 my-auto w-3.5 aspect-[1.56] fill-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 justify-center whitespace-nowrap">
                                <div className="flex gap-2 px-16 py-4 bg-gray-200 rounded-xl max-md:px-5">
                                    <div>Harga</div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f3c844f88ca18d949cd03f6812822ed076caf1f9b14c64778150cbbff4ffb5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 my-auto w-3.5 aspect-[1.56] fill-indigo-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-4 text-lg font-bold leading-6 text-stone-300 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                            <div className="my-auto text-indigo-500">Harga :</div>
                            <div className="justify-center items-start px-4 py-3.5 bg-gray-200 rounded-xl max-md:pr-5">
                                Rp. Minimum
                            </div>
                            <div className="my-auto text-black">-</div>
                            <div className="justify-center px-4 py-3.5 bg-gray-200 rounded-xl">
                                Rp. Maksimum
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-9 text-lg font-bold leading-6 text-indigo-500 max-md:max-w-full">
                Harga Berikut Sudah Termasuk Hotel & Penginapan (Belum Termasuk Pajak)
            </div>
            <div className="px-5 mt-11 w-full max-w-[1302px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <Link to='/OpenPage'><img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8232aad4d06a3db8aff594c130e244bc8cd8b380d242f7773ebb9a54e0f6e6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8232aad4d06a3db8aff594c130e244bc8cd8b380d242f7773ebb9a54e0f6e6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8232aad4d06a3db8aff594c130e244bc8cd8b380d242f7773ebb9a54e0f6e6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8232aad4d06a3db8aff594c130e244bc8cd8b380d242f7773ebb9a54e0f6e6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8232aad4d06a3db8aff594c130e244bc8cd8b380d242f7773ebb9a54e0f6e6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8232aad4d06a3db8aff594c130e244bc8cd8b380d242f7773ebb9a54e0f6e6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8232aad4d06a3db8aff594c130e244bc8cd8b380d242f7773ebb9a54e0f6e6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8232aad4d06a3db8aff594c130e244bc8cd8b380d242f7773ebb9a54e0f6e6?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 mt-1 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"/>
                        </Link>
                        
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex overflow-hidden relative flex-col grow items-start pt-20 pr-20 pb-7 pl-6 mt-1 text-lg leading-7 text-indigo-500 whitespace-nowrap aspect-[0.8] max-md:px-5 max-md:mt-10">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/77c25b489517a9b3991ee906c7b2f4ebe2cf740fd47f70ec5387126c29439ec9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/77c25b489517a9b3991ee906c7b2f4ebe2cf740fd47f70ec5387126c29439ec9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77c25b489517a9b3991ee906c7b2f4ebe2cf740fd47f70ec5387126c29439ec9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/77c25b489517a9b3991ee906c7b2f4ebe2cf740fd47f70ec5387126c29439ec9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/77c25b489517a9b3991ee906c7b2f4ebe2cf740fd47f70ec5387126c29439ec9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77c25b489517a9b3991ee906c7b2f4ebe2cf740fd47f70ec5387126c29439ec9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/77c25b489517a9b3991ee906c7b2f4ebe2cf740fd47f70ec5387126c29439ec9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/77c25b489517a9b3991ee906c7b2f4ebe2cf740fd47f70ec5387126c29439ec9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="object-cover absolute inset-0 size-full"
                            />
                            <div className="relative mt-56 max-md:mt-10">Tebing</div>
                            <div className="relative mt-2">Apparalang</div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/49fde0f0ea3d84bb963ef850544d81a9d1abcdcf16d0e46b838667807124b412?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fde0f0ea3d84bb963ef850544d81a9d1abcdcf16d0e46b838667807124b412?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fde0f0ea3d84bb963ef850544d81a9d1abcdcf16d0e46b838667807124b412?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fde0f0ea3d84bb963ef850544d81a9d1abcdcf16d0e46b838667807124b412?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fde0f0ea3d84bb963ef850544d81a9d1abcdcf16d0e46b838667807124b412?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fde0f0ea3d84bb963ef850544d81a9d1abcdcf16d0e46b838667807124b412?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fde0f0ea3d84bb963ef850544d81a9d1abcdcf16d0e46b838667807124b412?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/49fde0f0ea3d84bb963ef850544d81a9d1abcdcf16d0e46b838667807124b412?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a92a360bef0196fe6b5be5fb3efa3392af0429a12482e3a12eafa89f091a467a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a92a360bef0196fe6b5be5fb3efa3392af0429a12482e3a12eafa89f091a467a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a92a360bef0196fe6b5be5fb3efa3392af0429a12482e3a12eafa89f091a467a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a92a360bef0196fe6b5be5fb3efa3392af0429a12482e3a12eafa89f091a467a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a92a360bef0196fe6b5be5fb3efa3392af0429a12482e3a12eafa89f091a467a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a92a360bef0196fe6b5be5fb3efa3392af0429a12482e3a12eafa89f091a467a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a92a360bef0196fe6b5be5fb3efa3392af0429a12482e3a12eafa89f091a467a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a92a360bef0196fe6b5be5fb3efa3392af0429a12482e3a12eafa89f091a467a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                </div>
            </div>
            <div className="px-5 mt-8 w-full max-w-[1302px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0006db1b3b8115592e8ac96517404d3e3ad14ff67ccf7bd0ec81cd1b5c8178d8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa6db5d26d59fd0147aab54b6967ba0a2850947112dd62284a2822603ec5951?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2375f47bd17a9196fbf9a71ac3a72769fb44c12a3ca19347510ae8ca0704289?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1f32031e4fa80bf863a8ffbe9cc28dc7fce0fc3e883717bafb8f822c09d5cd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                </div>
            </div>
            <div className="px-5 mt-9 w-full max-w-[1302px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f7b5ca98c7504e54c290d6d9368e0b1fa96478ede1ceea1e11ed2a8c460355ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7b5ca98c7504e54c290d6d9368e0b1fa96478ede1ceea1e11ed2a8c460355ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7b5ca98c7504e54c290d6d9368e0b1fa96478ede1ceea1e11ed2a8c460355ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7b5ca98c7504e54c290d6d9368e0b1fa96478ede1ceea1e11ed2a8c460355ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7b5ca98c7504e54c290d6d9368e0b1fa96478ede1ceea1e11ed2a8c460355ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7b5ca98c7504e54c290d6d9368e0b1fa96478ede1ceea1e11ed2a8c460355ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7b5ca98c7504e54c290d6d9368e0b1fa96478ede1ceea1e11ed2a8c460355ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7b5ca98c7504e54c290d6d9368e0b1fa96478ede1ceea1e11ed2a8c460355ef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 mt-1 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/86826f891573deac7bf12327bde2663a80097fba54125089c7f6e724438a565a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/86826f891573deac7bf12327bde2663a80097fba54125089c7f6e724438a565a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86826f891573deac7bf12327bde2663a80097fba54125089c7f6e724438a565a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/86826f891573deac7bf12327bde2663a80097fba54125089c7f6e724438a565a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/86826f891573deac7bf12327bde2663a80097fba54125089c7f6e724438a565a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86826f891573deac7bf12327bde2663a80097fba54125089c7f6e724438a565a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/86826f891573deac7bf12327bde2663a80097fba54125089c7f6e724438a565a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/86826f891573deac7bf12327bde2663a80097fba54125089c7f6e724438a565a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 mt-1 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2f9b510dbe456dbf8a0c8f6e91c15ce0c5d27abd7abd0a3e108112cf3d74cd7a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9b510dbe456dbf8a0c8f6e91c15ce0c5d27abd7abd0a3e108112cf3d74cd7a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9b510dbe456dbf8a0c8f6e91c15ce0c5d27abd7abd0a3e108112cf3d74cd7a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9b510dbe456dbf8a0c8f6e91c15ce0c5d27abd7abd0a3e108112cf3d74cd7a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9b510dbe456dbf8a0c8f6e91c15ce0c5d27abd7abd0a3e108112cf3d74cd7a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9b510dbe456dbf8a0c8f6e91c15ce0c5d27abd7abd0a3e108112cf3d74cd7a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9b510dbe456dbf8a0c8f6e91c15ce0c5d27abd7abd0a3e108112cf3d74cd7a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9b510dbe456dbf8a0c8f6e91c15ce0c5d27abd7abd0a3e108112cf3d74cd7a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b0ce9a48d7130dbbd50b1400c958fb2cdc5b7542dbfa9e5604724ee6c0447066?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0ce9a48d7130dbbd50b1400c958fb2cdc5b7542dbfa9e5604724ee6c0447066?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0ce9a48d7130dbbd50b1400c958fb2cdc5b7542dbfa9e5604724ee6c0447066?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0ce9a48d7130dbbd50b1400c958fb2cdc5b7542dbfa9e5604724ee6c0447066?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0ce9a48d7130dbbd50b1400c958fb2cdc5b7542dbfa9e5604724ee6c0447066?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0ce9a48d7130dbbd50b1400c958fb2cdc5b7542dbfa9e5604724ee6c0447066?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0ce9a48d7130dbbd50b1400c958fb2cdc5b7542dbfa9e5604724ee6c0447066?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0ce9a48d7130dbbd50b1400c958fb2cdc5b7542dbfa9e5604724ee6c0447066?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                </div>
            </div>
            <div className="px-5 mt-9 w-full max-w-[1302px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8e74710b0bf1a174a0b85d67aba9dfec1b5fe170b257f10775c6efafe77468d7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e74710b0bf1a174a0b85d67aba9dfec1b5fe170b257f10775c6efafe77468d7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e74710b0bf1a174a0b85d67aba9dfec1b5fe170b257f10775c6efafe77468d7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e74710b0bf1a174a0b85d67aba9dfec1b5fe170b257f10775c6efafe77468d7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e74710b0bf1a174a0b85d67aba9dfec1b5fe170b257f10775c6efafe77468d7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e74710b0bf1a174a0b85d67aba9dfec1b5fe170b257f10775c6efafe77468d7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e74710b0bf1a174a0b85d67aba9dfec1b5fe170b257f10775c6efafe77468d7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e74710b0bf1a174a0b85d67aba9dfec1b5fe170b257f10775c6efafe77468d7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 mt-1 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc02e7555c25f6875457bfb40ccea38973d318429258ebca9e0d8369b2d1d81a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc02e7555c25f6875457bfb40ccea38973d318429258ebca9e0d8369b2d1d81a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc02e7555c25f6875457bfb40ccea38973d318429258ebca9e0d8369b2d1d81a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc02e7555c25f6875457bfb40ccea38973d318429258ebca9e0d8369b2d1d81a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc02e7555c25f6875457bfb40ccea38973d318429258ebca9e0d8369b2d1d81a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc02e7555c25f6875457bfb40ccea38973d318429258ebca9e0d8369b2d1d81a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc02e7555c25f6875457bfb40ccea38973d318429258ebca9e0d8369b2d1d81a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc02e7555c25f6875457bfb40ccea38973d318429258ebca9e0d8369b2d1d81a?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow shrink-0 mt-1 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e008426061dcd6318027e923602e7071ec971286f97fc8febba9e24ee199b368?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e008426061dcd6318027e923602e7071ec971286f97fc8febba9e24ee199b368?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e008426061dcd6318027e923602e7071ec971286f97fc8febba9e24ee199b368?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e008426061dcd6318027e923602e7071ec971286f97fc8febba9e24ee199b368?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e008426061dcd6318027e923602e7071ec971286f97fc8febba9e24ee199b368?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e008426061dcd6318027e923602e7071ec971286f97fc8febba9e24ee199b368?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e008426061dcd6318027e923602e7071ec971286f97fc8febba9e24ee199b368?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e008426061dcd6318027e923602e7071ec971286f97fc8febba9e24ee199b368?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b9d2cc9c836bea71e054a85feab966b8daf1c3e031ff4207eeaf9e8dc44275be?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9d2cc9c836bea71e054a85feab966b8daf1c3e031ff4207eeaf9e8dc44275be?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9d2cc9c836bea71e054a85feab966b8daf1c3e031ff4207eeaf9e8dc44275be?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9d2cc9c836bea71e054a85feab966b8daf1c3e031ff4207eeaf9e8dc44275be?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9d2cc9c836bea71e054a85feab966b8daf1c3e031ff4207eeaf9e8dc44275be?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9d2cc9c836bea71e054a85feab966b8daf1c3e031ff4207eeaf9e8dc44275be?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9d2cc9c836bea71e054a85feab966b8daf1c3e031ff4207eeaf9e8dc44275be?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9d2cc9c836bea71e054a85feab966b8daf1c3e031ff4207eeaf9e8dc44275be?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="shrink-0 max-w-full aspect-[0.8] w-[295px] max-md:mt-10"
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-2 px-5 mt-7 text-sm font-bold leading-5 text-center text-gray-800 whitespace-nowrap">
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
            <Footer />
        </div>
    );
}


export default OTPages;