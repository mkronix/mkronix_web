import { useEffect, useRef } from "react";

const Cursor = () => {
    const cursorRef = useRef(null);
    const linkRefs = useRef([]);

    useEffect(() => {
        const cursor = cursorRef.current;

        const animateit = (e) => {
            const span = e.currentTarget.querySelector('span');
            const { offsetX: x, offsetY: y } = e;
            const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
            const move = 25;
            const xMove = (x / width) * (move * 2) - move;
            const yMove = (y / height) * (move * 2) - move;

            if (span) {
                span.style.transform = `translate(${xMove}px, ${yMove}px)`;
            }
        };

        const editCursor = (e) => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
        };

        window.addEventListener('mousemove', editCursor);

        return () => {
            window.removeEventListener('mousemove', editCursor);
        };
    }, []);

    return (
        <>
            <div className="cursor" ref={cursorRef}></div>
        </>
    );
};


export default Cursor