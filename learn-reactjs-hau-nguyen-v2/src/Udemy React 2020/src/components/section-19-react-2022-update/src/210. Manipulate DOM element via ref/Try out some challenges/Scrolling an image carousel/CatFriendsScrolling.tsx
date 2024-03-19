import React, { useRef, useState } from 'react'
import './CatFriendsScrolling.scss'

interface Cat {
  id: number
  imageUrl: string
}

const CatFriendsScrolling: React.FC = () => {
  const [index, setIndex] = useState<number>(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const catList: Cat[] = []
  for (let i = 0; i < 10; i++) {
    catList.push({
      id: i,
      imageUrl: `https://picsum.photos/250/200?random=${i}`
    })
  }

  const handleNextClick = () => {
    if (index < catList.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
    scrollToActiveImage()
  }

  const scrollToActiveImage = () => {
    const activeImage = document.querySelector('.active')
    if (activeImage && carouselRef.current) {
      activeImage.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  return (
    <div className='cat-friends-container'>
      <hr className='separator' />

      <p style={{ textAlign: 'center' }}>This is Scrolling an image carousel </p>

      <nav>
        <button onClick={handleNextClick}>Next</button>
      </nav>

      <div className='carousel' ref={carouselRef}>
        <ul className='cat-list'>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                className={index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={`Cat #${cat.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CatFriendsScrolling
