import { FC } from "react";

interface Props {}

const Cover: FC<Props> = () => {
    return (
        <section className="w-screen h-full border-2 border-red-800 flex-shrink-0">
            cover page
        </section>
    )
}

export default Cover