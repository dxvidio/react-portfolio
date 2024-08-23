import { motion } from 'framer-motion';

import './About.scss'
import downloadIcon from '../media/about/download.png'
import profileImg from '../media/about/profile.png'

const About = () => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={ {opacity:1, transition: {duration:2, ease:'backInOut'}} }
      exit={{opacity: 0}}
    >
      <div className="about">
        <div className="about-left">
          <div className="left-text-wrapper">
            <div className="left-text">
              <div className="page-heading">about</div>
              <hr/>
              <div className="about-text">
                Hi, my name is David and i'm a fourth year computer science major at UCLA with a passion for developing sleek interfaces and efficient software solutions. 
                <br/><br/>
                I have professional experience with <br/> Typescript | React | HTML/CSS | Swift | Git <br/> and academic experience with C++ | Python | Docker.
                <br/><br/>
                I also enjoy producing and engineering music!
              </div>
              <div className="about-resume">
                <a href="DavidLee_Resume.pdf" target="_blank" rel="noreferrer">
                  <img src={downloadIcon} id="download_img" alt=""/> resume 
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-picture">
            <img src={profileImg} id="about_img" className='no-invert' alt=""/>
          </div>
        </div>
      </div>
    </motion.div>
  )}

export default About;