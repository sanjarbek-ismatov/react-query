import React from "react";
import useSWR from "swr";
const SWR = () => {
  const { isLoading, data } = useSWR("http://localhost:5000/posts", (...arg) =>
    fetch(...arg).then((res) => res.json())
  );
  return (
    <div>
      SWR
      {/* {isFetching && <p>Fetching</p>} */}
      {isLoading && <p>Loading</p>}
      {/* <button onClick={() => refetch()}>Fetch again</button> */}
      {data && data.map((e: any, i: number) => <p key={i}>{e.title}</p>)}
    </div>
  );
};

export default SWR;
