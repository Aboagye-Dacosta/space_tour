export default function DestinationTag({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-5">
      <h4 className="text-[2rem]">{title}</h4>
      <p className="text-[4rem]">{content}</p>
    </div>
  );
}
