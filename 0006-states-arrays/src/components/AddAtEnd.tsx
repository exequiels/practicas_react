import { useState } from 'react'

const AddAtEnd = () => {
  const [initialArray, setInitialArray] = useState(['A', 'B', 'C'])

  function handleAddAtEnd() {
    setInitialArray((currentArray) => [...currentArray, 'At the end'])
  }

  return (
    <>
      <div>
        <label onClick={handleAddAtEnd}>
          Add At The End: {initialArray.join(', ')}
        </label>
      </div>
    </>
  )
}
export default AddAtEnd
