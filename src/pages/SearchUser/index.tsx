import { SideBar } from "../../components/SideBar";
import { Container, Content, Form } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { DriverInfo } from "../../components/DriverInfo";
import { api } from "../../services/api";
import { useState } from "react";

type InputType = {
  search: string;
}

type Driver = {
  name: string;
  cnh: string;
  address: string;
  email: string;
  phone: string;
  licensePlate: string;
  model: string;
  year: string;
  carMaker: string;
}

export function SearchUser() {
  const { register, handleSubmit } = useForm<InputType>();
  const [drivers, setDrivers] = useState<Driver[]>([]);

  const onSubmit: SubmitHandler<InputType> = async data => {
    const search = data.search;

    console.log(search)

    api.get(`drivers/name/${search}`)
      .then((response) => {
        setDrivers(response.data);
      })
      .catch((error) => {
        console.log(error)
      });
  }
  
  return (
    <>
      <SideBar />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' {...register("search")} />
          <button type="submit">Pesquisar</button>
        </Form>

        <Content>
          {
            drivers !== null ?
              drivers.map((driver) => 
                <DriverInfo 
                  key={driver.cnh}
                  name={driver.name}
                  cnh={driver.cnh}
                  address={driver.address}
                  email={driver.email}
                  phone={driver.phone}
                  licensePlate={driver.licensePlate}
                  model={driver.model}
                  year={driver.year}
                  carMaker={driver.carMaker}
                />
              )
            : 
              <div></div>
          }
        </Content>
      </Container>
    </>
  );
}