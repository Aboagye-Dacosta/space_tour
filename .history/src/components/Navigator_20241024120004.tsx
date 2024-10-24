import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

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
  const {
    location: { pathname },
  } = useNavigation();
    
  const [isActive, setIsActive] = useState(false);
    useEffect(() => {
      if(destination == pathname) {}
  }, []);
  return (
    <li className="">
      <span>{destination}</span>
      {isActive && <motion.span layout />}
    </li>
  );
}

export default Navigator;