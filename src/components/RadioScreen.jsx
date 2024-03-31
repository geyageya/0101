import React from "react";
// import {memo} from "react";



import { Button } from "./Button";
import { RadioLang } from "./RadioLang";
import { RadioSpeed } from "./RadioSpeed";
import { RadioArea } from "./RadioArea";

//メモ化したが、効果なし
export const RadioScreen = (props) => {
  console.log("RadioScreen - Child1");

  return (
    <div className="w-full container mx-auto p-5 bg-lime-100 md:p-10">
      <h1 className="text-2xl mb-4 text-center md:m-7 ">Play with 200 countries cards! 「世界200ケ国かるた」で遊ぼう</h1>
      <RadioLang setLanguage={props.setLanguage} />
      <RadioArea setArea={props.setArea} />
      <RadioSpeed setSpeed={props.setSpeed} />
      <Button
        tailwind="bg-red-600 mt-10 text-white cursor-pointer transform hover:scale-110 transition-transform"
        onClick={props.onClick}
      >
        Place Cards  札を並べよう
      </Button>
    </div>
  ); //return
}; //RadioScreen
