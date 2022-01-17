import {useState, useEffect,useRef,memo, useCallback} from "react";
import { Button } from "./Button";
import {ClueBox} from "./ClueBox";
import {PlayArea} from "./PlayArea";
import {Popup} from "./Popup";
import {Result} from "./Result";
import {RadioScreen} from "./RadioScreen";

import {useSetup } from "../hooks/useSetup";
import {useKouka} from "../hooks/useKouka";
import { Title } from "./Title";

export const Main = (props) => {
  console.log("Main - Parent")

  const {basicLists, karutaLists, setKarutaLists, getApiLists, 
    area, chooseArea, 
    chooseAsia, chooseEurope, chooseAfrica, chooseAmericas, chooseOceania, chooseWorld,
    language, setLanguage, screen, setScreen}= useSetup();

  const {playKouka} = useKouka();

  //■■■■■useState■■■■■
    // const [basicLists,setBasicLists] = useState(dataLists);    //non-API
  //  const [basicLists,setBasicLists] = useState([]);  //API利用時
  //  const [karutaLists,setKarutaLists] = useState(basicLists);  //絵札用データ配列
   const [miniCard, setMiniCard] = useState([]);      //ミニ絵札データ配列
   const [miniCardPc, setMiniCardPc] = useState([]);  //ミニ絵札データ配列（PC)
  
   const [currentTurn, setCurrentTurn] = useState(0);         //turnカウント
   const [score, setScore] = useState(0);                     //スコア・カウント
   const [isScored, setIsScored] = useState(false);           //player得点の有無
  
   const [isStarted, setIsStarted] = useState(false)           //「ゲーム開始」ボタンの反応制御
   const [isAnswered, setIsAnswered] = useState(true);        //絵札クリックの可否を制御
  
   const [isPopup, setIsPopup] = useState(false);             //ポップアップの表示・非表示
   const [isResult, setIsResult] = useState(false);           //ゲーム結果の表示・非表示
   
   const timerRef = useRef(null);                              //タイマー設定用  

  //  const [language, setLanguage]= useState("default")
   const [level, setLevel]= useState("default")
  //  const [area, setArea]= useState("default")
  //  const [screen, setScreen] = useState(true);  //トップ画面の表示・非表示
  
// // Sounds------------------------------------------------------------------
// const effectSounds = [
//   "sounds/effects/siin.mp3",
//   "sounds/effects/pan.mp3", 
//   "sounds/effects/bubu.mp3", 
//   "sounds/effects/chan.mp3",
//   "sounds/effects/clap.mp3",
//   "sounds/effects/chiin.mp3", 
// ]
  //札の準備ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  //■■■■■useEffect (API)■■■■■ 
    //APIデータ取得
    useEffect (() => {
      getApiLists();
      //下のコメント（不要なwarningを出さないようにするため）
      // eslint-disable-next-line 
    },[]);
  
   //APIデータを取得
    // const getApiLists = useCallback(async () => {
    //   const res =await fetch("https://server-karuta2020.herokuapp.com/api/v1/karuta");
    //   const json = await res.json();
    //   setBasicLists(json);
    // },[]);

  
  // //エリア別札選出）
  //   const chooseArea = () => {
  //     switch (area){
  //       case "Asia":
  //         {
  //           const filtered= basicLists.filter(list => list.area==="Asia");
  //           const shuffled=shuffle(filtered).slice(0,4)
  //           const result = shuffle([...shuffled]);
  //           setBasicLists(result)
  //           const result2 = shuffle([...shuffled]);
  //           setKarutaLists(result2)
  //           setArea("default")
  //         break
  //         }
  //       case "Europe":
  //         {
  //           const filtered= basicLists.filter(list => list.area==="Europe");
  //           const shuffled=shuffle(filtered).slice(0,12)
  //           const result = shuffle([...shuffled]);
  //           setBasicLists(result)
  //           const result2 = shuffle([...shuffled]);
  //           setKarutaLists(result2)
  //           setArea("default")
  //         break
  //         }
  //       case "Africa":
  //         {
  //           const filtered= basicLists.filter(list => list.area==="Africa");
  //           const shuffled=shuffle(filtered).slice(0,12)
  //           const result = shuffle([...shuffled]);
  //           setBasicLists(result)
  //           const result2 = shuffle([...shuffled]);
  //           setKarutaLists(result2)
  //           setArea("default")
  //         break
  //         }
  //       case "Americas":
  //         {
  //           const filtered= basicLists.filter(list => list.area==="Americas");
  //           const shuffled=shuffle(filtered).slice(0,12)
  //           const result = shuffle([...shuffled]);
  //           setBasicLists(result)
  //           const result2 = shuffle([...shuffled]);
  //           setKarutaLists(result2)
  //           setArea("default")
  //         break
  //         }
  //       case "Oceania":
  //        {
  //           const filtered= basicLists.filter(list => list.area==="Oceania");
  //           const shuffled=shuffle(filtered).slice(0,12)
  //           const result = shuffle([...shuffled]);
  //           setBasicLists(result)
  //           const result2 = shuffle([...shuffled]);
  //           setKarutaLists(result2)
  //           setArea("default")
  //         break
  //        }

  //        case "World":
  //         {
  //           const shuffled=shuffle(basicLists).slice(0,12)
  //           const result = shuffle([...shuffled]);
  //           setBasicLists(result)
  //           const result2 = shuffle([...shuffled]);
  //           setKarutaLists(result2)
  //           setArea("default")
  //         break
  //        }
  //       default: //World
  //         {
  //           const shuffled=shuffle(basicLists).slice(0,12)
  //           const result = shuffle([...shuffled]);
  //           setBasicLists(result)
  //           const result2 = shuffle([...shuffled]);
  //           setKarutaLists(result2)
  //           setArea("default")
  //         }
  //     }//switch
  //   }//chooseArea

  //  //シャッフル関数
  //  const shuffle=(arr) => { 
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [arr[j], arr[i]] = [arr[i], arr[j]];
  //   }
  //   return arr;
  //   }
    
        //「札を並べる」ボタンを押すーーーーーーーーーーー
    //useCallbackを設定すると絵札が表示されない
    const handleSet = () => {
      chooseArea();
      // setIsKaruta(true);  //絵札一覧を表示
      // setIsPlaced(true);  //「札を並べる」ボタンの反応停止
      playKouka(0);       //効果音 
      setScreen(false)
    };//handleSet

    //「ゲーム開始」ボタンを押すーーーーーーーーー
    //useCallbackを設定すると読み句の音声や表示が狂う
    const handleStart =() => {
      startTimer();           //タイマー設定（１枚目のみ）
      setIsAnswered(false);   //絵札のクリック可能にする
      setIsStarted(true)　    //「ゲーム開始」ボタンの反応停止
      readClue(currentTurn);  //読み句の読みあげ
      // setText(basicLists[currentTurn].yomiku);
      
    };//handleStart 
    
  //----一文字づつ表示する場合--------------------------------
  // const [currentText, setCurrentText] = useState('');        
  //  const index = useRef(0);
 
  //     //popup関数での設定の方がうまく作動する
      // useEffect(() => {
        // index.current = 0;
      //   setCurrentText(""); //(clue関数とhide関数の両方で設定した方がいいみたい）
      // },[]);
     
      // useEffect(() => {
      //      if(currentTurn < basicLists.length-1){
      //       //表示する読み句を設定（ラジオぼたん）
      //       let text ="";
      //       switch (language){
      //         case "english":
      //           text = basicLists[currentTurn].clue //英語
      //           break
      //         case "japanese":
      //           text = basicLists[currentTurn].yomiku //日本語
      //           break
      //         case "hiragana":
      //           text = basicLists[currentTurn].furigana //英語
      //           break
      //         default:
      //           text= basicLists[currentTurn].clue //英語
      //       }
            // const timeoutId = setTimeout(()=>{
            //   //一文字づつ増える文字列で、逐次currentTextを更新
            //   setCurrentText ((prev) => prev + text.charAt(index.current));
            //   //表示文字の位置を一つづつずらす（これがないと最初の文字だけが繰り返し表示される）
            //   index.current +=1; 
            //   //文字を表示する間隔を指定（SetTImeoutがないと全ての文字が同時に表示される。）
            //   } , 100); 
            //   //アンマウント時の処理（使用事例不明）
            // return () => {
            //   clearTimeout(timeoutId);
          // };
        
        // //下のコメントは、eslintのwarniing消すため
        // //eslint-disable-next-line react-hooks/exhaustive-deps
      // }, [currentText, isStarted]); 
        //currentTextがないと、一文字しか表示されない。isStartedを記入しないと、句が表示されない
  
  //----読み句全文を一度に表示する場合--------------------------------
  const [currentText, setCurrentText] = useState('');        
 
  //     //popup関数での設定の方がうまく作動する
      useEffect(() => {
        setCurrentText(""); //(clue関数とhide関数の両方で設定した方がいいみたい）
      },[]);
     
      useEffect(() => {
          if(currentTurn < basicLists.length-1){
            //表示する読み句を設定（ラジオぼたん）
            let text ="";
            switch (language){
              case "english":
                text = basicLists[currentTurn].clue //英語
                break
              case "japanese":
                text = basicLists[currentTurn].yomiku //日本語
                break
              case "hiragana":
                text = basicLists[currentTurn].furigana //英語
                break
              default:
                text= basicLists[currentTurn].clue //英語
            }
            setCurrentText(text)
            
          };
        
        //下のコメントは、eslintのwarniing消すため
        //eslint-disable-next-line react-hooks/exhaustive-deps
      // }, [isStarted]); 
      }, [currentText, isStarted]); 
        //currentTextがないと、一文字しか表示されない。isStartedを記入しないと、句が表示されない
  
//----読みあげ--------------------------------
      //読みあげ （引数あり）
  let clueSounds=new Audio();
 
  //useCallbackを設定すると読み句の音声が出ない
  const readClue = (currentNum)=> {

    if (currentNum < basicLists.length -1){
      //switch
    switch (language){
      case "default":
        clueSounds.src = basicLists[currentNum].read; //英語
        setLanguage("default")
        break
      case "english":
        clueSounds.src = basicLists[currentNum].read; //英語
        break
      case "japanese":
        clueSounds.src = basicLists[currentNum].yomu; //日本語
        break
      case "hiragana":
          clueSounds.src = basicLists[currentNum].yomu; //日本語
          break
      default:
        clueSounds.src = basicLists[currentNum].read; //英語
    }

    clueSounds.play();}
    clueSounds.preload = "auto";
    clueSounds.loop = false;
  };

  // // //効果音
  // let kouka=new Audio();

  // const playKouka= (effectNum)=> {
  //   kouka.preload = "auto";
  //   kouka.src = effectSounds[effectNum];
  //   kouka.load();
  //   kouka.loop = false;
  //   kouka.play();
  // }

  // const handleClick = (selectedId)=> { 
  //   props.setIsAnswered(true);      //絵札のクリックを不可にする
  //   props.stopTimer();              //タイマー解除（PCplayer)

  //   //正解の場合
  //   if (selectedId ===props.basicLists[props.currentTurn].id) {//配列のIDを比較
  //     props.playKouka(1);
  //     props.setIsPopup(true);       
  //     props.placeHand();
  //     //player独自の操作
  //     props.setScore(props.score + 1);    //スコア加点
  //     props.setIsScored(true)       //ミニ絵札表示（手前）の有無を決める基準
  //     //最後の１枚を撮った場合に加点
  //     if (props.currentTurn===props.basicLists.length -2)
  //     props.setScore(props.score + 2);   
  //   }
  //   //不正解の場合
  //   else{
  //     setTimeout(()=>{props.pcPlayer()}, 300);
  //   }
  // }//handleClick
  
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
        if (newCurrentTurn < basicLists.length-3) { //0,1,2,3,4,5]
          timerRef.current = setTimeout(() => {
            pcPlayer2(newCurrentTurn);
            }, 8000);
          }
          else if (newCurrentTurn === basicLists.length-3) { //0,1,2,3,4,5]
            timerRef.current = setTimeout(() => {
              pcPlayer2(newCurrentTurn);
              }, 6000);
            }
          else {
            timerRef.current = setTimeout(() => {
              pcPlayer2(newCurrentTurn);
              }, 4000);
          }
          setLevel("default")
          break
  
      case "levelOne":
        if (newCurrentTurn < basicLists.length-3) { //最後から4枚目以上
        timerRef.current = setTimeout(() => {
          pcPlayer2(newCurrentTurn);
          }, 12000);
        }
        else if (newCurrentTurn === basicLists.length-3) { //最後から3枚目
          timerRef.current = setTimeout(() => {
            pcPlayer2(newCurrentTurn);
            }, 6000);
          }
        else {  //最後から2枚目（最終回）
          timerRef.current = setTimeout(() => {
            pcPlayer2(newCurrentTurn);
            }, 4000);
        }
        break
  
      case "levelTwo":
        if (newCurrentTurn < basicLists.length-3) { 
        timerRef.current = setTimeout(() => {
          pcPlayer2(newCurrentTurn);
          }, 8000);
        }
        else if (newCurrentTurn === basicLists.length-3) { 
          timerRef.current = setTimeout(() => {
            pcPlayer2(newCurrentTurn);
            }, 6000);
          }
        else {
          timerRef.current = setTimeout(() => {
            pcPlayer2(newCurrentTurn);
            }, 3000);
        }
        break
      case "levelThree":
        if (newCurrentTurn < basicLists.length-3) { 
        timerRef.current = setTimeout(() => {
          pcPlayer2(newCurrentTurn);
          }, 5000);
        }
        else if (newCurrentTurn === basicLists.length-3) { 
          timerRef.current = setTimeout(() => {
            pcPlayer2(newCurrentTurn);
            }, 4000);
          }
        else {
          timerRef.current = setTimeout(() => {
            pcPlayer2(newCurrentTurn);
            }, 2000);
        }
        break
    
      default:
        if (newCurrentTurn < basicLists.length-3) { //0,1,2,3,4,5]
          timerRef.current = setTimeout(() => {
            pcPlayer2(newCurrentTurn);
            }, 8000);
          }
          else if (newCurrentTurn === basicLists.length-3) { //0,1,2,3,4,5]
            timerRef.current = setTimeout(() => {
              pcPlayer2(newCurrentTurn);
              }, 6000);
            }
          else {
            timerRef.current = setTimeout(() => {
              pcPlayer2(newCurrentTurn);
              }, 3000);
          }
    }//switch
  };

  // //PCplayerの動き　引数なし
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

  //ポップアップボタンを押した場合-----------------------------
  //useCallback使ったらエラー出た
  const pressPopupBtn = () => {

    //setCurrentTurn変更がすぐ反映されないため手動で１を加える（or最初の句が２回読まれる）
    const newCurrentTurn = currentTurn + 1;
    setCurrentTurn(newCurrentTurn);
   
   //いろいろ消す
   hide();
   
   //ミニ絵札表示(手前)
   if (isScored) {
     addMini(currentTurn);
     //最後の１枚を追加表示
     if (currentTurn === basicLists.length -2 ){
       addMini(currentTurn + 1);
      }
   }
   else {
     addMiniPc(currentTurn);
     //最後の１枚を追加表示
     if (currentTurn === basicLists.length -2 ){
       addMiniPc(currentTurn + 1);
     }
   };
   
   //次の準備ーーーーーーーーーーーーーーーーーーーーーーーーーーーー

   // 「次」ボタンを押した時
    if (currentTurn < basicLists.length-1) { //0,1,2,3,4,5]

     //readClueの引数に手動で１を加えた数値を入れる
     setTimeout(()=>{readClue(newCurrentTurn)}, 500);
     setIsAnswered(false);   //絵札のクリックを可にする
     setIsScored(false);    
    //  index.current=0;  //表示する読み句の文字数をゼロに戻す
    }

   //タイマー設定（最後手前の札まで
   // currentTurnでなくnewCurrentTurnにする。or 終了後に最後のタイマーが作動しポップアップが表示される。
    if (newCurrentTurn < basicLists.length-1) {
    // startTimer(newCurrentTurn);
    startTimer2(newCurrentTurn);
      }
    
    //「結果を見る」ボタンを押した時
   if (currentTurn === basicLists.length - 2) { //5
      setIsResult(true);    //結果画面を表示する
      soundResult();        //結果画面表示時の効果音
   }
 };//pressPopupBtn

