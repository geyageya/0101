// import {memo} from "react";
import { MiniArea } from "./MiniArea";
import { ListCards } from "./ListCards";

export const PlayArea =(props) => {
    console.log("Child1 PlayAreaレンダリング");
    const playArea = {
      height: "750px",
      margin: "0 auto",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      /* flexで絵札一覧を中央に配置 */
      display:"flex",
      justifyContent: "center",
      position: "relative",
      //差し込み用(props)
      backgroundImage: props.backgroundImage, 
    }
    return(
      <main 
        className  =" sm: w-640 md:w-750 flex relative justify-center "
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
          playEffect={props.playEffect}
          placeHand={props.placeHand}
          pcPlayer={props.pcPlayer}
          // onClick={() =>props.handleClick()} 
        />
        {/* player用 */}
        <MiniArea
          miniArray = {props.miniCard} 
          bottom = "0px"
          left ="0px"
        />
        {/* PC用 */}
        <MiniArea
          miniArray = {props.miniCardPc} 
          top = "15px"
          left ="0px"
        />
        </main>
      )
  };