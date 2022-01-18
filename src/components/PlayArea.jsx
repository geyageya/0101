// import {memo} from "react";
import { MiniArea } from "./MiniArea";
import { ListCards } from "./ListCards";
import { useSetup } from "../hooks/useSetup";

export const PlayArea =(props) => {
    console.log("PlayArea - Child1");


    const {area} =useSetup

    let backgroundImage="";

{switch(area){
  case "Asia":
    backgroundImage="url(../images/worldmap.png)";
    break
  case "Europe":
    backgroundImage="url(../images/tatami-1.png)" ;
  break
  case "Africa":
    backgroundImage="url(../images/tatami-1.png)" ;
  break
  case "Americas":
    backgroundImage="url(../images/tatami-1.png)" ;
  break
  case "Oceania":
    backgroundImage="url(../images/tatami-1.png)" ;
  break

  case "World":
    backgroundImage="url(../images/worldmap2.png)"; 
  break

  default: //Worldに同じ
    backgroundImage="url(../images/tatami-1.png)";

  }
}//switch
    const playArea = {
   
      //差し込み用(props)
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: props.backgroundImage, 
    }
    return(
      <main 
        // className ="h-[454px] md:h-[630px] lg:h-[520px] bg-sky-100 mx-auto relative flex justify-center bg-contain bg-no-repeat bg-[url('https://karuta2020.tokyo/wp-content/uploads/gallery/2106krt_001_c.jpg')]"
        className ={`h-[454px] md:h-[630px] lg:h-[520px] bg-sky-100 mx-auto relative flex justify-center bg-cover bg-no-repeat ${backgroundImage} `}
        style={playArea}
        >
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
          // isScored={isScored}
          currentTurn={props.currentTurn}
         
        />
        {/* PC用 */}
        <MiniArea
          miniArray = {props.miniCardPc} 
          tailwind="top-0 left-0 items-start"
          // isScored = {isScored}
          currentTurn={props.currentTurn}
        />
        {/* items-start, items-end 札を上下線にそって配列。外側が直線、内側が凸凹*/}
        </main>
      )
  };