import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { style } from '../style';
import { github } from '../assets';
import { link } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring",  0.5, 0.75)}>
      <Tilt
        options={
          {
            max: 45,
            scale: 1,
            speed: 450
          }
        }
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-full" onClick={() => window.open(source_code_link, "_blank")} >
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" style={{ aspectRatio: 3 / 2 }} />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">

            {name === "Calendly Clone" ? <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center ml-2">
              <img src={link} alt='github' className="w-1/2 h-1/2 object-contain" />
            </div> :
              <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
                <img src={github} alt='github' className="w-1/2 h-1/2 object-contain" />
              </div>
            }
          </div>

        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag)=>(
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
              ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>My Work</p>
        <h2 className={style.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-5xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos in it. It reflects
          my ability to solve complex problems,work with different technologies,and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 work-card">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");