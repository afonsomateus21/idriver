import { Button } from "./styles";
import { FcGoogle } from 'react-icons/fc'
import { logIn } from "../../auth/google-auth";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();

  function handleLogIn() {
    logIn()
      .then(() => {
        navigate('/users', { replace: true });
      })
      .catch(() => {
        navigate('/', { replace: true });
      })
  }
 
  return (
    <Button onClick={handleLogIn}>
      <FcGoogle size={30} />
      <span>Entre com o Google</span>
    </Button>
  );
}