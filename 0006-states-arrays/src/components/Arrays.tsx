import { useState } from 'react'

const Arrays = () => {
  const [initialArray] = useState(['A', 'B', 'C'])
  return (
    <>
      <div>
        <label>Initial Array: {initialArray.join(', ')}</label>
      </div>
    </>
  )
}

export default Arrays
