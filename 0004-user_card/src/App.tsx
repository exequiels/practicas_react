import Usercard from './components/Usercard'
import user from './user.json'

function App() {
  return (
    <>
      <Usercard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
    </>
  )
}

export default App
