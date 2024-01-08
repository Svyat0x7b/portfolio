import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { IWorkExperience, experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

interface IExpirienceCardType {
    experience: IWorkExperience;
}

const ExpirienceCard: React.FC<IExpirienceCardType> = ({ experience }) => {
    return (
        <VerticalTimelineElement
            date={experience.date}
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }>
            <div>
                <h3 className="text-white text-[24px]">{experience.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                    {experience.company_name}
                </p>
            </div>
            <ul className="mt-5 list-disc pl-7 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider">
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Expirience: React.FC = () => {
    return (
        <>
            <motion.div variants={textVariant(0)}>
                <p className={`${styles.sectionSubText} mt-10`}>What is my commercial way</p>
                <h2 className={`${styles.sectionHeadText}`}>My expirience</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExpirienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Expirience, 'work');
