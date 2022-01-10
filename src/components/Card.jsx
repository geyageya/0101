
export const Card =(props) =>{
    console.log("Child4 Cardレンダリング");
  
    const handleClick = (selectedId)=> { 
      props.setIsAnswered(true);      //絵札のクリックを不可にする
      props.stopTimer();              //タイマー解除（PCplayer)

      //正解の場合
      if (selectedId ===props.basicLists[props.currentTurn].id) {　　//配列のIDを比較
        props.playEffect(1);
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
  
    /*絵札表示*/
    const card = {
      // width: "95px",
      // height: "95px",
      // width: "150px",
      // height: "150px",
      // objectFit: "scale-down", /*原画比率維持*/
      // cursor: props.cursor,
      opacity: props.opacity,
      // filter: "grayScale(100%)"
    }
    return(
      <>
        {/* {props.isAnswered ? 
          <img 
            className ="w-50 object-scale-down opacity-50"
            style = {card}
            alt ="" 
            src={props.src}  
            id ={props.id}

            //表示画像のリンク切れの場合、非表示にする
            onError={e => e.target.style.display = 'none'}
          />
        : */}
          <img 
            className  =" max-w-[110px] max-h-[110px] cursor-pointer laptop:max-w-[150px] laptop:max-h-[150px]"
            // style = {card}
            alt ="" 
            src={props.src}  
            id ={props.id}
            //表示画像のリンク切れの場合、非表示にする
            onError={e => e.target.style.display = 'none'}
            onClick={()=>handleClick(props.id)} //handleClick関数をここに移動した場合
          />
       
        {/* }  */}
      </>
    )
  };