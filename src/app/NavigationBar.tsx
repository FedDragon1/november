import { FC } from "react";

interface Props {}

const NavigationBar: FC<Props> = () => {
    return (
        <nav className="w-screen p-10 border-2 border-purple-500 h-30 fixed top-5 z-20">
            Navigation
        </nav>
    )
}

export default NavigationBar