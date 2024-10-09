"use client";
import Image from "next/image";
import AOS from "aos";
import Title from "@/components/ui/title";
//import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect } from "react";
import { Page } from "@/components/ui/bento";



export default function Home() {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1500,
      easing: "ease-in-out"
    });
  });
  return (

    <div className="text-white scroll-smooth">
      <div data-aos="fade-down" className="w-full flex justify-center items-center">
        <a href="https://linktr.ee/eventspeshackerspace.ec"><Image width={500} height={500} src="/logo.png" alt="logo" /></a>

      </div>
      <Title />
      <Page />

    </div>

  );
}
