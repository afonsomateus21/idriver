import { ActionButton } from "../ActionButton";
import { Container } from "./styles";

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
  return (
    <Container>
     <h1>Dados</h1>
     <span><strong>Nome:</strong> {name}</span>
     <span><strong>CNH:</strong> {cnh}</span>
     <span><strong>Endereço:</strong> {address}</span>
     <span><strong>Email:</strong> {email}</span>
     <span><strong>Telefone:</strong> {phone}</span>
     <span><strong>Placa:</strong> {licensePlate}</span>
     <span><strong>Modelo:</strong> {model}</span>
     <span><strong>Ano:</strong> {year}</span>
     <span><strong>Montadora:</strong> {carMaker}</span>

     <div>
       <ActionButton buttonTitle="editar" onClick={() => {}} />
       <ActionButton buttonTitle="apagar" onClick={() => {}} />
     </div>
    </Container>
  );
}
