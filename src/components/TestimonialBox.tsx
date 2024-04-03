import {FC} from 'react';
import {ITestimonial} from "./TestimonialSection";
interface ITestimonialBox extends ITestimonial{
    index: number;
}

const TestimonialBox: FC<ITestimonialBox> = ({index, content, author}) => {
    return (
        <div className={`Testimonial-box Box-${index}`}>
            <div className="Testimonial-box-content">
                {content}
            </div>
            <div className="Testimonial-box-author">
                {author}
            </div>
        </div>
    );
};

export default TestimonialBox;