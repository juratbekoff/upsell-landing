import Image from "next/image";
import AovTabDesktop from "@/components/tabs/aov-desktop";
import AovMobile from "@/components/tabs/aov-mobile";
import SubHeader from "@/components/sub-header";

import centricLogo from "../../public/partners/centric.svg";
import uggLogo from "../../public/partners/UGG.svg";
import tupperwareLogo from "../../public/partners/tupperware.svg";
import skinTypeSolutionLogo from "../../public/partners/skin-type-solution.svg";
import olaplexLogo from "../../public/partners/olaplex.svg";
import kassatexLogo from "../../public/partners/kassatex.svg";
import kanesLogo from "../../public/partners/kanes.svg";
import medik8Logo from "../../public/partners/medik8.svg";
import exclusiveBeautyLogo from "../../public/partners/exclusive-beauty.svg";
import slickhairCoLogo from "../../public/partners/slickhair-co.svg";

import {getLocale, localeType} from "@/locales/config";

export const partnersLogo = [
    {url: centricLogo},
    {url: uggLogo},
    {url: tupperwareLogo},
    {url: skinTypeSolutionLogo},
    {url: olaplexLogo},
    {url: kassatexLogo},
    {url: kanesLogo},
    {url: medik8Logo},
    {url: exclusiveBeautyLogo},
    {url: slickhairCoLogo},
];

const PartnersAndOav = async ({lang}: { lang: localeType }) => {
    const t = await getLocale(lang, "AOV")

    return (
        <>
            <div
                className={"hidden max-[1640px]:flex justify-between gap-5 w-full overflow-x-hidden mt-10 mb-32 auto-scroll"}
            >
                <div className="scroll-content">
                    {
                        [...partnersLogo, ...partnersLogo]?.map((logo, index) => (
                            <Image
                                key={index}
                                src={logo.url}
                                alt={"logo"}
                                width={0}
                                height={0}
                                className={"w-auto h-auto max-h-20"}
                            />
                        ))
                    }
                </div>
            </div>

            <div className={"flex flex-col gap-32 mt-10"}>
                <div className={"flex gap-14 mx-auto  max-[1640px]:hidden"}>
                    {
                        partnersLogo?.map((logo, index) => (
                            <Image
                                key={index}
                                src={logo.url}
                                alt={"logo"}
                                width={0}
                                height={0}
                                className={"w-auto h-auto"}
                            />
                        ))
                    }
                </div>

                <div className={"flex flex-col gap-12 "}>
                    <div className={"container"}>
                        <SubHeader
                            title={t.title}
                            description={t.description}
                            position={"LEFT"}
                        />
                    </div>

                    <AovTabDesktop/>
                    <AovMobile/>
                </div>
            </div>
        </>
    );
};

export default PartnersAndOav;