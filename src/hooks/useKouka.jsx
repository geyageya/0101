export const useKouka =() => {

  // Sounds------------------------------------------------------------------
const effectSounds = [
  "sounds/effects/siin.mp3",
  "sounds/effects/pan.mp3", 
  "sounds/effects/bubu.mp3", 
  "sounds/effects/chan.mp3",
  "sounds/effects/clap.mp3",
  "sounds/effects/chiin.mp3", 
]

// //効果音
let kouka=new Audio();

const playKouka= (effectNum)=> {
  kouka.preload = "auto";
  kouka.src = effectSounds[effectNum];
  kouka.load();
  kouka.loop = false;
  kouka.play();
}
  return {effectSounds, playKouka}
}