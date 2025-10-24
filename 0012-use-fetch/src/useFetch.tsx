import { useEffect, useState } from 'react'

type ErrorType = { message: string } | null
type Status = 'idle' | 'loading' | 'error' | 'fetched'

interface FetchResult<T> {
  data: T | null
  status: Status
  error: ErrorType
}

export function useFetch<T = unknown>(
  url: string,
  options = {}
): FetchResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<ErrorType>(null)

  useEffect(() => {
    setData(null)
    setStatus('loading')
    setError(null)

    const controller = new AbortController()
    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error(`Status error ${res.status}`)
      })
      .then((data) => {
        setData(data)
        setStatus('fetched')
        setError(null)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setData(null)
        setStatus('error')
        setError(err)
      })

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, status, error }
}
