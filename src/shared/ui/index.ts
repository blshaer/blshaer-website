// UI Components Barrel Export
// This file provides a centralized export for all UI components

// Core UI Components
export { Button } from "./button";
export { Input } from "./input";
export { Label } from "./label";
export { Textarea } from "./textarea";
export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
export { Checkbox } from "./checkbox";
export { RadioGroup, RadioGroupItem } from "./radio-group";
export { Switch } from "./switch";

// Layout Components
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
export { Separator } from "./separator";
export { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

// Feedback Components
export { Badge } from "./badge";
export { Progress } from "./progress";
export { Skeleton } from "./skeleton";
export { Alert, AlertDescription, AlertTitle } from "./alert";
export { useToast, toast } from "./use-toast";

// Overlay Components
export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
export {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
export { Popover, PopoverContent, PopoverTrigger } from "./popover";
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

// Navigation Components
export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";

// Data Display Components
export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
export { Avatar, AvatarFallback, AvatarImage } from "./avatar";

// Custom Components
export { FileUpload } from "./file-upload";
export {
  CustomDialog,
  CustomDialogProvider,
  useDialog,
  showAlert,
  showConfirm,
  showPrompt,
} from "./custom-dialog";
export { OTPInput } from "./otp-input";
export { SecureBulkDelete } from "./secure-bulk-delete";
export {
  PageTransition,
  SlideTransition,
  FadeTransition,
} from "./page-transition";

// Animation Variants
export {
  staggerContainer,
  staggerItem,
  loadingVariants,
  modalVariants,
  backdropVariants,
  cardHoverVariants,
  buttonPressVariants,
  navLinkVariants,
  toastVariants,
  sidebarVariants,
  fieldFocusVariants,
  statusVariants,
} from "./page-transition";

// Types
// export type { FileUploadProps } from "./file-upload"; // TODO: Add proper types
// export type { OTPInputProps } from "./otp-input"; // TODO: Add proper types
// export type { SecureBulkDeleteProps } from "./secure-bulk-delete"; // TODO: Add proper types
