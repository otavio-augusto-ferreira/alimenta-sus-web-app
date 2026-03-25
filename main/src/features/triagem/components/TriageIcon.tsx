import {
  Apple,
  BadgeInfo,
  Droplets,
  HeartPulse,
  MoonStar,
  ShieldAlert,
  Users,
  Utensils,
} from "lucide-react";

type TriageIconProps = {
  name: string;
  className?: string;
};

const iconMap = {
  badge: BadgeInfo,
  utensils: Utensils,
  apple: Apple,
  droplets: Droplets,
  "shield-alert": ShieldAlert,
  users: Users,
  "moon-star": MoonStar,
  "heart-pulse": HeartPulse,
};

export function TriageIcon({ name, className }: TriageIconProps) {
  const Icon = iconMap[name as keyof typeof iconMap] ?? BadgeInfo;

  return <Icon className={className} />;
}
