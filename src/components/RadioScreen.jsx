import { Button } from "./Button"
import { RadioBtn } from "./RadioBtn"

export const RadioScreen = (props)=>{
  /* 画面枠（試合結果） */
  
  
  const radioScreen ={
    width: "1000px",
    height: "700px",
    background: "beige",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    // margin: "0 auto",
    borderRadius: "15px",
  //   textAlign: "center",
    /* 画面の位置設定（基点は親要素のshowEfuda) */
    position: "absolute",
    top: "0px",
    left: "0px",
    zIndex: "3"
  //   right: "0",
  }
  
  const radioBox = {
    /* flexで配置 */
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "left",
    gap: "15px"
  }
  return(
      <div 
       style={radioScreen}> 
        <p>読み句の言葉を選択</p>
        <div
          style={radioBox}>
            <RadioBtn
            id="japanese"
            name="language"
            value="japanese"
            htmlFor="japanese"
            text ="Japanese（日）"
            onChange={()=> props.checkJapanese()}
            />
            <RadioBtn
            id="english"
            name="language"
            value="english"
            htmlFor="english"
            text ="English（英）"
            onChange={()=> props.checkEnglish()}
            />
        </div>
        <p>エリア</p>
        <div style={radioBox}> 
        <RadioBtn
          id="Asia" 
          name="area" 
          value="Asia"
          onChange={()=> props.chooseAsia()}
          htmlFor="Asia"
          text="アジア"
        />
        <RadioBtn
          id="Europe" 
          name="area" 
          value="Europe"
          onChange={()=> props.chooseEurope()}
          htmlFor="Europe"
          text="ヨーロッパ"
        />
        <RadioBtn
          id="Africa" 
          name="area" 
          value="Africa"
          onChange={()=> props.chooseAfrica()}
          htmlFor="Africa"
          text="アフリカ"
        />
        <RadioBtn
          id="Aerimcas" 
          name="area" 
          value="Aerimcas"
          onChange={()=> props.chooseAmericas()}
          htmlFor="Aerimcas"
          text="アメリカ"
        />
        <RadioBtn
          id="Oceania" 
          name="area" 
          value="Oceania"
          onChange={()=> props.chooseOceania()}
          htmlFor="Oceania"
          text="オセアニア"
        />
        </div>
       <div>
        <RadioBtn
          id="World" 
          name="area" 
          value="World"
          onChange={()=> props.chooseWorld()}
          htmlFor="World"
          text="世界"
        />
        </div>

        <p>ゲームのレベルを選択</p>
    <div
    style={radioBox}
    >
        <RadioBtn
          id="levelOne" 
          name="level" 
          value="levelOne"
          htmlFor="levelOne"
          text ="初級"
          onChange={()=> props.playLevelOne()}
        />
        <RadioBtn
          id="leveTwo" 
          name="level" 
          value="levelTwo"
          htmlFor="levelTwo"
          text ="中級"
          onChange={()=> props.playLevelTwo()}
        />
        <RadioBtn
          id="levelThree" 
          name="level" 
          value="levelThree"
          onChange={()=> props.playLevelThree()}
          htmlFor="levelThree"
          text ="上級"
        />
      </div>
      <Button 
          background="Blue" 
          cursor="pointer" 
          onClick={props.onClick} 
        >
          札を並べる
        </Button>
 </div>
  )
}