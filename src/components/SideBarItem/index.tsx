import { Container } from "./styles";

interface SideBarItemProps {
  title: string;
}

export function SideBarItem({ title } : SideBarItemProps) {
  return (
    <Container>
      { title }
    </Container>
  );
}