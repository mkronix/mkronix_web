import { cn } from "../../lib/utils";



export function RetroGrid({
    className,
    angle = 85,
    cellSize = 30,
    opacity = 0.8,
    lightLineColor = "white",
    darkLineColor = "white",
    ...props
}) {
    const gridStyles = {
        "--grid-angle": `${angle}deg`,
        "--cell-size": `${cellSize}px`,
        "--opacity": opacity,
        "--light-line": lightLineColor,
        "--dark-line": darkLineColor,
    };

    return (
        <div
            className={cn(
                "pointer-events-none absolute size-full overflow-hidden [perspective:159px]",
                `opacity-[var(--opacity)]`,
                className,
            )}
            style={gridStyles}
            {...props}
        >
            <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
                <div className="animate-grid [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] [background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-90%" />
        </div>
    );
}
