import ErrorPage from "@/components/ui/ErrorPage";
import HomeLayout from "@/Layout/HomeLayout";

import BorrowBook from "@/pages/BorrowBook";
import BorrowSummary from "@/pages/BorrowSummary";
import EditBook from "@/pages/EditBook";
import Home from "@/pages/Home/Home";
import BookList from "@/pages/User/BookList";
import CreateBook from "@/pages/User/CreateBook";



import { createBrowserRouter } from "react-router";

const index = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: "/books",
        element: <BookList />,
      },
      {
        path: "/create-book",
        element: <CreateBook />,
      },
      {
        path: "/borrow-book/:bookId",
        element: <BorrowBook />,
      },
      {
        path:"/borrow-summary",
        element:<BorrowSummary></BorrowSummary>
      },
      {
        path: "/edit-book/:id", // ✅ This is the missing route
        element: <EditBook />,
      },
    ],
  },
]);

export default index;
