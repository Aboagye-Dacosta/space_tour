import { createBrowserRouter } from "react-router-dom";
import Home from "./view/Home";
import Layout from "./features/layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            
        ],
    }
]);