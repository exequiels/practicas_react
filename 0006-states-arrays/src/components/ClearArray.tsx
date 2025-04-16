import { useState } from 'react'

const ClearArray = () => {
  const initialState = ['A', 'B', 'C']
  const [initialArray, setInitialArray] = useState(initialState)
  function handleClear() {
    setInitialArray([])
  }
  return (
    <>
      <div>
        <label onClick={handleClear}>
          Clear Array: {initialArray.join(', ')}
        </label>
      </div>
      <div>
        <label
          onClick={() => {
            setInitialArray(initialState)
          }}
        >
          Set to Initial State
        </label>
      </div>
    </>
  )
}

export default ClearArray
