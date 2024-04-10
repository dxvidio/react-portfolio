import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import './Home.scss'

const Home = () => {
    return  <motion.div 
                className="home-page" 
                data-page="home" 
                id="home-page"
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
                <div className="menu">
                    <div className="menu-content">
                        <div className="link-wrapper">
                            <NavLink to="/about">about</NavLink>
                        </div>

                        <div className="link-wrapper">
                            <NavLink to="/projects">projects</NavLink>
                        </div>

                        <div className="link-wrapper">
                            <NavLink to="/contact">contact</NavLink>
                        </div> 

                        <div className="dxvid-wrapper">
                            <a href="https://open.spotify.com/artist/4fEApuw5C7FRsOz0Y0ODSy?si=eVnxfyMGQzSb0KUSvb9Z8Q" target="_blank" rel="noreferrer">dxvid</a>
                        </div>
                    </div>
                </div>
            </motion.div>
}

export default Home;