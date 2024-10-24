import { motion } from "framer-motion";

interface NavigatorInterface {
  destinations: string[];
}

function Navigator({ destinations }: NavigatorInterface) {
  return (
    <nav className="">
    </nav>
  );
}

function Nav({ destination }: { destination: string }) {
  return (
    <li>
      <span>{destination}</span>
      <motion.span />
    </li>
  );
}

export default Navigator;
