import {getLocale, localeType} from "@/locales/config";

const ReferralSection = async ({lang}: { lang: localeType }) => {
    const t = await getLocale(lang, "Referral")

    return (
        <div className={"bg-neutral-900 py-28 flex flex-col justify-center mt-20"}>
            <div className={`container max-lg:mx-auto max-lg:w-90 flex flex-col gap-16`}>
                <div className={"flex flex-col justify-center gap-4"}>
                    <h1 className={"text-2xl leading-[57px] max-md:text-[40px] max-md:leading-[40px] font-bold text-center "}>
                        {t.title}
                    </h1>

                    <span
                        className={"text-center text-neutral-400 text-sm leading-[39px] max-md:text-[20px] max-md:leading-[28px] max-[300px]:text-[14px] max-[300px]:leading-[14px]"}
                    >
                          {t.description}
                    </span>
                </div>

                <div className={"flex flex-col gap-5 max-md:hidden"}>
                    <div className={"flex justify-between gap-10"}>
                        <div className={"flex items-center gap-10 w-1/2"}>
                            <h1 className={"text-2xl leading-2xl max-xl:text-xl font-bold"}>1</h1>
                            <div className={"h-[10px] bg-neutral-800 w-full"}></div>
                        </div>

                        <div className={"flex items-center gap-10"}>
                            <h1 className={"text-2xl leading-2xl font-bold"}>2</h1>
                        </div>

                        <div className={"flex items-center gap-10 w-1/2"}>
                            <div className={"h-[10px] bg-yellow-500 w-full"}></div>
                            <h1 className={"text-2xl leading-2xl font-bold"}>3</h1>
                        </div>
                    </div>

                    <div
                        className={"flex justify-between gap-10 max-xl:text-xs max-xl:leading-sm text-sm leading-[39px] text-neutral-400"}
                    >
                        <h1 className={"text-left"}>
                            {t.steps.first}
                        </h1>

                        <h1 className={"text-center ml-10"}>
                            {t.steps.second}
                        </h1>

                        <h1 className={"text-end text-white"}>
                            {t.steps.third}
                        </h1>
                    </div>
                </div>

                <div className={"max-md:flex flex-col items-center hidden gap-3"}>
                    <div className={"flex flex-col items-center gap-3"}>
                        <h1 className={"max-xl:text-xl text-[40px] leading-xl font-bold"}>1</h1>
                        <p className={"max-[1385px]:text-sm text-neutral-400 max-md:text-[20px] leading-sm text-center"}>
                            {t.steps.first}
                        </p>

                        <div className={"h-20 w-2 bg-neutral-800"}></div>
                    </div>

                    <div className={"flex flex-col gap-3 items-center"}>
                        <h1 className={"max-xl:text-xl text-[40px] leading-xl font-bold"}>2</h1>
                        <p className={"max-[1385px]:text-sm text-neutral-400 max-md:text-[20px] leading-[28px] text-center"}>
                            {t.steps.second}
                        </p>
                        <div className={"h-20 w-2 bg-yellow-500"}></div>
                    </div>

                    <div className={"flex flex-col gap-3 items-center"}>
                        <h1 className={"max-xl:text-xl text-[40px] leading-xl text-yellow-500 font-bold"}>3</h1>
                        <p className={"max-[1385px]:text-sm max-md:text-[20px] leading-sm text-center"}>
                            {t.steps.third}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferralSection;