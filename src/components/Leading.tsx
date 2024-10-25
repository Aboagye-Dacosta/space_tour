export default function Leading({ text }: { text: string }) {
  return <h2 className="text-[2rem] tracking-[3px]">{text.toUpperCase()}</h2>;
}
