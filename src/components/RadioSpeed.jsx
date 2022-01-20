import {memo} from "react";
import { useKouka } from "../hooks/useKouka";
import { RadioBtn } from "./RadioBtn"

export const RadioSpeed =memo((props) =>{

  const { playKouka} = useKouka();

  const playLevelOne =(e) => {
    props.setLevel("levelOne")
    playKouka(7)
  }
  
  const playLevelTwo =(e) => {
    props.setLevel("levelTwo")
    playKouka(7)
  }
  const playLevelThree=(e) => {
    props.setLevel("levelThree")
    playKouka(7)
  }
  return (
    <>
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
          onChange={()=> playLevelOne()}
        />
        <RadioBtn
          id="levelTwo" 
          name="level" 
          value="levelTwo"
          htmlFor="levelTwo"
          text =" 少し速い"
          onChange={()=> playLevelTwo()}
        />
        <RadioBtn
          id="levelThree" 
          name="level" 
          value="levelThree"
          htmlFor="levelThree"
          text ="もっと速い"
          onChange={()=> playLevelThree()}
        />
      </div>
      </>
  )
});