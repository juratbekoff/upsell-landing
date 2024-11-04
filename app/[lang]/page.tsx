import dynamic from "next/dynamic";
import {localeType} from "@/locales/config";

const HeroSection = dynamic(() => import("../../components/sections/HeroSection"));
const PartnersAndOav = dynamic(() => import("../../components/sections/PartnersAndOav"));
const ShoppingCart = dynamic(() => import("../../components/sections/ShoppingCart"));
const FeaturesSection = dynamic(() => import("../../components/sections/Features"));
const ReferralSection = dynamic(() => import("../../components/sections/Referral"));
const FunnelOptimizationSection = dynamic(() => import("../../components/sections/Funnels"));
const ReviewsSection = dynamic(() => import("../../components/sections/Reviews"));
const PricingSection = dynamic(() => import("../../components/sections/Pricing"));

type PageProps = {
    params: {
        lang: localeType
    }
}

const Page = async ({params: {lang}}: PageProps) => {
    return (
        <>
            <HeroSection lang={lang}/>
            <PartnersAndOav lang={lang}/>
            <FunnelOptimizationSection lang={lang}/>
            <ShoppingCart lang={lang}/>
            <FeaturesSection lang={lang}/>
            <ReferralSection lang={lang}/>
            <ReviewsSection lang={lang}/>
            <PricingSection lang={lang}/>
        </>
    );
}

export default Page;