import React from "react";
// import {memo} from "react";

//memo化効果なし。札を取る度に2度レンダリング）
export const WindowBtn = (props) => {
  console.log("WindowBtn - Child3");

  return (
    <div>
      <button
        className="w-32 p-2 my-5 bg-sky-500 text-white rounded-md cursor-pointer hover:bg-sky-600 transform hover:scale-105 transition-transform"
        onClick={props.onClick}
      >
        {props.windowBtnMsg}
      </button>
    </div>
  );
};
