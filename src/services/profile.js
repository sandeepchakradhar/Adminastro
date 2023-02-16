import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pressvartaserver.umpteeninnovation.com/api",
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => {
        return {
          url: "getProfile",
          method: "GET",
        };
      },
    }),

    getProfile: builder.query({
      query: (token) => {
        return {
          url: "getProfile",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getProfileById: builder.query({
      query: ({ token, _id }) => {
        return {
          url: `getProfileById/${_id}`,
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getUsers: builder.query({
      query: (token) => {
        return {
          url: "getUsers",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getReporters: builder.query({
      query: (token) => {
        return {
          url: "getReporters",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getNews: builder.query({
      query: (token) => {
        return {
          url: "getNews",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getLanguage: builder.query({
      query: (token) => {
        return {
          url: "getLanguage",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getCategory: builder.query({
      query: (token) => {
        return {
          url: "getCategory",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    hello: builder.query({
      query: () => {
        return {
          url: "hello",
          method: "GET",
        };
      },
    }),

    login: builder.mutation({
      query(body) {
        return {
          url: "login",
          method: "POST",
          body,
        };
      },

      invalidatesTags: ["User"],
    }),

    addLanguage: builder.mutation({
      query(body) {
        return {
          url: "addLanguage",
          method: "POST",
          body,
        };
      },

      invalidatesTags: ["User"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProfileQuery,
  useLoginMutation,
  useGetProfileByIdQuery,
  useHelloQuery,
  useGetUsersQuery,
  useGetReportersQuery,
  useGetNewsQuery,
  useGetLanguageQuery,
  useGetCategoryQuery,
  useAddLanguageMutation,
  
} = profileApi;
