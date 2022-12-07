import { useNavigate } from "react-router-dom";
import { checkLoggedIn } from "../../auth/check-loggedIn";
import { logOut } from "../../auth/google-auth";
import { Container, Content } from "./styles";

export function Header() {
  const navigate = useNavigate();

  function handleLogOut() {
    logOut()
      .then(() => {
        navigate('/', { replace: true })
      });
  }

  return (
    <Container>
      <Content>
        <h1>IDriver</h1>

        {
          checkLoggedIn() ? 
            <button onClick={handleLogOut}>
              Log Out
            </button> 
          : <div></div>
        }
      </Content>
    </Container>
  );
}