import {
  AiOutlineBranches,
  AiOutlineGlobal,
  AiOutlinePlayCircle,
} from "react-icons/ai";

export function ProjectLinks({
  website,
  github,
  videoUrl,
}: {
  website: string;
  github?: string;
  videoUrl?: string;
}) {
  return (
    <>
      {website && (
        <li className="flex items-center gap-2">
          <AiOutlineGlobal />
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Visit Website
          </a>
        </li>
      )}

      {videoUrl && (
        <li className="flex items-center gap-2">
          <AiOutlinePlayCircle />
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Watch Video
          </a>
        </li>
      )}

      {github && (
        <li className="flex items-center gap-2">
          <AiOutlineBranches />
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View Source
          </a>
        </li>
      )}
    </>
  );
}
