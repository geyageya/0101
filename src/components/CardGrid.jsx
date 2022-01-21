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
        
        <Card
          //Card --CardGridから
          src={list.answer} 
          id ={list.id}// 
          //Card（絵札の反応制御）--Mainから
          isAnswered = {props.isAnswered}
          //Card-handleClick用(useState) -Mainから
          basicLists={props.basicLists}
          currentTurn={props.currentTurn}
          setIsAnswered={props.setIsAnswered}
          setIsPopup={props.setIsPopup}
          setIsScored={props.setIsScored}
          score={props.score}
          setScore={props.setScore}
          //Card-handleClick用(関数実行) -Mainから
          pcPlayer={props.pcPlayer}
          placeHand={props.placeHand}
          playKouka={props.playKouka}
          stopTimer={props.stopTimer}
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