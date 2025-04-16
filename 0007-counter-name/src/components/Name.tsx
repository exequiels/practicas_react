import { useState } from 'react'

const Name = () => {
  const [name, setName] = useState<string>('Exe')
  const [age, setAge] = useState<number>(40)
  const [value, setValue] = useState('')

  function handleName() {
    setName(value)
    setValue('')
  }

  return (
    <>
      <div>
        <label>
          Name: {name} and Age: {age}
        </label>
      </div>
      <div>
        <p>
          Input a Name:{' '}
          <input onChange={(e) => setValue(e.target.value)} value={value} />
          <button type="submit" onClick={handleName}>
            Set
          </button>
        </p>
        <p>
          Input Age:{' '}
          <button
            onClick={() => {
              setAge((currentAge) => {
                return currentAge - 1
              })
            }}
          >
            -
          </button>{' '}
          {age}{' '}
          <button onClick={() => setAge((currentAge) => currentAge + 1)}>
            +
          </button>
        </p>
      </div>
    </>
  )
}

export default Name
