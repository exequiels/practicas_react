import { useState } from 'react'

const RemoveChosen = () => {
  const [initialArray, setInitialArray] = useState(['A', 'B', 'C'])

  function handleRemoveChosen(letraElegida: string) {
    setInitialArray((currentArray) =>
      currentArray.filter((letra) => letra !== letraElegida)
    )
  }

  return (
    <>
      Remove Chosen:{' '}
      {initialArray.map((letra, index) => (
        <label key={index} onClick={() => handleRemoveChosen(letra)}>
          {letra}
          {index < initialArray.length - 1 && ', '}
        </label>
      ))}
    </>
  )
}

export default RemoveChosen
