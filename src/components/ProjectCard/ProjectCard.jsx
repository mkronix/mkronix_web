const ProjectCard = ({ title, description, buttonText, image }) => {
    return (
        <div className="fadeOutAnimation bg-card-bg px-6 pt-6 max-w-[430px] rounded-lg shadow-lg flex flex-col gap-2 items-start w-full">
            <h3 className="text-text-primary font-antic lg:text-4xl md:text-3xl text-2xl leading-[40px]">{title}</h3>
            <p className="text-text-primary font-sans font-light lg:text-lg text-sm">{description}</p>
            <button className="font-antic text-xl border-b border-text-primary text-text-primary">
                {buttonText}
            </button>
            <img
                src={image}
                alt={title}
                className="mt-6 rounded-md w-full object-cover"
            />
        </div>
    );
};

export default ProjectCard;