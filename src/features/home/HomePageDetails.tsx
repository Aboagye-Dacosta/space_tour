import { homeData } from "../../assets/data_utils";

import Container from "../../components/Container";
import Description from "../../components/Description";
import ExploreBtn from "../../components/ExploreBtn";
import Leading from "../../components/Leading";

export default function HomePageDetails() {
  return (
    <Container>
      <Description title={homeData.title} content={homeData.content}>
        <Leading text="So you want to trave to " />
      </Description>
      <div>
        <ExploreBtn />
      </div>
    </Container>
  );
}
