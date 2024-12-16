import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Hero from "@/pages/Hero";

export const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Hero/>
            }
        ]
    }
])