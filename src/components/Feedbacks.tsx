import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { ITestimonial } from '../constants';

interface IFeedBackCardProps {
    item: ITestimonial;
    index: number;
}

const FeedbackCard: React.FC<IFeedBackCardProps> = ({ item, index }) => {
    return (
        <motion.div
            variants={fadeIn('', 'spring', index * 0.5, 0.75)}
            className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
            <p className="text-white font-black text-[48px]">"</p>
            <div className="mt-1">
                <p className="text-white tracking-wider test-[18px]">{item.testimonial}</p>
                <div className="mt-7 flex justify-between items-center gap-1">
                    <div className="flex-1 flex flex-col">
                        <p className="text-white font-medium text-[16px]">
                            <span className="text-[#198fe0]">@</span> {item.name}
                        </p>
                        <p className="mt-1 text-secondary text-[12px]">
                            {item.designation} of {item.company}
                        </p>
                    </div>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
};

const Feedbacks: React.FC = () => {
    return (
        <>
            <div className="mt-12 bg-black-100 rounded-[20px]">
                <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
                    <motion.div variants={textVariant(0)}>
                        <p className={`${styles.sectionSubText}`}>What others say</p>
                        <h2 className={`${styles.sectionHeadText}`}>Feedbacks</h2>
                    </motion.div>
                </div>
                <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
                    {testimonials.length > 0 ? (
                        testimonials.map((item, index) => (
                            <FeedbackCard key={item.name} item={item} index={index} />
                        ))
                    ) : (
                        <p>There is no direct feedbacks... Your can be first</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Feedbacks, 'feedbacks');
