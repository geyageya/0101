import {memo} from "react";
import { MiniArea } from "./MiniArea";
import { ListCards } from "./ListCards";

export const PlayArea =memo((props) => {
    console.log("Child1 PlayAreaレンダリング");
    const playArea = {
   
      //差し込み用(props)
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // backgroundImage: props.backgroundImage, 
    }
    return(
      <main 
        className ={`h-[454px] md:h-[630px] lg:h-[520px] bg-sky-100 mx-auto relative flex justify-center bg-cover bg-no-repeat ${props.backgroundImage} `}
        style={playArea}>
        <ListCards
          //const CardGrid用
          karutaLists={props.karutaLists}
          
          //handleClick用(useState)
          isAnswered = {props.isAnswered}
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
          onClick={() =>props.handleClick()} 
        />
        {/* player用 */}
        <MiniArea
          miniArray = {props.miniCard} 
          tailwind="bottom-0 left-0 items-end"
         
        />
        {/* PC用 */}
        <MiniArea
          miniArray = {props.miniCardPc} 
          tailwind="top-0 left-0 items-start"
        />
        {/* items-start, items-end 札を上下線にそって配列。外側が直線、内側が凸凹*/}
        </main>
      )
  });