import CardWithAnimationComponent from "../CardWithAnimationComponent/CardWithAnimationComponent";

const LabelCard = ({ title, description, background }) => {
    return (
        <CardWithAnimationComponent>
            <div className={`max-w-[324px] w-full md:h-52 h-40  ${background ? background : "bg-card-bg"} p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center`}>
                <h3 className="text-black font-antic lg:text-4xl md:text-3xl text-2xl leading-[20px]">{title}</h3>
                <p className="text-black font-antic lg:text-4xl md:text-3xl text-2xl leading-[30px]">{description}</p>
            </div>
        </CardWithAnimationComponent>
    );
};

export default LabelCard;