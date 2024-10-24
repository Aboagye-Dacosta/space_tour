import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";

interface CarouselInterface {
  setCurrentIndex: (index: number) => void;
  currentIndex: number;
}

const CarouselContext = createContext({} as CarouselInterface);

const useCarouselContext = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return { currentIndex, setCurrentIndex };
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

Carousel.Content = ({
  data,
  render,
}: {
  data: unknown[];
  render: (data: unknown, key: number) => ReactNode;
    }) => {
    const {}  = useCarousel
  return <>{data.map((item, index) => render(item, index))}</>;
};
