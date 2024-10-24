import { motion } from "framer-motion";

interface NavigatorInterface {
  destinations: string[];
}

function Navigator({ destinations }: NavigatorInterface) {
  return (
    <nav className="">
      <motion.div className=""></motion.div>
    </nav>
  );
}

function Nav({ destination }: { destination: string }) {
  return (
    <li>
          <span>{destination}</span>
          
    </li>
  );
}

export default Navigator;
