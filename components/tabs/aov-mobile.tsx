"use client";

import React, {useEffect, useRef, useState} from "react";
import {aovData} from "@/constants";

const AovTabMobile = () => {
    const [currentTab, setCurrentTab] = useState(1); // Set default tab to 1
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollToCenter(1);
    }, []);

    const handleTabChange = (index: number) => {
        if (index !== currentTab) {
            setIsAnimating(true);
            setCurrentTab(index);
            scrollToCenter(index);
            setTimeout(() => {
                setIsAnimating(false);
            }, 200);
        }
    };

    const scrollToCenter = (index: number) => {
        const container = containerRef.current;
        if (container) {
            const tab = container.children[index] as HTMLElement;
            if (tab) {
                const containerWidth = container.offsetWidth;
                const tabWidth = tab.offsetWidth;
                const tabOffsetLeft = tab.offsetLeft;

                const scrollPosition = tabOffsetLeft - containerWidth / 2 + tabWidth / 2;

                container.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <div className={"hidden max-md:w-full max-md:flex flex-col gap-3"}>
            <div ref={containerRef} className={"flex overflow-x-auto no-scrollbar gap-3"}>
                {aovData?.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleTabChange(index)}
                        className={`min-w-80 cursor-pointer flex flex-col justify-center gap-2 p-4 rounded ${
                            currentTab === index ? "bg-neutral-800" : "bg-neutral-900"
                        } ${index === 0 ? "ml-3" : ""} ${index === aovData.length - 1 ? "mr-3" : ""}`}
                    >
                        <h1 className={"text-xs leading-xs font-semibold"}>{item.title}</h1>
                        <p className={"text-neutral-400 text-xs leading-[25px]"}>{item.descr}</p>
                    </div>
                ))}
            </div>

            <div
                className={`overflow-hidden transition-opacity duration-300 ease-in-out`}
            >
                <video
                    className={`transition-transform duration-200 ${isAnimating ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
                    src={aovData[currentTab].url}
                    muted={true}
                    autoPlay={true}
                    playsInline
                    disablePictureInPicture
                    controls={false}
                    poster={aovData[currentTab].poster}
                />
            </div>
        </div>
    );
};

export default AovTabMobile;
