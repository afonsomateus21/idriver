import { useEffect, useState } from "react";
import { DriverInfo } from "../../components/DriverInfo";
import { SideBar } from "../../components/SideBar";
import { api } from "../../services/api";
import { Container } from "./styles";

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

export function Home() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    api.get('drivers')
      .then((response) => {
        setDrivers(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  },[]);

  console.log(drivers);

  return (
    <>
      <SideBar />
      <Container>
        {
          drivers.map((driver) => 
            <DriverInfo 
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
        }
      </Container>
    </>
  )
}