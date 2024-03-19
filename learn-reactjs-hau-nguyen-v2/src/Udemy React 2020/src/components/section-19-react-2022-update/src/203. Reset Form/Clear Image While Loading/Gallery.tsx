import { Image, images } from '@/203. Reset Form/Clear Image While Loading/ImageList'
import React, { useState } from 'react'
import './Gallery.scss'

const Gallery: React.FC = () => {
  const [index, setIndex] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)

  const hasNext: boolean = index < images.length - 1

  function handleLoad() {
    setLoading(false)
    setError(false)
    setImageLoaded(true)
  }

  function handleError() {
    setLoading(false)
    setError(true)
    setImageLoaded(false)
  }

  function handleClick() {
    if (imageLoaded) {
      if (hasNext) {
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
      setImageLoaded(false) // Reset imageLoaded state after advancing to next image
    } else {
      setLoading(true) // Set loading state if "Next" button is clicked before image is loaded
      if (hasNext) {
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
    }
  }

  let image: Image = images[index]

  return (
    <div className='gallery'>
      <div className='button-container'>
        <button onClick={handleClick} disabled={loading}>
          Next
        </button>
        <h3>
          Image {index + 1} of {images.length}
        </h3>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading image</p>}
      {!loading && !error && (
        <>
          <img
            src={image.src}
            onLoad={handleLoad}
            onError={handleError}
            alt={image.place}
            style={{ display: loading || error ? 'none' : 'block' }}
          />
          <p>{image.place}</p>
        </>
      )}
    </div>
  )
}

export default Gallery
