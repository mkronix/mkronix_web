'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import services from '../../data/servicesection';
import CommonHeaderText from '../CommonHeaderText/CommonHeaderText';

export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });
    return (
        <ReactLenis root>
            <section className="relative z-10 " ref={container}>
                <CommonHeaderText text={'What We Do'} />

                <main className="text-white w-full ">
                    {services.map((project, i) => {
                        const targetScale = 1 - (services.length - i) * 0.05;
                        return (
                            <Card
                                key={`p_${i}`}
                                i={i}
                                url={project?.image}
                                src={project?.image}
                                name={project?.name}
                                purpose={project?.purpose}
                                tools={project?.tools}
                                notableWorks={project?.notableWorks}
                                overview={project?.overview}
                                ongoingProjects={project?.ongoingProjects}
                                projectsCompleted={project?.projectsCompleted}
                                progress={scrollYProgress}
                                range={[i * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </main>
            </section>
        </ReactLenis>
    );
}
export const Card = ({
    i,
    name,
    overview,
    purpose,
    tools,
    notableWorks,
    ongoingProjects,
    projectsCompleted,
    url,
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
            className="h-screen flex items-center justify-center sticky top-0"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className={`flex relative -top-[25%] h-[450px] w-[70%] rounded-md p-10 origin-top`}
            >
                <div
                    className="w-full flex flex-col space-y-5 border-b-[1px] border-white/10 "
                >
                    <div className="flex flex-col">
                        <h1
                            className={`font-heading2   sm:mt-[5vh] text-center sm:tracking-wider sm:text-5xl`}
                        >
                            {name}
                        </h1>
                        <h1 className="font-heading1 text-xl text-center sm:mb-[5vh] tracking-tight ">
                            {purpose}
                        </h1>
                    </div>
                    <div
                        style={{ lineHeight: "1.5vw" }}
                        className="sm:flex sm:flex-col  items-start justify-center font-heading1 sm:space-y-5"
                    >
                        <h1 className="tracking-wider  text-xl font-semibold">
                            Overview
                        </h1>
                        <p className="ml-5 sm:font-normal sm:text-md sm:tracking-wider">
                            {overview}
                        </p>
                        <h1 className="sm:tracking-wider  sm:text-xl sm:font-semibold">
                            Tools
                        </h1>
                        <p className="ml-5 sm:font-normal sm:text-md sm:tracking-wider">
                            {tools}
                        </p>
                        <h1 className="sm:tracking-wider  sm:text-xl sm:font-semibold">
                            Notable Projects
                        </h1>
                        <ul className="list-disc pl-4">
                            {notableWorks.map((item, index) => (
                                <li
                                    key={index}
                                    className="ml-5  sm:font-normal sm:text-md sm:tracking-wider"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="BOTTOM-STATS pt-10 border-b-[1px] border-white/10 self-center p-5 rounded-xl text-white/70 sm:flex items-center justify-center space-x-5  ">
                            <div className="sm:flex group cursor-pointer hover:text-white sm:flex-col items-center justify-center w-fit h-fit transition-transform duration-300 hover:scale-110">
                                <h1 className="font-heading2 sm:text-2xl">
                                    {ongoingProjects}
                                </h1>
                                <h1 className="font-heading1 tracking-wider sm:text-sm">
                                    Ongoing Projects
                                </h1>
                            </div>
                            <div className="sm:flex group cursor-pointer hover:text-white sm:flex-col items-center justify-center w-fit h-fit transition-transform duration-300 hover:scale-110">
                                <h1 className="font-heading2 sm:text-2xl">
                                    {projectsCompleted}
                                </h1>
                                <h1 className="font-heading1 tracking-wider sm:text-sm">
                                    Projects Completed
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`relative w-[60%] h-full rounded-lg overflow-hidden `}
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
