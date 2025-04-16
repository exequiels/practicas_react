import { useState } from 'react'

const AddInputAtStart = () => {
  const [initialArray, setInitialArray] = useState(['A', 'B', 'C'])
  const [value, setValue] = useState('')

  function addToStart() {
    setInitialArray((currentArray) => [value, ...currentArray])
  }

  return (
    <>
      <div>
        <label onClick={() => addToStart()}>Add Input At Start </label>
        <input onChange={(e) => setValue(e.target.value)} /> :{' '}
        {initialArray.join(', ')}
      </div>
    </>
  )
}

export default AddInputAtStart
