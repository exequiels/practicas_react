import { useState } from 'react'

const AddAtStart = () => {
  const [initialArray, setInitialArray] = useState(['A', 'B', 'C'])

  function handleAddAtStart() {
    setInitialArray((currentArray) => ['At start', ...currentArray])
  }

  return (
    <>
      <div>
        <label onClick={handleAddAtStart}>
          Add At Start: {initialArray.join(', ')}
        </label>
      </div>
    </>
  )
}

export default AddAtStart
