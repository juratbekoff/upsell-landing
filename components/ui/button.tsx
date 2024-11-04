import React from 'react';
import Image from "next/image";
import {cn} from "@/lib/utils";

import shopifyLogo from "../../public/shopify-logo.svg"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "primary-small" | "secondary";
    includeLogo?: boolean
}

const buttonVariants = {
    primary: "bg-yellow-400 hover:bg-yellow-300 py-[18px] max-md:py-[15px] max-md:px-0 px-6",
    "primary-small": "bg-yellow-400 hover:bg-yellow-300 py-2 px-4 max-md:py-[15px] max-md:px-0 px-6",
    secondary: "bg-neutral-800 hover:bg-neutral-700 py-[18px] px-6 text-white",
}

const Button: React.FC<ButtonProps> = ({variant, includeLogo = true, className, ...props}) => {
    return (
        <button
            className={cn(`flex justify-center gap-[10px] items-center max-md:gap-1 rounded-lg text-black`, buttonVariants[variant], className,)}
            {...props}
        >
            {includeLogo && variant !== "secondary" &&
                <Image fetchPriority={"high"} src={shopifyLogo} alt={"shopify-logo"} width={20} height={24}/>
            }

            <span className={"text-xs max-md:text-[15px] max-md:leading-[15px] font-medium"}>
                {props.children}
            </span>
        </button>
    )
}

export default Button;
