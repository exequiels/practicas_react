import { useEffect, useState } from 'react'

const Person = () => {
  const [name, setName] = useState('Exe')
  const [age, setAge] = useState(40)

  useEffect(() => {
    console.log('Component mounted')

    return () => {
      console.log('Unmounted')
    }
  }, [])

  useEffect(() => {
    console.log('Re-render')
  })

  useEffect(() => {
    console.log(`Mi nombre es ${name} y mi edad ${age}`)
  }, [name, age])

  useEffect(() => {
    document.title = name

    const timeOut = setTimeout(() => {
      console.log(`Nombre con timeout ${name}`)
    }, 1000)

    return () => {
      clearTimeout(timeOut)
    }
  }, [name])

  return (
    <>
      <div>
        Name: {name} <br />
        <input onChange={(e) => setName(e.target.value)} value={name} />
      </div>
      <div>
        Age:{' '}
        <button onClick={() => setAge((currentAge) => currentAge - 1)}>
          -
        </button>{' '}
        {age}{' '}
        <button onClick={() => setAge((currentAge) => currentAge + 1)}>
          +
        </button>
      </div>
    </>
  )
}

export default Person
