import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import PostListPage from "./pages/PostListPage.jsx";
import Write from "./pages/Write.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Register from "./pages/Register.jsx";
import SinglePostPage from "./pages/SinglePostPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: (<Homepage/>)
      },
      {
        path: "/posts",
        element: (<PostListPage/>)
      },
      {
        path: "/:slug",
        element: (<SinglePostPage/>)
      },
      {
        path: "/write",
        element: (<Write/>)
      },
      {
        path: "/login",
        element: (<LoginPage/>)
      },
      {
        path: "/register",
        element: (<Register/>)
      },
      
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
