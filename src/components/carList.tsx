import React, { useState } from "react";
import { Flex, Block, Icon, Click } from "vcc-ui";
import { Car } from "./Car";
import data from "../../public/api/cars.json";
import CarInterface from "../Interfaces/CarInterface";

export const CarList: React.FC = () => {
  const newData: CarInterface[] = [...data];
  let carChunks: CarInterface[][] = [];
  let chunk: CarInterface[] = [];
  let [slide, setSlide] = useState(0);

  for (let i = 0; i < newData.length; i++) {
    chunk.push(newData[i]);
    if (chunk.length === 4) {
      carChunks.push(chunk);
      chunk = [];
    }
  }
  const prevPage = () => {
    if (slide - 1 < 0) {
      setSlide(carChunks.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };
  const nextPage = () => {
    if (slide + 1 >= carChunks.length) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  return (
    <Flex
      id="1"
      extend={{
        "flex-direction": "column",
        "align-items": "center",
        "align-self": "auto",
      }}
    >
      <Block
        id="2"
        extend={{
          display: "flex",
          "flex-direction": "column",
          "justify-content": "center",
          width: "80vw",
        }}
      >
        <Flex
          id="3"
          extend={{
            height: "500px",
            "flex-wrap": "wrap",
            "flex-direction": "row",
            "justify-content": "center",
            overflow: "hidden",
          }}
        >
          {carChunks[slide].map((data) => {
            return <Car car={data} key={data.id}></Car>;
          })}
        </Flex>
        <Flex
          id="4"
          extend={{
            "flex-direction": "row",
            "justify-content": "flex-end",
            paddingRight: "58.5px",
          }}
        >
          <Click onClick={prevPage}>
            <Icon type="mediacircled-previous-32" />
          </Click>
          <Click onClick={nextPage}>
            <Icon type="mediacircled-next-32" />
          </Click>
        </Flex>
      </Block>
    </Flex>
  );
};
