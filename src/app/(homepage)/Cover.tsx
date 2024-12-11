import { FC } from "react";

interface Props {}

const Cover: FC<Props> = () => {
    return (
        <section className="w-screen h-full relative bg-white flex-shrink-0 bg-[url('/banner.jpg')] bg-cover bg-center">
            <div className="flex gap-2 absolute p-14 h-full -rotate-90 items-center">
                <span className="text-zinc-200">24</span>
                <span className="text-zinc-400">.11</span>
            </div>
            <div className="absolute bottom-0 px-12 py-8">
                <h1 className="text-8xl text-zinc-200">Beyond<br/>Magazine<br/>Lamborghini</h1>
            </div>
        </section>
    )
}

export default Cover