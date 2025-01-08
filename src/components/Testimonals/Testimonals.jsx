import testimonials from "../../data/testimonals";
import CommonHeaderText from "../CommonHeaderText/CommonHeaderText";
import FloatingTestimonals from "../FloatingTestimonals/FloatingTestimonals";
import { InfiniteMovingCards } from "../InfiniteMovingCards/InfiniteMovingCards";
const Testimonals = () => {
    return (
        <section className="relative">
            <CommonHeaderText text={'Some Friendly Words'} iconNumber={1} />
            <InfiniteMovingCards items={testimonials} direction="left" pauseOnHover={true} speed={"normal"} />
            {/* <FloatingTestimonals /> */}
        </section>
    );
}

export default Testimonals
