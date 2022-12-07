import { Link } from "react-router-dom";
import { Container } from "./styles";

interface SideBarItemProps {
  title: string;
  path: string; 
}

export function SideBarItem({ title, path } : SideBarItemProps) {
  return (
    <Container>
      <Link to={path}>
        { title }
      </Link>
    </Container>
  );
}