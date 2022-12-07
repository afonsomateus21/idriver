import { SubmitHandler, useForm } from "react-hook-form";
import { SideBar } from "../../components/SideBar";
import { api } from "../../services/api";
import { Container, Content } from "./styles";

type InputsType = {
  cnh: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  licensePlate: string;
  model: string;
  year: string;
  carMaker: string;
}

export function UserRegister() {
  const { register, handleSubmit } = useForm<InputsType>();

  const onSubmit: SubmitHandler<InputsType> = async data => {
    const driver = {
      "cnh": data.cnh,
      "name": data.name,
      "address": data.address,
      "email": data.email,
      "phone": data.phone,
      "licensePlate": data.licensePlate
    }

    const car = {
      "licensePlate": data.licensePlate,
      "model": data.model,
      "year": data.year,
      "carMaker": data.carMaker
    }

    const responseDriver = await api.post('drivers', driver)

    const responseCar = await api.post('cars', car)

    return {
      responseDriver,
      responseCar
    }
  }

  return (
    <>
      <SideBar />
      <Container>
        <Content onSubmit={handleSubmit(onSubmit)}>
          <h1>Cadastrar Motorista</h1>

          <div>
            <label htmlFor="cnh">Número da CNH</label>
            <input placeholder="Digite o número da sua CNH" {...register("cnh")} />
          </div>

          <div>
            <label htmlFor="name">Nome</label>
            <input placeholder="Digite seu nome" {...register("name")} />
          </div>
          
          <div>
            <label htmlFor="address">Endereço</label>
            <input placeholder="Digite o seu endereço" {...register("address")} />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input placeholder="Digite o seu email" type="email" {...register("email")} />
          </div>

          <div>
            <label htmlFor="phone">Número do telefone</label>
            <input placeholder="Digite seu telefone" {...register("phone")} />
          </div>

          <div>
            <label htmlFor="licensePlate">Placa do Carro</label>
            <input placeholder="Digite o número da sua placa" {...register("licensePlate")} />
          </div>

          <div>
            <label htmlFor="model">Modelo do Carro</label>
            <input placeholder="Digite o modelo do seu carro" {...register("model")} />
          </div>

          <div>
            <label htmlFor="year">Ano do Carro</label>
            <input placeholder="Digite o ano do seu carro" {...register("year")} />
          </div>

          <div>
            <label htmlFor="carMaker">Fabricante</label>
            <input placeholder="Digite o fabricante do seu carro" {...register("carMaker")} />
          </div>

          <button type="submit">Enviar</button>
        </Content>
      </Container>
    </>
  );
}