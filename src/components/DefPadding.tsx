import { PropsWithChildren } from "react";

export default function DefPadding({ children  }: PropsWithChildren) {
  return <div className="px-[2rem] md:px-[4rem] lg:px-[20rem]">{children}</div>;
}
