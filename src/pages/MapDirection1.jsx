/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MapDirection1 = () => {
    return (
        <div className="flex flex-col bg-white">
            <Header />
            <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full text-white leading-[150%] min-h-[525px] max-md:px-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/213c6bd5088b3e3bd434695037cf76c18f42ec077697295a7e5971cba97cfdf7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/213c6bd5088b3e3bd434695037cf76c18f42ec077697295a7e5971cba97cfdf7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/213c6bd5088b3e3bd434695037cf76c18f42ec077697295a7e5971cba97cfdf7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/213c6bd5088b3e3bd434695037cf76c18f42ec077697295a7e5971cba97cfdf7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/213c6bd5088b3e3bd434695037cf76c18f42ec077697295a7e5971cba97cfdf7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/213c6bd5088b3e3bd434695037cf76c18f42ec077697295a7e5971cba97cfdf7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/213c6bd5088b3e3bd434695037cf76c18f42ec077697295a7e5971cba97cfdf7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/213c6bd5088b3e3bd434695037cf76c18f42ec077697295a7e5971cba97cfdf7?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col mt-28 mb-24 max-md:my-10 max-md:max-w-full">
                    <div className="text-5xl font-black max-md:max-w-full max-md:text-4xl">
                        MAP & DIRECTION
                    </div>
                    <div className="self-center mt-1 text-lg font-bold">
                        Kunjungi Tujuan Mu Sekarang
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center pr-7 pl-20 mt-5 w-full max-md:px-5 max-md:max-w-full">
                <div className="flex gap-px self-stretch text-7xl font-black text-orange-500 leading-[106.5px] max-md:flex-wrap max-md:text-4xl">
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full max-md:text-4xl">
                        <div className="self-center border-white border-solid border-[3px] max-md:max-w-full max-md:text-4xl">
                            MAP & DIRECTION
                        </div>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bf052e22-9d19-41ca-bd8f-69a1b9e4c71c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf052e22-9d19-41ca-bd8f-69a1b9e4c71c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf052e22-9d19-41ca-bd8f-69a1b9e4c71c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf052e22-9d19-41ca-bd8f-69a1b9e4c71c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf052e22-9d19-41ca-bd8f-69a1b9e4c71c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf052e22-9d19-41ca-bd8f-69a1b9e4c71c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf052e22-9d19-41ca-bd8f-69a1b9e4c71c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf052e22-9d19-41ca-bd8f-69a1b9e4c71c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="mt-2.5 w-full border-orange-500 border-solid shadow-sm aspect-[1.67] border-[6px] max-md:max-w-full"
                        />
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87226cdde9b6bfe62802862a7701f50c7e0afe033a0f439d69f2c8697c8791bb?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                        className="shrink-0 self-start mt-7 aspect-square w-[50px]"
                    />
                </div>
                <div className="mt-16 ml-6 text-7xl font-black text-orange-500 border-white border-solid border-[3px] leading-[106.5px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                    Pantai Tanjung Bira
                </div>
                <div className="mt-6 text-lg font-semibold leading-7 text-center text-neutral-400 max-md:max-w-full">
                    Pantai Tanjung Bira, yang terletak di ujung selatan Sulawesi Selatan,
                    adalah salah satu destinasi wisata terindah di Indonesia. Dikenal
                    dengan pasir putihnya yang lembut seperti tepung dan air laut yang
                    jernih berwarna turquoise, pantai ini menawarkan panorama yang
                    menakjubkan dan suasana yang damai. Pengunjung bisa menikmati berbagai
                    aktivitas seperti snorkeling, diving, dan berlayar untuk menjelajahi
                    keindahan bawah laut yang kaya dengan terumbu karang dan kehidupan
                    laut yang beragam.
                </div>
                <div className="mt-8 ml-6 max-w-full w-[509px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow mt-3.5 text-3xl font-black leading-10 text-orange-500 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b97753698cb82068a407b86e2458a27439aa6d50bee616343241fe6e286fa8b3?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                    className="self-center max-w-full aspect-[0.7] w-[124px]"
                                />
                                <div className="mt-2 border-white border-solid border-[3px]">
                                    Google Maps
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e01bd25d-531c-4537-8f74-c03bd9b0e001?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e01bd25d-531c-4537-8f74-c03bd9b0e001?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e01bd25d-531c-4537-8f74-c03bd9b0e001?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e01bd25d-531c-4537-8f74-c03bd9b0e001?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e01bd25d-531c-4537-8f74-c03bd9b0e001?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e01bd25d-531c-4537-8f74-c03bd9b0e001?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e01bd25d-531c-4537-8f74-c03bd9b0e001?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e01bd25d-531c-4537-8f74-c03bd9b0e001?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                className="grow shrink-0 max-w-full aspect-[0.88] w-[212px] max-md:mt-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default MapDirection1;

