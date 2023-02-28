import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pressvartaserver.umpteeninnovation.com/api",
  }),

  tagTypes: ["User", "Language", "News"],
  endpoints: (builder) => ({
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
    getRating: builder.query({
      query: (token) => {
        return {
          url: "getRating",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getRatingById: builder.query({
      query: ({ token, _id }) => {
        return {
          url: `getRatingById/${_id}`,
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
      providesTags: ["User"],
    }),
    getNewsById: builder.query({
      query: ({ token, _id }) => {
        return {
          url: `getNewsById/${_id}`,
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["News"],
    }),
    getReporterDetailsById: builder.query({
      query: ({ token, _id }) => {
        return {
          url: `getReporterDetailsById/${_id}`,
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
      providesTags: ["News"],
    }),
    getLanguage: builder.query({
      query: () => {
        return {
          url: "getLanguage",
          method: "GET",
        };
      },
      providesTags: ["Language"],
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
    getPaperName: builder.query({
      query: () => {
        return {
          url: "getPaperName",
          method: "GET",
        };
      },
    }),
    getAllReporter: builder.query({
      query: (token) => {
        return {
          url: "getAllReporter",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getDashBoardData: builder.query({
      query: (token) => {
        return {
          url: "getDashBoardData",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getConference: builder.query({
      query: (token) => {
        return {
          url: "getConference",
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
    register: builder.mutation({
      query(body) {
        return {
          url: "register",
          method: "POST",
          body,
        };
      },

      invalidatesTags: ["User"],
    }),
    form: builder.mutation({
      query(body) {
        return {
          url: "form",
          method: "POST",
          body,
        };
      },

      invalidatesTags: ["User"],
    }),
    addTypeOfPaper: builder.mutation({
      query({ Data, token }) {
        return {
          url: "addTypeOfPaper",
          method: "POST",
          body: Data,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },

      invalidatesTags: ["User"],
    }),

    deleteLanguageById: builder.mutation({
      query({ _id, token }) {
        return {
          url: `deleteLanguageById/${_id}`,
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },

      invalidatesTags: ["Language"],
    }),
    deleteSpecializationById: builder.mutation({
      query({ _id, token }) {
        return {
          url: `deleteSpecializationById/${_id}`,
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },

      invalidatesTags: ["Specialization"],
    }),

    addLanguage: builder.mutation({
      query({ data, token }) {
        return {
          url: "addLanguage",
          method: "POST",
          body: data,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },

      invalidatesTags: ["Language"],
    }),

    getSpecialization: builder.query({
      query: () => {
        return {
          url: "getSpecialization",
          method: "GET",
        };
      },
      providesTags: ["Specialization"],
    }),
    addSpecialization: builder.mutation({
      query({ data, token }) {
        return {
          url: "addSpecialization",
          method: "POST",
          body: data,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },

      invalidatesTags: ["Specialization"],
    }),
    editLanguageById: builder.mutation({
      query({ value, _id, token }) {
        return {
          url: `editLanguageById/${_id}`,
          method: "PATCH",
          body: value,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },

      invalidatesTags: ["Language"],
    }),
    editSpecializationById: builder.mutation({
      query({ value, _id, token }) {
        return {
          url: `editSpecializationById/${_id}`,
          method: "PATCH",
          body: value,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },

      invalidatesTags: ["Specialization"],
    }),

    activeStausById: builder.mutation({
      query({ value, _id, token }) {
        return {
          url: `activeStausById/${_id}`,
          method: "PATCH",
          body: value,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },

      invalidatesTags: ["User"],
    }),

    adminChangePassword: builder.mutation({
      query({ value, token }) {
        return {
          url: "adminChangePassword",
          method: "PATCH",
          body: value,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },

      invalidatesTags: ["User"],
    }),

    activeNewsById: builder.mutation({
      query({ value, _id, token }) {
        return {
          url: `activeNewsById/${_id}`,
          method: "PATCH",
          body: value,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },

      invalidatesTags: ["News"],
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
  useDeleteLanguageByIdMutation,
  useAddTypeOfPaperMutation,
  useGetPaperNameQuery,
  useGetNewsByIdQuery,
  useGetAllReporterQuery,
  useEditLanguageByIdMutation,
  useRegisterMutation,
  useFormMutation,
  useActiveStausByIdMutation,
  useGetReporterDetailsByIdQuery,
  useGetRatingQuery,
  useGetRatingByIdQuery,
  useGetConferenceQuery,
  useActiveNewsByIdMutation,
  useGetDashBoardDataQuery,
  useAdminChangePasswordMutation,
  useAddSpecializationMutation,
  useDeleteSpecializationByIdMutation,
  useEditSpecializationByIdMutation,
  useGetSpecializationQuery,
} = profileApi;
