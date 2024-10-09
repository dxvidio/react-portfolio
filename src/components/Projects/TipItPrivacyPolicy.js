import { motion } from 'framer-motion';

import './FriendActivity.scss'
import pp from '../../media/projects/tipit/tipit-pp.jpg'

const TipItPrivacyPolicy = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={ {opacity:1, transition: {duration:2, ease:'backInOut'}} } exit={{opacity: 0}}>
      <div className="project-content-wrapper">
        <div className="project-content">
          {/* <img src={cover} className='cover-picture' alt=''/> */}
          {/* <div className="page-heading">TipIt Privacy Policy</div> */}
          {/* <hr/> */}
          {/* <div className="project-info">
            <div className="project-about">
              <p>
                TipIt is an iOS application that aims to streamline bill splitting and tip calculations. Each application is packaged with a lightweight database of +40,000 regional tax rates and geocoding functionalities that enable instant bill breakdowns from a single "total" value. Users can also customize their experience with personalized tip options, 3 visual themes, and a built in "share bill" feature. 
              </p> 
            </div>
          </div> */}
          <div className="project-images">
              <div className="project-slide">
                <img src={pp} className='cover-picture' alt=''/>
              </div>
            </div>
        </div>
      </div>
    </motion.div>
  )}

export default TipItPrivacyPolicy;