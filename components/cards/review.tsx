import Image from "next/image";
import {ReviewProps} from "@/constants";
import React from "react";

import stars from "../../public/stars.svg"

const ReviewCard = ({name, review, logo}: ReviewProps) => {
    return (
        <div className=' bg-neutral-900 break-inside-avoid rounded-lg flex flex-col justify-between gap-10 p-6 mb-3'>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-[18px]">
                    <Image src={stars} alt="#" width={110} height={110}/>

                    <div className="flex flex-col">
                        <h3 className="text-xs leading-xs font-semibold">{name}</h3>
                        <span className="text-neutral-400">Company</span>
                    </div>
                </div>

                <Image src={logo} alt="logo" width={80} height={20}/>
            </div>

            <div
                className="text-xs leading-[23px] text-neutral-400 mb-4 h-auto"
                dangerouslySetInnerHTML={{__html: review}}
            />
        </div>
    )
}

export default ReviewCard
