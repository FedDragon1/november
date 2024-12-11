import React, { FC } from "react";
import FancyButton from "@/app/FancyButton";

interface Props {}

const Experience: FC<Props> = () => {
    return (
        <section className="w-[2600px] h-full relative flex-shrink-0 pl-80 bg-midground">
            <div className="flex flex-col gap-5">
                <div className="h-[22rem] z-20 relative mix-blend-exclusion">
                    <h1 className="text-[12rem] mt-24 text-white">An unforgettable memory</h1>
                </div>
                <span className="uppercase">Some subtitle</span>
                <div className="flex gap-10 flex-col max-w-[1200px]">
                    <div className="flex-1">
                        <p className="text-6xl">Beatae error iure, magnam officia optio sunt voluptates. Ad, animi autem
                            debitis eius
                            praesentium quibusdam similique.</p>
                    </div>
                    <hr className="border-zinc-500"/>
                    <div>
                        <span className="uppercase">Some subtitle</span>
                        <div className="flex gap-10 max-w-[800px]">
                            <p className="flex-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
                                delectus excepturi iure necessitatibus, possimus reprehenderit vel voluptas!</p>
                            <div className="flex-1">
                                <p>Beatae error iure, magnam officia optio sunt voluptates. Ad, animi autem debitis eius
                                    praesentium quibusdam similique voluptatum. At cumque error quas unde.</p>
                            </div>
                        </div>
                        <FancyButton>Learn More</FancyButton>
                    </div>
                </div>
            </div>
            <div className="absolute right-0 top-0 -z-0 grayscale">
                <img src="https://picsum.photos/800/1080" alt="picture" />
                <div className="absolute bottom-0 left-[-230px]">
                    <img src="https://picsum.photos/260/500" alt="picture"/>
                </div>
            </div>
        </section>
    )
}

export default Experience