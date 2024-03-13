import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { github } from '../constants';
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { IProject } from '../constants';

interface IProjectCard {
    project: IProject;
    key: number;
}

const ProjectCard: React.FC<IProjectCard> = ({ project, key }) => {
    return (
        <motion.div variants={fadeIn('up', 'spring', key * 0.5, 0.75)}>
            <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className="relative w-full h-[230px]">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(project.source_code_link, '_blank')}
                            className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <a href={project.site_link}>
                        <h3 className="text-white font-bold text-[24px] hover:underline">
                            {project.name}
                        </h3>
                    </a>
                    <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap  gap-2">
                    {project.tags.map((tag, index) => (
                        <p key={`tag-${index}`} className={`text-[14px] ${tag.color}`}>
                            {tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works: React.FC = () => {
    return (
        <>
            <motion.div variants={textVariant(0)}>
                <p className={`${styles.sectionSubText} mt-10`}>My Works</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    Following project is the examples of my ability to create web apps of different
                    categories and business domains. This projects has a nice Readme on github and
                    live demos to interact with it.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, 'works');
