import Navigator from "../../components/Navigator";

const destination = ["home","destination","crew",""];

export default function Header() {
  return (
    <div>
      <Navigator destinations={destination} />
    </div>
  );
}
