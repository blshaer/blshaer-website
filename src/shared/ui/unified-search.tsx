"use client";

import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  Filter,
  Search,
  SortAsc,
  SortDesc,
  Tag,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface SearchFilter {
  key: string;
  label: string;
  type: "text" | "select" | "date" | "multiselect";
  options?: { value: string; label: string }[];
  placeholder?: string;
}

export interface SortOption {
  key: string;
  label: string;
  direction: "asc" | "desc";
}

interface UnifiedSearchProps {
  placeholder?: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  filters?: SearchFilter[];
  activeFilters?: Record<string, any>;
  onFiltersChange?: (filters: Record<string, any>) => void;
  sortOptions?: SortOption[];
  activeSortOption?: string;
  onSortChange?: (sortKey: string, direction: "asc" | "desc") => void;
  showFilters?: boolean;
  showSort?: boolean;
  className?: string;
  resultCount?: number;
  isLoading?: boolean;
}

export function UnifiedSearch({
  placeholder = "Search...",
  searchValue,
  onSearchChange,
  filters = [],
  activeFilters = {},
  onFiltersChange,
  sortOptions = [],
  activeSortOption,
  onSortChange,
  showFilters = true,
  showSort = true,
  className = "",
  resultCount,
  isLoading = false,
}: UnifiedSearchProps) {
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [localFilters, setLocalFilters] = useState(activeFilters);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLocalFilters(activeFilters);
  }, [activeFilters]);

  const handleSearchChange = (value: string) => {
    onSearchChange(value);
  };

  const handleFilterChange = (filterKey: string, value: any) => {
    const newFilters = { ...localFilters, [filterKey]: value };
    if (
      value === "" ||
      value === null ||
      value === undefined ||
      (Array.isArray(value) && value.length === 0)
    ) {
      delete newFilters[filterKey];
    }
    setLocalFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const clearAllFilters = () => {
    setLocalFilters({});
    onFiltersChange?.({});
    onSearchChange("");
  };

  const clearSearch = () => {
    onSearchChange("");
    searchInputRef.current?.focus();
  };

  const activeFilterCount = Object.keys(localFilters).length;
  const hasActiveSearch = searchValue.length > 0;
  const hasActiveFilters = activeFilterCount > 0;

  const getSortIcon = (sortKey: string) => {
    if (activeSortOption === sortKey) {
      const option = sortOptions.find((opt) => opt.key === sortKey);
      return option?.direction === "asc" ? (
        <SortAsc className="h-4 w-4" />
      ) : (
        <SortDesc className="h-4 w-4" />
      );
    }
    return <SortAsc className="h-4 w-4 opacity-50" />;
  };

  const getFilterIcon = (type: SearchFilter["type"]) => {
    switch (type) {
      case "date":
        return <Calendar className="h-4 w-4" />;
      case "select":
      case "multiselect":
        return <Tag className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main Search Bar */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            ref={searchInputRef}
            type="text"
            placeholder={placeholder}
            value={searchValue}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 pr-20 h-12 text-base"
            disabled={isLoading}
          />

          {/* Clear Search Button */}
          {hasActiveSearch && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-12 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
              disabled={isLoading}
            >
              <X className="h-4 w-4" />
            </Button>
          )}

          {/* Filter Toggle Button */}
          {showFilters && filters.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFilterPanel(!showFilterPanel)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
              disabled={isLoading}
            >
              <Filter
                className={`h-4 w-4 ${hasActiveFilters ? "text-blue-500" : ""}`}
              />
              {activeFilterCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs"
                >
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          )}
        </div>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 /50 dark:bg-gray-900/50 rounded-md flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>

      {/* Active Filters & Sort */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Active Search Term */}
          {hasActiveSearch && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <Search className="h-3 w-3" />"{searchValue}"
              <Button
                variant="ghost"
                size="sm"
                onClick={clearSearch}
                className="h-4 w-4 p-0 ml-1"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}

          {/* Active Filters */}
          {Object.entries(localFilters).map(([key, value]) => {
            const filter = filters.find((f) => f.key === key);
            if (!filter || !value) return null;

            const displayValue = Array.isArray(value)
              ? value.join(", ")
              : value;

            return (
              <Badge
                key={key}
                variant="outline"
                className="flex items-center gap-1"
              >
                {getFilterIcon(filter.type)}
                {filter.label}: {displayValue}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleFilterChange(key, null)}
                  className="h-4 w-4 p-0 ml-1"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            );
          })}

          {/* Clear All Button */}
          {(hasActiveSearch || hasActiveFilters) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-red-500 hover:text-red-700"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Sort Options */}
        {showSort && sortOptions.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            {sortOptions.map((option) => (
              <Button
                key={option.key}
                variant={activeSortOption === option.key ? "default" : "ghost"}
                size="sm"
                onClick={() => onSortChange?.(option.key, option.direction)}
                className="flex items-center gap-1"
              >
                {getSortIcon(option.key)}
                {option.label}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Result Count */}
      {resultCount !== undefined && (
        <div className="text-sm text-gray-500">
          {resultCount} result{resultCount !== 1 ? "s" : ""} found
        </div>
      )}

      {/* Filter Panel */}
      <AnimatePresence>
        {showFilterPanel && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border border-gray-200 dark:border-gray-700 rounded-[12px] p-4 bg-gray-50 dark:bg-gray-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filters.map((filter) => (
                <div key={filter.key} className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    {getFilterIcon(filter.type)}
                    {filter.label}
                  </label>

                  {filter.type === "text" && (
                    <Input
                      type="text"
                      placeholder={filter.placeholder}
                      value={localFilters[filter.key] || ""}
                      onChange={(e) =>
                        handleFilterChange(filter.key, e.target.value)
                      }
                    />
                  )}

                  {filter.type === "select" && (
                    <select
                      value={localFilters[filter.key] || ""}
                      onChange={(e) =>
                        handleFilterChange(filter.key, e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">All</option>
                      {filter.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}

                  {filter.type === "date" && (
                    <Input
                      type="date"
                      value={localFilters[filter.key] || ""}
                      onChange={(e) =>
                        handleFilterChange(filter.key, e.target.value)
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
