import React from "react";
import { Block, Link, Text } from "vcc-ui";
import CarInterface from "../Interfaces/CarInterface";
import Image from "next/image";

export const Car: React.FC<{ car: CarInterface }> = ({ car }) => {
  return (
    <Block
      extend={{
        margin: "1vw",
        width: "280px",
        height: "400px",
      }}
    >
      <Text extend={{ color: "grey" }} variant={"bates"}>
        {car.bodyType.toUpperCase()}
      </Text>
      <Text variant={"hillary"} subStyle={"emphasis"}>
        {car.modelName}
      </Text>
      <Text extend={{ color: "grey" }} variant={"bates"}>
        {car.modelType}
      </Text>
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
