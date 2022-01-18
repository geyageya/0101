// import {useState,memo} from "react";
import { WindowBtn } from "./WindowBtn";

export const Popup = (props) => {
    console.log("Popup - Child2");

    return(
      <div 
      className = "absolute top-[200px] w-[220px] left-0 right-0 mx-auto p-5 border-2 rounded-md text-center bg-gray-100 shadow-md"
      > 
        <p 
        className = " text-red-600 text-xl md:text-2xl"     
        >
          {props.popupMsg}
        </p>
      <img 
        className ="max-w-[150px] mx-auto"
        alt="efuda" 
        src={props.basicLists[props.currentTurn].answer} 
      />
      <p>
        {/* {props.basicLists[props.currentTurn].subject}  */}
        {/* 日本語 */}
        {props.basicLists[props.currentTurn].daizai}  
      </p> 
      <p>
        {/* {props.basicLists[props.currentTurn].country}  */}
        {/* 日本語 */}
        {props.basicLists[props.currentTurn].kuni} 
      </p> 
      <img 
        className ="mx-auto"
        alt ="flag" 
        src={props.basicLists[props.currentTurn].flag} 
      />  
      
      {props.currentTurn<props.basicLists.length-3 &&
        <WindowBtn 
          onClick={props.onClick} 
          windowBtnMsg="次" 
        />
      } 
      {props.currentTurn===props.basicLists.length-3 &&
        <WindowBtn 
          onClick={props.onClick}  
          windowBtnMsg="次取ると、最後の札がもらえます" 
        />
      }
      {props.currentTurn===props.basicLists.length-2 &&
        <WindowBtn 
          onClick={props.onClick} 
          windowBtnMsg="結果を見る" 
        />
      } 
      </div>
    )
  }; //<Popup/>---------------------------------------------------------
  