// import {memo} from "react";
import {useKouka} from "../hooks/useKouka";

export const Card =(props) =>{
  console.log("Card - Child4");  
  
  const {playKouka} = useKouka();

    //useCallbackをhandleClikcに設定すると、最初しか正解にならなかった。つまりこの関数が停止しているからだ。
    const handleClick = (selectedId)=> { 
      props.setIsAnswered(true);      //絵札のクリックを不可にする
      props.stopTimer();              //タイマー解除（PCplayer)

      //正解の場合
      if (selectedId ===props.basicLists[props.currentTurn].id) {//配列のIDを比較
        // //正解の絵札の上に手を表示
      
        playKouka(1);
        props.setIsPopup(true);       
        props.placeHand();
        //player独自の操作
        props.setScore(props.score + 1);    //スコア加点
        props.setIsScored(true)       //ミニ絵札表示（手前）の有無を決める基準
        //最後の１枚を撮った場合に加点
        if (props.currentTurn===props.basicLists.length -2)
        props.setScore(props.score + 2);   
      }
      //不正解の場合
      else{
        setTimeout(()=>{props.pcPlayer()}, 300);
      }
    }//handleClick

  return(
    <div>
    {props.isAnswered ? 
      <img 
        className  ="max-w-[90px] max-h-[90px]  md:max-w-[130px] md:max-h-[130px] lg:max-w-[150px] lg:max-h-[150px]"
        alt ="" 
        src={props.src}  
        //表示画像のリンク切れの場合、非表示にする
        onError={e => e.target.style.display = 'none'}
      />
    :
      <img 
        className  ="max-w-[90px] max-h-[90px] cursor-pointer md:max-w-[130px] md:max-h-[130px] lg:max-w-[150px] lg:max-h-[150px]"
        alt ="" 
        src={props.src}  
        //表示画像のリンク切れの場合、非表示にする
        onError={e => e.target.style.display = 'none'}
        onClick={()=>handleClick(props.id)} 
      />
     
    }
    </div>
  )//return
}//Card