import React from "react";
import { memo } from "react";
import { useKouka } from "../hooks/useKouka";
import { RadioBtn } from "./RadioBtn";

//メモ化効果:2８回削減（RadioLang:５回 →１回, RadioBtn:24回⇨０回）
export const RadioLang = memo((props) => {
  console.log("RadioLang - Child2");

  const { playKouka } = useKouka();

  const checkEnglish = () => {
    props.setLanguage("english");
    playKouka(7);
    // props.play(7)
  };
  const checkJapanese = () => {
    props.setLanguage("japanese");
    playKouka(7);
    // props.play(7)
  };

  const checkHiragana = () => {
    props.setLanguage("hiragana");
    playKouka(7);
    // props.play(7)
  };

  return (
    <div>
      <div className="bg-gray-300 mb-8">Choose English or Japanese  （英語でも、あそべるよ）</div>
      <div className="flex flex-wrap gap-5 ml-5 mb-5">
        <RadioBtn
          id="english"
          name="language"
          value="english"
          htmlFor="english"
          text="English"
          onChange={() => checkEnglish()}
        />
      </div>
      <div className="flex flex-wrap gap-5 m-5">
        <RadioBtn
          id="japanese"
          name="language"
          value="japanese"
          htmlFor="japanese"
          text=" 日本語（漢字・ひらがな）"
          onChange={() => checkJapanese()}
        />
        <RadioBtn
          id="hiragana"
          name="language"
          value="hiragana"
          htmlFor="hiragana"
          text=" にほんご（ひらがな）"
          onChange={() => checkHiragana()}
        />
      </div>
    </div> //最初のdiv
  ); //return
}); //RadioLang
