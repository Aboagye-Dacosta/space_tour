import {
  createContext,
  PropsWithChildren,
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

Carousel.Body = ({
  children,
  contentSize,
}: {
  children: ReactNode;
  contentSize: number;
}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { setContentSize } = useCarousel();
    setContentSize(contentSize);
  return <></>;
};

Carousel.Content = ({
  data,
  render,
}: {
  data: unknown[];
  render: (data: unknown, key: number) => ReactNode;
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentIndex } = useCarousel();
  return (
    <>
      {data.map((item, index) => currentIndex == index && render(item, index))}
    </>
  );
};
