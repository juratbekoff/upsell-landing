import React from 'react';
import Image from 'next/image';
import {policies} from "@/constants";
import {getLocale, localeType} from "@/locales/config";

import logoFilled from "../../public/logo-filled.svg"
import linkedInIcon from "../../public/linkedin.svg"
import Form from "@/components/sections/Form";

const FooterSection = async ({lang}: { lang: localeType }) => {
    const t = await getLocale(lang, "Footer");
    
    return (
        <div
            className="container max-lg:mx-auto grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-10 max-lg:w-90 mt-20 mb-8">
            <div className={"flex flex-col justify-between gap-14 max-lg:flex-row "}>
                <div
                    className={"flex flex-col gap-[22px] max-lg:flex-row max-lg:justify-between max-lg:flex-wrap max-lg:w-full"}>
                    <div className={"flex flex-col gap-2"}>
                        <div className={"flex gap-[18px] items-center"}>
                            <Image
                                src={logoFilled}
                                alt={"logo-filled"} width={54} height={54}
                                className={"max-sm:size-10"}
                            />
                            <span className={"font-semibold text-[24px] leading-[24px] text-white"}>Llama Upsells</span>
                        </div>

                        <a className={"text-[24px] max-sm:text-xs leading-[33px] text-neutral-400"}
                           href={`mailto:${t.email}`}
                        >
                            {t.email}
                        </a>
                    </div>

                    <a
                        href={t.social_networks.linkedIn}
                        target={"_blank"}
                        className={"p-2 bg-neutral-800 rounded-lg self-start"}
                    >
                        <Image src={linkedInIcon} alt={"linkedin"} width={40} height={40}/>
                    </a>
                </div>

                <span className={"text-xs leading-xs text-neutral-500 max-lg:hidden"}>
                    {t.copyright}
                </span>
            </div>

            <div className={"flex flex-col justify-between gap-10"}>
                <div className={"flex flex-col gap-2"}>
                    <h1 className={"font-bold text-[32px] leading-[32px]"}>
                        {t.title}
                    </h1>

                    <p className={"text-[24px] leading-base text-neutral-400"}>
                        {t.description}
                    </p>
                </div>

                <Form/>

                <div
                    className={"flex justify-between max-sm:flex-col max-sm:gap-5 max-sm:items-center items-end text-neutral-500"}>
                    <div className={"flex items-end gap-6"}>
                        {
                            policies.map((policy, index) => (
                                <a key={index} href={policy.href} target={"_blank"}>{policy.name}</a>
                            ))
                        }
                    </div>

                    <span className={"hidden max-lg:flex text-xs leading-xs text-neutral-500"}>
                        {t.copyright}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
