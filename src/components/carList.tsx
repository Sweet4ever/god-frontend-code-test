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
  const handleClick = (id: string) => {
    let newId = newData.findIndex((obj) => {
      return obj.id === id;
    });
    setSlide(newId);
  };

  return (
    <>
      <Flex
        extend={{
          "flex-direction": "column",
          "align-items": "center",
          "align-self": "auto",
          display: "none",
          fromL: { display: "flex" },
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
              height: "400px",
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
              width: "80vw",
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
      <Flex extend={{ "justify-content": "center" }}>
        <Flex
          extend={{
            width: "80vw",
            display: "flex",
            "justify-content": "center",
            "flex-direction": "row",
            overflow: "hidden",
            fromL: { display: " none" },
          }}
        >
          {<Car car={newData[slide]} key={newData[slide].id}></Car>}
        </Flex>
        <Flex
          extend={{
            width: "80vw",
            "flex-direction": "row",
            "justify-content": "center",
            fromL: { display: " none" },
          }}
        >
          {newData.map((data) => {
            return (
              <Click
                onClick={() => {
                  handleClick(data.id);
                }}
                key={data.id}
              >
                <label htmlFor={data.id}></label>
                <input
                  type="radio"
                  id={data.id}
                  name="cars"
                  checked={newData[slide].id === data.id ? true : false}
                ></input>
              </Click>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};
