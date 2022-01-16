import {memo} from "react";

import { Button } from "./Button"
import { RadioBtn } from "./RadioBtn"

export const RadioScreen = memo((props)=>{
  console.log("Child 1 RadioScreenレンダリング");
  return(
    <div 
      className ="w-full container mx-auto p-5 bg-lime-100 md:p-10"
      >
      <h1 className ="text-2xl  text-center md:m-10 ">世界200ケ国かるた</h1>
      <div
        className ="bg-gray-300 mb-8" 
        >
          読み句の言葉（１つ選択）
      </div>
      <div className="flex flex-wrap gap-5 ml-5 mb-5">
      <RadioBtn
          id="english"
          name="language"
          value="english"
          htmlFor="english"
          text =" 英 語"
          onChange={()=> props.checkEnglish()}
        />
     </div>
     <div className="flex flex-wrap gap-5 m-5">
        <RadioBtn
          id="japanese"
          name="language"
          value="japanese"
          htmlFor="japanese"
          text =" 日本語（漢字・ひらがな）"
          onChange={()=> props.checkJapanese()}
        />
        <RadioBtn
          id="hiragana"
          name="language"
          value="hiragana"
          htmlFor="hiragana"
          text =" 日本語（ひらがな）"
          onChange={()=> props.checkHiragana()}
        />
      </div>

      <div
        className="bg-gray-300 my-8"
      >
        エリア（１つ選択）
      </div>
      <div className="flex flex-wrap gap-5 ml-5 mb-5">
        <RadioBtn
          id="World" 
          name="area" 
          value="World"
          onChange={()=> props.chooseWorld()}
          htmlFor="World"
          text=" 世界（どこでもいい）"
        />
      </div>
      <div className="flex flex-wrap gap-5 m-5">
      <RadioBtn
        id="Asia" 
        name="area" 
        value="Asia"
        onChange={()=> props.chooseAsia()}
        htmlFor="Asia"
        text=" アジア"
      />
        <RadioBtn
          id="Europe" 
          name="area" 
          value="Europe"
          onChange={()=> props.chooseEurope()}
          htmlFor="Europe"
          text=" ヨーロッパ"
        />
        <RadioBtn
          id="Africa" 
          name="area" 
          value="Africa"
          onChange={()=> props.chooseAfrica()}
          htmlFor="Africa"
          text=" アフリカ"
        />
        <RadioBtn
          id="Aerimcas" 
          name="area" 
          value="Aerimcas"
          onChange={()=> props.chooseAmericas()}
          htmlFor="Aerimcas"
          text=" アメリカ"
        />
        <RadioBtn
          id="Oceania" 
          name="area" 
          value="Oceania"
          onChange={()=> props.chooseOceania()}
          htmlFor="Oceania"
          text=" オセアニア"
        />
      </div>
     
        <div className="bg-gray-300 my-8"
        >
          スピード（相手が取る速さ）
        </div>
        <div className="flex  m-1 gap-2 md:flex-wrap md:gap-6 md:m-5">
        <RadioBtn
          id="levelOne" 
          name="level" 
          value="levelOne"
          htmlFor="levelOne"
          text =" ゆっくり"
          onChange={()=> props.playLevelOne()}
        />
        
        <RadioBtn
          id="levelTwo" 
          name="level" 
          value="levelTwo"
          htmlFor="levelTwo"
          text =" 少し速い"
          onChange={()=> props.playLevelTwo()}
        />
      

        <RadioBtn
          id="levelThree" 
          name="level" 
          value="levelThree"
          htmlFor="levelThree"
          text ="もっと速い"
          onChange={()=> props.playLevelThree()}
        />
      </div>
      <Button 
        // background="Blue" 
        // cursor="pointer" 
        onClick={props.onClick} 
        tailwind="bg-red-600 mt-10 text-white cursor-pointer transform hover:scale-110 transition-transform"
      >
        札 を 並 べ る
      </Button>
    </div>
  )
});