import {useState,useRef} from "react";
import { Button } from "./Button";
import {PlayArea} from "./PlayArea";
import {Popup} from "./Popup";
import {Result} from "./Result";
import {RadioScreen} from "./RadioScreen";
import {useSetup } from "../hooks/useSetup";
import {useKouka} from "../hooks/useKouka";
import { Title } from "./Title";
import { ClueBox } from "./ClueBox";
import {CardList} from "./CardList";
import {CardGrid} from "./CardGrid";
import { MiniArea } from "./MiniArea";

export const Main = () => {
  console.log("Main - Parent")

  // const {koukaSounds} = useKouka();
  const {basicLists, karutaLists, setKarutaLists, chooseArea, setArea}= useSetup();
  const {playKouka} = useKouka();

  //内容
  // (1) useState
  // (2) handleボタン
  // (3) 読み句
  // (4) PCプレーヤー
  // (5) ポップアップボタンを押した後
  // (6) ゲーム中の表示（手、絵札・ミニ絵札）
  // その他
  // JSX

  //■■■■■■■■■■■■■■■■■■■■■■■■■ (1)useState ■■■■■■■■■■■■■■■■■■■■■■■■■
  //ゲーム中毎回更新
   //一回のみ
   const [screen, setScreen] = useState(true);  //トップ画面の表示・非表示
   const [language, setLanguage]= useState("default")
   const [speed, setSpeed]= useState("default")

  const [isStarted, setIsStarted] = useState(false)           //「ゲーム開始」ボタンの反応制御
  const [isAnswered, setIsAnswered] = useState(true);        //絵札クリックの可否を制御
  const [text, setText] = useState("")             //読み句表示用

  const [currentTurn, setCurrentTurn] = useState(0);         //turnカウント
  const [isScored, setIsScored] = useState(false);           //player得点の有無
  const [score, setScore] = useState(0);                     //スコア・カウント

  const [isPopup, setIsPopup] = useState(false);             //ポップアップの表示・非表示
  const [miniList, setMiniList] = useState([]);      //ミニ絵札データ配列
  const [miniListPc, setMiniListPc] = useState([]);  //ミニ絵札データ配列（PC)
  const [isResult, setIsResult] = useState(false);           //ゲーム結果の表示・非表示

  // const kouka =
  //   [
  //     "../siin.mp3",    //playKouka(0)
  //     "../pan.mp3",     //playKouka(1)
  //     "../bubu.mp3",    //playKouka(2)
  //     "../chan.mp3",    //playKouka(3)
  //     "../rappa.mp3",   //playKouka(4)
  //     "../clap.mp3",    //playKouka(5)
  //     "../chiin.mp3",   //playKouka(6)
  //     "../button1.mp3",   //playKouka(7)
  //     "../button2.mp3",   //playKouka(8)
  //     "../suiteki.mp3",   //playKouka(9)
  //   ]
  
  
  //■■■■■■■■■■■■■■■■■■■■■■■■■ (2) handleボタン ■■■■■■■■■■■■■■■■■■■■■■■■■

  // //「札を並べる」ボタンを押す(useCallbackを設定すると絵札が表示されない)
  const handleSet = () => {
    chooseArea();
    setScreen(false)
    playKouka(0);       //効果音 
  };//handleSet

    //「ゲーム開始」ボタンを押す(useCallbackを設定すると読み句の音声や表示が狂う)
  const handleStart =() => {
    startTimer();           //タイマー設定（１枚目のみ）
    setIsAnswered(false);   //絵札のクリック可能にする
    setIsStarted(true)   //「ゲーム開始」ボタンの反応停止
    readClue(currentTurn);  //読み句の読みあげ
    showClue(currentTurn);
  };//handleStart 

  const handleClick = (selectedId)=> { 
    setIsAnswered(true);      //絵札のクリックを不可にする
    stopTimer();              //タイマー解除（PCplayer)
    

    //正解の場合
    if (selectedId ===basicLists[currentTurn].id) {//配列のIDを比較
      // //正解の絵札の上に手を表示
    
      playKouka(1);
      setIsPopup(true);       
      placeHand();
      //player独自の操作
      setScore(score + 1);    //スコア加点
      setIsScored(true)       //ミニ絵札表示（手前）の有無を決める基準
      //最後の１枚を撮った場合に加点
      if (currentTurn===basicLists.length -2)
      setScore(score + 2);   
    }
    //不正解の場合
    else{
      setTimeout(()=>{pcPlayer()}, 300);
    }
  }//handleClick
  
  //■■■■■■■■■■■■■■■■■■■■■■■■■  (3) 読み句 ■■■■■■■■■■■■■■■■■■■■■■■■■
  //読み句の表示（使用言語の設定（逐次・一括表示の切り替えは、ClueBoxコンボーネントだけで行う）
  const showClue =(currentTurn) =>{
    //最後の一枚の読み句を表示しないようにする
    if(currentTurn < basicLists.length-1){
      let text;
      switch (language){
        case "english":
          text = basicLists[currentTurn].clue //英語
          break
        case "japanese":
          text= basicLists[currentTurn].yomiku //日本語
          break
        case "hiragana":
          text = basicLists[currentTurn].furigana //英語
          break
        default:
          text= basicLists[currentTurn].clue //英語
      }
      setText(text);
    } //if
  } //showClue

  //読みあげ （引数あり）以前 currentTurnをcurrentNumとしていたが、理由覚えていない


  let clueSounds=new Audio();
  //useCallbackを設定すると読み句の音声が出ない
  const readClue = (currentTurn)=> {
    
    if (currentTurn < basicLists.length -1){
      //switch
      switch (language){
        case "default":
          clueSounds.src = basicLists[currentTurn].read; //英語
          break
        case "english":
          clueSounds.src = basicLists[currentTurn].read; //英語
          break
        case "japanese":
          clueSounds.src = basicLists[currentTurn].yomu; //日本語
          break
        case "hiragana":
            clueSounds.src = basicLists[currentTurn].yomu; //日本語
            break
        default:
          clueSounds.src = basicLists[currentTurn].read; //英語
      }
    }
    clueSounds.play();
    clueSounds.preload = "auto";
    clueSounds.loop = false;
  };
  const stopClue = (currentTurn)=> {
    
    clueSounds.pause();
    clueSounds.currentTime=0;
  };


  //■■■■■■■■■■■■■■■■■■■■■■■■■ (4) PCプレーヤー ■■■■■■■■■■■■■■■■■■■■■■■■■
  const timerRef = useRef(null);                              //タイマー設定用  

  const startTimer = () => {
    switch (speed){
      case "default":
        timerRef.current = setTimeout(() => {
        pcPlayer();
        }, 8000);
        setSpeed("default")
        break
  
      case "speedOne":
        timerRef.current = setTimeout(() => {
          pcPlayer();
          }, 12000);
        break
  
      case "speedTwo":
        timerRef.current = setTimeout(() => {
          pcPlayer();
          }, 8000);
        break
      case "speedThree":
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
    switch (speed){
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
          setSpeed("default")
          break
  
      case "speedOne":
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
  
      case "speedTwo":
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
      case "speedThree":
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
    // play(2)
    setIsAnswered(true);
  }
  //PCplayer2の動き　(引数 newCurrentTurn)
   const pcPlayer2 = (newCurrentTurn) =>{
    placeHandPc2(newCurrentTurn);
    setIsPopup(true);
    setIsAnswered(true);
    playKouka(3);
    // play(3)
  }

  //■■■■■■■■■■■■■■■■■■■■■■■■■  (5) ポップアップボタンを押した後 ■■■■■■■■■■■■■■■■■■■■■■■■■
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
   
   //次の準備ーー
   
   // 「次」ボタンを押した時
    if (currentTurn < basicLists.length-1) { //0,1,2,3,4,5]
     setTimeout(()=>{readClue(newCurrentTurn)}, 1200);
     setTimeout(()=>{showClue(newCurrentTurn)}, 1000);
    //  setTimeout(()=>{showClue(newCurrentTurn)}, 1200); //読み句一括表示の場合のみ
     setIsAnswered(false);   //絵札のクリックを可にする
     setIsScored(false); 
     stopClue();               //機能しているか不明
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
      stopClue();               //機能しているか不明
   }
 };//pressPopupBtn

//消す（ポップアップボタン押した後）
  const hide =() => {

    //読み句を消す (clue関数で設定しても機能しない）
    // setCurrentText("");

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

//■■■■■■■■■■■■■■■■■■■■■■■■■ (6) ゲーム中の表示（手、絵札・ミニ絵札）■■■■■■■■■■■■■■■■■■■■■■■■■

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

  //
  //引数にcurrentTurnを入れないとうまくいかない
  //mini絵札を追加する(player)
  const addMini = (currentTurn) => {
    setMiniList((prevminiList) => {
      const newminiList = [...prevminiList, basicLists[currentTurn].answer]
      return newminiList;
    });
  }
  
  //mini絵札を追加する(PC)
  const addMiniPc = (currentTurn) => {
    setMiniListPc((prevminiListPc) => {
      const newminiListPc = [...prevminiListPc, basicLists[currentTurn].answer]
      return newminiListPc;
    });
  }

  //■■■■■■■■■■■■■■■■■■■■■■■■■ その他 ■■■■■■■■■■■■■■■■■■■■■■■■■
   //結果画面表示時の効果音
   const soundResult =() => {
    if (score>basicLists.length * 0.5) {
      playKouka(4);
      // play(4)
    }
    else if (score===basicLists.length * 0.5) {
      playKouka(5);
      // play(5)
    }
    else
    {
      playKouka(6);
      // play(6)
    }
  }

  //ボタンのtext
  const gameStatus = isStarted ? "ゲーム中" : "ゲーム開始";
  const scoredStatus = isScored ? "正解" : "相手が取りました";

  


  //■■■■■■■■■■■■■■■■■■■■■■■■■ JSX ■■■■■■■■■■■■■■■■■■■■■■■■■
  return (
    <div>
      {screen ?
        <RadioScreen
          //RadioScreen用
          onClick={()=>handleSet()}
          //RadioLang用
          setLanguage = {setLanguage}
          //RadioArea用
          setArea = {setArea}
          //RadioSpeed用
          setSpeed = {setSpeed}
        />
       :
        <>
       <Title />
    
       {/* const gameStatus = isStarted ? "ゲーム中" : "ゲーム開始"; */}
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
          text={text} 
          language = {language}
        />
        
        <PlayArea 
          //PlayArea用(backgroundImgの表示分け)
          language = {language}

          //以下、JSXをpropsに
          cardList = {
            <CardList
              //CardGrid用 --Mainから
              karutaLists={karutaLists} 
              //Card--Mainから
              isAnswered = {isAnswered}
              onClick={(id)=>handleClick(id)}
              
              cardGrid = {
                <CardGrid
                  //CardGrid(map関数) --Mainから
                  karutaLists={karutaLists} 
                  //Card--Mainから
                  isAnswered = {isAnswered}
                  onClick={(id)=>handleClick(id)}
                /> 
              }
            />
          }
          miniArea = {
            <MiniArea
            miniList = {miniList} 
            tailwind="bottom-0 left-0 items-end"
            currentTurn={currentTurn}
            />
          }
          miniAreaPc = {
            <MiniArea
            miniList = {miniListPc} 
            tailwind="top-0 left-0 items-start"
            currentTurn={currentTurn}
            />
          }
          //以下、propsのバケツリレーの場合ーーーーーーーーーー
          //CardGrid(map関数) --Mainから
          // karutaLists={karutaLists} 

          //Card--Mainから
          // isAnswered = {isAnswered}
          // onClick={(id)=>handleClick(id)}

          //MiniArea用 
          // currentTurn={currentTurn}
          // miniList={miniList}
          // miniListPc={miniListPc}
        />

      {isPopup ? 
        <>
        {/* scoredStatus = isScored ? "正解" : "相手が取りました"; */}
        {isScored ?
          <Popup 
            basicLists={basicLists} 
            currentTurn={currentTurn} 
            popupMsg={scoredStatus}
            onClick={()=>pressPopupBtn()} 
          />
          : 
          <Popup 
            basicLists={basicLists} 
            currentTurn={currentTurn}
            popupMsg={scoredStatus}
            onClick={()=>pressPopupBtn()} 
          />
        } 
        </>
        : null
      } 
  
      {isResult ?
        <Result  
          basicLists={basicLists} 
          score ={score}
        />
        : null
      } 
    </>
    }
    </div>        
    ) //return

}//Main



