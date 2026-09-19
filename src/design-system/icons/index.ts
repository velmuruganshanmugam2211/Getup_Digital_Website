/**
 * GETUP DESIGN SYSTEM (GDS) v1.0
 * Standardized Icon System (Lucide React)
 * Strict sizing: 12, 16, 18, 20, 24, 32, 40, 48
 */

import React from 'react';
import type { LucideIcon, LucideProps } from 'lucide-react';

export const iconSizes = {
  12: 12,
  16: 16,
  18: 18,
  20: 20,
  24: 24,
  32: 32,
  40: 40,
  48: 48,
} as const;

export type IconSize = keyof typeof iconSizes;

export interface GdsIconProps extends Omit<LucideProps, 'size'> {
  icon: LucideIcon;
  size?: IconSize;
  className?: string;
}

export const Icon: React.FC<GdsIconProps> = ({
  icon: Component,
  size = 20,
  className = '',
  ...props
}) => {
  const pixelSize = iconSizes[size] || 20;
  return React.createElement(Component, { size: pixelSize, className, ...props });
};

// Direct re-exports of standard Lucide icons used across Getup ecosystem
export {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Check,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
  X,
  Plus,
  Minus,
  Search,
  Menu,
  Sparkles,
  Zap,
  TrendingUp,
  Shield,
  ShieldCheck,
  Star,
  Users,
  Eye,
  Camera,
  Image as ImageIcon,
  Layers,
  Layout,
  ExternalLink,
  Copy,
  Download,
  Share2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Settings,
  User,
  LogOut,
  Moon,
  Sun,
  Laptop,
  Folder,
  FileText,
  Trash2,
  Edit,
  Filter,
  SlidersHorizontal,
  RefreshCw,
  Loader2,
  Play,
  Maximize2,
  Minimize2,
  CheckSquare,
  Square,
  CircleDot,
  Circle,
} from 'lucide-react';
