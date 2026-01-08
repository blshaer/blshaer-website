"use client";

import { Button } from "@/shared/ui";
import { Badge } from "@/shared/ui/";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shared/ui/";
import { Input } from "@/shared/ui/";
import { Label } from "@/shared/ui/";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/ui/";
import { Palette, Search } from "lucide-react";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as HiIcons from "react-icons/hi";
import * as IoIcons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as TiIcons from "react-icons/ti";

interface IconPickerProps {
  selectedIcon: string;
  selectedLibrary: string;
  onIconSelect: (icon: string, library: string) => void;
  className?: string;
}

const iconLibraries = {
  fa: { name: "Font Awesome", icons: FaIcons, prefix: "Fa" },
  ai: { name: "Ant Design", icons: AiIcons, prefix: "Ai" },
  bi: { name: "Bootstrap", icons: BiIcons, prefix: "Bi" },
  bs: { name: "Bootstrap", icons: BsIcons, prefix: "Bs" },
  fi: { name: "Feather", icons: FiIcons, prefix: "Fi" },
  hi: { name: "Heroicons", icons: HiIcons, prefix: "Hi" },
  io: { name: "Ionicons", icons: IoIcons, prefix: "Io" },
  md: { name: "Material Design", icons: MdIcons, prefix: "Md" },
  ri: { name: "Remix", icons: RiIcons, prefix: "Ri" },
  si: { name: "Simple Icons", icons: SiIcons, prefix: "Si" },
  ti: { name: "Typicons", icons: TiIcons, prefix: "Ti" },
};

// Popular social media icons for quick access
const popularSocialIcons = [
  { icon: "SiGithub", library: "si", name: "GitHub" },
  { icon: "SiLinkedin", library: "si", name: "LinkedIn" },
  { icon: "SiX", library: "si", name: "X (Twitter)" },
  { icon: "SiBluesky", library: "si", name: "Bluesky" },
  { icon: "SiMastodon", library: "si", name: "Mastodon" },
  { icon: "FaFacebook", library: "fa", name: "Facebook" },
  { icon: "FaInstagram", library: "fa", name: "Instagram" },
  { icon: "FaYoutube", library: "fa", name: "YouTube" },
  { icon: "FaTiktok", library: "fa", name: "TikTok" },
  { icon: "FaDiscord", library: "fa", name: "Discord" },
  { icon: "FaWhatsapp", library: "fa", name: "WhatsApp" },
  { icon: "FaTelegram", library: "fa", name: "Telegram" },
  { icon: "FaSnapchat", library: "fa", name: "Snapchat" },
  { icon: "FaPinterest", library: "fa", name: "Pinterest" },
  { icon: "FaReddit", library: "fa", name: "Reddit" },
  { icon: "FaTwitch", library: "fa", name: "Twitch" },
];

export function IconPicker({
  selectedIcon,
  selectedLibrary,
  onIconSelect,
  className = "",
}: IconPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLib, setSelectedLib] = useState(selectedLibrary || "fa");

  const getIconComponent = (iconName: string, library: string) => {
    const iconLib = iconLibraries[library as keyof typeof iconLibraries];
    if (!iconLib) return null;

    const IconComponent = iconLib.icons[iconName as keyof typeof iconLib.icons];
    if (!IconComponent) return null;

    // Type assertion for React component
    const Icon = IconComponent as React.ComponentType<{ size?: number }>;
    return <Icon size={24} />;
  };

  const getCurrentIcon = () => {
    return getIconComponent(selectedIcon, selectedLibrary);
  };

  const getFilteredIcons = () => {
    const iconLib = iconLibraries[selectedLib as keyof typeof iconLibraries];
    if (!iconLib) return [];

    const iconNames = Object.keys(iconLib.icons).filter((iconName) =>
      iconName.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return iconNames.slice(0, 100); // Limit to 100 icons for performance
  };

  const handleIconSelect = (iconName: string) => {
    onIconSelect(iconName, selectedLib);
    setIsOpen(false);
  };

  return (
    <div className={className}>
      <Label className="text-[var(--card-headline)] mb-2 block">Icon</Label>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="w-full  justify-start border-[var(--input-border-color)] bg-[var(--input-background)] text-[var(--input-text)]"
          >
            <div className="flex text-sm items-center gap-2">
              {getCurrentIcon() || <Palette size={20} />}
              <span>{selectedIcon || "Select an icon"}</span>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden bg-[var(--card-background)] border-[var(--card-border-color)]">
          <DialogHeader>
            <DialogTitle className="text-[var(--card-headline)]">
              Choose an Icon
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Library Selector */}
            <div className="flex gap-4">
              <div className="flex-1">
                <Label className="text-[var(--card-headline)]">
                  Icon Library
                </Label>
                <Select value={selectedLib} onValueChange={setSelectedLib}>
                  <SelectTrigger className="bg-[var(--input-background)] border-[var(--input-border-color)] text-[var(--input-text)]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--card-background)] border-[var(--card-border-color)]">
                    {Object.entries(iconLibraries).map(([key, lib]) => (
                      <SelectItem
                        key={key}
                        value={key}
                        className="text-[var(--card-headline)]"
                      >
                        {lib.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Search */}
              <div className="flex-1">
                <Label className="text-[var(--card-headline)]">
                  Search Icons
                </Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--paragraph)]" />
                  <Input
                    placeholder="Search icons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-[var(--input-background)] border-[var(--input-border-color)] text-[var(--input-text)]"
                  />
                </div>
              </div>
            </div>

            {/* Popular Social Icons */}
            {!searchTerm && (
              <div>
                <Label className="text-[var(--card-headline)] mb-3 block">
                  Popular Social Media Icons
                </Label>
                <div className="grid grid-cols-8 gap-2 mb-4">
                  {popularSocialIcons.map((item) => (
                    <Button
                      key={item.icon}
                      type="button"
                      variant="outline"
                      className="h-12 w-12 p-0 border-[var(--input-border-color)] hover:bg-[var(--card-hover)]"
                      onClick={() => handleIconSelect(item.icon)}
                      title={item.name}
                    >
                      {getIconComponent(item.icon, item.library)}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Icon Grid */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label className="text-[var(--card-headline)]">
                  {searchTerm
                    ? `Search Results`
                    : `All ${iconLibraries[selectedLib as keyof typeof iconLibraries]?.name} Icons`}
                </Label>
                <Badge variant="secondary" className="text-xs">
                  {getFilteredIcons().length} icons
                </Badge>
              </div>

              <div className="max-h-96 overflow-y-auto border border-[var(--card-border-color)] rounded-md p-4">
                <div className="grid grid-cols-8 gap-2">
                  {getFilteredIcons().map((iconName) => (
                    <Button
                      key={iconName}
                      type="button"
                      variant="outline"
                      className={`h-12 w-12 p-0 border-[var(--input-border-color)] hover:bg-[var(--card-hover)] ${
                        selectedIcon === iconName &&
                        selectedLibrary === selectedLib
                          ? "bg-[var(--button)] text-[var(--button-text)]"
                          : ""
                      }`}
                      onClick={() => handleIconSelect(iconName)}
                      title={iconName}
                    >
                      {getIconComponent(iconName, selectedLib)}
                    </Button>
                  ))}
                </div>

                {getFilteredIcons().length === 0 && (
                  <div className="text-center py-8 text-[var(--paragraph)]">
                    <Palette className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p>No icons found matching "{searchTerm}"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
