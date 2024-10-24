import Navigator from "../../components/Navigator";

const destination = ["home"];

export default function Header() {
  return (
    <div>
      <Navigator destinations={destination} />
    </div>
  );
}
