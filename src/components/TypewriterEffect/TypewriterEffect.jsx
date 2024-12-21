"use client";

import { cn } from "../../lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName
}) => {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
        if (isInView) {
            animate("span", {
                display: "inline-block",
                opacity: 1,
                width: "fit-content",
            }, {
                duration: 0.3,
                delay: stagger(0.1),
                ease: "easeInOut",
            });
        }
    }, [isInView]);

    const renderWords = () => {
        return (
            (<motion.div ref={scope} className="flex gap-2">
                {wordsArray.map((word, idx) => {
                    return (
                        (<div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <motion.span
                                    initial={{}}
                                    key={`char-${index}`}
                                    className={cn(`text-white opacity-0 hidden`, word.className)}>
                                    {char}
                                </motion.span>
                            ))}
                        </div>)
                    );
                })}
            </motion.div>)
        );
    };
    return (
        (<div
            className={cn(
                "text-base flex items-center gap-1 sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
                className
            )}>
            {renderWords()}
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[2px] h-4 md:h-6 lg:h-10 bg-white",
                    cursorClassName
                )}></motion.span>
        </div>)
    );
};

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
                        (<div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={cn(`text-white text-dynamic-h2 `, word.className)}>
                                    {char}
                                </span>
                            ))}
                        </div>)
                    );
                })}
            </div>)
        );
    };

    return (
        (<div className={cn("flex space-x-1", className)}>
            <motion.div
                className="overflow-hidden pb-2"
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
