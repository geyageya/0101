import { Button } from "./Button"
import { RadioBtn } from "./RadioBtn"

export const RadioScreen = (props)=>{
  return(
    <div 
      className ="w-full h-screen p-10 bg-lime-100"
      >
      <h1 className ="text-2xl mb-10 text-center">かるたで学ぼう、世界200ケ国</h1>
      <p 
        className ="bg-gray-300"
        >
          読み句の言葉（１つだけ選択）
      </p>
      <div className="flex gap-10 m-5">
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

      <p 
        className="bg-gray-300"
      >
        場所（１つだけ選択）
      </p>
      <div className="flex flex-wrap gap-10 m-5">
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
        <RadioBtn
          id="World" 
          name="area" 
          value="World"
          onChange={()=> props.chooseWorld()}
          htmlFor="World"
          text="世界"
        />
      </div>
        <p className="bg-gray-300"
        >
          レベル（１つだけ選択）
        </p>
        <div className="flex gap-10 m-5">
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