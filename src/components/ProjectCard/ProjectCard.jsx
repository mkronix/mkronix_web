import CardWithAnimationComponent from "../CardWithAnimationComponent/CardWithAnimationComponent";

const ProjectCard = ({ title, description, buttonText, image, background }) => {
    return (
        <CardWithAnimationComponent>
            <div className={` ${background ? background : "bg-card-bg"} md:p-6 p-3 h-32 rounded-lg relative group shadow-lg flex gap-2 w-full`}>
                <div>
                    <h3 className="text-text-primary font-antic lg:text-4xl md:text-3xl text-2xl leading-[40px]">{title}</h3>
                    <p className="text-text-primary font-sans font-light lg:text-lg text-sm">{description}</p>
                </div>
                <button className="absolute bottom-4 right-4 font-antic md:text-xl text-sm border-b border-text-primary text-text-primary">
                    {buttonText}
                </button>
                {/* <img
                    src={image}
                    alt={title}
                    className="mt-6 rounded-md w-full object-cover"
                /> */}
            </div>
        </CardWithAnimationComponent>
    );
};

export default ProjectCard;