import React from 'react';
import {pricingList} from "@/constants";
import Pricing from "@/components/cards/pricing";
import SubHeader from "@/components/sub-header";
import {getLocale, localeType} from "@/locales/config";

const PricingSection = async ({lang}: { lang: localeType }) => {
    const t = await getLocale(lang, "Pricing");

    return (
        <div
            id={"pricing"}
            className={"flex flex-col gap-16 container max-lg:mx-auto max-lg:w-90  pt-40 max-lg:pt-[100px]"}
        >
            <SubHeader
                title={
                    <div className={"px-60 max-lg:px-0"}>{t.title}</div>
                }
                description={
                    <div className={"px-60 max-xl:px-16 max-md:px-0"}>{t.description}</div>
                }
                position={"CENTER"}
            />

            <div className={"grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4"}>
                {
                    pricingList.map((pricing, index) => (
                        <Pricing key={index} {...pricing}/>
                    ))
                }
            </div>
        </div>
    );
};

export default PricingSection;