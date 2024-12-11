import { FC, MouseEventHandler } from "react";

interface Props {
    onClick: MouseEventHandler
}

const NavigationBar: FC<Props> = ({ onClick }) => {
    return (
        <nav
            className="w-screen px-12 py-4 h-30 fixed top-4 z-20 mix-blend-difference flex justify-between items-center">
            <div className="h-full ">
                <img src="/november_mask.png" alt="The November Project" className="h-20"/>
            </div>
            <div className="flex gap-5 items-center mr-4">
                <div className="h-8 flex">
                    <div className="h-full flex flex-col w-2 justify-around">
                        <hr className="w-full"></hr>
                        <hr className="w-full"></hr>
                        <hr className="w-full"></hr>
                        <hr className="w-full"></hr>
                    </div>
                    <div className="relative w-8">
                        <div
                            onClick={onClick}
                            className="h-full flex absolute right-0 flex-col w-6 hover:w-8 transition-all duration-500 justify-around">
                            <hr className="w-full right-0 transition-all"></hr>
                            <hr className="w-full right-0 transition-all"></hr>
                            <hr className="w-full right-0 transition-all"></hr>
                            <hr className="w-full right-0 transition-all"></hr>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-white cursor-pointer" onClick={onClick}>Menu</span>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar