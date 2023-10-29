import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home";
import Layout from "./Layout";
import Events from "./components/Pages/Events";
import Gallery from "./components/Pages/Gallery";
import Contact from "./components/Pages/Contact";
import gallery from './assets/Gallery/Gallery.js'
import events from './assets/Events/Events.js'


const loaderForEvents = async () => {
  // Load data for the 'events' route here
  return events;
};

const loaderForGallery = async () => {
  // Load data for the 'gallery' route here
  return gallery;
};

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
        loader: loaderForEvents,
      },
      {
        path: "/gallery",
        element: <Gallery/>,
        loader: loaderForGallery,
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
