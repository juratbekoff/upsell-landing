import {PricingProps} from "@/constants";
import Image from "next/image";

import checkSvg from "../../public/check.svg"

const Pricing = (data: PricingProps) => {
    return (
        <div
            className={`flex flex-col gap-6 justify-between py-10 pl-6 pr-4 rounded-lg bg-neutral-900 ${data.isPopular && "border-t border-t-yellow-500"}`}
        >
            <div className={"flex flex-col gap-6"}>
                <div className={"flex flex-col gap-4"}>
                    <div className={`flex justify-between`}>
                        <span className={"text-xs leading-xs"}>{data.plan}</span>

                        {
                            data.isPopular && (
                                <div
                                    className={"bg-white text-black rounded-3xl text-[14px] leading-[16.7px] py-1 px-3"}>
                                    Most Popular
                                </div>
                            )
                        }
                    </div>

                    <div className={`flex flex-col gap-2 ${data.isPopular && "-mt-2"}`}>
                        <h1 className={"text-[32px] leading-[32px] font-medium"}>${data.price}</h1>
                        <span className={"text-neutral-400 text-[16px] leading-[19px]"}>{data.description}</span>
                    </div>
                </div>

                <ul className={"flex flex-col gap-4 border-t border-t-neutral-700 pt-6"}>
                    {
                        data.includes.map((item, index) => (
                            <div key={index} className={"flex gap-3 items-center"}>
                                <Image src={checkSvg} alt="includes" width={20} height={20}/>
                                <div className={"text-[15px] leading-xs"} dangerouslySetInnerHTML={{
                                    __html: item
                                }}></div>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Pricing;