"use client";

import React, {useEffect, useState} from "react";
import {aovData} from "@/constants";

const AovTabDesktop = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [marginTop, setMarginTop] = useState(aovData[currentTab].mt);

    const handleTabChange = (index: number) => {
        if (index !== currentTab) {
            setTimeout(() => {
                setCurrentTab(index);
                setMarginTop(window.innerWidth <= 1024 ? aovData[index].mt * 2 : aovData[index].mt);
            }, 100);
        }
    };

    useEffect(() => {
        // Update marginTop on resize for responsive design
        const handleResize = () => {
            setMarginTop(window.innerWidth <= 1024 ? aovData[currentTab].mt * 2 : aovData[currentTab].mt);
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [currentTab]);

    return (
        <div className={"flex gap-5 max-md:hidden container"}>
            <div className={"flex flex-col w-[47%]"}>
                {aovData?.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleTabChange(index)}
                        className={`cursor-pointer flex flex-col gap-2 p-6 ${
                            currentTab === index ? "bg-neutral-800 rounded" : ""
                        } `}
                    >
                        <h1 className={"text-xs leading-xs font-semibold"}>{item.title}</h1>
                        <p className={"text-neutral-400 text-xs leading-[25px] w-[80%]"}>{item.descr}</p>
                    </div>
                ))}
            </div>

            <div
                className="w-[53%] h-auto flex flex-col transition-all duration-300 ease-in-out"
                style={{
                    marginTop: `${marginTop}px`,
                    justifyContent: aovData[currentTab].jc,
                }}
            >
                <div className="rounded-lg overflow-hidden w-full transition-opacity duration-300 ease-in-out">
                    <video
                        className="transition-transform duration-200"
                        src={aovData[currentTab].url}
                        muted={true}
                        autoPlay={true}
                        playsInline
                        disablePictureInPicture={false}
                        controls={false}
                        style={{
                            borderRadius: "8px",
                        }}
                        poster={aovData[currentTab].poster}
                    />
                </div>
            </div>
        </div>
    );
};

export default AovTabDesktop;
