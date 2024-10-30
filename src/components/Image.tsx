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

export default function Image({
  src,
  fit = "contain",
}: {
  src: string;
  fit?: "cover" | "contain";
}) {
  return (
    <div className="h-full">
      <motion.img
        src={src}
        alt={src.split(".")[0]}
        className={`${
          fit == "contain" ? "object-contain" : "object-cover"
        } h-full`}
        variants={image}
      />
    </div>
  );
}
