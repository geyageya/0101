import {memo} from "react";
import { useKouka } from "../hooks/useKouka";
import { RadioBtn } from "./RadioBtn"

export const RadioSpeed =memo((props) =>{

  const { playKouka} = useKouka();

  const speedLevelOne =(e) => {
    props.setSpeed("levelOne")
    playKouka(7)
  }
  
  const speedLevelTwo =(e) => {
    props.setSpeed("levelTwo")
    playKouka(7)
  }
  const speedLevelThree=(e) => {
    props.setSpeed("levelThree")
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
          id="speedlevelOne" 
          name="speed" 
          value="speedlevelOne"
          htmlFor="speedlevelOne"
          text =" ゆっくり"
          onChange={()=> speedLevelOne()}
        />
        <RadioBtn
          id="speedlevelTwo" 
          name="speed" 
          value="speedlevelTwo"
          htmlFor="speedlevelTwo"
          text =" 少し速い"
          onChange={()=> speedLevelTwo()}
        />
        <RadioBtn
          id="speedlevelThree" 
          name="speed" 
          value="speedlevelThree"
          htmlFor="speedlevelThree"
          text ="もっと速い"
          onChange={()=> speedLevelThree()}
        />
      </div>
      </>
  )
});