"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { useEffect, useState } from "react";

type ProjectType = {
  _id: string;
  name: string;
  value: string;
};

type ProjectTypeSelectProps = {
  onSelect: (value: string) => void;
};

export default function ProjectTypeSelect({
  onSelect,
}: ProjectTypeSelectProps) {
  const [projectTypes, setProjectTypes] = useState<ProjectType[]>([]);
  const [selectedType, setSelectedType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjectTypes() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/project-types?active=true");
        if (!res.ok) throw new Error("Failed to fetch project types");

        const json = await res.json();

        if (!json.success) throw new Error(json.error || "Failed to fetch");

        // Map backend data to frontend format, add 'value' (slug) as lowercase name without spaces
        const types = json.data.map((type: any) => ({
          _id: type._id,
          name: type.name,
          value: type.name.toLowerCase().replace(/\s+/g, ""),
        }));

        setProjectTypes(types);

        setSelectedType("all");
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchProjectTypes();
  }, []);

  useEffect(() => {
    onSelect(selectedType);
  }, [selectedType, onSelect]);

  if (loading) return <p>Loading project types...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <Select value={selectedType} onValueChange={setSelectedType}>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Filter by type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Projects</SelectItem>
        {projectTypes.map(({ _id, name, value }) => (
          <SelectItem key={_id} value={value}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
