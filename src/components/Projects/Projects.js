import { motion } from 'framer-motion';

import './Projects.scss'

const Projects = () => {

    function see_img(a) {
        document.getElementById(a).style.opacity = 1;
    }   
    function hide_img(a) {
        document.getElementById(a).style.opacity = 0;
    }   

    return  <motion.div 
                className="projects-page" 
                data-page="projects" 
                id="projects-page"
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
                <div className="projects">
                    <div className="projects-left-wrapper">
                        <div className="projects-left">
                            <div className="projects-left-menu">
                                <div className="page-heading">
                                    projects
                                </div>
                                <hr/>
                                <a href="media/projects/copro/soon.png" target="_blank" rel="noreferrer" onMouseOver={() => see_img('copro')} onMouseOut={() => hide_img('copro')}>
                                    <div className="project-title">
                                        <div className="project-title-left">
                                            COPRO AI
                                        </div>
                                        <div className="project-title-right">
                                            In Development
                                        </div>
                                    </div>
                                </a>
                                <hr/>
                                <a href="https://traveloasis-us.com/" target="_blank" rel="noreferrer" onMouseOver={() => see_img('traveloasis')} onMouseOut={() => hide_img('traveloasis')}>
                                    <div className="project-title">
                                        <div className="project-title-left">
                                            Travel Oasis
                                        </div>
                                        <div className="project-title-right">
                                            Web Development
                                        </div>
                                    </div>
                                </a>
                                <hr/>
                                <a href="https://github.com/dxvidio/bruin-rides" target="_blank" rel="noreferrer" onMouseOver={() => see_img('bruinrides')} onMouseOut={() => hide_img('bruinrides')}>
                                    <div className="project-title">
                                        <div className="project-title-left">
                                            Bruin Rides
                                        </div>
                                        <div className="project-title-right">
                                            Full Stack Development
                                        </div>
                                    </div>
                                </a>
                                <hr/>
                                <a href="https://daw.digital/" target="_blank" rel="noreferrer" onMouseOver={() => see_img('daw')} onMouseOut={() => hide_img('daw')}>
                                    <div className="project-title">
                                        <div className="project-title-left">
                                            DAW.digital
                                        </div>
                                        <div className="project-title-right">
                                            Web Development
                                        </div>
                                    </div>
                                </a>
                                <hr/>
                                <a href="https://github.com/dxvidio/HEADroom" target="_blank" rel="noreferrer" onMouseOver={() => see_img('headroom')} onMouseOut={() => hide_img('headroom')}>
                                    <div className="project-title">
                                        <div className="project-title-left">
                                            HEADroom
                                        </div>
                                        <div className="project-title-right">
                                            Software Development
                                        </div>
                                    </div>
                                </a>
                            </div>
                            </div>
                    </div>
                    
                    <div className="projects-right">
                        <div className="project-image" id="copro">
                            <img src="media/projects/copro/copro.png" width="400" height="400" style={{ borderRadius: '20% 5% 20% 5%' }} alt=""/>
                        </div>
                        <div className="project-image" id="traveloasis">
                            <img src="media/projects/traveloasis/traveloasis.png" width="400" height="400" style={{ borderRadius: '20% 5% 20% 5%' }} alt=""/>
                        </div>
                        <div className="project-image" id="bruinrides">
                            <img src="media/projects/bruinrides/bruinrides.png" width="400" height="400" style={{ borderRadius: '20% 5% 20% 5%' }} alt=""/>
                        </div>
                        <div className="project-image" id="daw">
                            <img src="media/projects/daw.digital/daw.png" width="400" height="400" style={{ borderRadius: '20% 5% 20% 5%' }} alt=""/>
                        </div>
                        <div className="project-image" id="headroom">
                            <img src="media/projects/headroom/headroom.png" width="400" height="400" style={{ borderRadius: '20% 5% 20% 5%' }} alt=""/>
                        </div>
                    </div>
                </div>
            </motion.div>
}

export default Projects;