import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}

export interface BorrowRequest {
  bookId: string;
  quantity: number;
  dueDate: string;
}

export interface BorrowSummary {
  bookId: string;
  title: string;
  isbn: string;
  totalBorrowed: number;
}

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL}),
  tagTypes: ['Books', 'BorrowSummary'],
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => '/books',
      providesTags: ['Books'],
    }),
    createBook: builder.mutation<Book, Omit<Book, 'id' | 'available'>>({
      query: (book) => ({
        url: '/books',
        method: 'POST',
        body: book,
      }),
      invalidatesTags: ['Books'],
    }),
    updateBook: builder.mutation<Book, Partial<Book> & { id: string }>({
      query: ({ id, ...book }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: book,
      }),
      invalidatesTags: ['Books'],
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          bookApi.util.updateQueryData('getBooks', undefined, (draft) => {
            const index = draft.findIndex((book) => book.id === id);
            if (index !== -1) {
              draft[index] = { ...draft[index], ...patch };
            }
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          bookApi.util.updateQueryData('getBooks', undefined, (draft) => {
            return draft.filter((book) => book.id !== id);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    borrowBook: builder.mutation<void, BorrowRequest>({
      query: ({ bookId, ...body }) => ({
        url: `/borrow/${bookId}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Books', 'BorrowSummary'],
    }),
    getBorrowSummary: builder.query<BorrowSummary[], void>({
      query: () => '/borrow-summary',
      providesTags: ['BorrowSummary'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
} = bookApi;