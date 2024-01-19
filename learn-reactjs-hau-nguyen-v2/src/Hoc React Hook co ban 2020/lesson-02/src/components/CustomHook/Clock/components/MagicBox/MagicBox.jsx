import useMagicColor from '../../hooks/useMagicColor'
import './MagicBox.scss'

function MagicBox() {
  const color = useMagicColor()

  return (
    <div>
      <h2>This is a component MagicBox 🏫</h2>
      <div className='magic-box' style={{ backgroundColor: color }}></div>
    </div>
  )
}

export default MagicBox
