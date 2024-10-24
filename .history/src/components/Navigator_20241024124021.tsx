import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigation } from "react-router-dom";

interface NavigatorInterface {
  destinations: string[];
}

function Navigator({ destinations }: NavigatorInterface) {
  return (
    <nav className="">
      <ul>
        {destinations.map((destination, i) => (
          <Nav key={i} destination={destination} />
        ))}
      </ul>
    </nav>
  );
}

function Nav({ destination }: { destination: string }) {
  const { location } = useNavigation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (destination == location?.pathname) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [destination, location]);

  return (
    <li className="flex flex-col">
      <Link to={`/${destination}`} className="uppercase text-[2rem]">
        {destination}
      </Link>
      {isActive && <motion.span layout layo className="w-100 h-5 bg-white" />}
    </li>
  );
}

export default Navigator;
