import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import TextRevealByWord from '../TextRevealByWord/TextRevealByWord';
const projects = [
    {
        title: 'Matthias Leidinger',
        description:
            'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
        src: 'rock.jpg',
        link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
        color: 'bg-transparent',
    },
    {
        title: 'Clément Chapillon',
        description:
            'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.',
        src: 'tree.jpg',
        link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
        color: 'bg-transparent',
    },
    {
        title: 'Zissou',
        description:
            'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.',
        src: 'water.jpg',
        link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
        color: 'bg-transparent',
    },
    {
        title: 'Mathias Svold and Ulrik Hasemann',
        description:
            'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.',
        src: 'house.jpg',
        link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
        color: 'bg-transparent',
    },
    {
        title: 'Mark Rammers',
        description:
            'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.',
        src: 'cactus.jpg',
        link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
        color: 'bg-transparent',
    },
];

export default function ProjectSection() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });
    return (
        <ReactLenis root>
            <section ref={container}>
                <TextRevealByWord text=" Our Best Project" />
                <div className="w-full">
                    {projects.map((project, i) => {
                        const targetScale = 1 - (projects.length - i) * 0.05;
                        return (
                            <Card
                                key={`p_${i}`}
                                i={i}
                                url={project?.link}
                                src={project?.src}
                                title={project?.title}
                                color={project?.color}
                                description={project?.description}
                                progress={scrollYProgress}
                                range={[i * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </section>
        </ReactLenis>
    );
}
export const Card = ({
    i,
    title,
    description,
    src,
    url,
    color,
    progress,
    range,
    targetScale,
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);
    return (
        <div
            ref={container}
            className="h-screen flex items-center justify-center sticky top-0 my-10"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className={`${color} flex flex-col text-black gap-4 relative overflow-hidden h-[90%] w-[100%] rounded-md p-5 md:p-10 origin-top`}
            >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{title}</h2>
                <div
                    className={`relative md:w-[60%] h-full rounded-lg overflow-hidden `}
                >
                    <motion.div
                        className={`w-full h-full`}
                        style={{ scale: imageScale }}
                    >
                        <img fill src={url} alt="image" className="object-cover" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};
