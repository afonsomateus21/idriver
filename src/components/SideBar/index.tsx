import { SideBarItem } from "../SideBarItem";
import { Container } from "./styles";

export function SideBar() {
  return (
    <Container>
      <SideBarItem title="Listar" path="/users" />
      <SideBarItem title="Criar" path="/register-user" />
    </Container>
  )
}