import { useState } from 'react'

const RemoveFirst = () => {
  const [initialArray, setInitialArray] = useState(['A', 'B', 'C'])

  function handleRemoveFirst() {
    setInitialArray((currentArray) => currentArray.slice(1))
  }

  return (
    <>
      <div>
        <label onClick={handleRemoveFirst}>
          Remove First (onClick): {initialArray.join(', ')}
        </label>
      </div>
    </>
  )
}

export default RemoveFirst
