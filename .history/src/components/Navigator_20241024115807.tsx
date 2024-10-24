import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

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
    const { location } = useNavigation()
    useEffect()
  return (
    <li>
      <span>{destination}</span>
      <motion.span layout/>
    </li>
  );
}

export default Navigator;
