import React from "react";
import { Block, Link } from "vcc-ui";
import CarInterface from "../Interfaces/CarInterface";
import Image from "next/image";

export const Car: React.FC<{ car: CarInterface }> = ({ car }) => {
  return (
    <Block
      extend={{
        margin: "1vw",
        width: "280px",
        height: "500px",
      }}
    >
      <h2>{car.bodyType}</h2>
      <h1>{car.modelName}</h1>
      <h2>{car.modelType}</h2>
      <Image
        src={car.imageUrl}
        alt={car.id}
        width={800}
        height={600}
        layout="responsive"
      />
      <Block
        extend={{
          display: "flex",
          "justify-content": "space-around",
          "align-items": "center",
          marginTop: "4vh",
        }}
      >
        <Block
          extend={{
            display: "flex",
            "align-items": "center",
          }}
        >
          <Link href={`/learn/${car.id}`} arrow="right">
            LEARN
          </Link>
        </Block>
        <Link href={`/shop/${car.id}`} arrow="right">
          SHOP
        </Link>
      </Block>
    </Block>
  );
};
