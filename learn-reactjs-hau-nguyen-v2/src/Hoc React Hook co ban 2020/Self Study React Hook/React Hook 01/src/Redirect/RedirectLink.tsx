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
      <Link to='/useLayoutEffect-1' className='link'>
        6.1. useLayoutEffect part 2 <br />
      </Link>
      <Link to='/examplefromfilemarkdown-1' className='link'>
        6.2. Compare between useEffect and useLayoutEffect 1<br />
      </Link>
      <Link to='/examplefromfilemarkdown-2' className='link'>
        6.3. Compare between useEffect and useLayoutEffect 2 <br />
      </Link>
      <Link to='/useContext' className='link'>
        7. useContext <br />
        {/* ❌❌ Ngày mai vào browser Edge xem cách sử dụng useContext (bằng tiếng anh) ❌❌ */}
      </Link>
      <Link to='/useImporativeHandle' className='link'>
        8. useImporativeHandles <br />
      </Link>
    </div>
  )
}

export default Redirect
