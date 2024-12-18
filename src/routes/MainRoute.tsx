import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import { About } from "@/pages/About";
import { ContactPage } from "@/pages/ContactPage";
import { WorkPage } from "@/pages/WorkPage";
import ProjectDetailedPage from "@/pages/ProjectDetailedPage";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <WorkPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetailedPage />,
      },
    ],
  },
]);
