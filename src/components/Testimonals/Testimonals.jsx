import testimonials from "../../data/testimonals";
import CommonHeaderText from "../CommonHeaderText/CommonHeaderText";
import { InfiniteMovingCards } from "../InfiniteMovingCards/InfiniteMovingCards";

const Testimonals = () => {
    return (
        <section>
            <CommonHeaderText text={'Some Friendly Words'} />
            <div
                className="h-[40rem] rounded-md px-4 flex gap-10 flex-col antialiased justify-center relative overflow-hidden">
                <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
            </div>
        </section>
    );
}

export default Testimonals
