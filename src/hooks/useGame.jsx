import {useState, useEffect,useRef, useCallback} from "react";
import {useSetup} from "./useSetup";

export const useGame =() => {
  
  const {basicLists,karutaLists, setKarutaLists}= useSetup();

    const [currentTurn, setCurrentTurn] = useState(0);         //turnカウント
  //  const [score, setScore] = useState(0);                     //スコア・カウント
  //  const [isScored, setIsScored] = useState(false);           //player得点の有無

  //  const [isStarted, setIsStarted] = useState(false)           //「ゲーム開始」ボタンの反応制御
   const [isAnswered, setIsAnswered] = useState(true);        //絵札クリックの可否を制御

   const [isPopup, setIsPopup] = useState(false);             //ポップアップの表示・非表示
  //  const [isResult, setIsResult] = useState(false);           //ゲーム結果の表示・非表示

  // const [miniCard, setMiniCard] = useState([]);      //ミニ絵札データ配列
  //  const [miniCardPc, setMiniCardPc] = useState([]);  //ミニ絵札データ配列（PC)

  // // //正解の絵札の上に手を表示
  // const placeHand = () => {
  //   const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, hand:"/images/hand.png"} : list)
  //   setKarutaLists(result);  
  // };
  
  //手を表示(PC playerお手つき、PCplayer１回目用)
  const placeHandPc = () => {
    const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, handPc:"/images/handPc.png"} : list )
    setKarutaLists(result);  
  };

  // //手を表示(PC playerお手つき, 2回目以降用)
  const placeHandPc2 = (currentNum) => {
    const result = karutaLists.map(list => list.id===basicLists[currentNum].id ? {...list, handPc:"/images/handPc.png"} : list )
    //currentTurnの更新時期のずれにより、不要な所に手や絵が表示されてしまう。その手を消すために以下を実行
    const result1 = result.map(list => list.id===basicLists[currentTurn].id ? {...list, answer:"", handPc:"", hand:""} : list )
    setKarutaLists(result1);  
  } 
  //重要：絵と手を別々の関数にすると、片方しか機能しない。なので同時に処理する

  //正解の絵と手を消す(player)-同じ行にanswer, handを書ける
  // const eraseEfudaHand = () => {
  //   // const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, answer:""} : list )
  //   const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, answer:"", hand:""} : list )
  //   setKarutaLists(result);  
  // } 

  // //正解の絵と手(PC)を消す
  // const eraseEfudaHandPc = () => {
  //   // const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, answer:""} : list )
  //   const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, answer:"", handPc:""} : list )
  //   setKarutaLists(result);  
  // } 

  // //最後2枚の絵札と手(player, pc)を消す
  // const eraseLast = () => {
  //   // const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, answer: ""} : list )
  //   const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, answer: "", hand:"", handPc:""} : list )
  //   const result2 = result.map(list => list.id===basicLists[currentTurn+1].id ? {...list, answer: ""} : list )
  //   setKarutaLists(result2);  
  // }

  //引数にcurrentTurnを入れないとうまくいかない
  //mini絵札を追加する(player)
//   const addMini = (currentTurn) => {
//     setMiniCard((prevminiCard) => {
//       const newminiCard = [...prevminiCard, basicLists[currentTurn].answer]
//       return newminiCard;
//     });
//   }
  
//   //mini絵札を追加する(PC)
//   const addMiniPc = (currentTurn) => {
//     setMiniCardPc((prevminiCardPc) => {
//       const newminiCardPc = [...prevminiCardPc, basicLists[currentTurn].answer]
//       return newminiCardPc;
//     });
//   }

//    //結果画面表示時の効果音
//    const soundResult =() => {
//     if (score>=basicLists.length * 0.5) {
//       playKouka(4);
//     }else
//     {
//       playKouka(5);
//     }
//   }

// //次のゲーム
// const newGame =() => {
//   window.location.reload();
// }

  return {setCurrentTurn, isAnswered, setIsAnswered, isPopup, setIsPopup, placeHandPc, placeHandPc2};
  // return {isStarted, setIsStarted, isAnswered, setIsAnswered, isPopup, setIsPopup, isResult, setIsResult, currentTurn, setCurrentTurn, score, setScore, isScored, setIsScored, miniCard, setMiniCard, 
  //   miniCardPc, setMiniCardPc, placeHand, placeHandPc, placeHandPc2, eraseEfudaHand, eraseEfudaHandPc, eraseLast,
  //   addMini, addMiniPc, soundResult, newGame};
}

