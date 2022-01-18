import {memo} from "react";

//memo化の効果あり。memo化しないと札を取る度に、数回不要なレンダリングされる
export const ClueBox =memo((props) => {
    console.log("ClueBox - Child1");

    return(
      <div 
      >
        <div
          className="w-[370px] h-[50px] mx-auto pl-1 mb-1 border rounded-md border-sky-500 md:w-[500px] md:text-lg lg:w-[800px] lg:text-2xl  "
        >
          {props.currentText}
          {/* 読句：{props.text} */}
        </div>
        
      </div>
    )
  });