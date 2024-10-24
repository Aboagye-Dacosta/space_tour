import AppImageAssets from "./assets/image_assets";
import Navigator from "./components/Navigator";

export default function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Navigator destinations={["name",]}/>
      <img src={AppImageAssets.logo} alt="app logo" />
    </div>
  );
}
