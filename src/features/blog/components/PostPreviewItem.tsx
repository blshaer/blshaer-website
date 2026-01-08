export function PostPreviewItem({ post }: { post: any }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group border rounded-lg px-4 py-3 flex items-center justify-between"
    >
      <span className="truncate">{post.title}</span>
    </a>
  );
}
