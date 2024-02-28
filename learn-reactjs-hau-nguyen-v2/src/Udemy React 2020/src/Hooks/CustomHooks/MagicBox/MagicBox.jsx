import useMagicColor from '../MagicColor/hooks/useMagicColor'
import './MagicBox.scss'

const MagicBox = () => {
  const color = useMagicColor()

  return (
    <>
      <div className='magic-box' style={{ backgroundColor: color }}></div>
    </>
  )
}

export default MagicBox
