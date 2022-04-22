import React from 'react'

import Video from '../../assets/video.mp4'
import './styles.scss'

const VideoCard = () => {
  return (
    <video className='video' controls>
        <source src={Video} type="video/mp4"></source>
    </video>
  )
}

export default VideoCard