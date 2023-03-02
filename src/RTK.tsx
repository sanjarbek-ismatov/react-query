import React from "react";
import { useQuery, useMutation } from "react-query";
import { useLazyPostsQuery, usePostsQuery } from "./store";
const RTK = () => {
  const { isLoading, isFetching, refetch, data } = usePostsQuery(null);
  return (
    <div>
      RTK
      {isFetching && <p>Fetching</p>}
      {isLoading && <p>Loading</p>}
      <button onClick={() => refetch()}>Fetch again</button>
      {data && data.map((e: any, i: number) => <p key={i}>{e.title}</p>)}
    </div>
  );
};

export default RTK;
