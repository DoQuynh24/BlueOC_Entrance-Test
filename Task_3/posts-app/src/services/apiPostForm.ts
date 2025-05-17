import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Post {
  id?: number;
  title: string;
  body: string;
  userId?: number;
}

export const apiPostForm = createApi({
  reducerPath: "apiPostForm",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    createPost: builder.mutation<Post, Omit<Post, "id">>({
      query: (postData) => ({
        url: "/posts",
        method: "POST",
        body: {
          ...postData,
          userId: 1, 
        },
      }),
      invalidatesTags: ["Posts"],
    }),
    getAllPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetAllPostsQuery,
} = apiPostForm;