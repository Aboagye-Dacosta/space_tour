import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigatorInterface {
  destinations: string[];
}

function Navigator({ destinations }: NavigatorInterface) {
  return (
    <nav className="">
      <ul className="flex gap-[2rem]">
        {destinations.map((destination, i) => (
          <Nav key={i} destination={`0${i} ${destination}`} />
        ))}
      </ul>
    </nav>
  );
}

function Nav({ destination }: { destination: string }) {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);
  const link = destination.includes("home") ? "" : destination.split(" ")[1];

  useEffect(() => {
    if (link == pathname) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [link, pathname]);

  return (
    <li className="flex flex-col">
      <Link to={link}`} className="uppercase text-[2rem]">
        {destination}
      </Link>
      {isActive && (
        <motion.div
          layout
          layoutId="nav-item"
          className="w-100 h-5 bg-red-500"
        />
      )}
    </li>
  );
}

export default Navigator;
