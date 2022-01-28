import React from "react";
// import {memo} from "react";

//メモ化したが、効果なし
export const RadioBtn =(props) => {
    console.log("RadioBtn - Child2");
  return(
    <div
     className ="">
      <input 
        type="radio" 
        id={props.id}
        name={props.name} 
        value={props.value}
        onChange={props.onChange}
        className = "hidden peer"
      />
      <label 
        htmlFor={props.htmlFor}
        className="border-2 rounded-2xl cursor-pointer border-gray-400 p-2 hover:bg-red-200 peer-checked:bg-green-200"
      >
        {props.text}
      </label>
    </div>
  ) //return
};