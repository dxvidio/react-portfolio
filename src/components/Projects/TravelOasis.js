import { motion } from 'framer-motion';

import './TravelOasis.scss'

const TravelOasis = () => {
  return<motion.div 
          className="contact-page" 
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
            <div className="contact-left">
              <div className="contact-menu">
                <div className="page-heading">travel</div>
                <hr/>
              </div>
            </div>
          </div>
        </motion.div>
}

export default TravelOasis;