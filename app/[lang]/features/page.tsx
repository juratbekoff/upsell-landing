import SubHeader from "@/components/sub-header";
import FeatureCard from "@/components/cards/feature";
import {
    fetchAdvanceToolsData,
    fetchCheckoutsData,
    fetchFeaturesBoostAovData,
    fetchGlobalSolutionsData,
    fetchLatestTechnologiesData
} from "@/constants";

const Page = async () => {
    const advanceToolsData = await fetchAdvanceToolsData();
    const checkoutData = await fetchCheckoutsData();
    const featuresBoostAovData = await fetchFeaturesBoostAovData();
    const globalSolutionsData = await fetchGlobalSolutionsData();
    const latestTechnologiesData = await fetchLatestTechnologiesData();

    return (
        <div className={"container max-lg:w-90 flex mb-44"}>
            <section className={"mt-40 flex flex-col gap-[130px]"}>
                <SubHeader
                    title={"All Features"}
                    description={
                        <div className={"mr-[500px] max-lg:mr-80 max-md:mr-0"}>
                            Intelligent upsells, bundles, and custom carts for growing brands on Shopify
                        </div>
                    }
                    className={"w-full"}
                    position={"LEFT"}
                />

                <div className={"flex flex-col gap-16"}>
                    <SubHeader
                        title={"Latest Technologies"}
                        description={"Built with latest Shopify technologies to optimize your store"}
                        className={"w-full"}
                        position={"LEFT"}
                    />

                    <div className={"grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-4"}>
                        {
                            latestTechnologiesData.map((item, index) => (
                                <FeatureCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className={"flex flex-col gap-16"}>
                    <SubHeader
                        title={"Boost AOV & Retain Carts with Llama Cart"}
                        description={"Provide your clients a seamless shopping experience and maximize revenue. Llama Cart has everything your store needs to thrive."}
                        position={"LEFT"}
                        className={"w-[60%]"}
                    />

                    <div className={"grid grid-cols-2 max-md:grid-cols-1 gap-4"}>
                        {
                            featuresBoostAovData.map((item, index) => (
                                <FeatureCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={"flex flex-col gap-16"}>
                    <SubHeader
                        title={"Optimized Checkout"}
                        description={null}
                        className={"w-[60%]"}
                        position={"LEFT"}
                    />

                    <div className={"grid grid-cols-2 max-md:grid-cols-1 gap-4"}>
                        {
                            checkoutData.map((item, index) => (
                                <FeatureCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={"flex flex-col gap-16"}>
                    <SubHeader
                        title={"Global Solutions"}
                        description={null}
                        className={"w-[60%]"}
                        position={"LEFT"}
                    />

                    <div className={"grid grid-cols-2 max-md:grid-cols-1 gap-4"}>
                        {
                            globalSolutionsData.map((item, index) => (
                                <FeatureCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={"flex flex-col gap-16"}>
                    <SubHeader
                        title={"Discover advance tools"}
                        description={null}
                        className={"w-[60%]"}
                        position={"LEFT"}
                    />

                    <div className={"grid grid-cols-2 max-md:grid-cols-1 gap-4"}>
                        {
                            advanceToolsData.map((item, index) => (
                                <FeatureCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;