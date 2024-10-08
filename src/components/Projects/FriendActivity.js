import { motion } from 'framer-motion';

import './FriendActivity.scss'
import cover from '../../media/projects/friend-activity/cover.png'
import widget from '../../media/projects/friend-activity/widget.png'
import design from '../../media/projects/friend-activity/design.png'


const FriendActivity = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={ {opacity:1, transition: {duration:2, ease:'backInOut'}} } exit={{opacity: 0}}>
      <div className="project-content-wrapper">
        <div className="project-content">
          <img src={cover} className='cover-picture' alt=''/>
          <div className="page-heading">Friend Activity (for Spotify)</div>
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
                <td>Swift | SwiftUI</td>
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
                Friend Activity is an iOS application and widget that aims to provide native support for Spotify's desktop capabilities on mobile devices. With Friend Activity, you can conveniently tune in to your friends' listening activity and manage your close friends from the comfort of your iPhone's home screen.
              </p> 
            </div>
          </div>
          <div className="project-images">
              <div className="project-slide">
                <img src={design} className='cover-picture' alt=''/>
              </div>
              <div className="project-slide">
                <img src={widget} className='cover-picture' alt=''/>
              </div>
            </div>
        </div>
      </div>
    </motion.div>
  )}

export default FriendActivity;