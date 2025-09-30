import { FilePenLine, Trash2 } from "lucide-react";
import { Container } from "./container";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

interface ItemProps {
  id: number;
  text: string;
}

interface ListItemProps {
  items: ItemProps[];
}

export function Item({ items }: ListItemProps) {
  return (
    <Container>
      <ul>
        {items.map((item: ItemProps) => (
          <li key={item.id} className="mb-3">
            <Card>
              <CardContent className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox className="h-5 w-5 rounded-full border-2 border-gray-300" />
                  {item.text}
                </div>
                <div className="flex gap-2 text-gray-600">
                  <button className="cursor-pointer">
                    <FilePenLine />
                  </button>
                  <button className="cursor-pointer">
                    <Trash2 />
                  </button>
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  );
}