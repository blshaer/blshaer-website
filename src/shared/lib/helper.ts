import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface TitleProps {
  title: string;
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const PageTitle: React.FC<TitleProps> = ({ title }) => {
  const location = usePathname();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null;
};
