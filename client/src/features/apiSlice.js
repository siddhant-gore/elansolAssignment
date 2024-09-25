import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:5000/api";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books/get-all-books",
        method: "GET",
        
      }),
    }),
    getBookById: builder.query({
      query: (id) => ({
        url: `/books/get-book/${id}`,
        method: "GET",
        
      }),
    }),
    deleteBookById: builder.mutation({
      query: (id) => ({
        url: `/books/delete-book/${id}`,
        method: "DELETE",
        
      }),
    }),
    getCharacters: builder.query({
      query: () => ({
        url: "/characters/get-all-characters",
        method: "GET",
        
      }),
    }),
    getCharacterById: builder.query({
      query: (id) => ({
        url: `/characters/get-character/${id}`,
        method: "GET",
        
      }),
    }),
    deleteCharacterById: builder.mutation({
      query: (id) => ({
        url: `/characters/delete-character/${id}`,
        method: "DELETE",
        
      }),
    }),
    getHouses: builder.query({
      query: () => ({
        url: "/houses/get-all-houses",
        method: "GET",
        
      }),
    }),
    getHouseById: builder.query({
      query: (id) => ({
        url: `/houses/get-house/${id}`,
        method: "GET",
        
      }),
    }),
    deleteHouseById: builder.mutation({
      query: (id) => ({
        url: `/houses/delete-house/${id}`,
        method: "DELETE",
        
      }),
    }),

   
  }),
});

export const {
 useGetBooksQuery,
 useGetBookByIdQuery,
 useDeleteBookByIdMutation,
 useGetCharactersQuery,
 useGetCharacterByIdQuery,
 useDeleteCharacterByIdMutation,
 useGetHousesQuery,
 useGetHouseByIdQuery,
 useDeleteHouseByIdMutation,
} = apiSlice;
