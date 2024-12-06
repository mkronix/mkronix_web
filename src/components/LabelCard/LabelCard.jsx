import CardWithAnimationComponent from "../CardWithAnimationComponent/CardWithAnimationComponent";

const LabelCard = ({ title, description }) => {
    return (
        <CardWithAnimationComponent>
            <div className="  max-w-[324px] w-full h-[200px] bg-card-bg p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
                <h3 className="text-text-primary font-antic lg:text-4xl md:text-3xl text-2xl leading-[40px]">{title}</h3>
                <p className="text-text-primary font-antic lg:text-4xl md:text-3xl text-2xl leading-[40px]">{description}</p>
            </div>
        </CardWithAnimationComponent>
    );
};

export default LabelCard;