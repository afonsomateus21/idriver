import { DriverInfo } from "../../components/DriverInfo";
import { SideBar } from "../../components/SideBar";
import { Container } from "./styles";

export function Home() {
  return (
    <>
      <SideBar />
      <Container>
        <DriverInfo
          name="Afonso Mateus"
          cnh="000000"
          address="Rua "
          email="teste"
          phone="12321321"
          licensePlate="2123123"
          model="celta"
          year="2013"
          carMaker="Chevrolet"
        />

        <DriverInfo
          name="Afonso Mateus"
          cnh="000000"
          address="Rua "
          email="teste"
          phone="12321321"
          licensePlate="2123123"
          model="celta"
          year="2013"
          carMaker="Chevrolet"
        />
        
      </Container>
    </>
  )
}