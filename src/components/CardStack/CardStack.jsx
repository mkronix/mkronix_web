'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import services from '../../data/servicesection';
import CommonHeaderText from '../CommonHeaderText/CommonHeaderText';

export default function index() {
    return (
        <ReactLenis root>
            <section className="relative z-10 ">
                <CommonHeaderText text={'What We Do'} iconNumber={2} />
                <div className="text-white w-full flex flex-col gap-8">
                    {services.map((project, i) => {
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
    name,
    overview,
    purpose,
    tools,
    notableWorks,
    ongoingProjects,
    projectsCompleted,
    url,
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    return (

        <motion.div
            ref={container}
            className={`md:h-screen grid gird-cols-1 md:grid-cols-2 mx-auto place-items-center md:gap-8 items-center justify-center w-full `}
        >
            <div
                className="w-full flex flex-col gap-8 px-4 md:px-10"
            >
                <div className="flex flex-col">
                    <h1
                        className={`sm:text-4xl text-3xl tracking-tight `}
                    >
                        {name}
                    </h1>
                    <h1 className="text-xl tracking-tight">
                        {purpose}
                    </h1>
                </div>
                <div
                    className="flex flex-col  items-start justify-center gap-3"
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
                    <div className="border-b-[1px] border-white/10 p-2 text-white/70 flex items-center justify-center space-x-5">
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
                className={`w-96 h-96 p-4 `}
            >
                <motion.div
                    className={`w-full h-full`}
                    style={{ scale: imageScale }}
                >
                    <img fill src={url} alt="image" className="object-cover rounded-lg" />
                </motion.div>
            </div>

        </motion.div>

    );
};
