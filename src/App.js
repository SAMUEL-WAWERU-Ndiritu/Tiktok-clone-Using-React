import React, { useEffect, useState } from 'react'
import Video from './Video'
import axios from './axios'
import './App.css'


function App() {
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      const response = await axios.get('/tiktok/data');
      setVideos(response.data);
      return req;
    }
    fetchData();
  },[])
  return (
    <div className='app'>
      <div className='app_videos'>
        {
          videos.map(({url, channel,description,song,likes, share,messages})=>{
            return (
                    <Video
                      url={url}
                      channel={channel}
                      description={description}
                      song={song}
                      likes={likes}
                      share={share}
                      messages={messages}
                    />
                  )
          })
        }
        
      </div>
    </div>
  )
}

export default App