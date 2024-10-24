import {
  cloneElement,
  createContext,
  JSXElementConstructor,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
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

const CarouselBody = ({
  children,
  contentSize,
}: {
  children: ReactNode;
  contentSize: number;
}) => {
    const { setContentSize } = useCarousel();
    
    useEffect({
        
    });
  return <>{children}</>;
};

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
      {data.map((item, index) => currentIndex == index && render(item, index))}
    </>
  );
};

const CarouselButtons = ({
  button,
  direction = "horizontal",
}: {
  button: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  direction: "vertical" | "horizontal";
}) => {
  const { setCurrentIndex, contentSize, currentIndex } = useCarousel();

  return (
    <div
      className={`flex ${
        direction == "vertical" ? "flex-col" : "flex-row"
      } gap-4`}
    >
      {Array.from({ length: contentSize }, (_item, index) =>
        cloneElement(button, {
          //@ts-expect-error has prop
          onClick: () => setCurrentIndex(index),
          isCurrent: currentIndex == index,
        })
      )}
    </div>
  );
};

Carousel.Content = CarouselContent;
Carousel.Body = CarouselBody;
Carousel.Buttons = CarouselButtons;
