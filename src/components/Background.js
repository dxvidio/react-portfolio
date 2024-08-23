import './Background.scss';
import videoBackground from '../media/greekyogurt.mp4'
import photoBackground from '../media/poster.png'

const Background = () => {
  return (
    <div className="background">
      <div className="video-background">
        <video src={videoBackground} id="background" poster="media/poster.png" loop muted controls={false} />
      </div>
      <div className="photo-background">
        <img src={photoBackground} alt=""/>
      </div>
    </div>
  )}

export default Background;