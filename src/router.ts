import { createBrowserRouter } from "react-router-dom";
import Layout from "./features/layout/Layout";
import Crew from "./view/Crew";
import Destination from "./view/Destination";
import Home from "./view/Home";
import Technology from "./view/Technology";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "crew", Component: Crew,
            },
            {
                path: "destination",
                Component: Destination,
            },
            {
                path: "technology",
                Component: Technology,
            },

        ],
    }
]);