import data from "./data.json";
import { Crew } from "./model/crew_model";
import { Destination } from "./model/destination_model";
import { Technology } from "./model/technology_model";

export const crewData: Crew[] = data["crew"];
export const destinationsData: Destination[] = data["destinations"];
export const technologyData: Technology[] = data["technology"];