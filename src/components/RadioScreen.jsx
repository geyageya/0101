import React from "react";
// import {memo} from "react";

import { Button } from "./Button"
import { RadioLang } from "./RadioLang";
import { RadioSpeed } from "./RadioSpeed";
import { RadioArea } from "./RadioArea";

//メモ化したが、効果なし
export const RadioScreen = (props)=>{
    console.log("RadioScreen - Child1");

  return(
    <div 
      className ="w-full container mx-auto p-5 bg-lime-100 md:p-10"
    >
      <h1 className ="text-2xl mb-4 text-center md:m-7 ">世界200ケ国かるた</h1>

      <RadioLang 
        setLanguage = {props.setLanguage}
        />
      <RadioArea 
        setArea ={props.setArea}
      />
      <RadioSpeed
        setSpeed = {props.setSpeed}
      />
      <Button 
        tailwind="bg-red-600 mt-10 text-white cursor-pointer transform hover:scale-110 transition-transform"
        onClick={props.onClick} 
      >
        札 を 並 べ る
      </Button>
    </div> 
  ) //return
}; //RadioScreen