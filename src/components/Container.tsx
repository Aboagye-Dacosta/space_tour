import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="flex flex-col lg:flex-row gap-[10rem] items-center justify-center">{children}</div>;
}
