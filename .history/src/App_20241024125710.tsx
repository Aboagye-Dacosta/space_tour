import { RouterProvider } from "react-router-dom";
import AppImageAssets from "./assets/image_assets";
import Navigator from "./components/Navigator";
import { router } from "./router";

export default function App() {
  return RouterProvider({router: router})
}
