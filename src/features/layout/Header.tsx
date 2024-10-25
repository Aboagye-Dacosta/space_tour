import Logo from "../../components/Logo";
import Navigator from "../../components/Navigator";

const destination = ["home", "destination", "crew", "technology"];

export default function Header() {
  return (
    <div className="flex items-center px-[5rem] py-4 justify-between">
      <Logo />
      <div className="bg-[rgba(0,0,0,.2)] py-[3rem] px-[10rem]">
        <Navigator destinations={destination} />
      </div>
    </div>
  );
}
