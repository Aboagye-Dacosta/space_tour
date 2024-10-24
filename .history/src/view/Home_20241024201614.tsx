import { motion } from "framer-motion";
import { crewData } from "../assets/data_utils";
import { Crew } from "../assets/model/crew_model";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Carousel>
        <Carousel.Content
          data={crewData}
          render={(data, key) => <div key={key}>{(data as Crew).bio}</div>}
        />
        <Carousel.Buttons
          count={crewData.length}
          
          button={<Button onClick={console.log} isCurrent={false} />}
        />
      </Carousel>
    </div>
  );
}

const Button = ({
  onClick,
  isCurrent,
}: {
  onClick: () => void;
  isCurrent: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`border-gray-400 border-[2px] w-5 h-5 rounded-full $`}
    >
      {isCurrent && (
        <motion.div
          layout
          layoutId="carousel-indicator"
          className="bg-full h-full bg-white rounded-full"
        />
      )}
    </button>
  );
};

export default Home;
