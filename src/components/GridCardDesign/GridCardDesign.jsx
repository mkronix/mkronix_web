import React from "react";
import { useId } from "react";

export default function GridCardDesign({
    title,
    description }) {
    return (
        <div
            className="relative z-30 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden">
            <Grid size={20} />
            <div className=''>
                <h3 className="text-dynamic-p font-bold text-off-white">{title}+</h3>
                <p className="md:text-xl">{description}</p>
            </div>
        </div>
    );
}
export const Grid = ({
    pattern,
    size
}) => {
    const p = pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
        (<div
            className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div
                className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full  mix-blend-overlay stroke-black/10 fill-black/10" />
            </div>
        </div>)
    );
};

export function GridPattern({
    width,
    height,
    x,
    y,
    squares,
    ...props
}) {
    const patternId = useId();

    return (
        (<svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}>
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]) => (
                        <rect
                            strokeWidth="0"
                            key={`${patternId}-${x}-${y}-${Math.random()}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height} />
                    ))}
                </svg>
            )}
        </svg>)
    );
}
