import { Container } from "@/components/container";
import { type LucideIcon } from "lucide-react";

interface ListProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  countItemTextColor: string;
  countItemBgColor: string;
  countItem: number;
}

export function List({ title, icon: Icon, iconColor, countItemTextColor, countItemBgColor, countItem }: ListProps) {
  return (
    <Container>
      <div className="flex items-center gap-3 mb-4">
        <Icon color="#FFF" className={`${iconColor} rounded-full`} />
        <h2 className="font-semibold">{title}</h2>
        <span className={`${countItemTextColor} ${countItemBgColor} px-2 rounded-full`}>{countItem}</span>
      </div>
    </Container>
  );
}