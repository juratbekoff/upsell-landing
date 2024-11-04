import React from 'react';
import {ReviewProps} from "@/constants";
import ReviewCard from "@/components/cards/review";
import SubHeader from "@/components/sub-header";

import kanesLogo from "../../public/partners/kanes.svg";
import tupperwareLogo from "../../public/partners/tupperware.svg";
import blissblendsLogo from "../../public/partners/blissblends.svg";
import clothinglineLogo from "../../public/partners/clothingline.svg";
import skinTypeSolutionLogo from "../../public/partners/skin-type-solution.svg";
import exclusiveBeautyLogo from "../../public/partners/exclusive-beauty.svg";
import deadSockLogo from "../../public/partners/dead-sock.png";
import centricLogo from "../../public/partners/centric.svg";
import masterTailorLogo from "../../public/partners/master-tailor.svg";
import {getLocale, localeType} from "@/locales/config";

export const reviewsData: ReviewProps[] = [
    {
        name: "Kane’s Furniture",
        logo: kanesLogo,
        review: `Easy to install and set up. Excellent app, <span class="text-white">excellent features</span> and excellent customer support. Really simple to use`
    },
    {
        name: "Tupperware",
        logo: tupperwareLogo,
        review: `This is one of the best apps out on the Shopify App Store. Super <span class="text-white">responsive support team</span> and <span class="text-white">highly customizable to our business</span> operational needs.`
    },
    {
        name: "Blissblends",
        logo: blissblendsLogo,
        review: `Really great app. I had some troubles setting it up and I got the most <span class="text-white">outstanding customer</span> support. These guys are amazing!`
    },
    {
        name: "Clothingline",
        logo: clothinglineLogo,
        review: `Great upsell app. <span class="text-white">easy to install, support helped me to configure it,</span> loads super fast, really great experience so far.`
    },
    {
        name: "Skin Type Solution",
        logo: skinTypeSolutionLogo,
        review: `This is <span class="text-white">most complete Upsell app</span> on the market at the moment, especially for its <span class="text-white">very reasonable price.</span> We have many needs in our store and this one really met all of them.`
    },
    {
        name: "Exclusive Beauty",
        logo: exclusiveBeautyLogo,
        review: `<span class="text-white">This App does it ALL!</span> Finally, a comprehensive app that provides all the features we need. They also offer great support and very responsive.`
    },
    {
        name: "Dead Sock",
        logo: deadSockLogo,
        review: `Impressive app that has a <span class="text-white">lot of premium features</span> and options for a very reasonable price, plus awesome support!`
    },
    {
        name: "Centric",
        logo: centricLogo,
        review: `Amazing app. The <span class="text-white">best service</span> I have experienced. Definitely will download for my other stores.`
    },
    {
        name: "Master Tailor",
        logo: masterTailorLogo,
        review: `<span class="text-white">This is one of the best app</span> so far I have used. I am very thankful to my friends who recommend this app. I really love this app.`
    },
    {
        name: "Kane’s Furniture",
        logo: kanesLogo,
        review: `Easy to install and set up. Excellent app, <span class="text-white">excellent features</span> and excellent customer support. Really simple to use`
    },
    {
        name: "Tupperware",
        logo: tupperwareLogo,
        review: `This is one of the best apps out on the Shopify App Store. Super <span class="text-white">responsive support team</span> and <span class="text-white">highly customizable to our business</span> operational needs.`
    },
    {
        name: "Blissblends",
        logo: blissblendsLogo,
        review: `Really great app. I had some troubles setting it up and I got the most <span class="text-white">outstanding customer</span> support. These guys are amazing!`
    },
    {
        name: "Clothingline",
        logo: clothinglineLogo,
        review: `Great upsell app. <span class="text-white">easy to install, support helped me to configure it,</span> loads super fast, really great experience so far.`
    },
    {
        name: "Skin Type Solution",
        logo: skinTypeSolutionLogo,
        review: `This is <span class="text-white">most complete Upsell app</span> on the market at the moment, especially for its <span class="text-white">very reasonable price.</span> We have many needs in our store and this one really met all of them.`
    },
    {
        name: "Exclusive Beauty",
        logo: exclusiveBeautyLogo,
        review: `<span class="text-white">This App does it ALL!</span> Finally, a comprehensive app that provides all the features we need. They also offer great support and very responsive.`
    },
];

const ReviewsSection = async ({lang}: { lang: localeType }) => {
    const t = await getLocale(lang, "Reviews")

    return (
        <div
            className='flex flex-col  max-xl:container items-center justify-center gap-28 mt-28 bg-black text-white overflow-x-hidden'
        >
            <div className={"flex flex-col items-center gap-4"}>
                <SubHeader title={t.title} description={t.descr} position={"CENTER"}/>
            </div>

            <div className='cards-width h-full relative max-xl:hidden'>
                <div
                    className='w-full columns-5 gap-3'
                >
                    {reviewsData?.map((review, index) => (
                        <ReviewCard
                            key={index}
                            review={review.review}
                            name={review.name}
                            logo={review.logo}
                        />
                    ))}
                </div>

                <div className='xl:w-1/5 lg:w-1/4 md:w-1/3 w-0 backdrop-blur-[3px] absolute h-full top-0 left-0'></div>
                <div
                    className='xl:w-1/5 lg:w-1/4 md:w-1/3 w-0  backdrop-blur-[3px] absolute h-full top-0 right-0 '></div>
            </div>

            <div
                className={"hidden max-xl:block  max-xl:columns-2 max-md:columns-1 mx-auto max-md:w-90 gap-4"}
            >
                {reviewsData.filter((_, index) => index <= 3).map((review, index) => (
                    <ReviewCard key={index} {...review}/>
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;