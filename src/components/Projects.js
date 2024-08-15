import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import './Projects.scss'

const Projects = () => {

  function see_img(a) {
    document.getElementById(a).style.opacity = 1;
  }   
  function hide_img(a) {
    document.getElementById(a).style.opacity = 0;
  }   

  return<motion.div 
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
            <div className="projects-left">
              <div className="page-heading">projects</div>
              <hr/>
              <a href="media/projects/copro/soon.png" target="_blank" rel="noreferrer" onMouseOver={() => see_img('copro')} onMouseOut={() => hide_img('copro')}>
                <div className="card">
                  <div className="card-title">COPRO AI</div>
                  <div className="card-subtitle">In Development</div>
                </div>
              </a>
              <NavLink to="/projects/travel-oasis" onMouseOver={() => see_img('traveloasis')} onMouseOut={() => hide_img('traveloasis')}>
                <hr/>
                <div className="card">
                  <div className="card-title">Travel Oasis</div>
                  <div className="card-subtitle">Web Development</div>
                </div>
              </NavLink>
                <a href="https://github.com/dxvidio/bruin-rides" target="_blank" rel="noreferrer" onMouseOver={() => see_img('bruinrides')} onMouseOut={() => hide_img('bruinrides')}>
                  <hr/>
                  <div className="card">
                    <div className="card-title">Bruin Rides</div>
                    <div className="card-subtitle">Full Stack Development</div>
                  </div>
                </a>
                <a href="https://daw.digital/" target="_blank" rel="noreferrer" onMouseOver={() => see_img('daw')} onMouseOut={() => hide_img('daw')}>
                  <hr/>
                  <div className="card">
                    <div className="card-title">DAW.digital</div>
                    <div className="card-subtitle">Web Development</div>
                  </div>
                </a>
                <a href="https://github.com/dxvidio/HEADroom" target="_blank" rel="noreferrer" onMouseOver={() => see_img('headroom')} onMouseOut={() => hide_img('headroom')}>
                  <hr/>
                  <div className="card">
                    <div className="card-title">HEADroom</div>
                    <div className="card-subtitle">Software Development</div>
                  </div>
                </a>
                <a href="https://github.com/JDingle77/UCLAnus/wiki" target="_blank" rel="noreferrer" onMouseOver={() => see_img('UCLAnus')} onMouseOut={() => hide_img('UCLAnus')}>
                  <hr/>
                  <div className="card">
                    <div className="card-title">UCLAnus</div>
                    <div className="card-subtitle">Full Stack Development</div>
                  </div>
                </a>
                <a href="https://github.com/JDingle77/UCLAnus/wiki" target="_blank" rel="noreferrer" onMouseOver={() => see_img('UCLAnus')} onMouseOut={() => hide_img('UCLAnus')}>
                  <hr/>
                  <div className="card">
                    <div className="card-title">UCLAnus</div>
                    <div className="card-subtitle">Full Stack Development</div>
                  </div>
                </a>
            </div>

            <div className="projects-right">
              <div className="project-image" id="copro">
                <img src="media/projects/copro/copro.png" alt=""/>
              </div>
              <div className="project-image" id="traveloasis">
                <img src="media/projects/traveloasis/traveloasis.png" alt=""/>
              </div>
              <div className="project-image" id="bruinrides">
                <img src="media/projects/bruinrides/bruinrides.png" alt=""/>
              </div>
              <div className="project-image" id="daw">
                <img src="media/projects/daw.digital/daw.png" alt=""/>
              </div>
              <div className="project-image" id="headroom">
                <img src="media/projects/headroom/headroom.png" alt=""/>
              </div>
              <div className="project-image" id="UCLAnus">
                <img src="media/projects/UCLAnus/UCLAnus.png" alt=""/>
              </div>
            </div>
          </div>
        </motion.div>
}

export default Projects;