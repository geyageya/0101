import {CardGrid} from "./CardGrid";

export const ListCards =(props) =>{
    console.log("Child2 listCards レンダリング");
    /* 絵札エリア(Grid) */
    const listCards = {
      width: "960px",
      height: "650px",
      margin: "50px auto 10px",
      /*子要素の絵札をgrid制御*/
      display: "grid",
    // gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr)",
      gridTemplateColumns: "repeat(8, 100px)",
      gridTemplateRows: "repeat(6, 100px)",
      // gridTemplateColumns: "repeat(5, 160px)",
      // gridTemplateRows: "repeat(3, 160px)",
      justifyCcontent: "center",
      alignContent: "center",
      justifyItems: "center",
      alignItems: "start",
      /* 位置(ShowEfudaが基点） */
      top: "0px",
      position: "absolute",
    }
    return(
      <ul style={listCards}>
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