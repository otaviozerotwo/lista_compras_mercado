import { type LucideIcon, type LucideProps } from "lucide-react";

interface EmptyListProps {
  icon: LucideIcon;
  iconProps: LucideProps;
  label: string;
}

export function EmptyList({ icon: Icon, iconProps, label }: EmptyListProps) {
  return (
    <div className="flex flex-col items-center text-gray-400">
      <Icon {...iconProps} />
      <p className="font-semibold text-2xl">{label}</p>
    </div>
  );
}