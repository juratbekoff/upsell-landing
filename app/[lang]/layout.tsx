import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import Menubar from "@/components/sections/Menubar";
import {ModalProvider} from "@/context/ModalContext";

const Header = dynamic(() => import("../../components/sections/Header"));
const FooterSection = dynamic(() => import("../../components/sections/Footer"));
const MaximizeSection = dynamic(() => import("../../components/sections/Maximize"));

export const metadata: Metadata = {
    title: "Upsell Landing",
};

const sfRegular = localFont({
    src: "./fonts/sf-pro-regular.woff",
    variable: "--font-sf-pro-regular",
    weight: "400",
    display: "swap"
});

const sfMedium = localFont({
    src: "./fonts/sf-pro-medium.woff",
    variable: "--font-sf-pro-medium",
    weight: "500",
    display: "swap"
});

const sfSemiBold = localFont({
    src: "./fonts/sf-pro-semibold.woff",
    variable: "--font-sf-pro-semibold",
    weight: "600",
    display: "swap"
});

const sfBold = localFont({
    src: "./fonts/sf-pro-bold.woff",
    variable: "--font-sf-pro-bold",
    weight: "700",
    display: "swap"
});

export default async function RootLayout({children, params: {lang}}: Readonly<{
    children: ReactNode,
    params: { lang: any }
}>) {

    return (
        <html lang={lang}>
        <body
            className={`${sfRegular.variable} ${sfMedium.variable} ${sfSemiBold.variable} ${sfBold.variable} antialiased`}
        >
        <ModalProvider>
            <Menubar/>

            <div className={"container max-lg:w-90 mt-6"}>
                <Header lang={lang}/>
            </div>

            {children}

            <MaximizeSection lang={lang}/>
            <FooterSection lang={lang}/>
        </ModalProvider>
        </body>
        </html>
    );
}
