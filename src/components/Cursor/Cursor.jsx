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
        };
        window.addEventListener("mousemove", editCursor);

        return () => {
            window.removeEventListener("mousemove", editCursor);
        };
    }, []);

    return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;
