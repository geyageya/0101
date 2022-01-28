import React from "react";
export const CardList =(props) =>{
    console.log("listCards - Child2");
   
    return(
      <ul 
        className  ="absolute top-[88px] grid grid-cols-4 grid-rows-3 justify-center gap-1 px-1 md:top-[116px] lg:top-[108px] lg:grid-cols-6 lg:grid-rows-2 "
        >
          {props.cardGrid}
        {/* <CardGrid
          //CardGrid(map関数) --Mainから
          karutaLists={props.karutaLists} 
          //Card--Mainから
          isAnswered = {props.isAnswered}
          onClick={props.onClick}
        />  */}
      </ul>
    );
  };