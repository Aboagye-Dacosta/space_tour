import Navigator from "../../components/Navigator";

const destination = ["home", "destination", "crew", "technology"];

export default function Header() {
  return (
    <div>
      <Navigator destinations={destination} />
    </div>
  );
}