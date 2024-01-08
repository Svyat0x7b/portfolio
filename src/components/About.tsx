import React from 'react';
import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';

interface ServiceCardPropsType {
    service: any;
    index: number;
}

const ServiceCard: React.FC<ServiceCardPropsType> = ({ service, index }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div
                    //@ts-ignores
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 4,
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img
                        src={service.icon}
                        alt={service.title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="txt-white text-[20px] font-bold text-center">{service.title}</h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About: React.FC = () => {
    return (
        <section>
            <motion.div variants={textVariant(0)}>
                <p className={`${styles.sectionSubText} mt-10`}>Inroduction</p>
                <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
            </motion.div>
            <motion.p
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                variants={fadeIn('', '', 0.1, 1)}>
                I`m skilled Frontend Developer with expirience in TypeScript and JavaScript, also
                has expertise in frameworks like React, NextJS. My ambition is to become a Software
                Engineer, so I`m self-motivated and disciplined and always want to study and grow. I
                like when my works are very usefull for another people, it gives me energy to
                continue implement a smooth User Interfaces with nice User Expirience.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} service={service} index={index} />
                ))}
            </div>
        </section>
    );
};

//@ts-ignore
export default SectionWrapper(About, 'about');
