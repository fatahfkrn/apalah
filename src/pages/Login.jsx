/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-white">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow justify-center font-medium text-white min-h-[1024px] max-md:mt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative flex-col items-start px-16 pt-20 pb-10 bg-stone-950 bg-opacity-30 max-md:px-5 max-md:max-w-full">
                            <div className="mt-8 text-4xl font-bold tracking-wider max-md:max-w-full">
                                DiscoverBulukumba.com
                            </div>
                            <div className="mt-80 text-3xl max-md:mt-10 max-md:max-w-full">
                                Ga perlu bingung dengan rencana liburan kamu di Bulukumba
                            </div>
                            <div className="mt-96 text-xl tracking-wide max-md:mt-10 max-md:max-w-full">
                                Napufatridikdah
                            </div>
                            <div className="text-base tracking-wide max-md:max-w-full">
                                CEO,DiscoverBulukum.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col px-5 mt-52 text-base tracking-wide max-md:mt-10 max-md:max-w-full">
                        <div className="text-3xl font-medium tracking-wider text-indigo-500 max-md:max-w-full">
                            Sign In to Your account
                        </div>
                        <div className="mt-2.5 font-light text-neutral-400 max-md:max-w-full">
                            Let’s get started with your holiday
                        </div>
                        <div className="mt-16 text-black max-md:mt-10 max-md:max-w-full">
                            Email
                        </div>
                        <div className="mt-5 text-sm tracking-wide underline text-stone-600 max-md:max-w-full">
                            andinurfitriana@apps.ipb.ac.id
                        </div>
                        <div className="shrink-0 mt-2 h-px bg-black border border-black border-solid max-md:max-w-full" />
                        <div className="mt-9 text-black max-md:max-w-full">Password</div>
                        <div className="mt-5 text-sm tracking-wide text-stone-600 max-md:max-w-full">
                            ********
                        </div>
                        <div className="shrink-0 mt-4 h-px bg-black border border-black border-solid max-md:max-w-full" />
                        <div className="justify-center text-center px-16 py-6 mt-16 text-xl font-medium tracking-wide text-white whitespace-nowrap bg-orange-500 rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <Link to='/'>Login</Link>
                        </div>
                        <div className="self-center mt-30 text-xl font-semibold tracking-wide text-orange-500 max-md:mt-10">
                            <span className="text-base ">Already have an account? </span>{" "}
                            <span className="font-medium text-orange-500">Sign up</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;
