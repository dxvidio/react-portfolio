import { motion } from 'framer-motion';

import './About.scss'

const About = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1, 
        transition: {
          duration: 2,
          ease: 'backInOut'
        }
      }}
      exit={{opacity: 0}}
    >
      <div className="about">
        <div className="about-left">
          <div className="page-heading">about</div>
          <hr/>
          <div className="about-text">
            Hi, my name is David Lee and I am a third year Computer Science major at UCLA. 
            As of 2024, my passion for ideating and creating has landed me opportunities to work with real estate company Travel Oasis and GRAMMY-nominated producer John Conte Jr. to develop software products in the domain of marketing and artificial intelligence. 
            I also enjoy engineering music and graphic design, which I use often in my work as a software developer.
          </div>
          <div className="about-resume">
            <a href="media/about/DavidLee_Resume.pdf" target="_blank" rel="noreferrer">
              <img src="media/about/download.png" alt=""/> resume 
            </a>
          </div>
        </div>
        <div className="about-right">
          <img src="media/about/profile.PNG" id="about_img" alt=""/>
        </div>
      </div>
    </motion.div>
  );
}

export default About;