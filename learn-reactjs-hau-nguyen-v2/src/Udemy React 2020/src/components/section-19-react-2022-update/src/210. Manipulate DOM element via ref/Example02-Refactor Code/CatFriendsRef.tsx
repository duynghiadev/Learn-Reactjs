import React, { useRef } from 'react'
import './CatFriendsRef.scss' // Import SCSS file

const CatFriendsRefRefactor: React.FC = () => {
  const catRefs = useRef<HTMLImageElement[]>([])

  const cats = [
    { name: 'Tom', imageUrl: 'https://picsum.photos/id/237/200/300' },
    { name: 'Maru', imageUrl: 'https://picsum.photos/id/238/200/300' },
    { name: 'Jellylorum', imageUrl: 'https://picsum.photos/id/239/200/300' }
  ]

  const handleScrollToCat = (index: number) => {
    if (catRefs.current[index]) {
      catRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  return (
    <div className='cat-friends-container'>
      <hr className='separator' />

      <p style={{ textAlign: 'center' }}>Refactor code useRef hook</p>
      <nav>
        {cats.map((cat, index) => (
          <button key={index} onClick={() => handleScrollToCat(index)}>
            {cat.name}
          </button>
        ))}
      </nav>
      <div>
        <ul>
          {cats.map((cat, index) => (
            <li key={index}>
              <img
                src={cat.imageUrl}
                alt={cat.name}
                ref={(element) => {
                  if (element) catRefs.current[index] = element
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CatFriendsRefRefactor
