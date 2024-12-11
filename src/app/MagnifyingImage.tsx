import React, { FC } from "react";

interface MagnifyingImageProps {
    children: React.ReactNode
    className?: string
}

const MagnifyingImage: FC<MagnifyingImageProps> = ({ children, className }) => {
    return (
        <div className={className ?? ''}>
            {children}
        </div>
    )
}

export default MagnifyingImage