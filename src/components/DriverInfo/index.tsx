import { SubmitHandler, useForm } from "react-hook-form";
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
  const { register, handleSubmit } = useForm<DriverInfoProps>();

  const onSubmit: SubmitHandler<DriverInfoProps> = async data => {
  }

  return (
    <Container>
      <h1>{name}</h1>
      

      <form>
        <div>
          <label htmlFor="cnh">Número da CNH</label>
          <input value={cnh} placeholder="Digite o número da sua CNH" {...register("cnh")} />
        </div>

        <div>
          <label htmlFor="name">Nome</label>
          <input value={name} placeholder="Digite seu nome" {...register("name")} />
        </div>
        
        <div>
          <label htmlFor="address">Endereço</label>
          <input value={address} placeholder="Digite o seu endereço" {...register("address")} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input value={email} placeholder="Digite o seu email" type="email" {...register("email")} />
        </div>

        <div>
          <label htmlFor="phone">Número do telefone</label>
          <input value={phone} placeholder="Digite seu telefone" {...register("phone")} />
        </div>

        <div>
          <label htmlFor="licensePlate">Placa do Carro</label>
          <input value={licensePlate} placeholder="Digite o número da sua placa" {...register("licensePlate")} />
        </div>

        <div>
          <label htmlFor="model">Modelo do Carro</label>
          <input value={carMaker} placeholder="Digite o modelo do seu carro" {...register("model")} />
        </div>

        <div>
          <label htmlFor="year">Ano do Carro</label>
          <input value={year} placeholder="Digite o ano do seu carro" {...register("year")} />
        </div>

        <div>
          <label htmlFor="carMaker">Fabricante</label>
          <input value={carMaker} placeholder="Digite o fabricante do seu carro" {...register("carMaker")} />
        </div>
      </form>

      <ButtonContainer>
        <ActionButton buttonTitle="editar" onClick={() => {}} />
        <ActionButton buttonTitle="apagar" onClick={() => {}} />
      </ButtonContainer>
    </Container>
  );
}
