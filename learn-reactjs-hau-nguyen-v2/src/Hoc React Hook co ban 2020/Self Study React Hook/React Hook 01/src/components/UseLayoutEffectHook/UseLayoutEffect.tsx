import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const UseLayoutEffect = () => {
  const [width1, setWidth1] = useState(0)
  const [height1, setHeight1] = useState(0)
  const [width2, setWidth2] = useState(0)
  const [height2, setHeight2] = useState(0)

  console.log('width1:', width1)
  console.log('height1:', height1)
  console.log('width2:', width2)
  console.log('height2:', height2)

  console.log('--------------------------')

  const el1 = useRef<any>()
  const el2 = useRef<any>()

  useLayoutEffect(() => {
    setWidth1(el1.current.offsetWidth)
    setHeight1(el1.current.offsetHeight)
  }, [])

  useEffect(() => {
    setWidth2(el2.current.clientWidth)
    setHeight2(el2.current.clientHeight)
  }, [])

  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: 'red' }}>
        This is a content of <code>useLayoutEffect</code> hook 🚀
      </h2>

      <h1>useLayoutEffect Example</h1>
      <h2>textarea width 1: {width1}</h2>
      <h2>textarea height 2: {height1}</h2>
      <textarea ref={el1} onClick={() => setWidth1(0)} defaultValue='useLayoutEffect'></textarea>

      <hr />

      <h1>useEffect Example</h1>
      <h2>textarea width 2: {width2}</h2>
      <h2>textarea height 2: {height2}</h2>
      <textarea ref={el2} onClick={() => setWidth2(0)} defaultValue='useEffect'></textarea>
    </div>
  )
}

export default UseLayoutEffect
