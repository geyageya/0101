import {CardGrid} from "./CardGrid";

export const ListCards =(props) =>{
    console.log("Child2 listCards レンダリング");
   
    return(
      <ul 
        className  ="absolute top-[88px] grid grid-cols-4 grid-rows-3 justify-center gap-1 px-1 md:top-[116px] lg:top-[108px] lg:grid-cols-6 lg:grid-rows-2 "
        >
        <CardGrid
          //const CardGrid用
          karutaLists={props.karutaLists}
          //handleClick用(useState)
          basicLists={props.basicLists}
          currentTurn={props.currentTurn}
          score={props.score}
          isAnswered = {props.isAnswered}
          setIsAnswered={props.setIsAnswered}
          setIsPopup={props.setIsPopup}
          setScore={props.setScore}
          setIsScored={props.setIsScored}
          //handleClick用(関数実行)
          stopTimer={props.stopTimer}
          playEffect={props.playEffect}
          placeHand={props.placeHand}
          pcPlayer={props.pcPlayer}
          // onClick={() =>props.handleClick()} 
        />
      </ul>
    )
  };