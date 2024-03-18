import { Form } from '@/201. Disappearing Input Text/Form'
import { useState } from 'react'

export const DisappearingInput = () => {
  const [showHint, setShowHint] = useState(false)

  return (
    <div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <hr /> <br /> <br /> <br />
      <p>{showHint && <i>Hint: Your favorite city?</i>}</p>
      <Form />
      <button onClick={() => setShowHint((x) => !x)}>{showHint ? 'Hide' : 'Show'} hint</button>
    </div>
  )
}
