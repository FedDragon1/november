import React, { FC } from "react";
import MagnifyingImage from "@/app/MagnifyingImage";
import FancyButton from "@/app/FancyButton";

interface Props {}

const Projects: FC<Props> = () => {
    return (
        <section className="w-[3000px] h-full relative flex-shrink-0 bg-foreground text-background">
            <div className="absolute mt-16 ml-10">
                <h1 className="text-[12rem]">More than Enriching</h1>
                <h1 className="text-[12rem] -translate-y-10 ml-[1300px]">Projects</h1>
            </div>
            <div className="flex absolute bottom-0 mb-20 gap-8 ml-4">
                <MagnifyingImage>
                    <img src="https://picsum.photos/400/580?1" alt="image" className="w-[400px] h-[580px]"/>
                </MagnifyingImage>
                <MagnifyingImage>
                    <img src="https://picsum.photos/250/350?2" alt="image" className="w-[250px] h-[350px]"/>
                </MagnifyingImage>
                <MagnifyingImage>
                    <img src="https://picsum.photos/250/350?3" alt="image" className="w-[250px] h-[350px]"/>
                </MagnifyingImage>
                <MagnifyingImage>
                    <img src="https://picsum.photos/250/350?4" alt="image" className="w-[250px] h-[350px]"/>
                </MagnifyingImage>
            </div>
            <div className="flex absolute right-0 gap-8 mr-8 top-28">
                <MagnifyingImage>
                    <img src="https://picsum.photos/200/300?5" alt="image" className="w-[200px] h-[300px]"/>
                </MagnifyingImage>
                <div className="flex gap-8 items-end">
                    <MagnifyingImage>
                        <img src="https://picsum.photos/400/580?6" alt="image" className="w-[400px] h-[580px]"/>
                    </MagnifyingImage>
                    <MagnifyingImage>
                        <img src="https://picsum.photos/200/300?7" alt="image" className="w-[200px] h-[300px]"/>
                    </MagnifyingImage>
                    <MagnifyingImage>
                        <img src="https://picsum.photos/200/300?8" alt="image" className="w-[200px] h-[300px]"/>
                    </MagnifyingImage>
                </div>
            </div>
            <div className="w-[400px] flex flex-col gap-5 absolute left-[1500px] top-[650px]">
                <span className="uppercase">Some subtitle</span>
                <div className="flex gap-10">
                    <div className="flex-1">
                        <p>Beatae error iure, magnam officia optio sunt voluptates. Ad, animi autem debitis eius
                            praesentium quibusdam similique voluptatum. At cumque error quas unde.</p>
                        <FancyButton className="invert text-foreground">Learn More</FancyButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects