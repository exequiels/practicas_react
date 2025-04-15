import { useState } from 'react'

const Counter = () => {
  const [cuenta, setCuenta] = useState(0)

  function cuentaHandler() {
    setCuenta((currentCuenta) => currentCuenta + 1)
  }

  return (
    <>
      <h1 onClick={cuentaHandler}>Cuenta: {cuenta}</h1>
      {/*Sino tmabien puedo hacer dentro del mismo onclick*/}
      <h1 onClick={() => setCuenta((currentCuenta) => currentCuenta + 1)}>
        Cuenta en el mismo onClick: {cuenta}
      </h1>
    </>
  )
}

export default Counter
