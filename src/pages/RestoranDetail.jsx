/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const RestoDetail = () => {
    return (
        <div className="flex flex-col bg-white">
            <Header />
            <div className="flex gap-5 justify-between self-center mt-3.5 w-full leading-[150%] max-w-[1102px] max-md:flex-wrap max-md:max-w-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/96a8959dff5721338242c8626b007531c85147610a80a267fc83f85b1de584b0?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="shrink-0 my-auto aspect-square w-[52px]"
                />
                <div className="flex flex-col max-md:max-w-full">
                    <div className="text-7xl font-black text-orange-500 border-white border-solid border-[3px] max-md:max-w-full max-md:text-4xl">
                        Grand 99 Cafe & Resto
                    </div>
                    <div className="self-center mt-1.5 text-lg font-bold text-indigo-500">
                        Jl. Bhakti Adi Guna No.99, Bulukumba
                    </div>
                </div>
            </div>
            <div className="mt-9 w-full max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/580ceb1baf7b308d8773f280e9458b10c35bb82219a4cd2519b97dcfcd275cab?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ceb1baf7b308d8773f280e9458b10c35bb82219a4cd2519b97dcfcd275cab?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ceb1baf7b308d8773f280e9458b10c35bb82219a4cd2519b97dcfcd275cab?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ceb1baf7b308d8773f280e9458b10c35bb82219a4cd2519b97dcfcd275cab?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ceb1baf7b308d8773f280e9458b10c35bb82219a4cd2519b97dcfcd275cab?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ceb1baf7b308d8773f280e9458b10c35bb82219a4cd2519b97dcfcd275cab?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ceb1baf7b308d8773f280e9458b10c35bb82219a4cd2519b97dcfcd275cab?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/580ceb1baf7b308d8773f280e9458b10c35bb82219a4cd2519b97dcfcd275cab?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="grow w-full border-4 border-indigo-500 border-solid aspect-[1.33] max-md:mt-6 max-md:max-w-full"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
                            <div className="max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/89aad03378ca7192b204d1448b223e19dae86c541438f4125ef9403483221800?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aad03378ca7192b204d1448b223e19dae86c541438f4125ef9403483221800?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aad03378ca7192b204d1448b223e19dae86c541438f4125ef9403483221800?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aad03378ca7192b204d1448b223e19dae86c541438f4125ef9403483221800?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aad03378ca7192b204d1448b223e19dae86c541438f4125ef9403483221800?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aad03378ca7192b204d1448b223e19dae86c541438f4125ef9403483221800?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aad03378ca7192b204d1448b223e19dae86c541438f4125ef9403483221800?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/89aad03378ca7192b204d1448b223e19dae86c541438f4125ef9403483221800?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
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
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2fcaef556c2a02f70cc6e191bb4d8aa8c142f8815743cdb10c09adc7cf88e6e1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fcaef556c2a02f70cc6e191bb4d8aa8c142f8815743cdb10c09adc7cf88e6e1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fcaef556c2a02f70cc6e191bb4d8aa8c142f8815743cdb10c09adc7cf88e6e1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fcaef556c2a02f70cc6e191bb4d8aa8c142f8815743cdb10c09adc7cf88e6e1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fcaef556c2a02f70cc6e191bb4d8aa8c142f8815743cdb10c09adc7cf88e6e1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fcaef556c2a02f70cc6e191bb4d8aa8c142f8815743cdb10c09adc7cf88e6e1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fcaef556c2a02f70cc6e191bb4d8aa8c142f8815743cdb10c09adc7cf88e6e1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fcaef556c2a02f70cc6e191bb4d8aa8c142f8815743cdb10c09adc7cf88e6e1?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="grow w-full border-4 border-indigo-500 border-solid aspect-[1.69] max-md:mt-7"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex overflow-hidden relative flex-col grow items-end px-16 pt-20 pb-3.5 text-lg font-bold leading-6 text-white border-4 border-indigo-500 border-solid aspect-[1.63] max-md:mt-7">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8676f824a5bcea8b7904781d1c8b6ebfc81716d4e952f6e0132985d02b0c8270?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8676f824a5bcea8b7904781d1c8b6ebfc81716d4e952f6e0132985d02b0c8270?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8676f824a5bcea8b7904781d1c8b6ebfc81716d4e952f6e0132985d02b0c8270?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8676f824a5bcea8b7904781d1c8b6ebfc81716d4e952f6e0132985d02b0c8270?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8676f824a5bcea8b7904781d1c8b6ebfc81716d4e952f6e0132985d02b0c8270?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8676f824a5bcea8b7904781d1c8b6ebfc81716d4e952f6e0132985d02b0c8270?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8676f824a5bcea8b7904781d1c8b6ebfc81716d4e952f6e0132985d02b0c8270?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8676f824a5bcea8b7904781d1c8b6ebfc81716d4e952f6e0132985d02b0c8270?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
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
            <div className="flex flex-col px-14 mt-16 w-full leading-[150%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between text-2xl font-medium text-neutral-400 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="text-5xl font-black text-black max-md:max-w-full max-md:text-4xl">
                            Grand 99 Cafe & Resto
                        </div>
                        <div className="flex gap-4 mt-6 max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/43c03918511478940dca3d10b0cbbf90c46413c52e27eed6f75af3adb3077022?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="shrink-0 my-auto max-w-full aspect-[6.25] w-[145px]"
                            />
                            <div className="flex-auto my-auto text-center">50 Ulasan</div>
                            <div className="text-4xl font-light text-black">|</div>
                            <div className="flex-auto">China, Asia dan Indonesia</div>
                        </div>
                        <div className="flex gap-3.5 mt-5 max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fd146dbbc20c0ec90ce750ce9af432a2378203ac4632393c260dd241c870a36?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="shrink-0 self-start w-5 aspect-[0.69]"
                            />
                            <div className="flex-auto max-md:max-w-full">
                                Jl. Bhakti Adi Guna No.99, Ujung Bulu, Bulukumba
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center self-start mt-2.5 text-center">
                        <div>Mulai Dari</div>
                        <div className="self-stretch mt-7 text-4xl font-bold text-orange-500">
                            IDR 50.000
                        </div>
                        <div className="mt-6">/Meja/Menu</div>
                    </div>
                </div>
                <div className="shrink-0 mt-16 max-w-full h-0.5 border-2 border-dashed bg-stone-400 border-stone-400 w-[1324px] max-md:mt-10 max-md:mr-1" />
                <div className="mt-16 text-4xl font-semibold text-black max-md:mt-10 max-md:max-w-full">
                    Fasilitas Populer
                </div>
                <div className="flex gap-5 justify-between mt-6 w-full text-xl font-medium text-black max-md:flex-wrap max-md:mr-1 max-md:max-w-full">
                    <div className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col self-stretch whitespace-nowrap">
                            <div className="flex gap-5 justify-between">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/febba4e1713f9e5f76a4cf663f1e9aee872faa522b0c109026d69150b1b24775?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 w-8 aspect-square"
                                />
                                <div className="my-auto">Wifi</div>
                            </div>
                            <div className="flex gap-5 justify-between mt-7">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/45542c2e4114e5ce892c76e578c557f875c85c3761650562d78d52afaa245135?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
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
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9dcf5ed7fed361e34e3a1dcb64eae742c10666871e5b18351d04bf8063ff3ce?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 w-8 aspect-square"
                                />
                                <div className="flex-auto my-auto">Ruang Tamu</div>
                            </div>
                        </div>
                        <div className="flex flex-col self-stretch my-auto whitespace-nowrap">
                            <div className="flex gap-5 justify-between">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a491739787cb3dddd8fe7f09058702d2fbd15c52c3fab44d3eafc563628c6d9e?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="shrink-0 w-7 aspect-square"
                                />
                                <div className="my-auto">AC</div>
                            </div>
                            <div className="flex gap-5 justify-between mt-7">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/166c99b477aee4eef3ca207eaedd7d5f7690bd46c73ea245dbc0d67d719eb953?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
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
                <div className="shrink-0 mt-24 max-w-full h-0.5 border-2 border-dashed bg-stone-400 border-stone-400 w-[1318px] max-md:mt-10 max-md:mr-2" />
                <div className="flex gap-1.5 self-start mt-16 max-md:mt-10">
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
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/691cecb4463ce8318d42cb93fb18fbf40ca1a13995cf271ee47589410398cfa7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/691cecb4463ce8318d42cb93fb18fbf40ca1a13995cf271ee47589410398cfa7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/691cecb4463ce8318d42cb93fb18fbf40ca1a13995cf271ee47589410398cfa7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/691cecb4463ce8318d42cb93fb18fbf40ca1a13995cf271ee47589410398cfa7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/691cecb4463ce8318d42cb93fb18fbf40ca1a13995cf271ee47589410398cfa7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/691cecb4463ce8318d42cb93fb18fbf40ca1a13995cf271ee47589410398cfa7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/691cecb4463ce8318d42cb93fb18fbf40ca1a13995cf271ee47589410398cfa7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/691cecb4463ce8318d42cb93fb18fbf40ca1a13995cf271ee47589410398cfa7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="grow w-full aspect-[1.02] max-md:mt-3"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-12 max-md:mt-10">
                                <div className="flex flex-col items-center pl-8 max-md:pl-5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/00beda62213f220401a27a6926bb57b0ada1a1d409e3d815ff5de24c2869cb92?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
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
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39983b51b5a7b0a7833be33ee7de7117835f73a0a660d90510f19f19d1a4d92d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39983b51b5a7b0a7833be33ee7de7117835f73a0a660d90510f19f19d1a4d92d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39983b51b5a7b0a7833be33ee7de7117835f73a0a660d90510f19f19d1a4d92d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39983b51b5a7b0a7833be33ee7de7117835f73a0a660d90510f19f19d1a4d92d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39983b51b5a7b0a7833be33ee7de7117835f73a0a660d90510f19f19d1a4d92d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39983b51b5a7b0a7833be33ee7de7117835f73a0a660d90510f19f19d1a4d92d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39983b51b5a7b0a7833be33ee7de7117835f73a0a660d90510f19f19d1a4d92d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39983b51b5a7b0a7833be33ee7de7117835f73a0a660d90510f19f19d1a4d92d?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="grow w-full aspect-[1.02] max-md:mt-3"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-12 max-md:mt-10">
                                <div className="flex flex-col items-center pl-8 max-md:pl-5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/da332dd8f0a5c14cd563cb6841c7fde762eb7acb488a08b4c5cec79c2fa58d99?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="ml-4 w-5 aspect-[0.95]"
                                    />
                                    <div className="mt-2.5 ml-4 text-xs font-bold leading-5 text-indigo-500">
                                        Aria Wardana
                                    </div>
                                    <div className="flex gap-0.5 ml-4">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db93bc406f6c3f8e3340e00e93f20eb1935959303a2e2e0fa661faddb1c304b9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-4 aspect-square fill-orange-500"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db93bc406f6c3f8e3340e00e93f20eb1935959303a2e2e0fa661faddb1c304b9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-4 aspect-square fill-orange-500"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db93bc406f6c3f8e3340e00e93f20eb1935959303a2e2e0fa661faddb1c304b9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-4 aspect-square fill-orange-500"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db93bc406f6c3f8e3340e00e93f20eb1935959303a2e2e0fa661faddb1c304b9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                            className="shrink-0 w-4 aspect-square fill-orange-500"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db93bc406f6c3f8e3340e00e93f20eb1935959303a2e2e0fa661faddb1c304b9?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
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
            <div className="flex flex-col items-center px-5 mt-16 w-full max-md:mt-10 max-md:max-w-full">
                <div className="text-lg font-bold leading-6 text-indigo-500">
                    Pernah Mengunjungi?
                </div>
                <div className="justify-center items-center px-16 py-6 mt-2.5 w-full text-2xl font-extrabold leading-10 text-white rounded-lg shadow-sm bg-orange-500 bg-opacity-80 max-w-[1245px] max-md:px-5 max-md:max-w-full">
                    Tulis Ulasan Kamu
                </div>
                <Footer />
            </div>
        </div>
    );
}


export default RestoDetail;