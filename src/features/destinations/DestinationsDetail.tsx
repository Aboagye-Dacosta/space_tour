import { useEffect, useState } from "react";
import { destinationsData } from "../../assets/data_utils";
import Container from "../../components/Container";
import Description from "../../components/Description";
import Divider from "../../components/Divider";
import Image from "../../components/Image";
import Navigator from "../../components/Navigator";
import DestinationTag from "./DestinationTag";




export default function DestinationsDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [destination, setDestination] = useState(
    destinationsData[currentIndex]
  );

  useEffect(() => {
    setDestination(destinationsData[currentIndex]);
  }, [currentIndex]);

  return (
    <>
      <Container>
        <Image src={destination.images.png} />
        <div className="flex flex-col items-center lg:items-start">
          <Navigator
            type="button"
            selectedIndex={currentIndex}
            action={({ index }) => {
              setCurrentIndex(index as number);
            }}
            destinations={destinationsData.map(
              (destination) => destination.name
            )}
          />
          <div className="min-h-[20rem]">
            <Description
              content={destination.description}
              title={destination.name}
            />
          </div>
          <Divider />
          <div className="flex w-full flex-col md:flex-row items-center justify-center lg:items-start lg:justify-start gap-11 md:gap-32">
            <DestinationTag
              title="AVG. DISTANCE"
              content={destination.distance}
            />
            <DestinationTag
              title="EAST. TRAVEL TIME"
              content={destination.travel}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
