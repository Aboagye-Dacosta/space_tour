import AppImageAssets from "./assets/image_assets";

export default function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <img src={AppImageAssets.logo} alt="app logo" />
    </div>
  );
}
