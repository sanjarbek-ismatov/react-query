import React from "react";
import { useQuery, useMutation } from "react-query";
const App = () => {
  const { isLoading, isSuccess, data, isFetching, refetch } = useQuery(
    "posts",
    () => fetch("http://localhost:5000/posts").then((res) => res.json())
  );
  return (
    <div>
      Query
      {isFetching && <p>Fetching</p>}
      {isLoading && <p>Loading</p>}
      <button onClick={() => refetch()}>Fetch again</button>
      {data && data.map((e: any, i: number) => <p key={i}>{e.title}</p>)}
    </div>
  );
};

export default App;
