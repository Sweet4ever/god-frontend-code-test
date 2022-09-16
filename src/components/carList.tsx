import React from "react";
import { Flex, Block, Icon } from "vcc-ui";
import { Car } from "./Car";
import data from "../../public/api/cars.json";
import CarInterface from "../Interfaces/CarInterface";

export const CarList: React.FC = () => {
  const newData: CarInterface[] = [...data];

  return (
    <Flex
      id="hej"
      extend={{
        "flex-direction": "column",
        "align-items": "center",
        "align-self": "auto",
      }}
    >
      <Block
        extend={{
          display: "flex",
          "flex-direction": "column",
          "justify-content": "center",
          width: "80vw",
        }}
      >
        <Flex
          extend={{
            height: "500px",
            "flex-wrap": "wrap",
            "flex-direction": "row",
            "justify-content": "center",
            overflow: "hidden",
          }}
        >
          {newData.map((data) => (
            <Car key={data.id} car={data}></Car>
          ))}
        </Flex>
        <Flex
          extend={{
            "flex-direction": "row",
            "justify-content": "flex-end",
            paddingRight: "58.5px",
          }}
        >
          <Icon type="mediacircled-previous-32" />
          <Icon type="mediacircled-next-32" />
        </Flex>
      </Block>
    </Flex>
  );
};
