import React from 'react'
import "./Mood.css";
class AudioPlayer extends React.Component {
    render() {
      return (
        <div>
          <audio ref="audio_tag" src="http://soundimage.org/wp-content/uploads/2016/05/Sci-Fi-RPG-Intro.mp3" controls autoPlay/>
          <p className="loginMusic">Music by Eric Matyas - www.soundimage.org</p>
        </div>
      );
    }
  }

export default AudioPlayer;