import { motion } from 'framer-motion';

import './Contact.scss'

const Contact = () => {
    return  <motion.div 
                className="contact-page" 
                data-page="contact" 
                id="contact-page"
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
                <div className="contact">
                    <div className="contact-left-wrapper">
                        <div className="contact-left">
                            <div className="contact-menu">
                                <div className="page-heading">
                                    contact
                                </div>
                                <hr/>
                                <div className="social-menu">
                                    <div className="social-icon">
                                        <a href="mailto:davidlee1813@gmail.com" target="_blank" rel="noreferrer">
                                            <dotlottie-player src="https://lottie.host/3978fdde-125d-4adc-8a22-ee3f55ded3d8/JciEl2Uhgc.json" className="social-icon-img" background="transparent" speed="1" alt="by Thao Phan on IconScout" hover loop/>
                                        </a>
                                    </div>
                                    <div className="social-icon">
                                        <a href="https://www.linkedin.com/in/davidlee1300/" target="_blank" rel="noreferrer">
                                            <dotlottie-player src="https://lottie.host/bf7d4be5-78a6-4d3a-8c06-f102a4be7e6a/afJQBZExKe.json" className="social-icon-img" background="transparent" speed="1" alt="by Thao Phan on IconScout" hover loop/>
                                        </a>
                                    </div>
                                    <div className="social-icon">
                                        <a href="https://www.instagram.com/dxvidio/" target="_blank" rel="noreferrer">
                                            <dotlottie-player src="https://lottie.host/cea36131-1cda-4242-8c9c-1be6a406b97b/5m0Q2rMCT1.json" className="social-icon-img" background="transparent" speed="1" alt="by Thao Phan on IconScout" hover loop/>
                                        </a>
                                    </div>
                                    <div className="social-icon">
                                        <a href="https://github.com/dxvidio" target="_blank" rel="noreferrer">
                                            <dotlottie-player src="https://lottie.host/4ac9cae1-0a29-444b-827e-00ae6eeb1c3d/hSsxfL12HS.json" className="social-icon-img" background="transparent" speed="1" alt="by Thao Phan on IconScout" hover loop/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
}

export default Contact;