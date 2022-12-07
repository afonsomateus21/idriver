import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { Container } from "./styles";

interface SideBarItemProps {
  title: string;
  path: string;
  Icon: IconType; 
}

export function SideBarItem({ title, path, Icon } : SideBarItemProps) {
  return (
    <Container>
      <Icon color="#fff" />
      <Link to={path}>
        { title }
      </Link>
    </Container>
  );
}