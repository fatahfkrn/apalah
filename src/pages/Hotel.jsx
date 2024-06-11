/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Hotel = () => {
    return (
        <div className="flex flex-col bg-white">
            <Header />
            <div className="flex overflow-hidden relative flex-col items-center px-16 pt-20 pb-5 w-full leading-[150%] min-h-[525px] max-md:px-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/225e81c745c9bdc3e2da33c173d16c343af13c5150bc1191568234b88fd78dd4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/225e81c745c9bdc3e2da33c173d16c343af13c5150bc1191568234b88fd78dd4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/225e81c745c9bdc3e2da33c173d16c343af13c5150bc1191568234b88fd78dd4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/225e81c745c9bdc3e2da33c173d16c343af13c5150bc1191568234b88fd78dd4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/225e81c745c9bdc3e2da33c173d16c343af13c5150bc1191568234b88fd78dd4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/225e81c745c9bdc3e2da33c173d16c343af13c5150bc1191568234b88fd78dd4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/225e81c745c9bdc3e2da33c173d16c343af13c5150bc1191568234b88fd78dd4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/225e81c745c9bdc3e2da33c173d16c343af13c5150bc1191568234b88fd78dd4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col items-center mt-20 w-full max-w-[1094px] max-md:mt-10 max-md:max-w-full">
                    <div className="self-stretch text-5xl font-black text-white max-md:max-w-full max-md:text-4xl">
                        Hotel di <span className="">Bulukumba</span> & Tempat Menginap
                    </div>
                    <div className="mt-1 text-lg font-bold text-white max-md:max-w-full">
                        Masukkan Tanggal Untuk Menemukan Harga Terbaik
                    </div>
                    <div className="flex gap-5 mt-5 max-w-full w-[968px] max-md:flex-wrap">
                        <div className="flex flex-col flex-1 justify-center whitespace-nowrap">
                            <div className="flex gap-2.5 items-start py-2.5 pr-20 pl-3 bg-white rounded-md max-md:pr-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0ec2e354d731b00dad7b9111e5489be254df741a5b77c7068dd1b94baf9f1c2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
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
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/09402217e742b8c408c5aadc0ca57506df32a1b65ee630712d7a13c402d37828?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
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
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0548e61164b95d818656bffa90104ae84c20d25a4da9b3b5e17e48e52b089496?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
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
                    <div className="mt-28 text-lg font-bold text-white max-md:mt-10">
                        Ingin Melihat Restoran?
                    </div>
                    <div className="justify-center px-12 py-3 mt-1.5 text-sm font-bold text-orange-500 bg-white rounded-md max-md:px-5">
                        <Link to='/Restoran'>Click Disini</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center pr-7 pl-16 mt-5 w-full max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 w-full text-7xl font-black text-orange-500 leading-[106.5px] max-w-[1092px] max-md:flex-wrap max-md:max-w-full max-md:text-4xl">
                    <div className="flex-auto border-white border-solid border-[3px] max-md:max-w-full max-md:text-4xl">
                        HOTEL & PENGINAPAN
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5291ef8f8384e4dde5ccd8902ebd7a8fd07f1808b1b15ff8f6dfa5bc9b74c7c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 my-auto aspect-square w-[50px]"
                    />
                </div>
                <div className="self-stretch px-14 py-7 mt-10 bg-white rounded-xl border-orange-500 border-solid shadow-sm border-[3px] max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                            <div className="flex grow gap-5 text-lg font-bold leading-6 text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10">
                                <div className="flex flex-col flex-1 justify-center">
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
                                    <div className="flex gap-2.5 px-14 py-3.5 bg-gray-200 rounded-xl max-md:px-5">
                                        <div>Kategori</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f3c844f88ca18d949cd03f6812822ed076caf1f9b14c64778150cbbff4ffb5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 my-auto w-3.5 aspect-[1.56] fill-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 justify-center">
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
                            <div className="flex grow gap-4 text-lg font-bold leading-6 text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <div className="my-auto text-indigo-500">Harga :</div>
                                <div className="justify-center items-start px-4 py-3.5 bg-gray-200 rounded-xl max-md:pr-5">
                                    Rp. Minimum
                                </div>
                                <div className="my-auto">-</div>
                                <div className="justify-center px-4 py-3.5 bg-gray-200 rounded-xl">
                                    Rp. Maksimum
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-9 ml-6 text-lg font-bold leading-6 text-indigo-500 max-md:max-w-full">
                    Harga Berikut Sudah Termasuk Sarapan & Heat Water (Belum Termasuk
                    Pajak)
                </div>
                <div className="py-1 pr-20 mt-10 ml-6 max-w-full rounded-xl shadow-sm bg-zinc-100 w-[1116px] max-md:pr-5 max-md:mt-10">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bbcbb95060af770bc1257687d0d2eef0dc327469cc8d938d6ee159eac23e4685?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbcbb95060af770bc1257687d0d2eef0dc327469cc8d938d6ee159eac23e4685?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbcbb95060af770bc1257687d0d2eef0dc327469cc8d938d6ee159eac23e4685?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbcbb95060af770bc1257687d0d2eef0dc327469cc8d938d6ee159eac23e4685?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbcbb95060af770bc1257687d0d2eef0dc327469cc8d938d6ee159eac23e4685?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbcbb95060af770bc1257687d0d2eef0dc327469cc8d938d6ee159eac23e4685?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbcbb95060af770bc1257687d0d2eef0dc327469cc8d938d6ee159eac23e4685?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bbcbb95060af770bc1257687d0d2eef0dc327469cc8d938d6ee159eac23e4685?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="grow w-full aspect-[1.04] max-md:mt-10"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto font-bold leading-[150%] max-md:mt-10">
                                <div className="text-2xl text-black">Sunshine Guest Hotel</div>
                                <div className="justify-center px-4 py-5 mt-16 text-xl text-white whitespace-nowrap bg-orange-500 rounded-xl max-md:mt-10">
                                    Rp2.500.000/Malam
                                </div>
                                <div className="mt-12 text-base font-medium leading-6 text-center text-neutral-400 max-md:mt-10">
                                    Harga Di atas Dapat <br />
                                    Berubah Sesuai Tanggal Pilihan
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                            <div className="flex gap-5 items-start self-stretch my-auto max-md:mt-10">
                                <div className="shrink-0 w-px border border-dashed bg-stone-300 border-stone-300 h-[257px]" />
                                <div className="flex flex-col grow shrink-0 mt-4 basis-0 w-fit">
                                    <div className="text-sm font-semibold leading-5 text-zinc-500">
                                        Penginapan
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <div className="flex gap-0.5">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3afd175c46512e942941053d0b52c99954840393d66f4d91f1d376fa2cc33bef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fb34741a455855ed242cad52ce6bd93cb0f3a7554b40165cdb6157524b1a463?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c6e9dd4d8e52080f8dc02724d9bacba281d1b6b8f73415f01bed474aa3d44a4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0662de3e8f70ec1adacd2be07b625875d3df1139e34e0e3a39913d53fcc503?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 aspect-[1.06] fill-orange-500 w-[17px]"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/755280a97964d772c4b7bdd450c3ac70347dba14bc1e2d587f21449c7e07e4dd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                        </div>
                                        <div className="flex-auto my-auto text-base font-medium leading-6 text-center text-neutral-400">
                                            50 Ulasan
                                        </div>
                                    </div>
                                    <div className="mt-6 text-base font-medium leading-6 text-neutral-400">
                                        Paling Hemat No. 1 Dari 20 Tempat Penginapan di Bulukumba
                                        <br />
                                        Non Refundable
                                        <br />
                                        Pendaftaran Peserta Maksimal H-7 Sebelum Tanggal
                                        Keberangkatan
                                    </div>
                                    <div className="justify-center self-center px-4 py-3 mt-9 text-lg font-bold leading-6 text-white whitespace-nowrap rounded-md bg-black bg-opacity-50">
                                        <Link to='/HotelDetail'>Selengkapnya</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-1 pr-20 mt-9 ml-6 max-w-full rounded-xl shadow-sm bg-zinc-100 w-[1116px] max-md:pr-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d3e51bf483faacdeb8642115cbce077c67986b6b3edcf208e4bc107955bc95ec?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3e51bf483faacdeb8642115cbce077c67986b6b3edcf208e4bc107955bc95ec?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3e51bf483faacdeb8642115cbce077c67986b6b3edcf208e4bc107955bc95ec?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3e51bf483faacdeb8642115cbce077c67986b6b3edcf208e4bc107955bc95ec?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3e51bf483faacdeb8642115cbce077c67986b6b3edcf208e4bc107955bc95ec?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3e51bf483faacdeb8642115cbce077c67986b6b3edcf208e4bc107955bc95ec?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3e51bf483faacdeb8642115cbce077c67986b6b3edcf208e4bc107955bc95ec?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3e51bf483faacdeb8642115cbce077c67986b6b3edcf208e4bc107955bc95ec?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="grow w-full aspect-[1.04] max-md:mt-10"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto font-bold leading-[150%] max-md:mt-10">
                                <div className="text-2xl text-black">Pajoka Sulawesi Villa</div>
                                <div className="justify-center px-4 py-5 mt-16 text-xl text-white whitespace-nowrap bg-orange-500 rounded-xl max-md:mt-10">
                                    Rp2.600.000/Malam
                                </div>
                                <div className="mt-12 text-base font-medium leading-6 text-center text-neutral-400 max-md:mt-10">
                                    Harga Di atas Dapat <br />
                                    Berubah Sesuai Tanggal Pilihan
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                            <div className="flex gap-5 items-start self-stretch my-auto max-md:mt-10">
                                <div className="shrink-0 w-px border border-dashed bg-stone-300 border-stone-300 h-[257px]" />
                                <div className="flex flex-col grow shrink-0 mt-4 basis-0 w-fit">
                                    <div className="text-sm font-semibold leading-5 text-zinc-500">
                                        Penginapan
                                    </div>
                                    <div className="flex gap-2.5 mt-2">
                                        <div className="flex gap-0.5">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3afd175c46512e942941053d0b52c99954840393d66f4d91f1d376fa2cc33bef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fb34741a455855ed242cad52ce6bd93cb0f3a7554b40165cdb6157524b1a463?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c6e9dd4d8e52080f8dc02724d9bacba281d1b6b8f73415f01bed474aa3d44a4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0662de3e8f70ec1adacd2be07b625875d3df1139e34e0e3a39913d53fcc503?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 aspect-[1.06] fill-orange-500 w-[17px]"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/755280a97964d772c4b7bdd450c3ac70347dba14bc1e2d587f21449c7e07e4dd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                        </div>
                                        <div className="flex-auto my-auto text-base font-medium leading-6 text-center text-neutral-400">
                                            20 Ulasan
                                        </div>
                                    </div>
                                    <div className="mt-7 text-base font-medium leading-6 text-neutral-400">
                                        Paling Hemat No. 1 Dari 20 Tempat Penginapan di Bulukumba
                                        <br />
                                        Non Refundable
                                        <br />
                                        Pendaftaran Peserta Maksimal H-7 Sebelum Tanggal
                                        Keberangkatan
                                    </div>
                                    <div className="justify-center self-center px-4 py-3 mt-9 text-lg font-bold leading-6 text-white whitespace-nowrap rounded-md bg-black bg-opacity-50">
                                        Selengkapnya
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-1 pr-20 mt-9 ml-6 max-w-full rounded-xl shadow-sm bg-zinc-100 w-[1116px] max-md:pr-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc3a862ba2790dbed46d257a8781cd1e852eb5d0f1f7f7c2a18d260a2c6c2178?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc3a862ba2790dbed46d257a8781cd1e852eb5d0f1f7f7c2a18d260a2c6c2178?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc3a862ba2790dbed46d257a8781cd1e852eb5d0f1f7f7c2a18d260a2c6c2178?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc3a862ba2790dbed46d257a8781cd1e852eb5d0f1f7f7c2a18d260a2c6c2178?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc3a862ba2790dbed46d257a8781cd1e852eb5d0f1f7f7c2a18d260a2c6c2178?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc3a862ba2790dbed46d257a8781cd1e852eb5d0f1f7f7c2a18d260a2c6c2178?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc3a862ba2790dbed46d257a8781cd1e852eb5d0f1f7f7c2a18d260a2c6c2178?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc3a862ba2790dbed46d257a8781cd1e852eb5d0f1f7f7c2a18d260a2c6c2178?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="grow w-full aspect-[1.04] max-md:mt-10"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto font-bold leading-[150%] max-md:mt-10">
                                <div className="text-2xl text-black">Hakuna Matata Resort</div>
                                <div className="justify-center px-4 py-5 mt-16 text-xl text-white whitespace-nowrap bg-orange-500 rounded-xl max-md:pr-5 max-md:mt-10">
                                    Rp2.700.000/Malam
                                </div>
                                <div className="mt-12 text-base font-medium leading-6 text-center text-neutral-400 max-md:mt-10">
                                    Harga Di atas Dapat <br />
                                    Berubah Sesuai Tanggal Pilihan
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                            <div className="flex gap-5 items-start self-stretch my-auto max-md:mt-10">
                                <div className="shrink-0 w-px border border-dashed bg-stone-300 border-stone-300 h-[257px]" />
                                <div className="flex flex-col grow shrink-0 mt-4 basis-0 w-fit">
                                    <div className="text-sm font-semibold leading-5 text-zinc-500">
                                        Penginapan
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <div className="flex gap-0.5">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3afd175c46512e942941053d0b52c99954840393d66f4d91f1d376fa2cc33bef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fb34741a455855ed242cad52ce6bd93cb0f3a7554b40165cdb6157524b1a463?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c6e9dd4d8e52080f8dc02724d9bacba281d1b6b8f73415f01bed474aa3d44a4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0662de3e8f70ec1adacd2be07b625875d3df1139e34e0e3a39913d53fcc503?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 aspect-[1.06] fill-orange-500 w-[17px]"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/755280a97964d772c4b7bdd450c3ac70347dba14bc1e2d587f21449c7e07e4dd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                        </div>
                                        <div className="flex-auto my-auto text-base font-medium leading-6 text-center text-neutral-400">
                                            50 Ulasan
                                        </div>
                                    </div>
                                    <div className="mt-7 text-base font-medium leading-6 text-neutral-400">
                                        Paling Hemat No. 1 Dari 20 Tempat Penginapan di Bulukumba
                                        <br />
                                        Non Refundable
                                        <br />
                                        Pendaftaran Peserta Maksimal H-7 Sebelum Tanggal
                                        Keberangkatan
                                    </div>
                                    <div className="justify-center self-center px-4 py-3 mt-9 text-lg font-bold leading-6 text-white whitespace-nowrap rounded-md bg-black bg-opacity-50">
                                        Selengkapnya
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-1 pr-20 mt-9 ml-6 max-w-full rounded-xl shadow-sm bg-zinc-100 w-[1116px] max-md:pr-5">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5002782a0e35cb507c4a999974ddadae864f57cea75b11c4f2a90402de96cdc1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5002782a0e35cb507c4a999974ddadae864f57cea75b11c4f2a90402de96cdc1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5002782a0e35cb507c4a999974ddadae864f57cea75b11c4f2a90402de96cdc1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5002782a0e35cb507c4a999974ddadae864f57cea75b11c4f2a90402de96cdc1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5002782a0e35cb507c4a999974ddadae864f57cea75b11c4f2a90402de96cdc1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5002782a0e35cb507c4a999974ddadae864f57cea75b11c4f2a90402de96cdc1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5002782a0e35cb507c4a999974ddadae864f57cea75b11c4f2a90402de96cdc1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5002782a0e35cb507c4a999974ddadae864f57cea75b11c4f2a90402de96cdc1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="grow w-full aspect-[1.04] max-md:mt-10"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto font-bold leading-[150%] max-md:mt-10">
                                <div className="text-2xl text-black">Hotel Agri Sulawesi</div>
                                <div className="justify-center px-4 py-5 mt-16 text-xl text-white whitespace-nowrap bg-orange-500 rounded-xl max-md:mt-10">
                                    Rp2.800.000/Malam
                                </div>
                                <div className="mt-12 text-base font-medium leading-6 text-center text-neutral-400 max-md:mt-10">
                                    Harga Di atas Dapat <br />
                                    Berubah Sesuai Tanggal Pilihan
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                            <div className="flex gap-5 items-start self-stretch my-auto max-md:mt-10">
                                <div className="shrink-0 w-px border border-dashed bg-stone-300 border-stone-300 h-[257px]" />
                                <div className="flex flex-col grow shrink-0 mt-4 basis-0 w-fit">
                                    <div className="text-sm font-semibold leading-5 text-zinc-500">
                                        Penginapan
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <div className="flex gap-0.5">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3afd175c46512e942941053d0b52c99954840393d66f4d91f1d376fa2cc33bef?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fb34741a455855ed242cad52ce6bd93cb0f3a7554b40165cdb6157524b1a463?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c6e9dd4d8e52080f8dc02724d9bacba281d1b6b8f73415f01bed474aa3d44a4?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0662de3e8f70ec1adacd2be07b625875d3df1139e34e0e3a39913d53fcc503?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 aspect-[1.06] fill-orange-500 w-[17px]"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/755280a97964d772c4b7bdd450c3ac70347dba14bc1e2d587f21449c7e07e4dd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 w-4 aspect-square fill-orange-500"
                                            />
                                        </div>
                                        <div className="flex-auto my-auto text-base font-medium leading-6 text-center text-neutral-400">
                                            50 Ulasan
                                        </div>
                                    </div>
                                    <div className="mt-7 text-base font-medium leading-6 text-neutral-400">
                                        Paling Hemat No. 1 Dari 20 Tempat Penginapan di Bulukumba
                                        <br />
                                        Non Refundable
                                        <br />
                                        Pendaftaran Peserta Maksimal H-7 Sebelum Tanggal
                                        Keberangkatan
                                    </div>
                                    <div className="justify-center self-center px-4 py-3 mt-8 text-lg font-bold leading-6 text-white whitespace-nowrap rounded-md bg-black bg-opacity-50">
                                        Selengkapnya
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 mt-7 ml-6 text-sm font-bold leading-5 text-center text-gray-800 whitespace-nowrap">
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

export default Hotel;
