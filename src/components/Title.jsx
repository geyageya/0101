import React from "react";
import {memo} from "react";

//memo化の効果あり。一度しかレンダリングされていない
export const Title=memo((props)=>{
    console.log("Title - Child2");
    
    return(
      <h1 
        className ="p-1 mx-auto bg-red-200 text-2xl text-center md:w-[768px] md:p-3  md:bg-amber-300 lg:container lg:w-[1024px] lg:bg-lime-300 lg:text-3xl xl:container xl:w-[1280px] xl:bg-sky-500"
      >
         世界200ヶ国かるた!
        {/* {props.children} */}
      </h1>
    )
  });

 