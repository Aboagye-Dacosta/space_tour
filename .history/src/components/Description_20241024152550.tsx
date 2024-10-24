interface DescriptionInterface {
  title: string;
  content: string;
}

export default function Description({ title, content }: DescriptionInterface) {
    return <div>
        <h1>{title}</h1>
        <p> { }</p>
  </div>;
}
