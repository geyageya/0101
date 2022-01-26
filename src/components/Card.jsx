// import {memo} from "react";
// import {useKouka} from "../hooks/useKouka";
// import { PlayArea } from "./PlayArea";

//メモ化効果なし
export const Card =(props) =>{
  console.log("Card - Child4");  

  return(
    <div>
    {props.isAnswered ? 
      <img 
        className  ="max-w-[90px] max-h-[90px]  md:max-w-[130px] md:max-h-[130px] lg:max-w-[150px] lg:max-h-[150px]"
        alt ="" 
        src={props.src}  
        id={props.id}
        //表示画像のリンク切れの場合、非表示にする
        onError={e => e.target.style.display = 'none'}
      />
    :
      <img 
        className  ="max-w-[90px] max-h-[90px] cursor-pointer md:max-w-[130px] md:max-h-[130px] lg:max-w-[150px] lg:max-h-[150px]"
        alt ="" 
        src={props.src}  
        id={props.id}
        //表示画像のリンク切れの場合、非表示にする
        onError={e => e.target.style.display = 'none'}
        onClick={(e)=>props.onClick(e.target.id)} //OK 
        // onClick={()=>props.onClick(props.id)}  //OK
        
      />
    }
    </div>
  )//return
}//Card