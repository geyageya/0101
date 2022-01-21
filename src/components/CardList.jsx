import {CardGrid} from "./CardGrid";

export const CardList =(props) =>{
    console.log("listCards - Child2");
   
    return(
      <ul 
        className  ="absolute top-[88px] grid grid-cols-4 grid-rows-3 justify-center gap-1 px-1 md:top-[116px] lg:top-[108px] lg:grid-cols-6 lg:grid-rows-2 "
        >
        <CardGrid
          //CardGrid(map関数) --Mainから
          karutaLists={props.karutaLists} 
          //Card（絵札の反応制御） --Mainから
          isAnswered = {props.isAnswered}
          //Card-handleClick用(useState)--Mainから
          basicLists={props.basicLists}
          currentTurn={props.currentTurn}
          setIsAnswered={props.setIsAnswered}
          setIsPopup={props.setIsPopup}
          setIsScored={props.setIsScored}
          score={props.score}
          setScore={props.setScore}
          //Card-handleClick用(関数実行)--Mainから
          pcPlayer={props.pcPlayer}
          placeHand={props.placeHand}
          playKouka={props.playKouka}
          stopTimer={props.stopTimer}
        />
      </ul>
    )
  };