import useJsonFetch from "../hooks/useJsonFetch";

function Error () {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error', 3);
  return 
}

export default Error