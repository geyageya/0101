import {useState,useRef} from "react";
import {useGame} from "./useGame";
import { useKouka } from "./useKouka";


export const useLevel =() => {

  const {playKouka} = useKouka();

  const {setIsAnswered, setIsPopup, placeHandPc, placeHandPc2}=useGame();

  const [level, setLevel]= useState("default")
  const timerRef = useRef(null);                              //タイマー設定用  


//PcPlayer--------------------------------------
const startTimer = () => {
  switch (level){
    case "default":
      timerRef.current = setTimeout(() => {
      pcPlayer();
      }, 8000);
      setLevel("default")
      break

    case "levelOne":
      timerRef.current = setTimeout(() => {
        pcPlayer();
        }, 12000);
      break

    case "levelTwo":
      timerRef.current = setTimeout(() => {
        pcPlayer();
        }, 8000);
      break
    case "levelThree":
      timerRef.current = setTimeout(() => {
        pcPlayer();
        }, 5000);
      break
  
    default:
      timerRef.current = setTimeout(() => {
        pcPlayer();
        }, 8000);
  
  }//switch
}; //startTiemr


const stopTimer = () => {
  clearTimeout(timerRef.current);
  timerRef.current = null;
};

//timer2 (引数 newCurrentTurn)
//switch
const startTimer2 = (newCurrentTurn) => {
  switch (level){
    case "default":
      timerRef.current = setTimeout(() => {
        pcPlayer2(newCurrentTurn);
      }, 8000);
      setLevel("default")
      break

    case "levelOne":
      timerRef.current = setTimeout(() => {
        pcPlayer2(newCurrentTurn);
        }, 12000);
      break

    case "levelTwo":
      timerRef.current = setTimeout(() => {
        pcPlayer2(newCurrentTurn);
        }, 8000);
      break
    case "levelThree":
      timerRef.current = setTimeout(() => {
        pcPlayer2(newCurrentTurn);
        }, 5000);
      break
  
    default:
      timerRef.current = setTimeout(() => {
        pcPlayer();
        }, 8000);
  
  }//switch
};

//PCplayerの動き　引数なし
const pcPlayer = () =>{
  placeHandPc();
  setIsPopup(true);
  playKouka(2);
  setIsAnswered(true);
}
//PCplayer2の動き　(引数 newCurrentTurn)
 const pcPlayer2 = (newCurrentTurn) =>{
  placeHandPc2(newCurrentTurn);
  setIsPopup(true);
  setIsAnswered(true);
  playKouka(3);
}

const playLevelOne =(e) => {
  setLevel("levelOne")
}

const playLevelTwo =(e) => {
  setLevel("levelTwo")
}
const playLevelThree=(e) => {
  setLevel("levelThree")
}
return {level, setLevel, timerRef, startTimer, stopTimer, startTimer2, pcPlayer, pcPlayer2, 
  playLevelOne,playLevelTwo, playLevelThree};

}