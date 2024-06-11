/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReservationContact = () => {
    return (
        <div className="flex flex-col bg-white">
            <Header />
            <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full text-white leading-[150%] min-h-[525px] max-md:px-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/90f389557ac68aff8bfa74022ebfc70904ac8455a16192c7596e136aa38dd4b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/90f389557ac68aff8bfa74022ebfc70904ac8455a16192c7596e136aa38dd4b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/90f389557ac68aff8bfa74022ebfc70904ac8455a16192c7596e136aa38dd4b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/90f389557ac68aff8bfa74022ebfc70904ac8455a16192c7596e136aa38dd4b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/90f389557ac68aff8bfa74022ebfc70904ac8455a16192c7596e136aa38dd4b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/90f389557ac68aff8bfa74022ebfc70904ac8455a16192c7596e136aa38dd4b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/90f389557ac68aff8bfa74022ebfc70904ac8455a16192c7596e136aa38dd4b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/90f389557ac68aff8bfa74022ebfc70904ac8455a16192c7596e136aa38dd4b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col mt-28 mb-24 max-md:my-10 max-md:max-w-full">
                    <div className="text-5xl font-black max-md:max-w-full max-md:text-4xl">
                        RESERVATION & CONTACT
                    </div>
                    <div className="self-center mt-1 text-lg font-bold">
                        Ingin Tau Lebih Dalam?
                    </div>
                </div>
            </div>
            <div className="flex flex-col self-center mt-9 w-full max-w-[1290px] max-md:max-w-full">
                <div className="flex gap-5 text-xl font-bold leading-8 text-center text-black text-opacity-40 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-auto max-md:max-w-full">
                        Kami menyediakan paket open trip, booking hotel, restoran, dan
                        wisata lainnya di Bulukumba. Meskipun situs kami menampilkan
                        paket-paket yang sudah disusun, kami juga dapat membuat rencana
                        perjalanan yang disesuaikan. Kami akan menangani semuanya -
                        penerbangan, akomodasi, aktivitas, asuransi perjalanan, apa saja
                        yang Anda butuhkan.
                        <br />
                        <br />
                        Kami ingin memastikan bahwa pengalaman Anda tak terlupakan. Memesan
                        dengan kami mudah, cepat, dan sepenuhnya aman. Agen kami yang ramah
                        dan berpengalaman akan merespons pertanyaan Anda secepat mungkin.
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e20a0f015baa045eba59949aba1b031684ed96ef211da4d1f23b9e968b9607fa?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 self-start mt-3 aspect-square w-[50px]"
                    />
                </div>
                <div className="mt-16 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-center px-7 py-12 w-full text-xl font-black leading-7 rounded-3xl border-solid shadow-sm bg-stone-50 border-[3px] border-neutral-400 border-opacity-30 text-neutral-400 max-md:px-5 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/52abf312cee2f0325a4560932ffcefba8a6993734a609046e09a9556a710d27e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="aspect-square w-[74px]"
                                />
                                <div className="mt-6 text-3xl text-indigo-500 border-white border-solid border-[3px]">
                                    Our Contact
                                </div>
                                <div className="mt-10 text-2xl text-orange-500">Telepon</div>
                                <div className="mt-5 font-semibold">+62 878-7777-9000</div>
                                <div className="mt-5 font-semibold">+62 877-8888-1000</div>
                                <div className="mt-10 text-2xl text-orange-500">WhatsApp</div>
                                <div className="mt-5 font-semibold">Klik Disini</div>
                                <div className="mt-9 text-2xl text-orange-500">Email</div>
                                <div className="self-stretch mt-5 font-semibold">
                                    DiscoverBulukumba@gmail.com
                                </div>
                                <div className="mt-9 text-2xl text-orange-500">Fax</div>
                                <div className="mt-5 font-semibold">+27 21 413 1868</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow px-20 py-16 mx-auto w-full rounded-3xl border-solid shadow-sm bg-stone-50 border-[3px] border-neutral-400 border-opacity-30 max-md:px-5 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/19b4d072bef6bf908b69a3c36c6966289cff935b9898c376d1a18bb0003fca3d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="self-center aspect-square w-[86px]"
                                />
                                <div className="mt-2.5 text-3xl font-black leading-10 text-indigo-500 border-white border-solid border-[3px] max-md:mx-2.5">
                                    Sosial Media
                                </div>
                                <div className="flex gap-2 items-start mt-8 max-md:mx-2.5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e12e0b238650233c0969037065213b88ac8e30b5ba697108c8966f38ba4f302f?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 w-8 aspect-square"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b95d928c29b9eafc91fc879e83ad8bad1c5b6d5d3fdf8b1865d254b6f2549a2?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 aspect-square w-[34px]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7734e233723dbc24a633c39f5053c93ca0654d0340275121b969a86a54bf8b7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 self-stretch my-auto aspect-square w-[30px]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/90f48547c0eea362031a5308d986614a41981efa928ee9ec134fbb2357aea681?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 self-stretch my-auto aspect-square w-[30px]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6679e2378b1dd085f52c9a123393758fad9e841b345a77f3e429f4f98f7af094?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 aspect-square w-[34px]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-center px-16 py-16 w-full text-xl font-black leading-7 rounded-3xl border-solid shadow-sm bg-stone-50 border-[3px] border-neutral-400 border-opacity-30 text-neutral-400 max-md:px-5 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9402b5358ed5010cf82ef9553867d56115b4da52f71eab1aadff0d4b5ffe2ed7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="aspect-square w-[90px]"
                                />
                                <div className="mt-1.5 text-3xl text-indigo-500 border-white border-solid border-[3px]">
                                    Kantor Kami
                                </div>
                                <div className="mt-10 text-2xl text-orange-500 max-md:mt-10">
                                    Alamat
                                </div>
                                <div className="self-stretch mt-6 font-semibold leading-7 text-center">
                                    Jalan Bulukumba No 10
                                    <br />
                                    Bulukumba
                                    <br />
                                    Kec.Ujung Bulu
                                    <br />
                                    Sulawesi Selatan
                                </div>
                                <div className="self-stretch mt-12 text-2xl text-orange-500 max-md:mt-10">
                                    Jam Operasional
                                </div>
                                <div className="mt-7 font-semibold text-center">
                                    08.00-22.00 WIT
                                </div>
                                <div className="self-stretch mt-6 font-semibold text-center">
                                    Hubungi Kami 24 Jam
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-center mt-16 text-5xl font-black text-center text-indigo-500 border-white border-solid border-[3px] leading-[75px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
                    LET US KNOWWHAT'S ON YOUR MIND
                </div>
                <div className="flex flex-col px-20 py-9 mt-5 text-xl font-semibold leading-7 rounded-xl bg-zinc-300 bg-opacity-30 text-neutral-400 max-md:px-5 max-md:max-w-full">
                    <div className="justify-center items-start px-8 py-7 whitespace-nowrap bg-white rounded-xl border-orange-500 border-solid border-[3px] max-md:px-5 max-md:mr-2 max-md:max-w-full">
                        Nama
                    </div>
                    <div className="justify-center items-start px-8 py-6 mt-7 bg-white rounded-xl border-orange-500 border-solid border-[3px] max-md:px-5 max-md:mr-2 max-md:max-w-full">
                        Nomor Telepon
                    </div>
                    <div className="justify-center items-start px-8 py-7 mt-7 whitespace-nowrap bg-white rounded-xl border-orange-500 border-solid border-[3px] max-md:px-5 max-md:mr-2 max-md:max-w-full">
                        Email
                    </div>
                    <div className="items-start px-8 pt-6 pb-36 mt-7 bg-white rounded-xl border-orange-500 border-solid border-[3px] max-md:px-5 max-md:pb-10 max-md:mr-2 max-md:max-w-full">
                        Pesan Yang Ingin Kamu Sampainkan/ Tanyakan
                    </div>
                    <div className="justify-center self-center px-16 py-4 mt-8 text-3xl font-black text-white whitespace-nowrap bg-orange-500 rounded-xl max-md:px-5">
                        Kirim
                    </div>
                    <div className="self-center mt-5 max-md:max-w-full">
                        Mohon Periksa Email Dalam 1x24 Jam Yaa..
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ReservationContact;