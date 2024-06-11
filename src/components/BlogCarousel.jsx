/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";




const BlogCarousel = () => {
    return (
        <div className="flex overflow-hidden relative flex-col items-center px-16 pt-20 w-full font-black text-white leading-[150%] min-h-[525px] max-md:px-5 max-md:max-w-full">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f21db0e7b7e291dc4c079f7d9480a8bb66518a832a2bb6aa653a35408e3707?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative z-10 flex-col items-center mt-20 max-w-full w-[767px] max-md:mt-10">
                <div className="self-stretch text-5xl max-md:max-w-full max-md:text-4xl">
                    BLOG TERBARU <span className="">BULUKUMBA</span>
                </div>
                <div className="mt-1.5 text-lg font-bold max-md:max-w-full">
                    Temukan Kabar Terbaru Dari Destinasi Wisatamu
                </div>
                <div className="flex gap-5 justify-between mt-44 text-xl text-center max-md:flex-wrap max-md:mt-10">
                    <div className="justify-center px-12 py-8 text-orange-500 bg-white rounded-xl border border-white border-solid max-md:px-5">
                        Berita{" "}
                    </div>
                    <div className="justify-center px-11 py-8 whitespace-nowrap bg-orange-500 rounded-xl border border-orange-500 border-solid max-md:px-5">
                        <Link to='/BlogArtikel'>Artikel</Link>
                    </div>
                    <div className="justify-center px-12 py-8 whitespace-nowrap bg-orange-500 rounded-xl border border-orange-500 border-solid max-md:px-5">
                        <Link to='/BlogEvent'>Event</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default BlogCarousel;