import './About.scss'
import { motion } from 'framer-motion';

const About = () => {
    return  <motion.div 
                className="about-page" 
                data-page="about" 
                id="about-page"
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
                        <div className="left-text-wrapper">
                            <div className="left-text">
                                <div className="page-heading">
                                    about
                                </div>
                                <hr/>
                                <div className="about-text">
                                    Hi, my name is David Lee and I am a third year Computer Science major at UCLA. 
                                    As of 2024, my passion for ideating and creating has landed me opportunities to work with real estate company Travel Oasis and GRAMMY-nominated producer John Conte Jr. to develop software products in the domain of marketing and artificial intelligence. 
                                    I also enjoy engineering music and graphic design, which I use often in my work as a software developer.
                                </div>
                                <div className="about-resume">
                                    <a href="media/about/DavidLee_Resume.pdf" target="_blank" rel="noreferrer">
                                        <img src="media/about/download.png" width="30px" height="30px" alt=""/> resume 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-right">
                        <div className="about-picture">
                            <img src="media/about/1.1.PNG" id="about_img" width="370px" height="370px" style={{ borderRadius: '20% 5% 20% 5%' }} alt=""/>
                        </div>
                    </div>
                </div>
            </motion.div>
}

export default About;