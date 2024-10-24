import { createContext } from "react"

interface CarouselInterface {
    setCurrentIndex: (index: number) => void
}

const CarouselContext = createContext({} as CarouselInterface);


const CarouseProvider = ({ children}) => {
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
