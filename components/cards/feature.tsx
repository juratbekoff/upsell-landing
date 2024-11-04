type FeatureCardProps = {
    title: string;
    description?: string;
    image: any;
    justifyContent?: "center" | "start" | "between" | "end"
}

const FeatureCard = ({title, description, image, justifyContent = "between"}: FeatureCardProps) => {
    return (
        <div
            className={"bg-neutral-900 rounded-[10px] p-8 flex flex-col justify-between gap-16"}
            style={{
                justifyContent: justifyContent
            }}
        >
            <div className={"flex flex-col gap-3"}>
                <div className={"text-base leading-[38px]  max-lg:text-[24px] max-lg:leading-sm font-medium"}
                     dangerouslySetInnerHTML={{
                         __html: title
                     }}></div>

                <p className={"text-neutral-400 leading-[34px] text-[24px]"}>{description}</p>
            </div>

            {image}
        </div>
    );
};

export default FeatureCard;