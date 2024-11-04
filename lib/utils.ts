import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function dynamicBlurDataUrl(image: any) {
    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : process.env.NEXT_PUBLIC_DOMAIN;

    const base64str = await fetch(
        `${baseUrl}${image.src}`
    ).then(async (res) =>
        Buffer.from(await res.arrayBuffer()).toString('base64')
    );

    return `data:image/png;base64,${base64str}`
}