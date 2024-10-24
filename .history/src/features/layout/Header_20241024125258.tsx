import Navigator from "../../components/Navigator";

const destination = ["home","destination"];

export default function Header() {
  return (
    <div>
      <Navigator destinations={destination} />
    </div>
  );
}
