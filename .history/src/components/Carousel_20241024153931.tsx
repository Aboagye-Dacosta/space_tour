import { createContext, PropsWithChildren, useState } from "react"

interface CarouselInterface {
    setCurrentIndex: (index: number) => void
    currentIndex: number
}

const CarouselContext = createContext({} as CarouselInterface);



const useCarouselContext = () {
    const [currentIndex, setCurrentIndex]  = useState(0)
    return {currentIndex,setCurrentIndex}
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
