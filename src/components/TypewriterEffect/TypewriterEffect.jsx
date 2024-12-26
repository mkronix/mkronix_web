"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const TypewriterEffectSmooth = ({
    words,
    className,
}) => {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });
    const renderWords = () => {
        return (
            (<div className="flex gap-2 md:gap-4 items-center max-md:flex-wrap">
                {wordsArray.map((word, idx) => {
                    return (
                        (<h2 key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={cn(`text-white text-dynamic-h2 `, word.className)}>
                                    {char}
                                </span>
                            ))}
                        </h2>)
                    );
                })}
            </div>)
        );
    };

    return (
        (<div className={cn("flex space-x-1", className)}>
            <motion.div
                className="overflow-hidden"
                initial={{
                    width: "0%",
                }}
                whileInView={{
                    width: "100%",
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 1,
                }}>
                <div
                    className="font-bold"
                    style={{
                        whiteSpace: "nowrap",
                    }}>
                    {renderWords()}{" "}
                </div>
            </motion.div>
        </div>)
    );
};
