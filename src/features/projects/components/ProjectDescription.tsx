export function ProjectDescription({ description }: { description: string }) {
  return (
    <ul className="mb-4 list-disc ml-6 space-y-2">
      {description.split("\n\n").map((item, idx) => (
        <li key={idx}>{item.replace(/^•\s*/, "")}</li>
      ))}
    </ul>
  );
}
