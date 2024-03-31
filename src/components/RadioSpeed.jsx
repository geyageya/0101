import React from "react";
// import {memo} from "react";
import { useKouka } from "../hooks/useKouka";
import { RadioBtn } from "./RadioBtn";

//メモ化したが、効果なし
export const RadioSpeed = (props) => {
  const { playKouka } = useKouka();

  const speedLevelOne = () => {
    props.setSpeed("levelOne");
    playKouka(7);
    // props.play(7)
  };

  const speedLevelTwo = () => {
    props.setSpeed("levelTwo");
    playKouka(7);
    // props.play(7)
  };
  const speedLevelThree = () => {
    props.setSpeed("levelThree");
    playKouka(7);
    // props.play(7)
  };
  return (
    <>
      <div className="bg-gray-300 my-8">Speed of Game  （まず「ゆっくり」からはじよう）</div>
      <div className="flex  m-1 gap-2 md:flex-wrap md:gap-6 md:m-5">
        <RadioBtn
          id="speedlevelOne"
          name="speed"
          value="speedlevelOne"
          htmlFor="speedlevelOne"
          text="Beginner（ゆっくり）"
          onChange={() => speedLevelOne()}
        />
        <RadioBtn
          id="speedlevelTwo"
          name="speed"
          value="speedlevelTwo"
          htmlFor="speedlevelTwo"
          text="Faster（少し速い）"
          onChange={() => speedLevelTwo()}
        />
        <RadioBtn
          id="speedlevelThree"
          name="speed"
          value="speedlevelThree"
          htmlFor="speedlevelThree"
          text="Fastest（もっと速い）"
          onChange={() => speedLevelThree()}
        />
      </div>
    </>
  );
};
