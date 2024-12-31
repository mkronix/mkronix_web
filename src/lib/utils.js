import { Color, Vector3 } from 'three';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}


export const hexToRgb = (hex) => {
    const color = new Color(hex);

    return new Vector3(color.r, color.g, color.b);
};

