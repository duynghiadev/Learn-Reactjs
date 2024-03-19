import React, { useRef, useState } from 'react'
import './VideoPlayerRef.scss'

const VideoPlayerRef: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleClick = () => {
    const video = videoRef.current

    if (video) {
      if (isPlaying) {
        video.pause() // Pause the video
      } else {
        video.play() // Play the video
      }
      setIsPlaying(!isPlaying) // Toggle the state
    }
  }

  return (
    <div className='video-player-container'>
      <hr className='separator' />

      <p style={{ textAlign: 'center' }}>Video player using useRef hook</p>

      <button className='video-control-button' onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video className='video-element' ref={videoRef} width='250'>
        <source
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  )
}

export default VideoPlayerRef
