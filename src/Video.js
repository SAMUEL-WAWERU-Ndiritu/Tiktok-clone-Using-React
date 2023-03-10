import React, { useRef, useState } from 'react'
import './Video.css'
import image_4 from './images/image_4.png'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url,channel,description,song,likes,shares,messages}) {
    const videoRef = useRef(null);
    const [playing,setPlaying]= useState(false);
    const handleVideoPress =()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        }else{
            videoRef.current.play();
            setPlaying(true)
        }
    }
  return (
    <div className='video'>
        {/* video */}

        <video
         src={url} 
         className="video_player"
         loop
         onClick={handleVideoPress}
         ref={videoRef}
         ></video>

         <VideoFooter channel={channel} description={description} song={song}/>
         <VideoSidebar likes={likes} shares={shares} messages={messages}/>
         
         
        {/* video footer */} 
        {/* video sidebar */}
    </div>
  )
}

export default Video