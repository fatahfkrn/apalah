/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";



const Pembayaran = () => {
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
                    <div className="justify-center items-center w-6 h-6 bg-indigo-500 rounded-full">
                        2
                    </div>
                    <div className="flex-auto text-indigo-500">Pembayaran</div>
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
                            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 self-start leading-[150%] max-md:flex-wrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/18f2d94993549538211ecbe2384afcbaba2fd64dc1835cb3c7580aa76682be02?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 self-start mt-1.5 aspect-square w-[52px]"
                                    />
                                    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                                        <div className="text-4xl font-black text-orange-500 border-white border-solid border-[3px]">
                                            Pembayaran
                                        </div>
                                        <div className="mt-4 text-lg font-bold text-indigo-500">
                                            Silahkan Pilih Metode Pembayaran Di bawah ini
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start pl-20 mt-10 max-md:pl-5 max-md:max-w-full">
                                    <div className="flex flex-col ml-4 w-full max-md:max-w-full">
                                        <div className="flex gap-5 px-3.5 py-4 w-full rounded-xl shadow-sm bg-zinc-300 bg-opacity-50 max-md:flex-wrap max-md:max-w-full">
                                            <div className="flex flex-1 gap-3 self-start mt-1.5 text-base font-semibold leading-6 text-black">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e1fbe2a441fc1c46ead005cc6a561aecb236b079864c8edce7236817d91f3e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                    className="shrink-0 aspect-square w-[21px]"
                                                />
                                                <div className="flex-auto my-auto">Virtual Account</div>
                                            </div>
                                            <div className="flex flex-1 gap-1.5">
                                                <img
                                                    loading="lazy"
                                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8885851417c9bc896476c2c91e5abec41bb981a63ca540649a5178c6d85666b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8885851417c9bc896476c2c91e5abec41bb981a63ca540649a5178c6d85666b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8885851417c9bc896476c2c91e5abec41bb981a63ca540649a5178c6d85666b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8885851417c9bc896476c2c91e5abec41bb981a63ca540649a5178c6d85666b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8885851417c9bc896476c2c91e5abec41bb981a63ca540649a5178c6d85666b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8885851417c9bc896476c2c91e5abec41bb981a63ca540649a5178c6d85666b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8885851417c9bc896476c2c91e5abec41bb981a63ca540649a5178c6d85666b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8885851417c9bc896476c2c91e5abec41bb981a63ca540649a5178c6d85666b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                    className="shrink-0 aspect-[2.94] w-[76px]"
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/20fad98466960852e5a2a39e1fc517e119d3dbae387888f170c2311d3843a1ba?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fad98466960852e5a2a39e1fc517e119d3dbae387888f170c2311d3843a1ba?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fad98466960852e5a2a39e1fc517e119d3dbae387888f170c2311d3843a1ba?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fad98466960852e5a2a39e1fc517e119d3dbae387888f170c2311d3843a1ba?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fad98466960852e5a2a39e1fc517e119d3dbae387888f170c2311d3843a1ba?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fad98466960852e5a2a39e1fc517e119d3dbae387888f170c2311d3843a1ba?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fad98466960852e5a2a39e1fc517e119d3dbae387888f170c2311d3843a1ba?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/20fad98466960852e5a2a39e1fc517e119d3dbae387888f170c2311d3843a1ba?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                    className="shrink-0 my-auto aspect-[2.63] w-[58px]"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-5 justify-between px-5 py-3 mt-8 w-full text-base font-semibold leading-6 text-black rounded-xl shadow-sm bg-zinc-300 bg-opacity-50 max-md:flex-wrap max-md:max-w-full">
                                            <div className="flex gap-3 my-auto">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/58bd0410531d40c591c0c8f74b4a08f2f98378fb80b1ba2d3a7fa920795ec12d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                    className="shrink-0 aspect-square w-[21px]"
                                                />
                                                <div className="flex-auto">ATM/Bank Lain</div>
                                            </div>
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/be861b6a0b6666167f48b3f8c2b6e7ae0f8c1543a7ce58e30e8696d454d03e09?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/be861b6a0b6666167f48b3f8c2b6e7ae0f8c1543a7ce58e30e8696d454d03e09?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be861b6a0b6666167f48b3f8c2b6e7ae0f8c1543a7ce58e30e8696d454d03e09?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/be861b6a0b6666167f48b3f8c2b6e7ae0f8c1543a7ce58e30e8696d454d03e09?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/be861b6a0b6666167f48b3f8c2b6e7ae0f8c1543a7ce58e30e8696d454d03e09?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/be861b6a0b6666167f48b3f8c2b6e7ae0f8c1543a7ce58e30e8696d454d03e09?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/be861b6a0b6666167f48b3f8c2b6e7ae0f8c1543a7ce58e30e8696d454d03e09?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/be861b6a0b6666167f48b3f8c2b6e7ae0f8c1543a7ce58e30e8696d454d03e09?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 aspect-[1.82] w-[60px]"
                                            />
                                        </div>
                                        <div className="flex gap-5 justify-between px-5 py-4 mt-8 w-full text-base font-semibold leading-6 text-black rounded-xl shadow-sm bg-zinc-300 bg-opacity-50 max-md:flex-wrap max-md:max-w-full">
                                            <div className="flex gap-3 my-auto">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9878afa1aecf28c1903fed832c0d23cd2ebd45092323d509d6914b723c1fc19c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                    className="shrink-0 aspect-square w-[21px]"
                                                />
                                                <div className="flex-auto">Kartu Kredit/Debit</div>
                                            </div>
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d4e4511eab8673899122c5ad015585c792e79ab1d6823a2dcda8a7aa34e55a20?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e4511eab8673899122c5ad015585c792e79ab1d6823a2dcda8a7aa34e55a20?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e4511eab8673899122c5ad015585c792e79ab1d6823a2dcda8a7aa34e55a20?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e4511eab8673899122c5ad015585c792e79ab1d6823a2dcda8a7aa34e55a20?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e4511eab8673899122c5ad015585c792e79ab1d6823a2dcda8a7aa34e55a20?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e4511eab8673899122c5ad015585c792e79ab1d6823a2dcda8a7aa34e55a20?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e4511eab8673899122c5ad015585c792e79ab1d6823a2dcda8a7aa34e55a20?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e4511eab8673899122c5ad015585c792e79ab1d6823a2dcda8a7aa34e55a20?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                                className="shrink-0 aspect-[3.23] w-[78px]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-5 px-9 py-7 mt-36 ml-4 text-2xl font-semibold leading-10 rounded-3xl shadow-sm bg-zinc-100 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                        <div className="flex-auto text-black">Total Harga </div>
                                        <div className="flex-auto text-orange-500">
                                            Rp 1. 150.000
                                        </div>
                                    </div>
                                    <div className="items-center px-16 pt-4 pb-2.5 mt-14 ml-4 text-2xl font-extrabold leading-10 text-center text-white whitespace-nowrap rounded-lg shadow-sm bg-orange-500 bg-opacity-80 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                        <Link to='/ETicket'>Bayar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col py-7 mt-12 w-full rounded-3xl shadow-sm bg-zinc-100 max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-3 self-center text-2xl font-semibold leading-10 text-black">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0df3cc9a073988b2edd641a78dfa2414e91d6f1cca3febb33d8a4a955618d2c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 aspect-square w-[42px]"
                                    />
                                    <div className="flex-auto my-auto">Ringkasan Pemesanan</div>
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
                                <div className="flex flex-col mt-4 ml-6 max-w-full text-sm font-medium leading-5 whitespace-nowrap text-neutral-700 w-[198px] max-md:ml-2.5">
                                    <div className="text-orange-500">Tamu</div>
                                    <div className="flex gap-2.5 mt-5">
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
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a838214f01955fea5e17ae42c1d1a8b09e2d23bb9ad2442fa570801d8fc3aea1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-4 aspect-square"
                                        />
                                        <div className="flex-auto my-auto">+6287889909000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-start mt-6 ml-24 text-base font-medium leading-6 capitalize text-neutral-400 max-md:max-w-full">
                    Dengan Tetap Membayar, Anda telah menyetujui syarat & ketentuan dan
                    kebijakan privasi{" "}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Pembayaran;
