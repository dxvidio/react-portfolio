import { motion } from 'framer-motion';

import './About.scss'

const About = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={ { opacity:1, transition:{duration:2, ease:'backInOut'} } } exit={{opacity: 0}}>
      <div className='about-wrapper'>
        <div className='about-content'>
          <div className='page-title'>about</div>

          <div className='intro-wrapper'>
            <div className='intro-content'>
              <div className='intro-text'>
                4th year computer science major at ucla with a passion for intricate interfaces and software product development. 
                <br/><br/>
                Notable Works: John Conte Jr. (GRAMMY-nominated), DAW, Travel Oasis, Airbnb Academy
                <br/><br/>
                Fun Fact: i love creating analog loops, engineering music, and the Incredibles movie.
              </div>
              <div className='intro-pic'>
                <img src="media/about/profile.PNG" id="about_img" alt=""/>
              </div>
            </div>
          </div>

          <div className='intro-wrapper'>
            <div className='intro-content'>
              <div className='intro-text'>
                4th year computer science major at ucla with a passion for intricate interfaces and software product development. 
                <br/><br/>
                Notable Works: John Conte Jr. (GRAMMY-nominated), DAW, Travel Oasis, Airbnb Academy
                <br/><br/>
                Fun Fact: i love creating analog loops, engineering music, and the Incredibles movie.
              </div>
              <div className='intro-pic'>
                <img src="media/about/profile.PNG" id="about_img" alt=""/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default About;