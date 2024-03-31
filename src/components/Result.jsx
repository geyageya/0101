import React from "react";
// import {memo} from "react";
import { WindowBtn } from "./WindowBtn";

export const Result = (props) => {
  console.log("Result - Child2");

  //次のゲーム
  const newGame = () => {
    window.location.reload();
  };

  return (
    <div className="absolute top-[200px] w-[200px] left-0 right-0 mx-auto  p-5 border-2  rounded-md text-center bg-gray-100 shadow-md">
      {props.score > props.basicLists.length * 0.5 && (
        <>
          <p className="text-lg md:text-xl">You won!勝利</p>
          <img
            className="w-48 mx-auto my-5"
            alt="prize"
            src="../images/gold.png"
          />
        </>
      )}
      {props.score === props.basicLists.length * 0.5 && (
        <p className="text-lg md:text-xl">Draw 同点
        </p>
      )}
      {props.score < props.basicLists.length * 0.5 && (
        <p className="text-lg md:text-xl">You lost! 負け!</p>
      )}

      <p className="my-3 text-base">You got({props.score})cards. {props.score}枚ゲット</p>
      <WindowBtn onClick={() => newGame()} windowBtnMsg="Play again? もう一回" />
    </div>
  );
}; //<Result/>----------------------------------------------------------------
