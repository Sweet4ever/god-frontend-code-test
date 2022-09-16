import React from "react";
import { Block } from "vcc-ui";
import { Car } from "./Car";
import data from "../../public/api/cars.json";
import CarInterface from "../Interfaces/CarInterface";

export const CarList: React.FC = () => {
  const newData: CarInterface[] = [...data];

  return (
    <Block>
      {newData.map((data) => (
        <Car key={data.id} car={data}></Car>
      ))}
    </Block>
  );
};
