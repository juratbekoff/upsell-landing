import {getLocale, localeType} from "@/locales/config";

const FunnelOptimizationSection = async ({lang}: { lang: localeType }) => {
    const t = await getLocale(lang, "FunnelOptimization");

    return (
        <div className="bg-neutral-900 py-16 flex justify-center mt-20 max-lg:hidden">
            <div className="text-xl leading-[57px] font-medium container text-center px-20">
                {t.description}
            </div>
        </div>
    );
};

export default FunnelOptimizationSection;