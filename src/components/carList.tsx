import React, { useEffect, useState } from "react";
import { Flex, Block, Icon, Click } from "vcc-ui";
import { Car } from "./Car";
import data from "../../public/api/cars.json";
import CarInterface from "../Interfaces/CarInterface";

export const CarList: React.FC = () => {
  const newData: CarInterface[] = [...data];
  let [chunk, setChunk] = useState<CarInterface[]>([]);
  let [slide, setSlide] = useState(0);

  useEffect(() => {
    updateSlider();
  }, [slide]);

  const updateSlider = () => {
    let newChunk: any[] = [];
    newChunk.push(newData[undefChecker(newData, slide)]);
    newChunk.push(newData[undefChecker(newData, slide + 1)]);
    newChunk.push(newData[undefChecker(newData, slide + 2)]);
    newChunk.push(newData[undefChecker(newData, slide + 3)]);
    setChunk(newChunk);
  };

  const undefChecker = (array: any[], i: number) => {
    if (array[i] === undefined) {
      return i - array.length;
    } else {
      return i;
    }
  };

  const prevPage = () => {
    if (slide - 1 < 0) {
      setSlide(newData.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };
  const nextPage = () => {
    if (slide + 1 >= newData.length) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  return (
    <Flex
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
            "flex-direction": "row",
            "justify-content": "center",
          }}
        >
          {chunk.map((data: CarInterface) => {
            return <Car car={data} key={data.id}></Car>;
          })}
        </Flex>
        <Flex
          extend={{
            "flex-direction": "row",
            "justify-content": "flex-end",
            paddingRight: "58.5px",
            display: "none",
            fromL: { display: "flex" },
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
