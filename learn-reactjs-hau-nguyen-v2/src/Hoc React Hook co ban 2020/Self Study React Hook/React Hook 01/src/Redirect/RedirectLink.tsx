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
      <Link to='/useMemo' className='link'>
        3. useMemo <br />
      </Link>
      <Link to='/useCallback' className='link'>
        4. useCallback <br />
      </Link>
      <Link to='/useRef' className='link'>
        5. useRef <br />
      </Link>
      <Link to='/useLayoutEffect' className='link'>
        6. useLayoutEffect <br />
      </Link>
      <Link to='useLayoutEffect-1' className='link'>
        6.1. useLayoutEffect part 2 <br />
      </Link>
    </div>
  )
}

export default Redirect
