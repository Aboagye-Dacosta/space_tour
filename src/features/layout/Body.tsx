import { Outlet } from "react-router-dom";

export default function Body() {
  return (
    <div className="p-0 flex flex-col items-center justify-center lg:justify-start  flex-1">
      <Outlet />
    </div>
  );
}
