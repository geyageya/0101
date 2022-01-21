// import {memo} from "react";
import { MiniArea } from "./MiniArea";
import { CardList } from "./CardList";

export const PlayArea =(props) => {
  console.log("PlayArea - Child1");

  let backgroundImage="";

    switch(props.language){
      case "japanese":
        backgroundImage="url(../images/tatami.png)";
        break
      case "hiragana":
        backgroundImage="url(../images/tatami.png)" ;
       break
      case "english":
        backgroundImage="url(../images/worldmap.png)" ;
       break
      default: //Englishに同じ
        backgroundImage="url(../images/worldmap.png)";
    }//switch

  const playArea = {
    //差し込み用(props)
    backgroundImage: backgroundImage
    //背景画像だけは、styleを書く必要があった。これが正しいか不明
  }
  return(
    <main 
      // className ="h-[454px] md:h-[630px] lg:h-[520px] bg-sky-100 mx-auto relative flex justify-center bg-contain bg-no-repeat bg-[url('https://karuta2020.tokyo/wp-content/uploads/gallery/2106krt_001_c.jpg')]"
      className ="h-[454px] bg-cover  bg-center bg-no-repeat md:h-[630px] lg:h-[520px] mx-auto relative flex justify-center  lg:bg-contain"
      // className ={`h-[454px] bg-cover  bg-center bg-no-repeat md:h-[630px] lg:h-[520px] mx-auto relative flex justify-center  lg:bg-contain ${props.backgroundImage} `}
      style={playArea}
      >
      <CardList
        //CardGrid用 --Mainから
        karutaLists={props.karutaLists}
       //Card用（絵札の反応制御）--Mainから
        isAnswered = {props.isAnswered}
        //Card-handleClick用(useState)  --Mainから
        basicLists={props.basicLists}
        currentTurn={props.currentTurn}
        setIsAnswered={props.setIsAnswered}
        setIsPopup={props.setIsPopup}
        setIsScored={props.setIsScored}
        score={props.score}
        setScore={props.setScore}
        //Card-handleClick用(関数実行)  --Mainから
        pcPlayer={props.pcPlayer}
        placeHand={props.placeHand}
        playKouka={props.playKouka}
        stopTimer={props.stopTimer}
      />
      {/* player用 */}
      <MiniArea
        miniArray = {props.miniCard} 
        tailwind="bottom-0 left-0 items-end"
        currentTurn={props.currentTurn}
      />
      {/* PC用 */}
      <MiniArea
        miniArray = {props.miniCardPc} 
        tailwind="top-0 left-0 items-start"
        currentTurn={props.currentTurn}
      />
      {/* items-start, items-end 札を上下線にそって配列。外側が直線、内側が凸凹*/}
      </main>
    )
  };