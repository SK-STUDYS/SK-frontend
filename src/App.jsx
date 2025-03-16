import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage";
import Homepagbanner from "./components/slide/homebannerslide"

import BoardMain from './pages/BoardMain' //공지사항 전체 페이지
import Question from './pages/Question'

export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/slide", element: <Homepagbanner/>},
    { path: "/board",element: <BoardMain/>},
    { path: "/question",element: <Question/>},
    
  ]);
  return <RouterProvider router={router} />;
}
