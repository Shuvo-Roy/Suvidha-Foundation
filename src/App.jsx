import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home";
import Layout from "./Layout";
import Events from "./components/Pages/Events";
import Gallery from "./components/Pages/Gallery";
import Contact from "./components/Pages/Contact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events/>,
      },
      {
        path: "/gallery",
        element: <Gallery/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-quicksand">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
