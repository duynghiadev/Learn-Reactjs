import React, { useRef } from 'react'
import './CatFriendsRef.scss' // Import SCSS file

const CatFriendsRef: React.FC = () => {
  const firstCatRef = useRef<HTMLImageElement>(null)
  const secondCatRef = useRef<HTMLImageElement>(null)
  const thirdCatRef = useRef<HTMLImageElement>(null)

  const handleScrollToFirstCat = () => {
    if (firstCatRef.current) {
      firstCatRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  const handleScrollToSecondCat = () => {
    if (secondCatRef.current) {
      secondCatRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  const handleScrollToThirdCat = () => {
    if (thirdCatRef.current) {
      thirdCatRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  return (
    <div className='cat-friends-container'>
      <hr className='separator' />

      <nav>
        <button onClick={handleScrollToFirstCat}>Tom</button>
        <button onClick={handleScrollToSecondCat}>Maru</button>
        <button onClick={handleScrollToThirdCat}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          <li>
            <img src='https://picsum.photos/id/237/200/300' alt='Tom' ref={firstCatRef} />
          </li>
          <li>
            <img src='https://picsum.photos/id/238/200/300' alt='Maru' ref={secondCatRef} />
          </li>
          <li>
            <img src='https://picsum.photos/id/239/200/300' alt='Jellylorum' ref={thirdCatRef} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CatFriendsRef
