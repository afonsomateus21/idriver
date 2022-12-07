import { SideBarItem } from "../SideBarItem";
import { Container } from "./styles";
import { IoIosCreate } from 'react-icons/io';
import { AiTwotoneEdit } from 'react-icons/ai';

export function SideBar() {
  return (
    <Container>
      <SideBarItem Icon={IoIosCreate} title="Listar" path="/users" />
      <SideBarItem Icon={AiTwotoneEdit} title="Criar" path="/register-user" />
    </Container>
  )
}