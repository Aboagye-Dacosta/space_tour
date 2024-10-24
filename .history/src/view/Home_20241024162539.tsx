import { crewData } from "../assets/data_utils";
import { Crew } from "../assets/model/crew_model";
import Carousel from "../components/Carousel";


function Home() {
  return (
    <div>
          <h1>Home</h1>
          <Carousel>
              <Carousel.Body contentSize={crewData.length}>
                  <Carousel.Content data={crewData} render={(data as Crew, key){
                      return <div
                  }} />
              </Carousel.Body>
          </Carousel>
    </div>
  );
}

export default Home;
