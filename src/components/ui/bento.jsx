"use client";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";




export const Page = () => {

    useEffect(() => {
        AOS.init(
            {
                duration: 1000,
                easing: "ease-in",
                once: true,

            }
        )
    })

    return (
        <div className="mt-12 flex mx-12 flex-col lg:flex-row space-x-4">
            {/* Top Left */}
            <div
                data-aos="fade-up"
                className="flex lg:w-1/3 rounded-xl p-2 lg:p-4 px-4 lg:px-6 col-span-1 xl:col-span-4 row-span-1 bg-gradient-to-br from-black via-black to-green-800">
                {/* heading */}
                <a href="https://homebrew.hsp-ec.xyz/posts/cs101/">
                    <div className="flex flex-col space-y-2 md:space-y-4 lg:space-y-6 py-6 md:py-8 lg:py-12  mr-8 md:mr-16 lg:mr-24">
                        <h2 className="font-bold text-5xl dancing-script text-center mx-auto">
                            Computer Science 101 by Aditya Hegde
                        </h2>
                        {/* subheading */}
                        <div className="mx-auto flex justify-center"><Image width={300} height={300} src="/image.png" alt="logo" /></div>
                        <div className="my-12"></div>
                        <p className="text-gray-300 text-xl">
                            1. GitHub Student Developer Pack</p>
                        <p className="text-gray-300 text-xl">2. Get good with the command line ~ Missing Semester by MIT</p>
                        <p className="text-gray-300 text-xl">3. Build an Online Presence - Resume, LinkedIn, Portfolio</p>
                        <p className="text-gray-300 text-xl">4. Git good, get on GitHub and contribute to Open Source!</p>

                    </div>
                    <div className="relative items-center justify-center lg:w-96">

                    </div></a>

            </div>
            {/* Top Right */}
            <div
                data-aos="fade-up"
                className="flex lg:w-1/3 justify-center items-center p-4 px-6 row-span row-span-1 col-span-1 xl:col-span-3 rounded-xl bg-gradient-to-b from-black via-black to-green-800">
                {/* heading */}
                <div className="flex flex-col space-y-6 py-12">
                    <h2 className="font-bold text-5xl dancing-script mx-auto text-center">
                        Computer Science made fun!
                    </h2>
                    {/* subheading */}
                    <div className="flex flex-col space-x-4">
                        <a href="https://www.mathsisfun.com/games/towerofhanoi.html" className="text-gray-300 text-2xl mx-auto text-center mb-6 ">Conquer the Tower of Hanoi! </a><div className="mx-auto flex justify-center"><Image width={200} height={200} src="/hanoi.png" alt="logo" /></div>
                        <a href="https://codingmystery.com/hub" className="text-gray-300 text-2xl mx-auto text-center mb-6 mt-6 ">A Programming Escape Room?</a><div className="mx-auto flex justify-center"><Image width={200} height={200} src="/escape.png" alt="logo" /></div>
                        <a href="https://flukeout.github.io/" className="text-gray-300 text-2xl mx-auto text-center mb-6 mt-6">CSS for Web dev!</a><div className="mx-auto flex justify-center"><Image width={200} height={200} src="/css.png" alt="logo" /></div>

                    </div>



                </div>



            </div>
            <div
                data-aos="fade-up"

                className="flex lg:w-1/3 justify-center p-4 px-6 row-span row-span-1 col-span-1 xl:col-span-3 rounded-xl bg-gradient-to-bl from-black via-black to-green-800">
                {/* heading */}
                <div className="flex flex-col space-y-6 py-12">
                    <h2 className="font-bold text-5xl dancing-script mx-auto text-center">
                        Mentor Interactions!
                    </h2>
                    <p className="text-gray-300 text-xl">Meet some of the smartest seniors on campus!</p>
                    <div className="flex flex-col space-x-4">
                        <p className="text-gray-300 text-xl mx-auto text-center mt-12">Upgrade to Linux!</p>
                        <p className="text-center mx-auto text-6xl mt-4 mb-4">🗿</p>
                        <p className="text-gray-300 text-xl mx-auto text-center mt-12">Explore and discuss domains that excite you!</p>
                        <p className="text-center mx-auto text-6xl mt-4 mb-4">🧠</p>
                        <p className="text-gray-300 text-xl mx-auto text-center mt-12">Rank your favourite technologies!</p>
                        <div className="mx-auto flex justify-center mt-4"><Image width={500} height={500} src="/tierlist.jpg" alt="logo" /></div>

                    </div>

                </div>

            </div>


        </div >
    );
};

export default Page;
