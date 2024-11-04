import React from "react";
import Button from "@/components/ui/button";
import Image from "next/image";
import SubHeader from "@/components/sub-header";
import {getLocale, localeType} from "@/locales/config";
import Link from "next/link";

import diamondSvg from "../../public//diamond.svg"

const HeroSection = async ({lang}: { lang: localeType }) => {
    const locale = await getLocale(lang, "HeroSection");

    return (
        <div className={"border-b border-b-neutral-600 pb-10"}>
            <div className={"container max-lg:w-90 max-lg:mx-auto flex flex-col xl:gap-2 2xl:gap-5"}>
                <section className={"2xl:space-y-36 xl:space-y-28 space-y-20 mt-16"}>
                    <div className="flex flex-col items-center gap-5 mt-20">
                        <SubHeader
                            title={
                                <div className={"px-10 max-md:px-0"}>{locale.title}</div>
                            }
                            description={locale.label}
                            position={"CENTER"}
                        />

                        <div className="grid grid-cols-2 max-[375px]:grid-cols-1 gap-4 mt-6">
                            <Link href={"https://apps.shopify.com/upsell-prod"} target={"_blank"}>
                                <Button
                                    variant="secondary"
                                    className={"w-full h-full"}
                                >
                                    View Demo Store
                                </Button>
                            </Link>

                            <Link href={"https://apps.shopify.com/upsell-prod"} target={"_blank"}>
                                <Button
                                    variant="primary"
                                    className={"w-full h-full"}
                                >
                                    Install for Free
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className={"flex flex-col gap-8 bg-neutral-950 p-8"}>
                        <div className={"max-md:flex flex-col items-center 2xl:gap-2 gap-1 hidden"}>
                            <Image src={diamondSvg} alt={"diamond"} width={48} height={48}/>
                            <span className={"text-xs font-semibold max-lg:text-[16px]"}>Built for Shopify</span>
                        </div>

                        <div
                            className={"grid grid-cols-5 gap-5 max-md:grid-cols-2 max-md:gap-9 max-[280px]:grid-cols-1"}>
                            <div className={"flex flex-col items-center 2xl:gap-2 xl:gap-1 max-lg:gap-0"}>
                                <div className={"flex gap-1 items-end font-medium"}>
                                    <h1 className={"text-xl leading-xl max-lg:text-[35px]"}>5</h1>
                                    <span
                                        className={"mb-1 text-sm leading-sm max-lg:text-[20px] max-lg:mb-2"}>year</span>
                                </div>

                                <span
                                    className={"text-xs text-center font-semibold max-lg:text-[14px] max-lg:leading-[14px]"}>Helping brands</span>
                            </div>

                            <div className={"flex flex-col items-center 2xl:gap-2 xl:gap-1 max-lg:gap-0"}>
                                <h1 className={"text-xl leading-xl font-medium max-lg:text-[35px]"}>1M+</h1>
                                <span
                                    className={"text-xs text-center font-semibold max-lg:text-[14px] max-lg:leading-[14px]"}>Order upsells</span>
                            </div>

                            <div className={"flex flex-col items-center 2xl:gap-2 gap-1 max-md:hidden"}>
                                <Image src={diamondSvg} alt={"diamond"} width={48} height={48}/>
                                <span
                                    className={"text-xs text-center font-semibold max-lg:text-[14px] max-lg:leading-[14px]"}
                                >
                                    Built for Shopify
                                </span>
                            </div>

                            <div className={"flex flex-col items-center 2xl:gap-2 gap-1"}>
                                <h1 className={"text-xl leading-xl font-medium max-lg:text-[35px]"}>5/5</h1>
                                <span
                                    className={"text-xs text-center font-semibold  max-lg:text-[14px] max-lg:leading-[14px]"}
                                >
                                    Shopify App Rating
                                </span>
                            </div>

                            <div className={"flex flex-col items-center 2xl:gap-2 gap-1"}>
                                <h1 className={"text-xl leading-xl font-medium max-lg:text-[35px]"}>24/7</h1>

                                <span
                                    className={"text-xs  text-center font-semibold  max-lg:text-[14px] max-lg:leading-[14px]"}
                                >
                                    Global Support Team
                                 </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HeroSection;