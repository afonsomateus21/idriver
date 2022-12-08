import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "../../services/api";
import { ActionButton } from "../ActionButton";
import { Container, ButtonContainer } from "./styles";

interface DriverInfoProps {
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

export function DriverInfo({ 
  name,
  cnh,
  address,
  email,
  phone,
  licensePlate,
  model,
  year,
  carMaker
 }: DriverInfoProps) {
  const { register, handleSubmit } = useForm<DriverInfoProps>({
    defaultValues: {
      name: name,
      cnh: cnh,
      address: address,
      email: email,
      phone: phone,
      licensePlate: licensePlate,
      model: model,
      year: year,
      carMaker: carMaker
    }
  });

  const onSubmit: SubmitHandler<DriverInfoProps> = async data => {
    const driver = {
      "cnh": data.cnh,
      "name": data.name,
      "address": data.address,
      "email": data.email,
      "phone": data.phone,
      "licensePlate": data.licensePlate,
      "model": data.model,
      "year": data.year,
      "carMaker": data.carMaker
    }

    const response = await api.patch(`drivers/${cnh}`, driver);

    return response.data;
  }

  async function deleteDriver() {
    console.log('entrou')
    return await api.delete(`drivers/${cnh}`);
  }

  return (
    <Container>
      <h1>{name}</h1>
      
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="cnh">Número da CNH</label>
          <input defaultValue={cnh} placeholder="Digite o número da sua CNH" {...register("cnh")} />
        </div>

        <div>
          <label htmlFor="name">Nome</label>
          <input defaultValue={name}  placeholder="Digite seu nome" {...register("name")} />
        </div>
        
        <div>
          <label htmlFor="address">Endereço</label>
          <input defaultValue={address} placeholder="Digite o seu endereço" {...register("address")} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input defaultValue={email} placeholder="Digite o seu email" type="email" {...register("email")} />
        </div>

        <div>
          <label htmlFor="phone">Número do telefone</label>
          <input defaultValue={phone} placeholder="Digite seu telefone" {...register("phone")} />
        </div>

        <div>
          <label htmlFor="licensePlate">Placa do Carro</label>
          <input defaultValue={licensePlate} placeholder="Digite o número da sua placa" {...register("licensePlate")} />
        </div>

        <div>
          <label htmlFor="model">Modelo do Carro</label>
          <input defaultValue={model} placeholder="Digite o modelo do seu carro" {...register("model")} />
        </div>

        <div>
          <label htmlFor="year">Ano do Carro</label>
          <input defaultValue={year} placeholder="Digite o ano do seu carro" {...register("year")} />
        </div>

        <div>
          <label htmlFor="carMaker">Fabricante</label>
          <input defaultValue={carMaker} placeholder="Digite o fabricante do seu carro" {...register("carMaker")} />
        </div>

        <ButtonContainer>
          <ActionButton buttonTitle="editar" type="submit" />
          <ActionButton buttonTitle="apagar" onClick={() => deleteDriver()} />
        </ButtonContainer>
      </form>
    </Container>
  );
}
