import { motion } from "framer-motion";

const image = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 1,
    },
  },
};

export default function Image({ src }: { src: string }) {
  return (
    <div className="max-w-[60rem] h-full ">
      <motion.img
        src={src}
        alt={src.split(".")[0]}
        className="object-contain h-full"
        variants={image}
      />
    </div>
  );
}
