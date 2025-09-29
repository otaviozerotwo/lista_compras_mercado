import { Container } from "./container";
import { Card, CardContent } from "./ui/card";

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
              <CardContent>
                {item.text}
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  );
}