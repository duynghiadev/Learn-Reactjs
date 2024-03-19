import React, { useRef } from 'react'
import './CatFriends.scss' // Import SCSS file

const CatFriends: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null)

  function scrollToIndex(index: number) {
    const listNode = listRef.current
    if (listNode) {
      const imgNode = listNode.querySelectorAll<HTMLImageElement>('li > img')[index]
      if (imgNode) {
        imgNode.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
      }
    }
  }

  return (
    <>
      <nav>
        <hr className='separator' />
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul ref={listRef} className='cat-list'>
          <li>
            <img src='https://picsum.photos/id/237/200/300' alt='Tom' />
          </li>
          <li>
            <img src='https://picsum.photos/id/238/200/300' alt='Maru' />
          </li>
          <li>
            <img src='https://picsum.photos/id/239/200/300' alt='Jellylorum' />
          </li>
        </ul>
      </div>
    </>
  )
}

export default CatFriends
