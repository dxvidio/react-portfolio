import { motion } from 'framer-motion';

import './FriendActivity.scss'

const CoPro = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={ {opacity:1, transition: {duration:2, ease:'backInOut'}} } exit={{opacity: 0}}>
      <div className="menu">
        <div className="menu-content">
          <div className="link-wrapper">
              Currently Unavailable
          </div>
          <div className="link-wrapper-sub">
              Due to confidentiality agreements, the prototypes of this project are not currently available for public viewing.
          </div>
        </div>
      </div>
    </motion.div>
  )}

export default CoPro;