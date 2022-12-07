import { SideBarItem } from "../SideBarItem";
import { Container } from "./styles";
import { IoIosCreate } from 'react-icons/io';
import { AiTwotoneEdit } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { logOut } from "../../auth/google-auth";
import { useNavigate } from "react-router-dom";

export function SideBar() {
  const navigate = useNavigate();

  function handleLogOut() {
    logOut()
      .then(() => {
        navigate('/', { replace: true })
      });
  }

  return (
    <Container>
      <SideBarItem Icon={IoIosCreate} title="Listar" path="/users" />
      <SideBarItem Icon={AiTwotoneEdit} title="Criar" path="/register-user" />
      <SideBarItem Icon={BsSearch} title="Pesquisar" path="/search-user" />
      <button onClick={handleLogOut}>
        Sair
      </button>
    </Container>
  )
}