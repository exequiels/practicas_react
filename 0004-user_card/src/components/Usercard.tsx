type User = {
  name: string
  age: number
  phoneNumber: string
  address: string
}

const Usercard = ({ name, age, phoneNumber, address }: User) => {
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>{age}</div>
        <div className="label">Phone:</div>
        <div>{phoneNumber}</div>
        <div className="label">Address:</div>
        <div>{address}</div>
      </div>
    </div>
  )
}

export default Usercard
