import useJsonFetch from "../hooks/useJsonFetch";

function Loading () {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading', 3);
  const dataStringify = JSON.stringify(data)

  if(loading) return <p>Loading...</p>

  return (
    <pre>
    {dataStringify}
    </pre>
  )
}

export default Loading