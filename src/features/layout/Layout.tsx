import { useLocation } from "react-router-dom";
import Body from "./Body";
import Header from "./Header";

interface BgUrlsInterface {
  [key: string]: string;
}

export default function Layout() {
  const { pathname } = useLocation();
  const bgName = pathname.slice(1) || "home";

  const bgUrls: BgUrlsInterface = {
    home: "bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop",
    destination:
      "bg-destinationMobile md:bg-destinationTablet lg:bg-destinationDesktop",
    crew: "bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop",
    technology:
      "bg-technologyMobile md:bg-technologyTablet lg:bg-technologyDesktop",
  };

  return (
    <div className={`${bgUrls[bgName]} bg-cover min-h-[100vh] transition-all ease-in-out duration-500 flex flex-col`}>
      <Header />
      <Body />
    </div>
  );
}
