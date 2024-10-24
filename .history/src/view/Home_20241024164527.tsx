import { crewData } from "../assets/data_utils";
import { Crew } from "../assets/model/crew_model";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Carousel>
        <Carousel.Body contentSize={crewData.length}>
          <Carousel.Content
            data={crewData}
            render={(data, key) => <div key={key}>{(data as Crew).bio}</div>}
          />
          <Carousel.Buttons
            direction="horizontal"
            //@ts-expect-error is ok
            button={<Button onClick={()}/>}
          />
        </Carousel.Body>
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
  return <button onClick={onClick}></button>;
};

export default Home;
