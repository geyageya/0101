import React from "react";
import { memo } from "react";
import { MiniCard } from "./MiniCard";

//memo化の効果あり。memo化しないと札を取る度に、数回不要なレンダリングされる
export const MiniArea = memo((props) => {
  console.log("MiniArea - Child2");

  return (
    <ul
      className={`absolute mx-auto left-0 right-0 w-[372px] px-1 flex flex-wrap justify-start gap-1 ${props.tailwind} md:w-[532px] lg:w-[920px]`}
    >
      {props.miniList.map((picture) => {
        return (
          <li key={picture}>
            <MiniCard
              //MiniCard用--MiniAreaから
              src={picture}
            />
          </li>
        );
      })}
    </ul>
  );
});
