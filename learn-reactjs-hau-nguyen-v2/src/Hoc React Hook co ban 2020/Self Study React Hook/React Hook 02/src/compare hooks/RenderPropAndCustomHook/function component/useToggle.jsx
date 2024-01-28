import { useState, useCallback } from 'react'

function useToggle(initialValue) {
  const [toggleValue, setToggleValue] = useState(initialValue)
  const toggler = useCallback(() => setToggleValue(!toggleValue))

  return [toggleValue, toggler]
}

export default useToggle
