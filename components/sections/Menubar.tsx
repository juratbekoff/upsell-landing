"use client"

import React from 'react';
import Button from "@/components/ui/button";
import {SheetModal} from "@/components/ui/sheet";
import {useOpenMenuModal} from "@/context/ModalContext";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import {Cross2Icon} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.svg";

const Menubar = () => {
    const {isOpen, onClose} = useOpenMenuModal();

    const scrollToSection = (sectionId: string) => {
        onClose();
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({behavior: "smooth"});
            } else {
                window.location.href = `/${sectionId ? `#${sectionId}` : ""}`;
            }
        }, 100);
    };

    return (
        <SheetModal isOpen={isOpen} onClose={onClose}>
            <>
                <header className="flex justify-between z-10 p-2 rounded-lg">
                    <Link href={"/"} onClick={onClose} className="flex gap-5 items-center">
                        <Image
                            src={logo}
                            alt="Llama Upsell Logo"
                            width={28}
                            height={28}
                            fetchPriority="high"
                        />
                        <span className="text-xs font-semibold">Llama Upsell</span>
                    </Link>

                    <SheetPrimitive.Close
                        className="rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-ring disabled:pointer-events-none data-[state=open]:bg-secondary">
                        <Cross2Icon className="size-10 text-white"/>
                        <span className="sr-only">Close</span>
                    </SheetPrimitive.Close>
                </header>

                <div className="h-screen flex flex-col justify-center items-center">
                    <div
                        className="flex flex-col gap-6 text-[40px] leading-[40px] font-medium justify-center items-center"
                    >

                        <Link href="https://www.llamaupsells.com" target="_blank" onClick={onClose}>
                            View Demo Store
                        </Link>

                        <Link href={"/features"} onClick={onClose} className="cursor-pointer">
                            Features
                        </Link>

                        <span onClick={() => scrollToSection("pricing")} className="cursor-pointer">
                            Pricing
                        </span>

                        <Button
                            onClick={() => window.open("https://apps.shopify.com/upsell-prod")}
                            variant="primary"
                            className="mt-2 w-2/3"
                        >
                            Install for Free
                        </Button>
                    </div>
                </div>
            </>
        </SheetModal>
    );
};

export default Menubar;
