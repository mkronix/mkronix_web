
const ServiceCard = ({ title, description, img }) => {
    return (
        <div className="fadeOutAnimation bg-card-bg md:p-4 p-2 rounded-lg max-w-[415px] w-full flex flex-col gap-1">
            <img src={img} alt={title} className="md:w-10 md:h-12 w-8 h-8 mb-2" />
            <h3 className="text-text-primary font-antic lg:text-4xl md:text-3xl text-2xl leading-[40px]">{title}</h3>
            <p className="text-text-primary font-sans font-light lg:text-lg text-sm">{description}</p>
        </div>
    );
};

export default ServiceCard;