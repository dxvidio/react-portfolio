import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import './Projects.scss'
import { bnbIcon, dawIcon, mapsIcon, bruinIcon, coproIcon, cradleIcon, travelIcon, takeoffIcon, headroomIcon, friendsIcon, tipitIcon } from '../media/projects/icon'
import soon from '../media/soon.png'

const Projects = () => {

  function see_img(a) {
    document.getElementById(a).style.opacity = 1;
  }   
  function hide_img(a) {
    document.getElementById(a).style.opacity = 0;
  }   

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={ {opacity:1, transition: {duration:2, ease:'backInOut'}} }
      exit={{opacity: 0}}
    >
      <div className="projects">
        <div className="projects-left-wrapper">
          <div className="page-heading">projects</div>
          <hr/>
          <div className="projects-left">

            <NavLink to="/projects/tipit" onMouseOver={() => see_img('tipitIcon')} onMouseOut={() => hide_img('tipitIcon')}>
              <div className="project-title">
                <div className="project-title-left">TipIt</div>
                <div className="project-title-right">Swift | SQLite | Figma</div>
              </div>
              <hr/>
            </NavLink>

            <NavLink to="/projects/friend-activity" onMouseOver={() => see_img('friends')} onMouseOut={() => hide_img('friends')}>
              <div className="project-title">
                <div className="project-title-left">Friend Activity (Spotify)</div>
                <div className="project-title-right">Swift | Figma</div>
              </div>
              <hr/>
            </NavLink>

            <a href="https://newtons-cradle-two.vercel.app/" target="_blank" rel="noreferrer" onMouseOver={() => see_img('cradle')} onMouseOut={() => hide_img('cradle')}>
              <div className="project-title">
                <div className="project-title-left">Newton's Cradle</div>
                <div className="project-title-right">Typescript | React | CSS | Matter.js</div>
              </div>
              <hr/>
            </a>

            <a href="https://takeoff-gilt.vercel.app/" target="_blank" rel="noreferrer" onMouseOver={() => see_img('takeoff')} onMouseOut={() => hide_img('takeoff')}>
              <div className="project-title">
                <div className="project-title-left">Takeoff</div>
                <div className="project-title-right">Javascript</div>
              </div>
              <hr/>
            </a>

            <a href={soon} target="_blank" rel="noreferrer" onMouseOver={() => see_img('copro')} onMouseOut={() => hide_img('copro')}>
              <div className="project-title">
                <div className="project-title-left">CoPro AI</div>
                <div className="project-title-right">Figma | Photoshop</div>
              </div>
              <hr/>
            </a>

            <a href="https://github.com/JDingle77/UCLAnus/wiki#log" target="_blank" rel="noreferrer" onMouseOver={() => see_img('UCLAnus')} onMouseOut={() => hide_img('UCLAnus')}>
              <div className="project-title">
                <div className="project-title-left">UCLAmaps</div>
                <div className="project-title-right">React | Node.js | Express.js | MongoDB</div>
              </div>
              <hr/>
            </a>

            <a href="https://jonathanleebnb.com/" target="_blank" rel="noreferrer" onMouseOver={() => see_img('bnb-academy')} onMouseOut={() => hide_img('bnb-academy')}>
              <div className="project-title">
                <div className="project-title-left">Airbnb Academy</div>
                <div className="project-title-right">React | SCSS</div>
              </div>
              <hr/>
            </a>

            {/* <NavLink to="/projects/travel-oasis" onMouseOver={() => see_img('traveloasis')} onMouseOut={() => hide_img('traveloasis')}>
              <div className="project-title">
                <div className="project-title-left">Travel Oasis</div>
                <div className="project-title-right">MySQL | HTML | CSS</div>
              </div>
              <hr/>
            </NavLink> */}

            <a href="https://traveloasis-us.com/" target="_blank" rel="noreferrer" onMouseOver={() => see_img('traveloasis')} onMouseOut={() => hide_img('traveloasis')}>
              <div className="project-title">
                <div className="project-title-left">Travel Oasis</div>
                <div className="project-title-right">MySQL | HTML | CSS</div>
              </div>
              <hr/>
            </a>

            <a href="https://github.com/dxvidio/bruin-rides" target="_blank" rel="noreferrer" onMouseOver={() => see_img('bruinrides')} onMouseOut={() => hide_img('bruinrides')}>
              <div className="project-title">
                <div className="project-title-left">Bruin Rides</div>
                <div className="project-title-right">React | Node.js | Express.js | MongoDB</div>
              </div>
              <hr/>
            </a>

            <a href="https://daw.digital/" target="_blank" rel="noreferrer" onMouseOver={() => see_img('daw')} onMouseOut={() => hide_img('daw')}>
              <div className="project-title">
                <div className="project-title-left">DAW.digital</div>
                <div className="project-title-right">HTML | CSS</div>
              </div>
              <hr/>
            </a>

            <a href="https://github.com/dxvidio/HEADroom" target="_blank" rel="noreferrer" onMouseOver={() => see_img('headroom')} onMouseOut={() => hide_img('headroom')}>
              <div className="project-title">
                <div className="project-title-left">HEADroom</div>
                <div className="project-title-right">C++ | JUCE</div>
              </div>
            </a>
          </div>
        </div>

        <div className="projects-right">
          <div className="project-image" id="cradle">
            <img src={cradleIcon} alt=""/>
          </div>
          <div className="project-image" id="takeoff">
            <img src={takeoffIcon} alt=""/>
          </div>
          <div className="project-image" id="copro">
            <img src={coproIcon} alt=""/>
          </div>
          <div className="project-image" id="UCLAnus">
            <img src={mapsIcon} alt=""/>
          </div>
          <div className="project-image" id="bnb-academy">
            <img src={bnbIcon} alt=""/>
          </div>
          <div className="project-image" id="traveloasis">
            <img src={travelIcon} alt=""/>
          </div>
          <div className="project-image" id="bruinrides">
            <img src={bruinIcon} alt=""/>
          </div>
          <div className="project-image" id="daw">
            <img src={dawIcon} alt=""/>
          </div>
          <div className="project-image" id="headroom">
            <img src={headroomIcon} alt=""/>
          </div>
          <div className="project-image" id="friends">
            <img src={friendsIcon} alt=""/>
          </div>
          <div className="project-image" id="tipitIcon">
            <img src={tipitIcon} alt=""/>
          </div>
        </div>
      </div>
    </motion.div>
  )}

export default Projects;