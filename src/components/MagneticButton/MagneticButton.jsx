import { useRef, useState } from 'react';
import { motion } from 'framer-motion';


export default function MagneticButton({ children, bgColor = 'bg-white', textColor = 'text-black' }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        if (ref.current) {
            const { clientX, clientY } = e;
            const { height, width, left, top } = ref.current.getBoundingClientRect();
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX, y: middleY });
        }
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 170, damping: 15, mass: 0.1 }}
            className={`${bgColor} font-medium ${textColor} transition-all duration-150 active:scale-95`}
        >
            {children}
        </motion.button>
    );
}