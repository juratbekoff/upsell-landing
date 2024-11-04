import React from "react";
import {cn} from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input: React.FC<InputProps> = ({className, ...props}) => {
    return (
        <input
            type={"email"}
            className={cn(`py-[18px] px-6 bg-neutral-900 border border-neutral-700 placeholder:text-neutral-500 hover:bg-neutral-800 text-white outline-none focus:border-yellow-500 rounded-lg text-xs leading-[24px]`, className)}
            {...props}
        />
    );
};

export default Input;
