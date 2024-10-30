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
    <div className="max-w-[70rem] flex items-center justify-center lg:items-start lg:justify-start flex-col gap-10 lg:gap-10">
      {children}
      <h1 className="text-[9rem] tracking-widest leading-lnSmall text-center lg:text-left">{title}</h1>
      <p className="text-center lg:text-left text-[2rem]"> {content}</p>
    </div>
  );
}
