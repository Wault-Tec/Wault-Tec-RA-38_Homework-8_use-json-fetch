import { useState, useEffect } from "react";

function useJsonFetch(url, intervalSec) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const controller = new AbortController();
    const {signal} = controller;
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url, {signal})
          if(!response.ok) {
            setError(response.statusText)
            return
          }
          const data = await response.json()
          setData(data)
          setError(null)
      } catch (e) {
          setError(e)
          throw new Error(e)
      } finally {
          setLoading(false)
      }
    }
    fetchData()
    const intervalId = setInterval(fetchData,intervalSec*1000)
    return () => {
      clearInterval(intervalId)
      controller.abort()
    }
  }, [])

  return [data, loading, error]
}

export default useJsonFetch