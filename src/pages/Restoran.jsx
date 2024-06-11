/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Restoran = () => {
    return (
        <div className="flex flex-col items-center bg-white">
            {/* <div className="flex flex-col justify-center self-stretch w-full max-md:max-w-full">
                <div className="px-9 pt-1.5 pb-7 w-full bg-white shadow-sm max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-sm font-semibold leading-5 text-indigo-500 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39d50a430dc2d7cf7feeeb563cb0a7d19f21cbf2d2e474db08755f13532714c3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39d50a430dc2d7cf7feeeb563cb0a7d19f21cbf2d2e474db08755f13532714c3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39d50a430dc2d7cf7feeeb563cb0a7d19f21cbf2d2e474db08755f13532714c3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39d50a430dc2d7cf7feeeb563cb0a7d19f21cbf2d2e474db08755f13532714c3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39d50a430dc2d7cf7feeeb563cb0a7d19f21cbf2d2e474db08755f13532714c3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39d50a430dc2d7cf7feeeb563cb0a7d19f21cbf2d2e474db08755f13532714c3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39d50a430dc2d7cf7feeeb563cb0a7d19f21cbf2d2e474db08755f13532714c3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39d50a430dc2d7cf7feeeb563cb0a7d19f21cbf2d2e474db08755f13532714c3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="self-center max-w-full aspect-[1.47] w-[123px]"
                                />
                                <div>
                                    Discover<span className="text-indigo-500">Bulukumba.Com</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                            <div className="flex gap-5 justify-between self-stretch my-auto text-2xl font-semibold leading-9 text-indigo-500 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                                <div>Beranda</div>
                                <div className="overflow-hidden relative flex-col justify-center self-start aspect-[5.59]">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24c0a08a-b615-4403-81ac-3ec8cdf2bed8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c0a08a-b615-4403-81ac-3ec8cdf2bed8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c0a08a-b615-4403-81ac-3ec8cdf2bed8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c0a08a-b615-4403-81ac-3ec8cdf2bed8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c0a08a-b615-4403-81ac-3ec8cdf2bed8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c0a08a-b615-4403-81ac-3ec8cdf2bed8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c0a08a-b615-4403-81ac-3ec8cdf2bed8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c0a08a-b615-4403-81ac-3ec8cdf2bed8?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="object-cover absolute inset-0 size-full"
                                    />
                                    Layanan
                                </div>
                                <div>Blog</div>
                                <div>Profil</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
                            <div className="flex gap-5 self-stretch my-auto text-xl font-semibold leading-7 text-white whitespace-nowrap max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce6206535910da9742235980ab7f996d341c3a8288264b7a4e621e555389690c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 self-start aspect-[0.95] w-[39px]"
                                />
                                <div className="flex flex-col justify-center self-start">
                                    <div className="flex gap-1 px-1 py-3.5 w-10 h-10 bg-orange-500 rounded-xl shadow-sm">
                                        <div className="grow">ID</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/804420d8f11d5f191ecc81a597ff202fba321fa0a6e02feee0e01ec27590f85d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 my-auto w-3 aspect-[1.49] fill-white"
                                        />
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa96c8a10f8841d06bacf9bc278179e8ad79ae709d5f4b6ff423120cc66a59d1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 my-auto w-9 aspect-square"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2835ffac2d5dd3e7ad0ce3db728c058d59c13819e481b528c0ce8c1e9de3609f?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 aspect-square w-[42px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <Header />
            <div className="flex overflow-hidden relative flex-col items-center self-stretch px-16 pt-20 pb-5 w-full text-lg font-bold leading-6 text-white min-h-[525px] max-md:px-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8970a9d577c347bd2ae8d5ac02301ae5bb7d73fee053c9ef92c3a110ca821aa1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8970a9d577c347bd2ae8d5ac02301ae5bb7d73fee053c9ef92c3a110ca821aa1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8970a9d577c347bd2ae8d5ac02301ae5bb7d73fee053c9ef92c3a110ca821aa1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8970a9d577c347bd2ae8d5ac02301ae5bb7d73fee053c9ef92c3a110ca821aa1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8970a9d577c347bd2ae8d5ac02301ae5bb7d73fee053c9ef92c3a110ca821aa1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8970a9d577c347bd2ae8d5ac02301ae5bb7d73fee053c9ef92c3a110ca821aa1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8970a9d577c347bd2ae8d5ac02301ae5bb7d73fee053c9ef92c3a110ca821aa1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8970a9d577c347bd2ae8d5ac02301ae5bb7d73fee053c9ef92c3a110ca821aa1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col items-center mt-20 max-w-full w-[869px] max-md:mt-10">
                    <div className="self-stretch text-5xl font-black max-md:max-w-full max-md:text-4xl">
                        Restoran Terbaik Di<span className=""> Bulukumba</span>{" "}
                    </div>
                    <div className="mt-1 max-md:max-w-full">
                        Dari Makanan Laut Segar Hingga Hidangan Tradisional
                    </div>
                    <div className="mt-48 max-md:mt-10">Ingin Melihat Hotel?</div>
                    <div className="justify-center px-12 py-3 mt-1.5 text-sm text-orange-500 bg-white rounded-md max-md:px-5">
                        <Link to='/Hotel'>Click Disini</Link>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 self-end mt-5 mr-7 max-w-full text-7xl font-black text-orange-500 whitespace-nowrap leading-[106.5px] w-[888px] max-md:flex-wrap max-md:mr-2.5 max-md:text-4xl">
                <div className="flex-auto border-white border-solid border-[3px] max-md:text-4xl">
                    RESTORAN
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cb6bbec65e8ff4815ce4e44101996d7c057d4a1ae0d329916cf892fb4d3543d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="shrink-0 my-auto aspect-square w-[50px]"
                />
            </div>
            <div className="px-14 py-7 mt-10 max-w-full bg-white rounded-xl border-orange-500 border-solid shadow-sm border-[3px] w-[1302px] max-md:px-5">
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
            <div className="mt-9 text-lg font-bold leading-6 text-indigo-500 max-md:max-w-full">
                Harga Berikut Sudah Termasuk Biaya Reservasi Meja (Belum Termasuk Pajak)
            </div>
            <div className="py-1 pr-20 mt-10 max-w-full rounded-xl shadow-sm bg-zinc-100 w-[1116px] max-md:pr-5 max-md:mt-10">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
                        <div className="grow max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c108766773f244f054a36ddb68fbbe8116a8f8066cee5f6b40d8776f411c7e1b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c108766773f244f054a36ddb68fbbe8116a8f8066cee5f6b40d8776f411c7e1b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c108766773f244f054a36ddb68fbbe8116a8f8066cee5f6b40d8776f411c7e1b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c108766773f244f054a36ddb68fbbe8116a8f8066cee5f6b40d8776f411c7e1b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c108766773f244f054a36ddb68fbbe8116a8f8066cee5f6b40d8776f411c7e1b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c108766773f244f054a36ddb68fbbe8116a8f8066cee5f6b40d8776f411c7e1b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c108766773f244f054a36ddb68fbbe8116a8f8066cee5f6b40d8776f411c7e1b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c108766773f244f054a36ddb68fbbe8116a8f8066cee5f6b40d8776f411c7e1b?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="grow w-full aspect-[1.04] max-md:mt-7"
                                    />
                                </div>
                                <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col self-stretch my-auto font-bold leading-[150%] max-md:mt-10">
                                        <div className="text-2xl text-black">
                                            Grand 99 Cafe Resto
                                        </div>
                                        <div className="justify-center px-12 py-5 mt-16 text-xl text-white bg-orange-500 rounded-xl max-md:px-5 max-md:mt-10">
                                            Dari Rp20.000
                                        </div>
                                        <div className="mt-12 text-base font-medium leading-6 text-center text-neutral-400 max-md:mt-10">
                                            Harga Di atas Dapat <br />
                                            Berubah Sesuai Promo Yang Berlaku
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                        <div className="flex gap-5 items-start self-stretch my-auto max-md:mt-10">
                            <div className="shrink-0 w-px border border-dashed bg-stone-300 border-stone-300 h-[257px]" />
                            <div className="flex flex-col grow shrink-0 mt-4 basis-0 w-fit">
                                <div className="text-sm font-semibold leading-5 text-zinc-500">
                                    China, Asia, Makanan Laut
                                </div>
                                <div className="flex gap-2 mt-2.5">
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
                                <div className="mt-12 text-base font-medium leading-6 text-neutral-400 max-md:mt-10">
                                    Pemandangan Pantai Tanjung Bira
                                    <br />
                                    Terdapat Musholla
                                    <br />
                                    Toilet Nyaman
                                </div>
                                <div className="justify-center self-center px-4 py-3 mt-16 text-lg font-bold leading-6 text-white whitespace-nowrap rounded-md bg-black bg-opacity-50 max-md:mt-10">
                                <Link to='/RestoranDetail'>Selengkapnya</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 justify-between items-center py-1 pr-20 mt-9 max-w-full rounded-xl shadow-sm bg-zinc-100 w-[1116px] max-md:flex-wrap max-md:pr-5">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/26ef222a0236743d25f59a73fd7fb8621a1b38417c85194e07ebf663e37af52c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/26ef222a0236743d25f59a73fd7fb8621a1b38417c85194e07ebf663e37af52c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/26ef222a0236743d25f59a73fd7fb8621a1b38417c85194e07ebf663e37af52c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/26ef222a0236743d25f59a73fd7fb8621a1b38417c85194e07ebf663e37af52c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/26ef222a0236743d25f59a73fd7fb8621a1b38417c85194e07ebf663e37af52c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/26ef222a0236743d25f59a73fd7fb8621a1b38417c85194e07ebf663e37af52c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/26ef222a0236743d25f59a73fd7fb8621a1b38417c85194e07ebf663e37af52c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/26ef222a0236743d25f59a73fd7fb8621a1b38417c85194e07ebf663e37af52c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="self-stretch w-full aspect-[1.04]"
                />
                <div className="flex flex-col self-stretch my-auto">
                    <div className="flex flex-col pl-3 font-bold leading-[150%]">
                        <div className="text-2xl text-black">Rumah Makan Maranmu</div>
                        <div className="justify-center px-12 py-5 mt-16 text-xl text-white bg-orange-500 rounded-xl max-md:px-5 max-md:mt-10">
                            Dari Rp25.000
                        </div>
                    </div>
                    <div className="mt-14 text-base font-medium leading-6 text-center text-neutral-400 max-md:mt-10">
                        Harga Di atas Dapat <br />
                        Berubah Sesuai Promo Yang Berlaku
                    </div>
                </div>
                <div className="shrink-0 self-stretch my-auto w-px border border-dashed bg-stone-300 border-stone-300 h-[257px]" />
                <div className="flex flex-col self-stretch my-auto">
                    <div className="text-sm font-semibold leading-5 text-zinc-500">
                        Asia, Indonesia
                    </div>
                    <div className="flex gap-2.5 mt-2.5">
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
                    <div className="mt-11 text-base font-medium leading-6 text-neutral-400 max-md:mt-10">
                        Pemandangan Pantai Tanjung Bira
                        <br />
                        Terdapat Musholla
                        <br />
                        Toilet Nyaman
                    </div>
                    <div className="justify-center self-center px-4 py-3 mt-16 text-lg font-bold leading-6 text-white whitespace-nowrap rounded-md bg-black bg-opacity-50 max-md:mt-10">
                        Selengkapnya
                    </div>
                </div>
            </div>
            <div className="py-1 pr-20 mt-9 max-w-full rounded-xl shadow-sm bg-zinc-100 w-[1116px] max-md:pr-5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
                        <div className="grow max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eebef4a5e64b82d188241833456743540f945bbf73a072431682668ea3a0befd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebef4a5e64b82d188241833456743540f945bbf73a072431682668ea3a0befd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebef4a5e64b82d188241833456743540f945bbf73a072431682668ea3a0befd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebef4a5e64b82d188241833456743540f945bbf73a072431682668ea3a0befd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebef4a5e64b82d188241833456743540f945bbf73a072431682668ea3a0befd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebef4a5e64b82d188241833456743540f945bbf73a072431682668ea3a0befd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebef4a5e64b82d188241833456743540f945bbf73a072431682668ea3a0befd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eebef4a5e64b82d188241833456743540f945bbf73a072431682668ea3a0befd?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="grow w-full aspect-[1.04] max-md:mt-7"
                                    />
                                </div>
                                <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col self-stretch my-auto font-bold leading-[150%] max-md:mt-10">
                                        <div className="text-2xl text-black">
                                            Abbana Cafe & Resto
                                        </div>
                                        <div className="justify-center px-12 py-5 mt-16 text-xl text-white bg-orange-500 rounded-xl max-md:px-5 max-md:mt-10">
                                            Dari Rp30.000
                                        </div>
                                        <div className="mt-14 text-base font-medium leading-6 text-center text-neutral-400 max-md:mt-10">
                                            Harga Di atas Dapat <br />
                                            Berubah Sesuai Promo Yang Berlaku
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                        <div className="flex gap-5 items-start self-stretch my-auto max-md:mt-10">
                            <div className="shrink-0 w-px border border-dashed bg-stone-300 border-stone-300 h-[257px]" />
                            <div className="flex flex-col grow shrink-0 mt-4 basis-0 w-fit">
                                <div className="text-sm font-semibold leading-5 text-zinc-500">
                                    Asia, Indonesia
                                </div>
                                <div className="flex gap-2 mt-2.5">
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
                                <div className="mt-11 text-base font-medium leading-6 text-neutral-400 max-md:mt-10">
                                    Pemandangan Pantai Tanjung Bira
                                    <br />
                                    Terdapat Musholla
                                    <br />
                                    Toilet Nyaman
                                </div>
                                <div className="justify-center self-center px-4 py-3 mt-16 text-lg font-bold leading-6 text-white whitespace-nowrap rounded-md bg-black bg-opacity-50 max-md:mt-10">
                                    Selengkapnya
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-1 pr-20 mt-9 max-w-full rounded-xl shadow-sm bg-zinc-100 w-[1116px] max-md:pr-5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab05fae932c827ab334475bd1545afac0919b252a34979c559f70e66ebcf491?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab05fae932c827ab334475bd1545afac0919b252a34979c559f70e66ebcf491?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab05fae932c827ab334475bd1545afac0919b252a34979c559f70e66ebcf491?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab05fae932c827ab334475bd1545afac0919b252a34979c559f70e66ebcf491?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab05fae932c827ab334475bd1545afac0919b252a34979c559f70e66ebcf491?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab05fae932c827ab334475bd1545afac0919b252a34979c559f70e66ebcf491?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab05fae932c827ab334475bd1545afac0919b252a34979c559f70e66ebcf491?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab05fae932c827ab334475bd1545afac0919b252a34979c559f70e66ebcf491?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow w-full aspect-[1.04] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto font-bold leading-[150%] max-md:mt-10">
                            <div className="text-2xl text-black">Miee Timee Bulukumba</div>
                            <div className="justify-center px-12 py-5 mt-16 text-xl text-white bg-orange-500 rounded-xl max-md:px-5 max-md:mt-10">
                                Dari Rp50.000
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
                                    China, Makanan Laut
                                </div>
                                <div className="flex gap-2 mt-2.5">
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
                                <div className="mt-10 text-base font-medium leading-6 text-neutral-400">
                                    Pemandangan Pantai Tanjung Bira
                                    <br />
                                    Terdapat Musholla
                                    <br />
                                    Toilet Nyaman
                                </div>
                                <div className="justify-center self-center px-4 py-3 mt-16 text-lg font-bold leading-6 text-white whitespace-nowrap rounded-md bg-black bg-opacity-50 max-md:mt-10">
                                    Selengkapnya
                                </div>
                            </div>
                        </div>
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


export default Restoran;