import { Header } from "../Header";
import { SideBarItem } from "../SideBarItem";
import { Container } from "./styles";

export function SideBar() {
  return (
    <>
      <Header />
      <Container>
        <SideBarItem title="Listar" />
        <SideBarItem title="Criar" />
      </Container>
    </>
  )
}