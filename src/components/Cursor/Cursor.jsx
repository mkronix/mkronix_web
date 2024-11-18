import { useEffect, useRef } from "react";
import "./Cursor.css";

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Function to update cursor position
        const editCursor = (e) => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;

            createSparkle(x, y);
            addSpotlight(e);
        };

        // Function to create sparkle
        const createSparkle = (x, y) => {
            const sparkle = document.createElement("div");
            sparkle.className = "sparkle";
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            document.body.appendChild(sparkle);
            sparkle.addEventListener("animationend", () => {
                sparkle.remove();
            });
        };

        // Function to add spotlight effect
        const addSpotlight = (e) => {
            const elements = document.querySelectorAll(".spotlight-text");
            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const isHovered =
                    e.clientX > rect.left &&
                    e.clientX < rect.right &&
                    e.clientY > rect.top &&
                    e.clientY < rect.bottom;

                if (isHovered) {
                    element.classList.add("highlight");
                } else {
                    element.classList.remove("highlight");
                }
            });
        };

        window.addEventListener("mousemove", editCursor);

        return () => {
            window.removeEventListener("mousemove", editCursor);
        };
    }, []);

    return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;