//消す（ポップアップボタン押した後）
  const hide =() => {

    //読み句を消す (clue関数で設定しても機能しない）
    setCurrentText("");

    //絵札と手を消す
    if(isScored){
      eraseEfudaHand();
     }
    else{
      eraseEfudaHandPc();
    }
    //ポップアップ画面を消す
    setIsPopup(false);      

    //最後の１枚を消す
    if (currentTurn === basicLists.length - 2) { 
      eraseLast();          
    }
  }

  // // //正解の絵札の上に手を表示
  const placeHand = () => {
    const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, hand:"/images/hand.png"} : list)
    setKarutaLists(result);  
  };
  
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
  const eraseEfudaHand = () => {
    // const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, answer:""} : list )
    const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, answer:"", hand:""} : list )
    setKarutaLists(result);  
  } 

  //正解の絵と手(PC)を消す
  const eraseEfudaHandPc = () => {
    // const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, answer:""} : list )
    const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, answer:"", handPc:""} : list )
    setKarutaLists(result);  
  } 

  //最後2枚の絵札と手(player, pc)を消す
  const eraseLast = () => {
    // const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, answer: ""} : list )
    const result = karutaLists.map(list => list.id===basicLists[currentTurn].id ? {...list, answer: "", hand:"", handPc:""} : list )
    const result2 = result.map(list => list.id===basicLists[currentTurn+1].id ? {...list, answer: ""} : list )
    setKarutaLists(result2);  
  }

  //引数にcurrentTurnを入れないとうまくいかない
  //mini絵札を追加する(player)
  const addMini = (currentTurn) => {
    setMiniCard((prevminiCard) => {
      const newminiCard = [...prevminiCard, basicLists[currentTurn].answer]
      return newminiCard;
    });
  }
  
  //mini絵札を追加する(PC)
  const addMiniPc = (currentTurn) => {
    setMiniCardPc((prevminiCardPc) => {
      const newminiCardPc = [...prevminiCardPc, basicLists[currentTurn].answer]
      return newminiCardPc;
    });
  }

   //結果画面表示時の効果音
   const soundResult =() => {
    if (score>basicLists.length * 0.5) {
      playKouka(4);
    }
    else if (score===basicLists.length * 0.5) {
      playKouka(5);
    }
    else
    {
      playKouka(6);
    }
  }
  
