import React from 'react'
import './Dashboard.scss'
import DebouncedButton from './DebouncedButton'

const Dashboard: React.FC = () => {
  return (
    <div className='dashboard'>
      <hr className='separator' />

      <DebouncedButton onClick={() => alert('Spaceship launched!')}>
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton onClick={() => alert('Soup boiled!')}>Boil the soup</DebouncedButton>
      <DebouncedButton onClick={() => alert('Lullaby sung!')}>Sing a lullaby</DebouncedButton>
    </div>
  )
}

export default Dashboard
