import React from 'react'
import { Link } from 'react-router-dom'
import './ColorList.scss' // Import SCSS file

const ColorList = () => {
  const logo = 'https://cdn.cleancommit.io/blog/2023/02/Vite-logo.jpg'
  const name = 'Duy Nghia'
  const age = 18
  const isMale = true
  const student = {
    name: 'Duy Nghia Dev'
  }

  const colorList = ['red', 'green', 'blue']

  return (
    <div className='ColorList'>
      <header className='ColorList__header'>
        <img src={logo} className='ColorList__logo' alt='logo' />
        <p className='ColorList__name'>{name}</p>
        <p className='ColorList__info'>
          Xin chào {name} - {age} tuổi - {isMale ? 'Nam' : 'Nữ'}
        </p>
        <p className='ColorList__info'>{isMale ? 'Giới tính: Nam' : 'Giới tính: Nữ'}</p>
        <p className='ColorList__info'>{student.name}</p>

        <div>
          <ul>
            {colorList.map((color, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: color,
                  color: 'white',
                  padding: '5px',
                  margin: '5px',
                  borderRadius: '5px',
                  width: '40rem'
                }}
              >
                {color}
              </li>
            ))}
          </ul>
        </div>

        {/* Add links for navigation */}
        <div>
          <Link className='ColorList__link' to='/loading'>
            Go to Loading
          </Link>
          <Link className='ColorList__link' to='/todos'>
            Go to Todos
          </Link>
          <Link className='ColorList__link' to='/albums'>
            Go to Albums
          </Link>
          <Link className='ColorList__link' to='/colorbox'>
            Go to Color Box
          </Link>
          <Link className='ColorList__link' to='/counter'>
            Go to Counter
          </Link>
          <Link className='ColorList__link' to='/homepage'>
            Go to Home Page
          </Link>
          <Link className='ColorList__link' to='/countdown'>
            Go to Countdown
          </Link>
          <Link className='ColorList__link' to='/result'>
            Go to Result
          </Link>
          <Link className='ColorList__link' to='/colorboxver2'>
            Go to ColorBoxVer2
          </Link>
          <Link className='ColorList__link' to='/todolist'>
            Go to Todo Lists
          </Link>
          <Link className='ColorList__link' to='/postlist'>
            Go to Post Lists
          </Link>
          <Link className='ColorList__link' to='/clock'>
            Go to Clock
          </Link>
          <Link className='ColorList__link' to='/clockcustomhook'>
            Go to Clock Custom Hook
          </Link>
          <Link className='ColorList__link' to='/betterclock'>
            Go to Clock Custom Hook - Better Clock
          </Link>
          <Link className='ColorList__link' to='/magicbox'>
            Go to Magic Box Custom Hook
          </Link>
          <Link className='ColorList__link' to='/reactmemo'>
            Go to React.Memo and Memoization (Higher Order Component)
          </Link>
        </div>
      </header>
    </div>
  )
}

export default ColorList
