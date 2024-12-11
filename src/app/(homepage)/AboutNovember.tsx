"use client"

import React, { FC, useEffect } from "react";
import FancyButton from "@/app/FancyButton";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {}

interface ProjectCardProps {
    title: string,
    image: string,
    alt: string,
    children: React.ReactNode;
}

const ProjectCard: FC<ProjectCardProps> = ({ children, title, image, alt }) => {
    return (
        <div className="w-[550px] h-[620px] bg-white px-20 py-10 z-20 relative flex flex-col justify-center items-center">
            <span className="text-[0.7rem] uppercase border-zinc-500">The November Project</span>
            <div className="flex-grow relative mb-10 flex flex-col items-center">
                <h1 className="text-[6rem] font-thin">{title}</h1>
                <img src={image} alt={alt} className="w-60 h-[23rem] absolute bottom-0" />
            </div>
            <span className="text-[0.7rem] uppercase text-center border-zinc-500">{children}</span>
        </div>
    )
}

const AboutNovember: FC<Props> = () => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const timeline = gsap.timeline({
            x: () => `-${document.querySelector("#about-november")!.scrollWidth - window.innerWidth}px`,
            scrollTrigger: {
                trigger: "#about-november",
                start: "top top",
                end: () => `+=${document.querySelector("#about-november")!.scrollWidth + window.innerWidth + 100}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1
            }
        })

        timeline.to("#about-scroll", {
            right: 0
        })
    }, []);

    return (
        <section className="w-[200vw] h-full relative flex-shrink-0 px-80 bg-midground" id="about-november">
            <h1 className="text-[12rem] absolute uppercase mt-16">Write your slogan here</h1>
            <div className="flex items-end gap-20 h-full pb-20">
                <div className="w-[700px] flex flex-col gap-5">
                    <span className="uppercase">Some subtitle</span>
                    <span className="text-6xl">The November Project</span>
                    <hr className="my-5 border-zinc-500"/>
                    <span className="uppercase">Some subtitle</span>
                    <div className="flex gap-10">
                        <p className="flex-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus excepturi iure necessitatibus, possimus reprehenderit vel voluptas! At dignissimos et nesciunt quisquam. Doloremque fugit inventore officiis perferendis praesentium quisquam tempore?</p>
                        <div className="flex-1">
                            <p>Beatae error iure, magnam officia optio sunt voluptates. Ad, animi autem debitis eius praesentium quibusdam similique voluptatum. At cumque error quas unde.</p>
                            <FancyButton>Learn More</FancyButton>
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 relative -right-[400px]" id="about-scroll">
                    <ProjectCard title="Whatever" image="https://picsum.photos/200/300" alt="picture">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias assumenda corporis debitis, dolor.
                    </ProjectCard>
                    <ProjectCard title="Something" image="https://picsum.photos/200/300?1" alt="picture">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias assumenda corporis debitis, dolor.
                    </ProjectCard>
                    <ProjectCard title="Whereas" image="https://picsum.photos/200/300?2" alt="picture">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias assumenda corporis debitis, dolor.
                    </ProjectCard>
                    <ProjectCard title="Epiphany" image="https://picsum.photos/200/300?3" alt="picture">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias assumenda corporis debitis, dolor.
                    </ProjectCard>
                </div>
            </div>
        </section>
    )
}

export default AboutNovember