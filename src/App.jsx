import {useState, useEffect,useRef, useCallback} from "react";
import { Header } from './components/Header';
import {Footer} from './components/Footer';
import { Button } from "./components/Button";
import {ClueBox} from "./components/ClueBox";
import {PlayArea} from "./components/PlayArea";
import {Popup} from "./components/Popup";
import {Result} from "./components/Result";
import {RadioScreen} from "./components/RadioScreen";

import {useCustomeHooks} from "./hooks/useCustomeHooks"


{/* <Header /> */}

// const Furigana =(props) => {
//   const furigana ={
//     fontSize : "13px",
//   }

//   return(
//     <>
//   <p 
//     style={furigana}
//   >
//     {props.children}
//   </p>
//   </>
//   )
// };




const Main=(props) => {

  //■■■■■useState■■■■■
  //  const [basicLists,setBasicLists] = useState(dataLists);    　non-API
   const [basicLists,setBasicLists] = useState([]);  //API利用時
   const [karutaLists,setKarutaLists] = useState(basicLists);  //絵札用データ配列
   const [miniCard, setMiniCard] = useState([]);      //ミニ絵札データ配列
   const [miniCardPc, setMiniCardPc] = useState([]);  //ミニ絵札データ配列（PC)
  
   const [currentTurn, setCurrentTurn] = useState(0);         //turnカウント
   const [score, setScore] = useState(0);                     //スコア・カウント
   const [isScored, setIsScored] = useState(false);           //player得点の有無
  
  //  const [isPlaced, setIsPlaced] = useState(false)            //「札を並べる」ボタンの反応制御
   const [isStarted, setIsStarted] = useState(false)           //「ゲーム開始」ボタンの反応制御
   const [isAnswered, setIsAnswered] = useState(true);        //絵札クリックの可否を制御
  
  //  const [isKaruta, setIsKaruta] = useState(false);           //絵札一覧の表示・非表示
   const [isPopup, setIsPopup] = useState(false);             //ポップアップの表示・非表示
   const [isResult, setIsResult] = useState(false);           //ゲーム結果の表示・非表示

   const [placeholder, setPlaceholder] = useState('');        //読み句一文字づつ表示
   const countLetter = useRef(0);                              //読み句文字数カウント 
   const timerRef = useRef(null);                              //タイマー設定用  

   const [language, setLanguage]= useState("default")
   const [level, setLevel]= useState("default")
   const [area, setArea]= useState("default")
   const [screen, setScreen] = useState(true);  //トップ画面の表示・非表示
  
// Sounds------------------------------------------------------------------
const effectSounds = [
  "sounds/effects/siin.mp3",
  "sounds/effects/pan.mp3", 
  "sounds/effects/bubu.mp3", 
  "sounds/effects/chan.mp3",
  "sounds/effects/clap.mp3",
  "sounds/effects/chiin.mp3", 
]
  //札の準備ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  //■■■■■useEffect (API)■■■■■ 
    //APIデータ取得
    useEffect (() => {
      getApiLists();
      //下のコメント（不要なwarningを出さないようにするため）
      // eslint-disable-next-line 
    },[]);
  
  //  APIデータを取得
    const getApiLists = useCallback(async () => {
      const res =await fetch("https://server-karuta2020.herokuapp.com/api/v1/karuta");
      const json = await res.json();
      setBasicLists(json);
    },[]);

  
  // //エリア別札選出）
    const chooseArea = () => {
      switch (area){
        case "Asia":
          {
            const filtered= basicLists.filter(list => list.area==="Asia");
            const shuffled=shuffle(filtered).slice(0,4)
            const result = shuffle([...shuffled]);
            setBasicLists(result)
            const result2 = shuffle([...shuffled]);
            setKarutaLists(result2)
            setArea("default")
          break
          }
        case "Europe":
          {
            const filtered= basicLists.filter(list => list.area==="Europe");
            const shuffled=shuffle(filtered).slice(0,12)
            const result = shuffle([...shuffled]);
            setBasicLists(result)
            const result2 = shuffle([...shuffled]);
            setKarutaLists(result2)
            setArea("default")
          break
          }
        case "Africa":
          {
            const filtered= basicLists.filter(list => list.area==="Africa");
            const shuffled=shuffle(filtered).slice(0,12)
            const result = shuffle([...shuffled]);
            setBasicLists(result)
            const result2 = shuffle([...shuffled]);
            setKarutaLists(result2)
            setArea("default")
          break
          }
        case "Americas":
          {
            const filtered= basicLists.filter(list => list.area==="Americas");
            const shuffled=shuffle(filtered).slice(0,12)
            const result = shuffle([...shuffled]);
            setBasicLists(result)
            const result2 = shuffle([...shuffled]);
            setKarutaLists(result2)
            setArea("default")
          break
          }
        case "Oceania":
         {
            const filtered= basicLists.filter(list => list.area==="Oceania");
            const shuffled=shuffle(filtered).slice(0,12)
            const result = shuffle([...shuffled]);
            setBasicLists(result)
            const result2 = shuffle([...shuffled]);
            setKarutaLists(result2)
            setArea("default")
          break
         }

         case "World":
          {
            const shuffled=shuffle(basicLists).slice(0,12)
            const result = shuffle([...shuffled]);
            setBasicLists(result)
            const result2 = shuffle([...shuffled]);
            setKarutaLists(result2)
            setArea("default")
          break
         }
        default: //World
          {
            const shuffled=shuffle(basicLists).slice(0,12)
            const result = shuffle([...shuffled]);
            setBasicLists(result)
            const result2 = shuffle([...shuffled]);
            setKarutaLists(result2)
            setArea("default")
          }
      }//switch
    }//chooseArea

   //シャッフル関数
   const shuffle=(arr) => { 
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
    }
    
        //「札を並べる」ボタンを押すーーーーーーーーーーー
        
    const handleSet = () => {
      chooseArea();
      // setIsKaruta(true);  //絵札一覧を表示
      // setIsPlaced(true);  //「札を並べる」ボタンの反応停止
      playEffect(0);       //効果音 
      setScreen(false)
    };//handleSet

    //「ゲーム開始」ボタンを押すーーーーーーーーー
    const handleStart =() => {
      startTimer();           //タイマー設定（１枚目のみ）
      setIsAnswered(false);   //絵札のクリック可能にする
      setIsStarted(true)　    //「ゲーム開始」ボタンの反応停止
      readClue(currentTurn);  //読み句の読みあげ
    }//handleStart 

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
            case "japanese":
              clueWords = basicLists[currentTurn].yomiku //日本語
              break
            case "english":
              clueWords = basicLists[currentTurn].clue //英語
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


      //読みあげ （引数あり）
  let clueSounds=new Audio();
 
  const readClue = (currentNum)=> {

    if (currentNum < basicLists.length -1){
      //switch
    switch (language){
      case "default":
        clueSounds.src = basicLists[currentNum].read; //英語
        setLanguage("default")
        break
      case "japanese":
        clueSounds.src = basicLists[currentNum].yomu; //日本語
        break
      case "english":
        clueSounds.src = basicLists[currentNum].read; //英語
        break
      default:
        clueSounds.src = basicLists[currentNum].read; //英語
    }

    clueSounds.play();}
    clueSounds.preload = "auto";
    clueSounds.loop = false;
  }

  //効果音
  let effect=new Audio();

  const playEffect= (effectNum)=> {
    effect.preload = "auto";
    effect.src = effectSounds[effectNum];
    effect.load();
    effect.loop = false;
    effect.play();
  }
  
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
    playEffect(2);
    setIsAnswered(true);
  }
  //PCplayer2の動き　(引数 newCurrentTurn)
   const pcPlayer2 = (newCurrentTurn) =>{
    placeHandPc2(newCurrentTurn);
    setIsPopup(true);
    setIsAnswered(true);
    playEffect(3);
  }

  //ポップアップボタンを押した場合-----------------------------
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
   }
   
   //次の準備ーーーーーーーーーーーーーーーーーーーーーーーーーーーー

   // 「次」ボタンを押した時
    if (currentTurn < basicLists.length-1) { //0,1,2,3,4,5]

     //readClueの引数に手動で１を加えた数値を入れる
     setTimeout(()=>{readClue(newCurrentTurn)}, 500);
     setIsAnswered(false);   //絵札のクリックを可にする
     setIsScored(false);    
     countLetter.current=0;  //表示する読み句の文字数をゼロに戻す
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

    //読み句を消す？？
    setPlaceholder("");

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

  // //正解の絵札の上に手を表示
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
    if (score>=basicLists.length * 0.5) {
      playEffect(4);
    }else
    {
      playEffect(5);
    }
  }

