import { createContext } from "react"

interface CarouselInterface {
    setCurrentIndex: (index: number) => void
}

const CarouselContext = createContext({} as CarouselInterface);


export default function Carousel() {
  return (
    <div>
      
    </div>
  )
}
