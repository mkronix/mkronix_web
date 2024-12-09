import React, { useEffect } from "react";
import Lenis from "lenis";

const StackedCards = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        // Scroll event handler for Lenis
        lenis.on("scroll", () => {
            const cards = document.querySelectorAll(".card");
            const stackArea = document.querySelector(".stack-area");

            if (stackArea) {
                const proportion = stackArea.getBoundingClientRect().top / window.innerHeight;

                if (proportion <= 0) {
                    let n = cards.length;
                    let index = Math.ceil((proportion * n) / 2);
                    index = Math.abs(index) - 1;

                    cards.forEach((card, i) => {
                        if (i <= index) {
                            card.classList.add("origin-bottom-left");
                        } else {
                            card.classList.remove("origin-bottom-left");
                        }
                    });

                    // Rotate cards
                    let angle = 0;
                    cards.forEach((card) => {
                        if (card.classList.contains("origin-bottom-left")) {
                            card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
                        } else {
                            card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
                            angle -= 10;
                        }
                    });
                }
            }
        });

        // Start the animation loop
        const animate = (time) => {
            lenis.raf(time);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        // Clean up Lenis on unmount
        return () => lenis.destroy();
    }, []);

    return (
        <div className="stack-area h-[300vh] relative flex justify-center items-center">
            <div className="right h-screen flex items-center justify-center sticky top-0">
                <div className="cards w-full relative h-full">
                    {[
                        { title: "Ui/UX", text: "Design intuitive and seamless user experiences", color: "bg-teal-500", zindex: "z-30" },
                        { title: "Web Design", text: "Craft stunning and responsive websites", color: "bg-indigo-500", zindex: "z-20" },
                        { title: "Web Development", text: "Build robust and scalable web applications", color: "bg-pink-500", zindex: "z-10" },
                        { title: "App Design & Development", text: "Develop innovative and user-friendly mobile apps", color: "bg-red-500", zindex: "z-0" },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className={`card transition duration-1000 ease-in-out w-96 h-96 box-border p-9 rounded-2xl flex flex-col justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${card.zindex} ${card.color}`}
                        >
                            <div className="text-black font-antic font-bold lg:text-5xl md:text-3xl text-2xl leading-[20px]">
                                {card.title}
                            </div>
                            <div className="text-black font-antic lg:text-4xl md:text-3xl text-2xl leading-[20px]">{card.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StackedCards;