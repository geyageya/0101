import React from "react";
import { Card } from "./Card";
import {Hand } from "./Hand";

export const CardGrid =(props) => {
    console.log("CardGrid - Child3");

  return(
  <>
  {props.karutaLists.map((list) =>{
    return(
      <li 
        className ="relative flex justify-center items-center aspect-square"
        key={list.id} >

        {props.card}

        <Card
          //Card（絵札の反応制御）--Mainから
          isAnswered = {props.isAnswered}
          onClick={props.onClick}
          //Card --CardGridから
          src={list.answer} 
          id ={list.id}// 
        /> 

        <Hand
          src={list.hand}
        />
        {/* PC用 */}
        <Hand
          src={list.handPc}
        /> 
      </li> 
    )
  })}
  </>
  )
  };