import React from 'react'
import "./Mood.css";
class AudioPlayer extends React.Component {
    render() {
      return (
        <div>
          <audio ref="audio_tag" src="../assets/Sci-Fi-RPG-Intro.mp3" controls autoPlay/>
          <p className="loginMusic">Music by Eric Matyas - www.soundimage.org</p>
        </div>
      );
    }
  }

export default AudioPlayer;