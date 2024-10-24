import { createContext, PropsWithChildren } from "react"

interface CarouselInterface {
    setCurrentIndex: (index: number) => void
}

const CarouselContext = createContext({} as CarouselInterface);


const CarouseProvider = ({ children}: PropsWithChildren) => {
    return <CarouselContext.Provider>
        {children}
    </CarouselContext.Provider>
}


export default function Carousel() {
  return (
    <div>
      
    </div>
  )
}
