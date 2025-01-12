import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage";
import Homepagbanner from "./components/slide/homebannerslide"



export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/slide", element: <Homepagbanner/>},


  ]);
  return <RouterProvider router={router} />;
}
