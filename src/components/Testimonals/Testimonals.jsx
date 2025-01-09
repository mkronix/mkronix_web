import testimonials from "../../data/testimonals";
import CommonHeaderText from "../CommonHeaderText/CommonHeaderText";
import { InfiniteMovingCards } from "../InfiniteMovingCards/InfiniteMovingCards";
const Testimonals = () => {
    return (
        <section className="relative">
            <CommonHeaderText text={'Some Friendly Words'} />
            <InfiniteMovingCards items={testimonials} direction="left" pauseOnHover={true} speed={"normal"} />
        </section>
    );
}

export default Testimonals
