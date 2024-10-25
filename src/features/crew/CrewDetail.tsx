import { motion } from "framer-motion";
import { useState } from "react";
import { crewData } from "../../assets/data_utils";
import { Crew } from "../../assets/model/crew_model";
import Carousel from "../../components/Carousel";
import Container from "../../components/Container";
import Description from "../../components/Description";
import Image from "../../components/Image";
import Leading from "../../components/Leading";

export default function CrewDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Container>
      <Carousel>
        <div className="flex flex-col gap-10 lg:gap-[15rem] max-w-[60rem]">
          <Carousel.Content
            data={crewData}
            render={(data) => {
              const crew = data as Crew;
              return (
                <Description title={crew.name} content={crew.bio}>
                  <Leading text={crew.role} />
                </Description>
              );
            }}
          />
          <Carousel.Buttons
            button={<Button />}
            count={crewData.length}
            action={(index) => setCurrentIndex(index)}
          />
        </div>
      </Carousel>
      <div className="h-[70rem] flex-1">
        <Image src={crewData[currentIndex].images.png} />
      </div>
    </Container>
  );
}

const Button = ({
  isCurrent = false,
  onClick,
}: {
  isCurrent?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-[10px] h-[10px] rounded-full border border-gray-300 "
    >
      {isCurrent && (
        <motion.div
          layout
          layoutId="carousel-crew"
          className="bg-white w-full h-full rounded-full"
        />
      )}
    </button>
  );
};
