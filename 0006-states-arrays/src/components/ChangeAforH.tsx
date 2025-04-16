import { useState } from 'react'

const ChangeAforH = () => {
  const [initialArray, setInitialArray] = useState(['A', 'B', 'C'])

  function handleChange() {
    setInitialArray((currentArray) =>
      //   currentArray.map((letter) => {
      //     if (letter === 'A') {
      //       return 'H'
      //     } else {
      //       return letter
      //     }
      //   })
      currentArray.map((letter) => (letter === 'A' ? 'H' : letter))
    )
  }

  return (
    <>
      <div>
        <label onClick={handleChange}>
          Change A for H: {initialArray.join(', ')}
        </label>
      </div>
    </>
  )
}

export default ChangeAforH
