import { Card } from "./Card";
import {Hand } from "./Hand";

export const CardGrid =(props) => {
    console.log("Child3 CardGrid レンダリング");
    // const cardGrid = {
    //   /*子要素のimg画像を中央に配置*/
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   position: "relative",
    // }
     return(
      <>
      {props.karutaLists.map((list) =>{
        return(
          <li 
            className =" max-w-[110px] max-h-[110px] relative flex justify-center items-center laptop:max-w-[150px] laptop:max-h-[150px]"
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
                playEffect={props.playEffect}
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