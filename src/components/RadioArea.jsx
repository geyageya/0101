import React from "react";
import { memo } from "react";
import { RadioBtn } from "./RadioBtn";
import { useKouka } from "../hooks/useKouka";

//メモ化効果:2８回削減（RadioLang:５回 →１回, RadioBtn:24回⇨０回）
export const RadioArea = memo((props) => {
  console.log("RadioArea- Child1");

  const { playKouka } = useKouka();

  const chooseAsia = () => {
    props.setArea("Asia");
    playKouka(7);
    // props.play(7)
  };
  const chooseEurope = () => {
    props.setArea("Europe");
    playKouka(7);
    // props.play(7)
  };
  const chooseAfrica = () => {
    props.setArea("Africa");
    playKouka(7);
    // props.play(7)
  };
  const chooseAmericas = () => {
    props.setArea("Americas");
    playKouka(7);
    // props.play(7)
  };
  const chooseOceania = () => {
    props.setArea("Oceania");
    playKouka(7);
    // props.play(7)
  };
  const chooseWorld = () => {
    props.setArea("World");
    playKouka(7);
    // props.play(7)
  };
  return (
    <div>
      <div className="bg-gray-300 my-8">エリア（１つ選択）</div>
      <div className="flex flex-wrap gap-5 ml-5 mb-5">
        <RadioBtn
          id="World"
          name="area"
          value="World"
          onChange={() => chooseWorld()}
          htmlFor="World"
          text=" 世界（どこでもいい）"
        />
      </div>
      <div className="flex flex-wrap gap-5 m-5">
        <RadioBtn
          id="Asia"
          name="area"
          value="Asia"
          onChange={() => chooseAsia()}
          htmlFor="Asia"
          text=" アジア"
        />
        <RadioBtn
          id="Europe"
          name="area"
          value="Europe"
          onChange={() => chooseEurope()}
          htmlFor="Europe"
          text=" ヨーロッパ"
        />
        <RadioBtn
          id="Africa"
          name="area"
          value="Africa"
          onChange={() => chooseAfrica()}
          htmlFor="Africa"
          text=" アフリカ"
        />
        <RadioBtn
          id="Americas"
          name="area"
          value="Americas"
          onChange={() => chooseAmericas()}
          htmlFor="Americas"
          text=" アメリカ"
        />
        <RadioBtn
          id="Oceania"
          name="area"
          value="Oceania"
          onChange={() => chooseOceania()}
          htmlFor="Oceania"
          text=" オセアニア"
        />
      </div>
    </div> //最初のdiv
  ); //return
}); //RadioArea
