import React, { FC } from "react";
import "./FancyButton.css"
import { GoArrowUpRight } from "react-icons/go";

interface FancyButtonProps {
    className?: string
    children: React.ReactNode
}

const FancyButton: FC<FancyButtonProps> = ({ className, children }) => {
    return (
        <button className={`group w-40 h-16 relative overflow-hidden border-b-black cursor-pointer fancy-button border-b-2 
                my-5 hover:text-background transition-all ease-in ${className ?? ''}`}>
            <div className="flex gap-1 justify-center items-center relative z-20">
                { children }
                <GoArrowUpRight size="1rem" className="group-hover:translate-x-2 transition-all" />
            </div>
        </button>
    )
}

export default FancyButton