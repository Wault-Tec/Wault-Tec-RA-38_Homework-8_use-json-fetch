import useJsonFetch from "../hooks/useJsonFetch";

function Data () {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data', 3);
  const dataStringify = JSON.stringify(data)

  return (
    <pre>
    {dataStringify}
    </pre>
  )
}

export default Data