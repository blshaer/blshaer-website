import { useEffect, useState } from "react";
import { PROJECT_TYPES_DATA } from "../data/project-types.data";
import { ProjectType } from "../types/project-type.types";

export function useProjectTypes(active = true) {
  const [types, setTypes] = useState<ProjectType[]>([]);

  useEffect(() => {
    setTypes(
      PROJECT_TYPES_DATA.filter((t) =>
        active ? t.isActive : true,
      ),
    );
  }, [active]);

  return types;
}
