import { Field } from '@/202. Swap Two Form/Field'
import React, { useState } from 'react'

const SwapTwoForm: React.FC = () => {
  const [reverse, setReverse] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReverse(e.target.checked)
  }

  return (
    <div>
      <br /> <br /> <br /> <hr /> <br /> <br />
      <input type='checkbox' checked={reverse} onChange={handleChange} />
      <label>Reverse order</label> <br />
      {reverse ? (
        <>
          <br />
          <Field key='lastName' label='Last name' /> <br /> <br />
          <Field key='firstName' label='First name' />
        </>
      ) : (
        <>
          <br />
          <Field key='firstName' label='First name' /> <br /> <br />
          <Field key='lastName' label='Last name' />
        </>
      )}
    </div>
  )
}

export default SwapTwoForm
