import { Link } from 'react-router-dom'
import './RedirectLink.scss'

const Redirect = () => {
  return (
    <div className='links'>
      <Link to='/' className='link'>
        0. Main <br />
      </Link>
      <Link to='/useState' className='link'>
        1. useState <br />
      </Link>
      <Link to='/useReducer' className='link'>
        2. useReducer <br />
      </Link>
    </div>
  )
}

export default Redirect
