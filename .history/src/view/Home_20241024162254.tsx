import { crewData } from "../assets/data_utils";
import Carousel from "../components/Carousel";


function Home() {
  return (
    <div>
          <h1>Home</h1>
          <Carousel>
              <Carousel.Body contentSize={crewData.length}>
                  <Carousel.Content data={ } />
              </Carousel.Body>
          </Carousel>
    </div>
  );
}

export default Home;
