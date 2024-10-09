"use client";
import AOS from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';


export default function Title() {
    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 1500,
            easing: "ease-in-out"
        });
    });

    return (
        <div className="flex flex-row justify-center mx-auto">
            <div data-aos="fade-right" className="text-4xl lg:text-6xl font-bold shadow-2xl">The</div> &nbsp;&nbsp;
            <div data-aos="fade-up" className="text-4xl lg:text-6xl font-bold dancing-script text-green-400 ">HSP</div> &nbsp;&nbsp;
            <div data-aos="fade-left" className="text-4xl lg:text-6xl font-bold">Stall</div>
        </div>
    );
}