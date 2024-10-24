interface DescriptionInterface {
  title: string;
  content: string;
}

export default function Description({ title, content }: DescriptionInterface) {
  return (
    <div>
      <h1 className="text-[4rem] ">{title}</h1>
      <p className="text-center lg:text-left text-"> {content}</p>
    </div>
  );
}
