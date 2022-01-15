import {useState, useEffect,useRef} from "react";
import {useSetup } from "./useSetup";
import {useGame} from "./useGame";

export const useClue =() => {
  const {basicLists, language}= useSetup();

  const {currentTurn, isStarted}=useGame();
 
    const [placeholder, setPlaceholder] = useState('');        //読み句一文字づつ表示
   const countLetter = useRef(0);                              //読み句文字数カウント 

// //読み句一文字づつ表示
const isFirstRender = useRef(false)
  
useEffect(() => { // このeffectは初回レンダー時のみ呼ばれるeffect
  isFirstRender.current = true
}, [])

   //switch
useEffect(() => {// 『count』 が更新された場合『と』初回レンダー時に動くeffect
  if(isFirstRender.current) { // 初回レンダー判定
    isFirstRender.current = false // もう初回レンダーじゃないよ代入
  } else 
  {
    let clueWords ="";
    switch (language){
      
      case "english":
        clueWords = basicLists[currentTurn].clue //英語
        break
        case "japanese":
        clueWords = basicLists[currentTurn].yomiku //日本語
        break
        case "hiragana":
        clueWords = basicLists[currentTurn].furigana //日本語
        break
      default:
        clueWords = basicLists[currentTurn].clue //英語
    }
    
    const showClue =()=> {
      if(currentTurn < basicLists.length-1){
        setPlaceholder(prev => prev + clueWords[countLetter.current]);
        countLetter.current++;
      }
    }
    if (countLetter.current <clueWords.length) {
      let addChar = setTimeout(()=>{showClue(currentTurn)} , 100);
      return () => clearTimeout(addChar);
    }
  } // eslint-disable-next-line
}, [placeholder, isStarted]);  

return {countLetter, placeholder, setPlaceholder};

}
