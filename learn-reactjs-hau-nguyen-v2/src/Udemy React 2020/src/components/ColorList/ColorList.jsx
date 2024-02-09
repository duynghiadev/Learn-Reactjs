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
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{name}</p>
        <p>
          Xin chào {name} - {age} tuổi - {isMale ? 'Nam' : 'Nữ'}
        </p>
        <p>{isMale && <span>Giới tính: Nam</span>}</p>
        <p>{!isMale && <span>Giới tính: Nữ</span>}</p>

        {isMale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </>
        )}

        {!isMale && (
          <>
            <p>Female 1</p>
            <p>Female 2</p>
            <p>Female 3</p>
          </>
        )}

        <p>{student.name}</p>

        <div>
          <ul>
            {colorList.map((color) => (
              <li
                key={color}
                style={{
                  backgroundColor: color,
                  color: 'white',
                  padding: '5px',
                  margin: '5px',
                  borderRadius: '5px'
                }}
              >
                {color}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  )
}

export default ColorList
