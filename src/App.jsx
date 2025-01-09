import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage";
import Homepagbanner from "./components/slide/homebannerslide"
import QnA from "./pages/Q&A";
export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/slide", element: <Homepagbanner/>},
    { path: "/qna", element:<QnA /> },
  ]);
  return <RouterProvider router={router} />;
}
