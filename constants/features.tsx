import Image from "next/image";
import {dynamicBlurDataUrl} from "@/lib/utils";

import discount1 from "@/public/discounts/discount-1.svg";
import discount1Mini from "@/public/discounts/discount-1-mini.png";
import discount2 from "@/public/discounts/discount-2.svg";
import discount2Mini from "@/public/discounts/discount-2-mini.png";
import discount3 from "@/public/discounts/discount-3.svg";
import discount3Mini from "@/public/discounts/discount-3-mini.png";
import discount4 from "@/public/discounts/discount-4.svg";
import discount4Mini from "@/public/discounts/discount-4-mini.png";
import discount5 from "@/public/discounts/discount-5.svg";
import discount5Mini from "@/public/discounts/discount-5-mini.png";
import discount6 from "@/public/discounts/discount-6.svg";
import discount6Mini from "@/public/discounts/discount-6-mini.png";

import checkout1 from "@/public/checkouts/checkout-1.svg";
import checkout1Mini from "@/public/checkouts/checkout-1-mini.png";
import checkout2 from "@/public/checkouts/checkout-2.svg";
import checkout2Mini from "@/public/checkouts/checkout-2-mini.png";

import currency from "@/public/solutions/currency.svg";
import currencyMini from "@/public/solutions/currency-mini.png";
import flags from "@/public/solutions/flags.svg";
import map from "@/public/solutions/map.svg";
import mapMini from "@/public/solutions/map-mini.png";
import abTesting from "@/public/solutions/ab-testing.svg";
import abTestingMini from "@/public/solutions/ab-testing-mini.png";
import multiLanguage from "@/public/solutions/multi-language.svg";
import multiLanguageMini from "@/public/solutions/multi-language-mini.png";

import tool1 from "@/public/tools/tool-1.svg";
import tool1Mini from "@/public/tools/tool-1-mini.png";
import tool2 from "@/public/tools/tool-2.svg";
import tool2Mini from "@/public/tools/tool-2-mini.png";
import tool3 from "@/public/tools/tool-3.svg";
import tool3Mini from "@/public/tools/tool-3-mini.png";

import clock from "@/public/clock.svg";
import clockMini from "@/public/clock-mini.png";
import shopifyFunctions from "@/public/shopify-functions.svg";
import shopifyFunctionsMini from "@/public/shopify-functions-mini.png";
import devices from "@/public/devices.svg";
import devicesMini from "@/public/devices-mini.png";

