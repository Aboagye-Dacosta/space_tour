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
          direction="horizontal"
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
  return <button onClick={onClick} className="bg"></button>;
};

export default Home;
