import { Card } from "./Card";
import {Hand } from "./Hand";
import {useSetup } from "../hooks/useSetup";

export const CardGrid =(props) => {
    console.log("CardGrid - Child3");

     return(
      <>
      {/* {karutaLists.map((list) =>{ */}
      {props.karutaLists.map((list) =>{
        return(
          <li 
            className ="relative flex justify-center items-center aspect-square"
            key={list.id} >
            {/* {props.isAnswered ? (
              <Card
                src={list.answer} 
                id ={list.id}
                />
               ):( */}
              <Card
              //const Card用
                src={list.answer} 
                id ={list.id}
                IsAnswered={props.IsAnswered}
                //handleClick用(useState)
                basicLists={props.basicLists}
                currentTurn={props.currentTurn}
                score={props.score}
                setIsAnswered={props.setIsAnswered}
                setIsPopup={props.setIsPopup}
                setScore={props.setScore}
                setIsScored={props.setIsScored}
                //handleClick用(関数実行)
                stopTimer={props.stopTimer}
                playKouka={props.playKouka}
                placeHand={props.placeHand}
                placeHand={props.placeHand}
                pcPlayer={props.pcPlayer}
               
                // onClick={() =>props.handleClick()}
              />
               {/* )}  */}
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