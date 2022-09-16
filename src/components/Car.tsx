import React from "react";
import { Block } from "vcc-ui";
import CarInterface from "../Interfaces/CarInterface";

export const Car: React.FC<{ car: CarInterface }> = ({ car }) => {
  return (
    <Block>
      <h2>{car.bodyType}</h2>
      <h1>{car.modelName}</h1>
      <h2>{car.modelType}</h2>
      <img src={car.imageUrl} alt={car.id} />
      <Block>
        <a href="">LEARN</a>
        <a href="">SHOP</a>
      </Block>
    </Block>
  );
};
