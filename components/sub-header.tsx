import {ReactNode} from "react";
import {cn} from "@/lib/utils";

type SubHeaderProps = {
    title: ReactNode;
    description: ReactNode;
    position: "LEFT" | "RIGHT" | "CENTER",
    className?: ReactNode
}

const SubHeader = ({title, description, className, position}: SubHeaderProps) => {
    return (
        <div
            className={cn(`flex flex-col w-full max-lg:w-full gap-4`, className)}
        >
            <h1 className={`text-2xl leading-2xl font-bold max-md:text-[40px] max-md:leading-[40px] max-md:text-center ${position === "CENTER" ? "text-center" : "text-left"}`}
            >
                {title}
            </h1>

            <span
                className={`text-sm text-neutral-400 leading-[39px] max-md:px-2 max-md:text-[20px] max-md:leading-[28px] max-md:text-center ${position === "CENTER" ? "text-center" : "text-left"}`}
            >
                 {description}
            </span>
        </div>
    );
};

export default SubHeader;