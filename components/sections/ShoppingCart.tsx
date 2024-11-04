import Image from "next/image";
import {getLocale, localeType} from "@/locales/config";

import shoppingCart from "@/public/cart-3.png"

const ShoppingCart = async ({lang}: { lang: localeType }) => {
    const t = await getLocale(lang, "ShoppingCart");

    return (
        <div
            id={"features"}
            className={"flex max-lg:flex-col gap-16 container mt-20"}
        >
            <div className={"flex flex-col justify-center gap-4 w-[60%] max-lg:w-full"}>
                <h1 className={"text-2xl leading-2xl  max-lg:text-center max-md:text-[40px] max-md:leading-[40px] font-bold"}>
                    {t.title}
                </h1>

                <p className={"text-sm leading-[39px] text-neutral-400 max-md:px-2 max-md:text-[20px] max-md:leading-[28px] max-lg:text-center"}>
                    {t.description}
                </p>
            </div>

            <div className={"w-[40%] flex justify-end max-xl:w-2/3 max-lg:w-full max-lg:flex max-lg:justify-center"}>
                <Image
                    src={shoppingCart}
                    alt={t.img.alt}
                    width={593}
                    height={700}
                    className={"max-lg:h-[593px] max-lg:w-[343px]"}
                />
            </div>
        </div>
    );
};

export default ShoppingCart;