//次のゲーム
const newGame =() => {
  window.location.reload();
}

//switch
const checkJapanese =(e) => {
  setLanguage("japanese")
}

const checkEnglish =(e) => {
  setLanguage("english")
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

const chooseAsia=(e) => {
  setArea("Asia")
}

const chooseEurope=(e) => {
  setArea("Europe")
}
const chooseAfrica=(e) => {
  setArea("Africa")
}
const chooseAmericas=(e) => {
  setArea("Americas")
}
const chooseOceania=(e) => {
  setArea("Oceania")
}

const chooseWorld=(e) => {
  setArea("World")
}

let backgroundImage="";

{switch(area){
  case "Asia":
    backgroundImage="url(../images/worldmap.png)" 
    break
  case "Europe":
    backgroundImage="url(../images/tatami-1.png)" 
  break
  case "Africa":
    backgroundImage="url(../images/tatami-1.png)" 
  break
  case "Americas":
    backgroundImage="url(../images/tatami-1.png)" 
  break
  case "Oceania":
    backgroundImage="url(../images/tatami-1.png)" 
  break

  case "World":
    backgroundImage="url(../images/worldmap2.png)" 
  break

  default: //Worldに同じ
    backgroundImage="url(../images/worldmap2.png)" 

  }
}




  //------JSX------------------------------------------------------------------------------
  return (
    <div>
     {screen ?
      <RadioScreen
        checkEnglish ={checkEnglish}
        checkJapanese = {checkJapanese}
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
      null
     }
      {/* 札を並べた後 */}
      {/* {isPlaced ?          */}
        <>
          {/* ゲーム開始ボタンを押した後 */}
          {isStarted ?　　
            <Button 
              // background="grey" 
              tailwind ="bg-gray-500 text-black"
            >
              ゲーム中
            </Button>
            :             
            // ゲーム開始ボタンを押す前
            <Button 
              // background="red" 
              // cursor="pointer" 
              onClick={()=> handleStart()}
              tailwind="bg-red-600 text-white cursor-pointer transform hover:scale-105 transition-transform"
            >
              ゲーム開始
            </Button>
          }
        </>
      
      {/* 　//札を並べていない場合
        <Button 
          background="Blue" 
          cursor="pointer" 
          onClick={()=>handleSet()}
        >
          札を並べる
        </Button> */}
      {/* } */}

        {/* <Furigana>
        {basicLists[currentTurn].furigana}
        </Furigana> */}

        <ClueBox
          placeholder={placeholder}  
          // karutaLists={karutaLists} 
          // basicLists={basicLists}
          // currentTurn={currentTurn}
          // language ={language}
          // isStarted={isStarted}
        />

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
          playEffect={playEffect}
          placeHand={placeHand}
          pcPlayer={pcPlayer}
          onClick={()=>handleSet()} 
        />

      {isPopup ? 
        <>
        {isScored ?
          <Popup 
            popupMsg="正解です！"
            basicLists={basicLists} 
            currentTurn={currentTurn} 
            onClick={()=>pressPopupBtn()} 
          />
          : 
          <Popup 
            popupMsg="相手が取りました"
            basicLists={basicLists} 
            currentTurn={currentTurn}
            onClick={()=>pressPopupBtn()} 
          />
        }
        </>
        : null
      } 
  
      {isResult&&
        <Result  
          // isResult={isResult} 
          basicLists={basicLists} 
          currentTurn={currentTurn}
          score ={score}
          onClick={()=>newGame()} 
        />
      } 
     
    </div>        
    ) //return

}//Main

// <Footer />

const App=()=> {
  console.log("Appレンダリング");
  // const [screen, setScreen] = useState(true);  //トップ画面の表示・非表示
  return(
    <div>
  
      <Header />
      <Main />
      <Footer />
    
    </div>
  )
} //App

export default App;


