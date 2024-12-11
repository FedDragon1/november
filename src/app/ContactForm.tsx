import React, { FC, useState } from "react";
import "./ContactForm.css"
import FancyButton from "@/app/FancyButton";

interface ContactFormProps {
    className?: string
}

const ContactForm: FC<ContactFormProps> = ({ className }) => {
    const [checked, setChecked] = useState(false)

    return (
        <form className={`flex h-[500px] w-[1000px] flex-col gap-10 ${className ?? ''}`}>
            <div className="flex gap-5 w-full">
                <div>
                    <input type="text" placeholder="Name"/>
                </div>
                <div>
                    <input type="text" placeholder="Email"/>
                </div>
            </div>
            <textarea placeholder="Express your idea" className="flex-grow block w-full" />
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="radio-container">
                        <input type="checkbox" name="option" checked={checked} onChange={() => setChecked(!checked)} />
                        <span className="checkmark"></span>
                    </div>
                    <span>Accept the privacy policy</span>
                </div>
                <FancyButton className="invert text-foreground" onClick={(e) => e.preventDefault()}>Send Email</FancyButton>
            </div>
        </form>
    )
}

export default ContactForm