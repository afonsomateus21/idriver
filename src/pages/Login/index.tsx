import { Header } from "../../components/Header";
import { SignIn } from "../../components/SignIn";
import { Container } from "./styles";

export function Login() {
  return (
    <>
      <Header />
      <Container>
        <SignIn />
      </Container>
    </>
  );
}