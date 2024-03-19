import React, { useRef, useState } from 'react'
import './VideoPlayer.scss'

const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const ref = useRef<HTMLVideoElement>(null)

  const handleClick = () => {
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying)

    if (ref.current) {
      if (nextIsPlaying) {
        ref.current.play()
      } else {
        ref.current.pause()
      }
    }
  }

  return (
    <div className='video-player-container'>
      <hr className='separator' />
      <button className='video-control-button' onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        className='video-player'
        width='250'
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  )
}

export default VideoPlayer
