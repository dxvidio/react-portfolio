import { motion } from 'framer-motion';

import './TravelOasis.scss'
import cover from '../../media/projects/travel-oasis/cover.png'

const TravelOasis = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={ {opacity:1, transition: {duration:2, ease:'backInOut'}} } exit={{opacity: 0}}>
      <div className="cover-img">
        <img src={cover} className='about-picture' alt=''/>
      </div>
    </motion.div>
  )}

export default TravelOasis;