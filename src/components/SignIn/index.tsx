import { Button } from "./styles";
import { FcGoogle } from 'react-icons/fc'
import { logIn } from "../../auth/google-auth";

export function SignIn() {
  return (
    <Button onClick={logIn}>
      <FcGoogle size={30} />
      <span>Entre com o Google</span>
    </Button>
  )
}