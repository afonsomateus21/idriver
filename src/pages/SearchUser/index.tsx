import { SideBar } from "../../components/SideBar";
import { Container } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { DriverInfo } from "../../components/DriverInfo";

{/* <DriverInfo 
                name={driver.name}
                cnh={driver.cnh}
                address={driver.address}
                email={driver.email}
                phone={driver.phone}
                licensePlate={driver.licensePlate}
                model={driver.model}
                year={driver.year}
                carMaker={driver.carMaker}
              /> */}

type InputType = {
  search: string;
}

export function SearchUser() {
  const { register, handleSubmit } = useForm<InputType>();
  const onSubmit: SubmitHandler<InputType> = async data => {
    console.log(register('search'))
  }
  
  return (
    <>
      <SideBar />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' />
          <button type="submit">Pesquisar</button>
        </form>

        <DriverInfo 
          name="Afonso"
          cnh="00000"
          address="josé vilar"
          email="teste@gmail.com"
          phone="8591212121"
          licensePlate="aaa-9999"
          model="celta"
          year="2013"
          carMaker="Chevrolet"
        />
      </Container>
    </>
  );
}