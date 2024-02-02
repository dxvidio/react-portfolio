import './index.scss';

const Background = () => {
    return  <div className="background">
                <div className="video-background">
                    <video src="media/greekyogurt.mp4" id="background" poster="media/poster.png" loop muted controls={false} />
                </div>
                <div className="photo-background">
                    <img src="media/poster.png" alt=""/>
                </div>
            </div>
}

export default Background;