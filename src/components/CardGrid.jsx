import {memo} from "react";
import { Card } from "./Card";
import {Hand } from "./Hand";

export const CardGrid =memo((props) => {
    console.log("Child3 CardGrid レンダリング");
  
     return(
      <>
      {props.karutaLists.map((list) =>{
        return(
          <li 
            className ="relative flex justify-center items-center aspect-square"
            // style={cardGrid} 
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
  });