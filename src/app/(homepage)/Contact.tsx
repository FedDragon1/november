import React, { FC } from "react";
import ContactForm from "@/app/ContactForm";

interface Props {
}

interface ContactCardProps {
    name: string
    phone: string
    email: string
}

const ContactCard: FC<ContactCardProps> = ({ name, phone, email }) => {
    return (
        <div>
            <span className="uppercase font-bold">{name}</span><br/>
            <span>T {phone}</span><br/>
            <a href={`mailto:${email}`} className="underline">{email}</a>
        </div>
    )
}

const Contact: FC<Props> = () => {
    return (
        <section className="w-screen h-full pl-60 flex-shrink-0 bg-foreground text-background">
            <div>
                <div className="h-[18rem]">
                    <h1 className="text-[14rem] mt-16">Contact</h1>
                </div>
                <div className="w-full flex justify-between">
                    <ContactForm/>
                    <div className="mr-40 flex gap-10">
                        <div className="flex flex-col gap-8">
                            <ContactCard name="Oscar Chen" phone="138 8888 8888" email="something@keystone.cn"/>
                            <ContactCard name="Oscar Chen" phone="138 8888 8888" email="something@keystone.cn"/>
                            <ContactCard name="Oscar Chen" phone="138 8888 8888" email="something@keystone.cn"/>
                        </div>
                        <div className="flex flex-col gap-8">
                            <ContactCard name="Oscar Chen" phone="138 8888 8888" email="something@keystone.cn"/>
                            <ContactCard name="Oscar Chen" phone="138 8888 8888" email="something@keystone.cn"/>
                            <ContactCard name="Oscar Chen" phone="138 8888 8888" email="something@keystone.cn"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact