import data from "./data.json";
import { Crew } from "./model/crew_model";
import { Destination } from "./model/destination_model";
import { Technology } from "./model/technology_model";

export const crewData: Crew[] = data["crew"];
export const destinationsData: Destination[] = data["destinations"];
export const technologyData: Technology[] = data["technology"];

export const homeData = {
    title: "SPACE",
    content: "  Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.Well sit back, and relax because we’ll give you a truly out of this world experience!",
    leading: "So, you want to travel to Space"
}