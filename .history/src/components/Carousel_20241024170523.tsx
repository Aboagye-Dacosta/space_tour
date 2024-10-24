import { motion } from "framer-motion";
import {
  cloneElement,
  createContext,
  JSXElementConstructor,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";

interface CarouselInterface {
  setCurrentIndex: (index: number) => void;
  setContentSize: (index: number) => void;
  currentIndex: number;
  contentSize: number;
}

const CarouselContext = createContext({} as CarouselInterface);

const useCarouselContext = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contentSize, setContentSize] = useState(0);
  return { currentIndex, contentSize, setContentSize, setCurrentIndex };
};

const useCarousel = () => {
  const context = useContext(CarouselContext);

  if (!context) throw new Error("Using carousel context outside of carousel");
  return context;
};

const CarouseProvider = ({ children }: PropsWithChildren) => {
  return (
    <CarouselContext.Provider value={useCarouselContext()}>
      {children}
    </CarouselContext.Provider>
  );
};

export default function Carousel({ children }: PropsWithChildren) {
  return <CarouseProvider>{children}</CarouseProvider>;
}

const CarouselContent = ({
  data,
  render,
}: {
  data: unknown[];
  render: (data: unknown, key: number) => ReactNode;
}) => {
  const { currentIndex } = useCarousel();
  return (
    <>
      {data.map(
        (item, index) =>
          currentIndex == index && (
                  <motion.div  animate={{opacity: 1}} transition={{ delay: 1 }}>
              {render(item, index)}
            </motion.div>
          )
      )}
    </>
  );
};

const CarouselButtons = ({
  button,
  direction = "horizontal",
  count,
}: {
  button: ReactNode;
  direction: "vertical" | "horizontal";
  count: number;
}) => {
  const { setCurrentIndex, currentIndex } = useCarousel();

  return (
    <div
      className={`flex ${
        direction == "vertical" ? "flex-col" : "flex-row"
      } gap-4`}
    >
      {Array.from({ length: count }, (_item, index) =>
        cloneElement(
          button as ReactElement<
            unknown,
            string | JSXElementConstructor<unknown>
          >,
          {
            //@ts-expect-error has prop
            onClick: () => setCurrentIndex(index),
            isCurrent: currentIndex == index,
          }
        )
      )}
    </div>
  );
};

Carousel.Content = CarouselContent;
Carousel.Buttons = CarouselButtons;
