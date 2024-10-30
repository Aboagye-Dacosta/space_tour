import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className=" w-full flex flex-col lg:flex-row  gap-[10rem] items-center justify-center py-10 lg:pt-56">{children}</div>;
}
