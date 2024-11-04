import React from 'react';
import {cn, dynamicBlurDataUrl} from "@/lib/utils";
import Image from "next/image";
import SubHeader from "@/components/sub-header";

import solutionsImage from "../../public/solutions/map.svg"


import abTestingImage from "../../public/solutions/ab-testing.svg"
import abTestingImageMini from "../../public/solutions/ab-testing-mini.png"

import diamondImage from "../../public/diamond.svg"
import diamondCardImage from "../../public/diamond-card.svg"
import diamondCardImageMini from "../../public/diamond-card-mini.png"


import technology from "@/public/technology.svg";
import technologyMini from "@/public/technology-mini.png";

import {getLocale, localeType} from "@/locales/config";

const FeaturesSection = async ({lang}: { lang: localeType }) => {
    const t = await getLocale(lang, "Features")

    return (
        <div className="flex flex-col container max-lg:w-90 mt-32">
            <SubHeader title={t.title} description={t.description} className={"w-1/2"} position={"LEFT"}/>

            <div
                className="grid grid-cols-2 gap-4 max-md:grid-cols-1"
            >
                <div className="mt-28 max-md:mt-14 flex flex-col gap-4">
                    <FeatureCard
                        content={`<span class="text-white">Expand globally</span> with our app, — <span class="text-white">fully compatible</span>`}
                        imgSrc={solutionsImage}
                        imgAlt="Map"
                        imgClass={"mt-10 w-[550px] h-[291px] max-md:h-[164px] self-center"}
                        imgSrcMini={abTestingImageMini}
                    />

                    <FeatureCard
                        content={`<span class="text-white">A/B testing. </span> Optimize your offers, cart, and more to discover the upsells that work for your shoppers.`}
                        imgSrc={abTestingImage}
                        imgAlt="A/B Testing"
                        imgClass={"h-[367px] w-[528px] max-md:w-[293] self-center max-md:h-[203px]"}
                        imgSrcMini={abTestingImageMini}
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <div
                        className="flex flex-col justify-between gap-10 p-8 bg-neutral-900 rounded-[10px] h-[600px] max-lg:h-auto"
                    >
                        <div className="flex flex-col gap-6">
                            <div
                                className="flex gap-2 items-center self-start font-semibold px-3 py-2 rounded-lg bg-white text-black"
                            >
                                <Image src={diamondImage} alt="#" width={24} height={24}/>
                                <span
                                    className="text-[16px] leading-[24px] max-[300px]:text-[14px] max-[300px]:leading-[14px]">Built for Shopify</span>
                            </div>

                            <h1 className="max-[300px]:text-[14px] max-[300px]:leading-[14px] text-[32px] leading-[38px] max-lg:text-[24px] max-lg:leading-sm font-medium text-neutral-500">
                                <span className="text-white">Built for Shopify:</span> Verified for top performance,
                                security, and reliability.
                            </h1>
                        </div>

                        <Image
                            src={diamondCardImage}
                            alt="Diamond Card"
                            className="max-lg:h-[196px] max-lg:w-[242px] self-end rounded-[10px]"
                            width={323}
                            height={250}
                            placeholder={"blur"}
                            blurDataURL={await dynamicBlurDataUrl(diamondCardImageMini)}
                        />
                    </div>

                    <FeatureCard
                        content={`Built with the <span class="text-white">latest Shopify technology</span> to work flawlessly on your store.`}
                        imgSrc={technology}
                        imgAlt="Technology"
                        imgClass={"h-[330px] w-[360px] max-lg:h-[226px] max-lg:w-[246px] self-center"}
                        imgSrcMini={technologyMini}
                    />
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection;


interface FeatureCardProps {
    content: string;
    imgSrc: string;
    imgSrcMini: any;
    imgAlt: string;
    imgClass?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = async ({content, imgSrc, imgSrcMini, imgAlt, imgClass = ""}) => {
    return <div className={cn(`flex flex-col gap-10 p-8 bg-neutral-900 rounded-[10px] h-[600px] max-lg:h-auto`)}>
        <div
            className="text-[32px] leading-[38px] max-lg:text-[24px] max-lg:leading-sm font-medium text-neutral-500 max-[300px]:text-[14px] max-[300px]:leading-[14px]"
            dangerouslySetInnerHTML={{__html: content}}
        />

        <Image
            src={imgSrc}
            alt={imgAlt}
            className={cn(imgClass, "rounded-[10px]")}
            width={320}
            height={250}
            placeholder={"blur"}
            blurDataURL={await dynamicBlurDataUrl(imgSrcMini)}
        />
    </div>
};