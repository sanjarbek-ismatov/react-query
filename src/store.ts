import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configureStore } from "@reduxjs/toolkit";
const api = createApi({
  reducerPath: "jsonplaceholder",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints(build) {
    return {
      posts: build.query({ query: () => "/posts" }),
    };
  },
});
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      api.middleware
    );
  },
});
export const { usePostsQuery, usePrefetch, useLazyPostsQuery } = api;