export const fetchFeaturesBoostAovData = async () => {
    return [
        {
            title: "Personalized for Your Brand",
            description: "Increase conversions with personalized product suggestions.",
            image: <Image
                src={discount1}
                alt="Personalized for Your Brand"
                width={544} height={544}
                className="self-center rounded-[10px]"
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(discount1Mini)}
            />
        },
        {
            title: "Gamify the Shopping Experience",
            description: "Increase conversions with personalized product suggestions.",
            image: <Image
                src={discount2}
                alt="Gamify the Shopping Experience"
                width={544}
                height={544}
                className="self-center rounded-[10px]"
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(discount2Mini)}
            />
        },
        {
            title: "Free Shipping",
            description: "Increase conversions with personalized product suggestions.",
            image: <Image
                src={discount3}
                alt="Free Shipping"
                width={544}
                height={353}
                className="self-center rounded-[10px]"
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(discount3Mini)}
            />
        },
        {
            title: "Gamify the Shopping Process",
            description: "Increase conversions with personalized product suggestions.",
            image: <Image
                src={discount4}
                alt="Gamify the Shopping Process"
                width={544}
                height={353}
                className="self-center rounded-[10px]"
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(discount4Mini)}
            />
        },
        {
            title: "Discount Bar",
            description: "Increase conversions with personalized product suggestions.",
            image: <Image
                src={discount5}
                alt="Discount Bar"
                width={544}
                height={353}
                className="self-center"
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(discount5Mini)}
            />
        },
        {
            title: "Express Buttons",
            description: "Provide your clients a seamless shopping experience and maximize revenue.",
            image: <Image
                src={discount6}
                alt="Express Buttons"
                width={544}
                height={353}
                className="self-center"
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(discount6Mini)}
            />
        }
    ];
};
export const fetchCheckoutsData = async () => {
    return [
        {
            title: "Checkout Upsells",
            description: "Increase conversions with personalized product suggestions.",
            image: <Image
                src={checkout1}
                alt={"Checkout Upsells"}
                width={544}
                height={560}
                className={"self-center rounded-[10px]"}
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(checkout1Mini)}
            />
        },
        {
            title: "Automatic Recommendations",
            description: "Increase conversions with personalized product suggestions.",
            image: <Image
                src={checkout2}
                alt={"Automatic Recommendations"}
                width={544}
                height={560}
                className={"self-center rounded-[10px]"}
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(checkout2Mini)}
            />
        }
    ];
};
export const fetchGlobalSolutionsData = async () => {
    return [
        {
            title: "Multi Currency",
            description: "Offer customers the convenience of paying in their preferred currency.",
            image: <Image
                src={currency}
                alt={"Multi Currency"}
                width={528}
                height={205}
                className={"self-center rounded-[10px]"}
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(currencyMini)}
            />
        },
        {
            title: "Multi Markets",
            description: "Manage sales across different markets from a single platform to increase your reach.",
            image: <div className={"flex flex-col gap-3 relative bottom-16"}>
                <Image
                    src={flags}
                    alt={"Multi Markets - Flags"}
                    width={376} height={64}
                    className={"relative right-[8%]"}
                />
                <Image
                    src={map}
                    alt={"Multi Markets - Map"}
                    width={551}
                    height={291}
                    className={"w-auto h-auto relative bottom-10 rounded-[10px]"}
                    placeholder={"blur"}
                    blurDataURL={await dynamicBlurDataUrl(mapMini)}
                />
            </div>
        },
        {
            title: "A/B Testing",
            description: "Expand your business by adding multiple languages to reach international customers.",
            image: <Image
                src={abTesting}
                alt={"A/B Testing"}
                width={528}
                height={367}
                className={"self-center rounded-[10px]"}
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(abTestingMini)}
            />
        },
        {
            title: "Multi Language",
            description: "Expand your business by adding multiple languages to reach international customers.",
            image: <Image
                src={multiLanguage}
                alt={"Multi Language"}
                width={544}
                height={408}
                className={"self-end rounded-[10px]"}
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(multiLanguageMini)}
            />
        },
    ];
};
export const fetchAdvanceToolsData = async () => {
    return [
        {
            title: "Advanced custom rules",
            description: "Automate sales, launches, and promotions for maximum efficiency. Drive sales with automatic promotions and personalized discounts.",
            image: <Image
                src={tool1}
                alt={"Advanced Custom Rules"}
                width={592}
                height={353}
                className={"self-center rounded-[10px]"}
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(tool1Mini)}
            />
        },
        {
            title: "Schedule",
            description: "Automate and plan promotions or launches for optimal timing.",
            image: <Image
                src={tool2}
                alt={"Schedule"}
                width={544}
                height={353}
                className={"self-center rounded-[10px]"}
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(tool2Mini)}
            />
        },
        {
            title: "Discounts",
            description: "Drive sales with automatic promotions and personalized discounts.",
            image: <Image
                src={tool3}
                alt={"Discounts"}
                width={544}
                height={353}
                className={"self-center rounded-[10px]"}
                placeholder={"blur"}
                blurDataURL={await dynamicBlurDataUrl(tool3Mini)}
            />
        }
    ];
};
export const fetchLatestTechnologiesData = async () => {
    return [
        {
            title: "Not slowing down your store",
            description: "Designed to keep your store running smoothly without performance issues.",
            image: (
                <Image
                    src={clock}
                    alt={"Not slowing down your store"}
                    width={222}
                    height={220}
                    className={"self-center mt-[78px] rounded-[10px]"}
                    placeholder={"blur"}
                    blurDataURL={await dynamicBlurDataUrl(clockMini)}
                />
            )
        },
        {
            title: "Shopify Functions",
            description: "Leverage the power of Shopify Functions for seamless store customization.",
            image: (
                <Image
                    src={shopifyFunctions}
                    alt={"Shopify Functions"}
                    width={253}
                    height={317}
                    className={"self-center mt-[55px] rounded-[10px]"}
                    placeholder={"blur"}
                    blurDataURL={await dynamicBlurDataUrl(shopifyFunctionsMini)}
                />
            )
        },
        {
            title: "Optimized for any Device",
            description: "Fully optimized to deliver the best experience on any device, from desktops to mobiles.",
            image: (
                <Image
                    src={devices}
                    alt={"Optimized for any Device"}
                    width={325}
                    height={205}
                    className={"self-center mt-36 rounded-[10px]"}
                    placeholder={"blur"}
                    blurDataURL={await dynamicBlurDataUrl(devicesMini)}
                />
            )
        }
    ];
};