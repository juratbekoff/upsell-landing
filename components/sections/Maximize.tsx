import Button from "@/components/ui/button";
import {getLocale, localeType} from "@/locales/config";
import Link from "next/link";

const MaximizeSection = async ({lang}: { lang: localeType }) => {
    const t = await getLocale(lang, "Maximize");

    return (
        <div
            className={"rounded-[10px] bg-neutral-900 container mx-auto max-lg:w-90 bg-[url(../../public/chart.svg)] max-xl:bg-none  max-lg:mx-auto mt-[120px] mb-10 flex bg-no-repeat p-10"}
            style={{
                backgroundPositionX: "98.2%",
                backgroundPositionY: "12px",
            }}
        >
            <div className={"flex flex-col gap-4"}>
                <h1 className={"font-bold text-2xl leading-2xl max-lg:text-center max-md:text-[40px] max-md:leading-xl"}>
                    {t.title}
                </h1>

                <span
                    className={"text-neutral-400 text-sm leading-[39px] max-md:text-[20px] max-md:leading-sm w-[70%] max-lg:text-center max-lg:w-full"}
                >
                   {t.description}
                </span>

                <div className={"flex mt-4 max-lg:justify-center"}>
                    <Link href={"https://apps.shopify.com/upsell-prod"} className={"max-lg:w-full"} target={"_blank"}>
                        <Button
                            variant={"primary"}
                            className={"w-full h-full"}
                        >
                            {t.button.label}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MaximizeSection;