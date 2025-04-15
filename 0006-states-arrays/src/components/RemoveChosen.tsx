import { useState } from 'react'

const RemoveChosen = () => {
  const [initialArray, setInitialArray] = useState(['A', 'B', 'C'])

  function handleRemoveChosen(value: string) {
    setInitialArray((currentArray) =>
      currentArray.filter((letra) => letra !== value)
    )
  }

  return (
    <>
      <label>Remove Chosen: </label>
      {initialArray.map((letra, index) => (
        <label
          key={index}
          onClick={() => {
            handleRemoveChosen(letra)
          }}
        >
          {letra}
          {index < initialArray.length - 1 && ', '}
        </label>
      ))}
    </>
  )
}

export default RemoveChosen
