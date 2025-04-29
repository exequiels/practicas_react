import { useEffect, useState } from 'react'

const Age = () => {
  const [age, setAge] = useState(40)

  useEffect(() => {
    console.log('My age', age)
  }, [age])

  return (
    <>
      <div>
        My Age:{' '}
        <button onClick={() => setAge((currentAge) => currentAge - 1)}>
          -
        </button>
        <label> {age} </label>
        <button onClick={() => setAge((currentAge) => currentAge + 1)}>
          +
        </button>
      </div>
    </>
  )
}

export default Age
