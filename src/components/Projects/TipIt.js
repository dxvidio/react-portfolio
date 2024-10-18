import { motion } from 'framer-motion';

import './FriendActivity.scss'
import cover from '../../media/projects/tipit/cover.png'
import ui1 from '../../media/projects/tipit/tipit-ui1.png'
import ui2 from '../../media/projects/tipit/tipit-ui2.png'
import ui3 from '../../media/projects/tipit/tipit-ui3.png'
import downloadApp from '../../media/projects/tipit/downloadApp.png'
import linkIcon from '../../media/link-icon.png'

const TipIt = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={ {opacity:1, transition: {duration:2, ease:'backInOut'}} } exit={{opacity: 0}}>
      <div className="project-content-wrapper">
        <div className="project-content">
          <img src={cover} className='cover-picture' alt=''/>
          <div className='page-header'>
            <div className="page-heading">TipIt</div>
            <div className="actions">
              <div className="about-resume">
                <a href='/TipItCaseStudy.pdf' target="_blank" rel="noreferrer">
                  Case Study <img src={linkIcon} id="link_img" alt=""/>
                </a>
              </div>
              <a href="https://apps.apple.com/us/app/tipit-tip-calculator/id6736673634" className="page-link" target="_blank" rel="noopener noreferrer">
                <img src={downloadApp} alt='' style={{ width: '120px', height: 'auto' }} />
              </a>
            </div>
          </div>
          <hr/>
          <div className="project-info">
            <div className="project-descriptors">
              <tr>
                <td>
                  <h3>category</h3>
                </td>
                <td>Mobile Development</td>
              </tr>

              <tr>
                <td>
                  <h3>technologies</h3>
                </td>
                <td>Swift | SQLite</td>
              </tr>

              <tr>
                <td>
                  <h3>year</h3>
                </td>
                <td>2024</td>
              </tr>
            </div>
            <div className="project-about">
              <p>
                TipIt is an iOS application that aims to streamline bill splitting and tip calculations. Each application is packaged with a lightweight database of +40,000 regional tax rates and geocoding functionalities that enable instant bill breakdowns from a single "total" value. Users can also customize their experience with personalized tip options, 3 visual themes, and a built in "share bill" feature. 
              </p> 
            </div>
          </div>
          <div className="project-images">
              <div className="project-slide">
                <img src={ui1} className='cover-picture' alt=''/>
              </div>
              <div className="project-slide">
                <img src={ui2} className='cover-picture' alt=''/>
              </div>
              <div className="project-slide">
                <img src={ui3} className='cover-picture' alt=''/>
              </div>
            </div>
        </div>
      </div>
    </motion.div>
  )}

export default TipIt;