import { useState } from 'react'

const AddAnyWhere = () => {
  const [initialArray, setInitialArray] = useState(['A', 'B', 'C'])

  function handleAnyWhere(letra: string, index: number) {
    setInitialArray((currentarray) => [
      ...currentarray.slice(0, index),
      letra,
      ...currentarray.slice(index),
    ])
  }
  return (
    <>
      <div>
        <label onClick={() => handleAnyWhere('Z', 3)}>
          Add At Any Index: {initialArray.join(', ')}
        </label>
      </div>
    </>
  )
}

export default AddAnyWhere
