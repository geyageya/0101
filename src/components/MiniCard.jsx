import React from "react";
// import {memo} from "react";

/* ミニ絵札*/
//memo化効果なし（次ボタンを押した後一回表示されるのみ）
export const MiniCard =(props) => {
    console.log("MiniCard - Child3");
    
    return(
      <img 
        className  ="max-w-[40px] max-h-[40px] md:max-w-[50px] md:max-h-[50px] lg:max-w-[70px] lg:max-h-[70px] "
        alt="miniCard" 
        src={props.src} 
      />
    )
  };