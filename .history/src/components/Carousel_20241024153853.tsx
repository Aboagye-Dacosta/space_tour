import { createContext, PropsWithChildren, useState } from "react"

interface CarouselInterface {
    setCurrentIndex: (index: number) => void
}

const CarouselContext = createContext({} as CarouselInterface);



const useCarouselContext() {
    const []  = useState
    return {}
}

const CarouseProvider = ({ children}: PropsWithChildren) => {
    return <CarouselContext.Provider value={}>
        {children}
    </CarouselContext.Provider>
}


export default function Carousel() {
  return (
    <div>
      
    </div>
  )
}