//次のゲーム
const newGame =() => {
  window.location.reload();
}

const checkEnglish =(e) => {
  setLanguage("english")
}
const checkJapanese =(e) => {
  setLanguage("japanese")
}

const checkHiragana =(e) => {
  setLanguage("hiragana")
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

// const chooseAsia=(e) => {
//   setArea("Asia")
// }

// const chooseEurope=(e) => {
//   setArea("Europe")
// }
// const chooseAfrica=(e) => {
//   setArea("Africa")
// }
// const chooseAmericas=(e) => {
//   setArea("Americas")
// }
// const chooseOceania=(e) => {
//   setArea("Oceania")
// }

// const chooseWorld=(e) => {
//   setArea("World")
// }

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
    backgroundImage="url(../images/worldmap2.png)";

  }
}//switch

//ボタンのtext
const gameStatus = isStarted ? "ゲーム中" : "ゲーム開始";

const scoredStatus = isScored ? "正解" : "相手が取りました";

  //------JSX------------------------------------------------------------------------------
  return (
    <div>
     {screen ?
      <RadioScreen
        checkEnglish ={checkEnglish}
        checkJapanese = {checkJapanese}
        checkHiragana = {checkHiragana}
        chooseAsia= {chooseAsia}
        chooseEurope = {chooseEurope}
        chooseAfrica = {chooseAfrica}
        chooseAmericas = {chooseAmericas}
        chooseOceania = {chooseOceania}
        chooseWorld = {chooseWorld}
        playLevelOne = {playLevelOne}
        playLevelTwo = {playLevelTwo}
        playLevelThree = {playLevelThree}
        onClick={()=>handleSet()}
      />
       :
      
        <>
       <Title />

          {/* ゲーム開始ボタンを押した後 */}
          {isStarted ?
            <>
              {isResult ?
                <Button 
                  tailwind ="bg-gray-500 text-black"
                >
                  ゲーム終了
                </Button>
              :
                <Button 
                  tailwind ="bg-gray-200 text-black"
                >
                  {gameStatus}
                </Button>
              }
            </>
            :             
              // ゲーム開始ボタンを押す前
              <Button 
                onClick={()=> handleStart()}
                tailwind="bg-red-600 text-white cursor-pointer transform hover:scale-105 transition-transform"
              >
                {gameStatus}
              </Button>
          }
  
        <ClueBox
          // placeholder={placeholder}  
          // text = {text}
          currentText={currentText}
          // basicLists={basicLists}
          // currentTurn={currentTurn}
          // language ={language}
          // isStarted={isStarted}
          // karutaLists={karutaLists} 
        />

        {/* <button 
        // onClick ={() => {setClue();
        //   // setText1("By the river, a brown tower stands alone.");
        // }}
        >
          タイプライター
        </button>
        <Typewriter text1={text1} /> */}

        <PlayArea 
          //const PlayArea用
          backgroundImage={backgroundImage}
          //const CardGrid用
          karutaLists={karutaLists} 
          isAnswered = {isAnswered}
          //const MiniArea用
          miniCard={miniCard}
          miniCardPc={miniCardPc}
          //handleClick用(useState)
          basicLists={basicLists}
          currentTurn={currentTurn}
          score={score}
          setIsAnswered={setIsAnswered}
          setIsPopup={setIsPopup}
          setScore={setScore}
          setIsScored={setIsScored}
          //handleClick用(関数実行)
          stopTimer={stopTimer}
          playKouka={playKouka}
          placeHand={placeHand}
          pcPlayer={pcPlayer}
          onClick={()=>handleSet()} 
          // onClick={()=>handleClick()} 
        />

      {isPopup ? 
        <>
        {isScored ?
          <Popup 
            popupMsg={scoredStatus}
            basicLists={basicLists} 
            currentTurn={currentTurn} 
            onClick={()=>pressPopupBtn()} 
          />
          : 
          <Popup 
            popupMsg={scoredStatus}
            basicLists={basicLists} 
            currentTurn={currentTurn}
            onClick={()=>pressPopupBtn()} 
          />
        }
        </>
        : null
      } 
  
      {isResult ?
        <Result  
          // isResult={isResult} 
          basicLists={basicLists} 
          currentTurn={currentTurn}
          score ={score}
          onClick={()=>newGame()} 
        />
        : null
      } 
    </>
    }
    </div>        
    ) //return

}//Main




