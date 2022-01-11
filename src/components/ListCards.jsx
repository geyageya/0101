import {CardGrid} from "./CardGrid";

export const ListCards =(props) =>{
    console.log("Child2 listCards レンダリング");
    /* 絵札エリア(Grid) */
    // const listCards = {
      // width: "500px",
      // height: "650px",
      // margin: "50px auto 10px",
      /*子要素の絵札をgrid制御*/
      // display: "grid",
    // gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr)",
      // gridTemplateColumns: "repeat(8, 100px)",
      // gridTemplateRows: "repeat(6, 100px)",
      // gridTemplateColumns: "repeat(5, 160px)",
      // gridTemplateRows: "repeat(3, 160px)",
      // justifyCcontent: "center",
      // alignContent: "center",
      // justifyItems: "center",
      // alignItems: "start",
      /* 位置(ShowEfudaが基点） */
    //   top: "0px",
    //   position: "absolute",
    // }
    return(
      <ul 
        className  ="absolute top-[60px] grid grid-cols-4 grid-rows-3 justify-center gap-1 mt-5 px-1 md:top-[95px] lg:top-[90px] lg:grid-cols-6 lg:grid-rows-2 "
        // style={listCards}
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