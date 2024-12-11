"use client"

import Cover from "@/app/(homepage)/Cover";
import AboutNovember from "@/app/(homepage)/AboutNovember";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { runOnLoad } from "@/app/coordinator";
import Projects from "@/app/(homepage)/Projects";
import Experience from "@/app/(homepage)/Experience";
import Contact from "@/app/(homepage)/Contact";
import NavigationBar from "@/app/NavigationBar";

export default function Home() {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        runOnLoad(() => {
            const dom = document.querySelector("#horizontal-scroll");

            if (dom === null) {
                throw Error("#horizontal-scroll is null")
            }

            gsap.to(dom, {
                x: () => -(dom.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: "#page-container",
                    start: "top top",
                    end: () => `+=${dom.scrollWidth - window.innerWidth}`,
                    scrub: 1,
                    pin: "#page-container",
                    anticipatePin: 1
                }
            })
        })
    }, []);

    return (
        <>
            <NavigationBar onMenu={() => {}} />
            <div className="h-screen w-full" id="page-container">
                <div id="horizontal-scroll" className="flex flex-nowrap flex-row h-full">
                    <Cover />
                    <AboutNovember />
                    <Projects />
                    <Experience />
                    <Contact />
                </div>
            </div>
        </>
    )
}
