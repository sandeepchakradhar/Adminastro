import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.pressvartaserver.umpteeninnovation.com/api",
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
      query: () => {
        return {
          url: "getProfile",
          method: "GET",
        };
      },
    }),

    login: builder.mutation({
      query(body) {
        return {
          url: `login`,
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
export const { useGetProfileQuery, useLoginMutation } = profileApi;
