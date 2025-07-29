import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
}

const Userlist = () => {
  const endpoint = 'https://jsonplaceholder.typicode.com/users'
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    setError(undefined)
    const controller = new AbortController()
    fetch(endpoint, { signal: controller.signal })
      // .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        } else {
          return Promise.reject(res)
        }
      })
      .then((data) => {
        setUsers(data)
      })
      .catch((e) => {
        if (e?.name === 'AbortError') return
        setError(e)
      })
      .finally(() => {
        setLoading(false)
      })
    return () => {
      controller.abort()
    }
  }, [])
  if (loading) return <div>Loading...</div>
  if (error != null) return <div>Error</div>
  return (
    <>
      <h1>User List</h1>

      <ul>
        {/* {JSON.stringify(users)} */}
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}
export default Userlist
