import { motion } from "framer-motion";
import { useState } from "react";
import { technologyData } from "../../assets/data_utils";
import { Technology } from "../../assets/model/technology_model";
import Carousel from "../../components/Carousel";
import Container from "../../components/Container";
import Description from "../../components/Description";
import Image from "../../components/Image";
import Leading from "../../components/Leading";

export default function TechnologyDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="px-[2rem] md:px-[4rem] lg:pl-[20rem] lg:pr-0">
      <Leading text="01 SPACE LUNCH 101" />
      <Container>
        <Carousel>
          <Container>
            <Carousel.Buttons
              action={(index) => {
                setCurrentIndex(index);
              }}
              button={<TechCarouselButton />}
              count={technologyData.length}
              direction="vertical"
            />
            <Carousel.Content
              data={technologyData}
              render={(data) => {
                const technology = data as Technology;
                return (
                  <Description
                    title={technology.name}
                    content={technology.description}
                  />
                );
              }}
            />
          </Container>
        </Carousel>
        <div className="w-full flex lg:items-end lg:justify-end">
          <Image
            src={technologyData[currentIndex].images.portrait}
            fit="contain"
          />
        </div>
      </Container>
    </div>
  );
}

const TechCarouselButton = ({
  isCurrent = false,
  onClick,
  index,
}: {
  isCurrent?: boolean;
  onClick?: () => void;
  index?: number;
}) => {
  const value = (index as number) + 1;
  return (
    <button
      className={`w-[5rem] h-[5rem] rounded-full border border-slate-200 `}
      onClick={onClick}
    >
      {!isCurrent && value}
      {isCurrent && (
        <motion.div
          layout
          layoutId="technology-carousel"
          className="bg-white text-black w-full h-full rounded-full flex items-center justify-center"
        >
          {value}
        </motion.div>
      )}
    </button>
  );
};
