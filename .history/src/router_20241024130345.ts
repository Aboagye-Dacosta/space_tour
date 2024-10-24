import { createBrowserRouter } from "react-router-dom";
import Layout from "./features/layout/Layout";
import Home from "./view/Home";

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
                path: "",
            }
        ],
    }
]);