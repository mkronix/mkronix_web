import { motion } from 'framer-motion'
const letterVariants = {
    initial: { opacity: 0, y: 0, x: 0 },
    animate: i => ({
        opacity: 1,
        y: i % 2 === 0 ? -50 : 50,
        x: i % 2 === 0 ? -50 : 50,
        transition: {
            duration: 1,
            ease: 'easeOut',
            delay: i * 0.3
        },
    }),
};

const wordVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.09,
        },
    },
};

const splitText = (text, type = 'word') => text.split("").map((letter, index) => (
    <motion.span
        key={index}
        custom={index}
        variants={letterVariants}
        initial="initial"
        animate="animate"
    >
        {letter}
    </motion.span>
));


export { splitText, wordVariants, letterVariants };