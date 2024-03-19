import React, { useRef } from 'react'
import './Page.scss'

const Page: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className='page-container'>
      <hr className='separator' />

      <nav>
        <button className='search-button' onClick={handleSearchClick}>
          Search
        </button>
      </nav>
      <input className='search-input' ref={inputRef} placeholder='Looking for something?' />
    </div>
  )
}

export default Page
