/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Regis = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [userName, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Save user details to localStorage
        localStorage.setItem(
            "user",
            JSON.stringify({ name: userName, email: email, password: confPassword })
        );

        // Redirect user to "/"
        navigate("/Login");
    };

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            navigate("/Regis");
        }
    }, []);

    return (
        <div className="bg-white">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow pb-6 font-medium text-white min-h-[1024px] max-md:mt-10 max-md:max-w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e6ea409e77491e5352f9b4f32e352a1c42d5929fea782aafa00e615b46d4026?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                            className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative flex-col items-start px-16 pt-20 pb-4 bg-stone-950 bg-opacity-30 max-md:px-5 max-md:max-w-full">
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
                    <div className="flex flex-col px-5 mt-52 text-base tracking-wide text-black max-md:mt-10 max-md:max-w-full">
                        <div className="text-3xl font-medium tracking-wider text-indigo-500 max-md:max-w-full">
                            Create an account
                        </div>
                        <div className="mt-5 font-light text-neutral-400 max-md:max-w-full">
                            Let’s get started with your 30 days free trial
                        </div>
                        <form onSubmit={handleSubmit} className="w-full mx-auto">
                            <div className="relative my-4">
                                <label
                                    htmlFor="name"
                                    className="block mb-1 font-medium md:mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={userName}
                                    autoComplete="email"
                                    onChange={(e) => setUsername(e.target.value)}
                                    id="name"
                                    className="block bg-light w-full px-3 py-2 border-2 ps-12 border-c1b"
                                    placeholder="yourname"
                                />
                            </div>
                            <div className="relative my-4">
                                <label
                                    htmlFor="email"
                                    className="block mb-1 font-medium md:mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    className="block bg-light w-full px-3 py-2 border-2 ps-12 border-c1b"
                                    placeholder="youremail@email.com"
                                />
                            </div>
                            <div className="relative mt-4 mb-5">
                                <label
                                    htmlFor="password"
                                    className="block mb-1 font-medium md:mb-2">
                                    Password
                                </label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    id="password-icon"
                                    className="block bg-light w-full px-3 py-2 border-2 ps-12 border-c1b"
                                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                                />
                            </div>
                            <div className="flex flex-col text-xl font-medium tracking-wide max-w-[435px]">
                                <button className="justify-center items-center py-4 w-[full] text-white bg-orange-500 rounded-3xl">
                                    Create Account
                                </button>
                                <button className="flex gap-5 px-20 py-4 mt-3 text-black rounded-3xl border border-orange-500 border-solid">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0268c0a2390cceedda577733988736ff9d431a4c09ff25286cf09219a7709480?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
                                        className="shrink-0 w-6 aspect-square fill-black"
                                    />
                                    <div className="flex-auto">Sign up with Google</div>
                                </button>
                            </div>
                        </form>
                        <div className="self-center mt-3 text-xl font-semibold sans-serif max-md:mt-10">
                            <span className="text-base ">Sudah Punya Akun? </span>{" "}
                            <a
                                href="/Login"
                                className="font-semibold leading-6 text-orange700 hover:text-primary700"
                            >
                                Login Sekarang!
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Regis;

