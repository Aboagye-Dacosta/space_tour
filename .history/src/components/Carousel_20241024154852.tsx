import { createContext, PropsWithChildren, useState } from "react";

interface CarouselInterface {
  setCurrentIndex: (index: number) => void;
  currentIndex: number;
}

const CarouselContext = createContext({} as CarouselInterface);

const useCarouselContext = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return { currentIndex, setCurrentIndex };
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

Carousel.Content = ({data,render} : {data: any[],render: (data: any)}) => {
    return <>
        {
            data
        }
    </>
}
