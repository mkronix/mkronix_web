// ScrollRevealText.js
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealText = ({ children, className }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const el = textRef.current;
        const characters = el.querySelectorAll(".char");

        gsap.fromTo(
            characters,
            { opacity: 0.3 },
            {
                opacity: 1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%", // Start animation when top of the element hits 80% of viewport
                    end: "bottom 20%", // End animation when bottom of the element hits 20% of viewport
                    scrub: true, // Smooth scrolling effect
                    toggleActions: "play reverse play reverse",
                },
            }
        );

        return () => {
            // Clean up GSAP instance
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Split text into words and characters, preserving spacing
    const splitText = (text) =>
        text.split(" ").map((word, index) => (
            <span
                key={index}
                style={{ display: "inline-block", whiteSpace: "pre" }} // Preserve spacing
            >
                {word.split("").map((char, i) => (
                    <span key={i} className="char inline-block text-lg md:text-xl">
                        {char}
                    </span>
                ))}
                <span className="char inline-block">&nbsp;</span>
            </span>
        ));

    return (
        <div
            ref={textRef}
            className={`overflow-hidden ${className}`}
            style={{ display: "inline-block" }}
        >
            {splitText(children)}
        </div>
    );
};

export default ScrollRevealText;
