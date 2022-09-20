import React, { useEffect, useState } from "react";
import { Flex, Block, Icon, Click, SelectInput } from "vcc-ui";
import { Car } from "./Car";
import data from "../../public/api/cars.json";
import CarInterface from "../Interfaces/CarInterface";

export const CarList: React.FC = () => {
  const newData: CarInterface[] = [...data];
  let [chunk, setChunk] = useState<CarInterface[]>([]);
  let [slide, setSlide] = useState(0);
  let [bodyType, setBodyType] = useState("");
  let bodyTypes = Array.from(
    new Set(newData.map((item: CarInterface) => item.bodyType))
  );

  useEffect(() => {
    updateSlider(bodyType);
  }, [slide, bodyType]);

  const updateSlider = (bodyType: string) => {
    let newChunk: any[] = [];
    let filteredList = newData.filter((car) => {
      if (car.bodyType === bodyType) {
        return car;
      }
    });
    if (filteredList.length > 0) {
      for (let i = 0; i < filteredList.length; i++) {
        if (undefChecker(filteredList, i)) {
          if (newChunk.length < filteredList.length) {
            newChunk.push(filteredList[i]);
          } else {
            newChunk.push(filteredList[i - filteredList.length]);
          }
        }
      }
    } else {
      for (let i = slide; i < slide + 4; i++) {
        if (undefChecker(newData, i)) {
          newChunk.push(newData[i]);
        } else {
          newChunk.push(newData[i - newData.length]);
        }
      }
    }
    setChunk(newChunk);
  };

  const undefChecker = (array: any[], i: number) => {
    if (array?.[i]) {
      return true;
    }
    return false;
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
      <Flex extend={{ width: "10vw" }}>
        <SelectInput
          label={"Body Type"}
          value={bodyType}
          onChange={(e) => {
            setBodyType(e.target.value);
          }}
        >
          {bodyTypes.map((type: string, index: number) => {
            return (
              <option value={type} key={index}>
                {type}
              </option>
            );
          })}
        </SelectInput>
      </Flex>
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
            {chunk.map((data: CarInterface, index: number) => {
              return <Car car={data} key={index}></Car>;
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
