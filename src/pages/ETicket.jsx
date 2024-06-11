/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ETicket = () => {
    return (
        <div className="flex flex-col bg-white">
            <Header />
            <div className="flex gap-5 self-end mt-5 mr-32 text-lg font-bold leading-6 whitespace-nowrap max-md:flex-wrap max-md:mr-2.5">
                <div className="flex gap-2 items-center">
                    <div className="justify-center items-center self-stretch w-6 h-6 text-white rounded-full bg-neutral-400">
                        1
                    </div>
                    <div className="self-stretch my-auto text-black text-opacity-30">
                        Detail
                    </div>
                    <div className="shrink-0 self-stretch my-auto h-px bg-orange-500 border border-orange-500 border-solid w-[23px]" />
                </div>
                <div className="flex flex-auto gap-2 text-white">
                    <div className="justify-center items-center w-6 h-6 rounded-full bg-neutral-400">
                        2
                    </div>
                    <div className="flex-auto text-black text-opacity-30">Pembayaran</div>
                    <div className="shrink-0 my-auto h-px bg-orange-500 border border-orange-500 border-solid w-[23px]" />
                    <div className="justify-center items-center w-6 h-6 bg-indigo-500 rounded-full">
                        3
                    </div>
                    <div className="my-auto text-indigo-500">E-Ticket</div>
                </div>
            </div>
            <div className="flex flex-col self-center mt-1 w-full max-w-[1189px] max-md:max-w-full">
                <div className="flex gap-5 self-start leading-[150%]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/95a3d59f0d8bca3746ec988b30c4c863bfd39a6230b7a03e79a37fbdbd713388?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 self-start mt-1.5 aspect-square w-[52px]"
                    />
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                        <div className="text-4xl font-black text-orange-500 border-white border-solid border-[3px]">
                            E-Ticket
                        </div>
                        <div className="mt-4 text-lg font-bold text-indigo-500">
                            Silahkan unduh E-ticket Dibawah ini
                        </div>
                    </div>
                </div>
                <div className="self-end mt-14 max-w-full w-[979px] max-md:mt-10">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow py-7 w-full rounded-3xl shadow-sm bg-zinc-100 max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-3 self-start ml-6 text-2xl font-semibold leading-10 text-black max-md:ml-2.5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0df3cc9a073988b2edd641a78dfa2414e91d6f1cca3febb33d8a4a955618d2c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 aspect-square w-[42px]"
                                    />
                                    <div className="flex-auto my-auto">E - Ticket</div>
                                </div>
                                <div className="shrink-0 mt-2.5 h-px bg-orange-500 border border-orange-500 border-solid max-md:max-w-full" />
                                <div className="flex flex-col px-9 mt-8 text-sm max-md:px-5 max-md:max-w-full">
                                    <div className="font-bold leading-[150%] text-neutral-400">
                                        Detail Pemesanan
                                    </div>
                                    <div className="mt-5 font-medium leading-5 text-justify text-neutral-700">
                                        Paket Open Trip Pantai Tanjung Bira 3 Hari 2 Malam
                                        <br />& sudah termasuk
                                    </div>
                                </div>
                                <div className="px-8 pt-3.5 pb-6 mt-7 bg-zinc-300 max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow text-sm font-medium leading-5 text-neutral-400 max-md:mt-10">
                                                <div>Tanggal Yang Dipilih</div>
                                                <div className="mt-7">Slot Waktu</div>
                                                <div className="mt-8">Jumlah Peserta</div>
                                                <div className="mt-8 text-orange-500">ID Pemesanan</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow text-sm font-medium leading-5 text-neutral-700 max-md:mt-10">
                                                <div>1-3 Juni 2024</div>
                                                <div className="mt-8">15.00 WIB</div>
                                                <div className="mt-8">1 Dewasa</div>
                                                <div className="mt-8 text-orange-500">13042003</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col px-7 mt-4 text-sm font-medium leading-5 max-md:px-5 max-md:max-w-full">
                                    <div className="text-orange-500">Tamu</div>
                                    <div className="flex gap-5 justify-between mt-5">
                                        <div className="flex flex-col self-start whitespace-nowrap text-neutral-700">
                                            <div className="flex gap-2.5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd77b1017d41a731de7953dd764588cb5c76eed7f151a38cd80f1e5d1a675e85?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                    className="shrink-0 w-6 aspect-square"
                                                />
                                                <div className="flex-auto">Ny.Nurfitriana</div>
                                            </div>
                                            <div className="flex gap-2.5 mt-2.5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a938790cf4704506e77719ecfda1bbbd71fc0a5653d18df12ed33b1d5ba8052?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                    className="shrink-0 w-6 aspect-square"
                                                />
                                                <div className="flex-auto my-auto">
                                                    Nurfitriana@gmail.com
                                                </div>
                                            </div>
                                            <div className="flex gap-3.5 mt-2.5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/324acc4eb224f2783dd09c2e58e5d8c11a8dad889206b8d54d29696ea97bdaab?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                    className="shrink-0 w-4 aspect-square"
                                                />
                                                <div className="flex-auto my-auto">+6287889909000</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col text-indigo-500">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ced0dcd128cbedc5f410849d012a5b37d6b612e4a21351e9a5090b08d21aa6c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="self-center aspect-square w-[68px]"
                                            />
                                            <div className="mt-1.5">Unduh E-Ticket</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto text-4xl font-semibold text-black leading-[52.5px] max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fbb30301f767e060df472bfc4b6853560201f09bcd791430f5937b2dab2512f?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="self-center max-w-full aspect-square w-[204px]"
                                />
                                <div className="mt-1.5">Pembayaran Berhasil</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default ETicket;

