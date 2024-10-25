import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface ActionInterface {
  [key: string]: unknown;
}

interface NavigatorInterface {
  destinations: string[];
  type?: "button" | "link";
  action?(value: ActionInterface): void;
  selectedIndex?: number;
}

function Navigator({
  destinations,
  type = "link",
  action,
  selectedIndex = 0,
}: NavigatorInterface) {
  return (
    <nav className="">
      <ul className="flex gap-[3rem]">
        {destinations.map((destination, i) =>
          type == "link" ? (
            <Nav key={i} destination={`0${i} ${destination}`} />
          ) : (
            <NavButtons
              isActive={selectedIndex == i}
              destination={destination}
              action={() => action!({ index: i })}
            />
          )
        )}
      </ul>
    </nav>
  );
}

function Nav({ destination }: { destination: string }) {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);
  const link = destination.includes("home")
    ? "/"
    : `/${destination.split(" ")[1]}`;

  useEffect(() => {
    if (link == pathname) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [link, pathname]);

  return (
    <li className="flex flex-col">
      <Link to={link} className="uppercase text-[1.7rem] tracking-wider">
        {destination}
      </Link>
      {isActive && (
        <motion.div layout layoutId="nav-item" className="w-100 h-1 bg-white" />
      )}
    </li>
  );
}
function NavButtons({
  destination,
  isActive,
  action,
}: {
  destination: string;
  isActive: boolean;
  action(): void;
}) {
  return (
    <li className="flex flex-col">
      <button
        className="uppercase text-[1.7rem] tracking-wider"
        onClick={() => {
          action();
        }}
      >
        {destination}
      </button>
      {isActive && (
        <motion.div layout layoutId="nav-item-button" className="w-100 h-1 bg-white" />
      )}
    </li>
  );
}

export default Navigator;
