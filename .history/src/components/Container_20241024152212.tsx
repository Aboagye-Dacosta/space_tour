import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="flex flex-col md">{children}</div>;
}
