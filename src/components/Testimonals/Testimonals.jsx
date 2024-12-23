import CommonHeaderText from "../CommonHeaderText/CommonHeaderText";
import { InfiniteMovingCards } from "../InfiniteMovingCards/InfiniteMovingCards";

const testimonials = [
    {
        quote: "MkRonix transformed our outdated website into a modern masterpiece. The interactive designs and smooth animations perfectly captured our brand's identity.",
        name: "Rajesh Sharma",
        title: "CEO, InnovateTech Solutions",
    },
    {
        quote: "Their attention to detail and creative approach exceeded our expectations. The team delivered a seamless user experience for our e-commerce platform.",
        name: "Anjali Verma",
        title: "Founder, StyleBazaar",
    },
    {
        quote: "We approached MkRonix for a custom web application, and they nailed it! The functionality and UI/UX were exactly what we needed to scale our business.",
        name: "Amit Khurana",
        title: "CTO, AgroFuture India",
    },
    {
        quote: "The team at MkRonix is highly professional and innovative. They helped us stand out with a unique, futuristic website design that impressed our clients.",
        name: "Sneha Patel",
        title: "Managing Director, FinEdge Advisory",
    },
    {
        quote: "Working with MkRonix was a game-changer. They brought our ideas to life with creative visuals and optimized our site for performance and SEO.",
        name: "Vikram Joshi",
        title: "Owner, The Artisan Café",
    },
];

const Testimonals = () => {
    return (
        <section>
            <CommonHeaderText text={'Some Friendly Words'} />
            <div
                className="h-[40rem] rounded-md px-4 flex gap-10 flex-col antialiased justify-center relative overflow-hidden">
                <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
            </div>
        </section>
    );
}

export default Testimonals
