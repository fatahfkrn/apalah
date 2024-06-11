/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const DetailPemesanan = () => {
    return (
        <div className="flex flex-col bg-white">
            <Header />
            <div className="flex gap-5 self-end mt-5 mr-32 text-lg font-bold leading-6 whitespace-nowrap max-md:flex-wrap max-md:mr-2.5">
                <div className="flex gap-2 items-center">
                    <div className="justify-center items-center self-stretch w-6 h-6 text-white bg-indigo-500 rounded-full">
                        1
                    </div>
                    <div className="self-stretch my-auto text-indigo-500">Detail</div>
                    <div className="shrink-0 self-stretch my-auto h-px bg-orange-500 border border-orange-500 border-solid w-[23px]" />
                </div>
                <div className="flex flex-auto gap-2 text-white">
                    <div className="justify-center items-center w-6 h-6 rounded-full bg-neutral-400">
                        2
                    </div>
                    <div className="flex-auto text-zinc-400">Pembayaran</div>
                    <div className="shrink-0 my-auto h-px bg-orange-500 border border-orange-500 border-solid w-[23px]" />
                    <div className="justify-center items-center w-6 h-6 rounded-full bg-neutral-400">
                        3
                    </div>
                    <div className="my-auto text-zinc-400">E-Ticket</div>
                </div>
            </div>
            <div className="flex flex-col self-center mt-1 w-full max-w-[1296px] max-md:max-w-full">
                <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow leading-[150%] max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 self-start text-4xl font-black text-orange-500">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/95a3d59f0d8bca3746ec988b30c4c863bfd39a6230b7a03e79a37fbdbd713388?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 self-start mt-1.5 aspect-square w-[52px]"
                                    />
                                    <div className="flex-auto border-white border-solid border-[3px]">
                                        Pesanan Kamu
                                    </div>
                                </div>
                                <div className="flex flex-col items-start pl-20 mt-4 font-semibold max-md:pl-5 max-md:max-w-full">
                                    <div className="ml-4 text-lg font-bold text-indigo-500 max-md:max-w-full">
                                        Isi detail Anda dan tinjau pemesanan Anda.
                                    </div>
                                    <div className="mt-12 ml-4 text-2xl text-black max-md:mt-10 max-md:max-w-full">
                                        Detail Kontak
                                    </div>
                                    <div className="flex flex-col pt-6 pr-12 pb-12 pl-6 mt-7 ml-4 w-full shadow-sm bg-zinc-100 max-md:px-5 max-md:max-w-full">
                                        <div className="text-xl text-neutral-700 max-md:max-w-full">
                                            Nama Lengkap
                                        </div>
                                        <div className="justify-center items-start px-3.5 py-4 mt-3.5 text-base bg-white rounded-xl text-stone-300 max-md:pr-5 max-md:max-w-full">
                                            Isi Nama Lengkapmu Di sini
                                        </div>
                                        <div className="flex gap-5 mt-9 max-md:flex-wrap max-md:max-w-full">
                                            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
                                                <div className="text-xl text-neutral-700">
                                                    Nomor Handphone
                                                </div>
                                                <div className="flex gap-5 justify-between mt-3.5 text-base whitespace-nowrap bg-white rounded-xl text-stone-300">
                                                    <div className="flex gap-1 my-auto">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6caf05261551d5c1a2bc1139cc46089780ed361dcd8d705377e6a7acc29327b5?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                            className="shrink-0 aspect-square w-[18px]"
                                                        />
                                                        <div className="my-auto">+62</div>
                                                    </div>
                                                    <div className="shrink-0 h-12 border border-solid bg-neutral-300 border-neutral-300 w-[187px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col flex-1 grow shrink-0 whitespace-nowrap basis-0 w-fit">
                                                <div className="text-xl text-neutral-700">Email</div>
                                                <div className="justify-center items-start px-7 py-4 mt-5 text-base bg-white rounded-xl text-stone-300 max-md:px-5">
                                                    example@gmail.com
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-7 ml-4 text-2xl text-black max-md:max-w-full">
                                        Permintaan Khusus (Opsional)
                                    </div>
                                    <div className="flex flex-col justify-center px-6 py-5 mt-5 ml-4 max-w-full text-base shadow-sm bg-zinc-100 text-stone-300 w-[694px] max-md:px-5">
                                        <div className="justify-center items-start px-3.5 py-9 bg-white rounded-xl max-md:pr-5 max-md:max-w-full">
                                            Contoh : Saya tidak suka seafood
                                        </div>
                                    </div>
                                    <div className="mt-10 ml-4 text-2xl text-black max-md:max-w-full">
                                        Detail Harga
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch py-7 my-auto w-full rounded-3xl shadow-sm bg-zinc-100 max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-3 self-center text-2xl font-semibold leading-10 text-black">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0df3cc9a073988b2edd641a78dfa2414e91d6f1cca3febb33d8a4a955618d2c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 aspect-square w-[42px]"
                                    />
                                    <div className="flex-auto my-auto">Ringkasan Pemesanan</div>
                                </div>
                                <div className="shrink-0 mt-2.5 h-px bg-orange-500 border border-orange-500 border-solid max-md:max-w-full" />
                                <div className="mx-9 mt-7 text-sm font-medium leading-5 text-neutral-700 max-md:mx-2.5">
                                    Paket Open Trip Pantai Tanjung Bira 3 Hari 2 Malam
                                    <br />& sudah termasuk
                                </div>
                                <div className="flex gap-4 mx-9 mt-4 font-medium max-md:mx-2.5">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/89e01baf8a64601f2de0273fdf65923177d5e131e1d517a251bfeba9a523a717?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/89e01baf8a64601f2de0273fdf65923177d5e131e1d517a251bfeba9a523a717?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/89e01baf8a64601f2de0273fdf65923177d5e131e1d517a251bfeba9a523a717?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/89e01baf8a64601f2de0273fdf65923177d5e131e1d517a251bfeba9a523a717?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/89e01baf8a64601f2de0273fdf65923177d5e131e1d517a251bfeba9a523a717?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/89e01baf8a64601f2de0273fdf65923177d5e131e1d517a251bfeba9a523a717?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/89e01baf8a64601f2de0273fdf65923177d5e131e1d517a251bfeba9a523a717?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/89e01baf8a64601f2de0273fdf65923177d5e131e1d517a251bfeba9a523a717?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 max-w-full border border-indigo-500 border-solid aspect-[1.01] w-[130px]"
                                    />
                                    <div className="flex flex-col self-end mt-12 max-md:mt-10">
                                        <div className="text-xs leading-4 text-justify text-neutral-700">
                                            Paket wisata + Penginapan Hotel Bintang 4 serta sarapan.
                                        </div>
                                        <div className="self-end mt-11 text-sm leading-5 text-indigo-500 max-md:mt-10">
                                            Melihat Rincian
                                        </div>
                                    </div>
                                </div>
                                <div className="px-8 pt-3.5 pb-6 mt-8 bg-zinc-300 max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow text-sm font-medium leading-5 text-neutral-400 max-md:mt-10">
                                                <div>Tanggal Yang Dipilih</div>
                                                <div className="mt-7">Slot Waktu</div>
                                                <div className="mt-8">Jumlah Peserta</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow text-sm font-medium leading-5 text-neutral-700 max-md:mt-10">
                                                <div>1-3 Juni 2024</div>
                                                <div className="mt-8">15.00 WIB</div>
                                                <div className="mt-8">1 Dewasa</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-5 ml-3.5 max-w-full text-sm font-medium leading-5 text-neutral-700 w-[304px] max-md:ml-2.5">
                                    <div className="flex gap-2.5 items-start">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fec214111b791a17ebecb30c975b3376a7c1b607a313872cb04054fdeded89d2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-6 aspect-square"
                                        />
                                        <div className="flex-auto mt-2.5">
                                            Berlaku pada tanggal 31 Mei 2024
                                        </div>
                                    </div>
                                    <div className="flex gap-2.5 mt-3">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c42b6775e170111bdb1fcf7f24a66524b2d7a12377bc2f481ef574e76eb5f188?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-6 aspect-square"
                                        />
                                        <div className="flex-auto my-auto">
                                            Maksimal Booking H-7 Keberangkatan
                                        </div>
                                    </div>
                                    <div className="flex gap-2.5 mt-2">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bd89a6b633a5d08dcabde5e0680c4b535c22f6c1e93ffbe2927390163d56d23?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-6 aspect-square"
                                        />
                                        <div className="flex-auto">Tidak bisa refund</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pt-9 pr-14 pb-6 pl-6 mt-5 ml-24 max-w-full font-semibold shadow-sm bg-zinc-100 leading-[150%] w-[694px] max-md:px-5">
                    <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                        <div className="flex-auto text-base text-black">
                            Harga Yang Anda Bayar
                        </div>
                        <div className="flex-auto text-2xl text-orange-500">
                            Rp 1. 150.000
                        </div>
                    </div>
                    <div className="justify-center items-start px-3.5 py-4 mt-7 text-base bg-white rounded-xl text-stone-300 max-md:pr-5 max-md:max-w-full">
                        Ket : 1 Orang Dewasa
                    </div>
                    <div className="self-center px-6 pt-4 pb-2.5 mt-9 text-2xl font-extrabold text-center text-white rounded-lg shadow-sm bg-orange-500 bg-opacity-80 max-md:px-5">
                        <Link to='/Pembayaran'>Metode Pembayaran</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DetailPemesanan;
