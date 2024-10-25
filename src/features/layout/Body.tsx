import { Outlet } from "react-router-dom";

export default function Body() {
  return (
    <div className="px-[2rem] md:px-[4rem] lg:px-[10rem] pt-[15rem] pb-[10rem] flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
}
