import { ReactNode } from "react";

interface DescriptionInterface {
  title: string;
  content: string;
  children?: ReactNode;
}

export default function Description({
  title,
  content,
  children,
}: DescriptionInterface) {
  return (
    <div className="max-w-[60rem] flex items-center justify-center lg:items-start lg:justify-start flex-col gap-5">
      {children}
      <h1 className="text-[9rem] tracking-widest leading-lnSmall ">{title}</h1>
      <p className="text-center lg:text-left text-[2rem]"> {content}</p>
    </div>
  );
}
