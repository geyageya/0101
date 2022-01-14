export const useKouka =() => {

  // Sounds------------------------------------------------------------------
const effectSounds = [
  "sounds/effects/siin.mp3",    //playKouka(0)
  "sounds/effects/pan.mp3",     //playKouka(1)
  "sounds/effects/bubu.mp3",    //playKouka(2)
  "sounds/effects/chan.mp3",    //playKouka(3)
  "sounds/effects/rappa.mp3",   //playKouka(4)
  "sounds/effects/clap.mp3",    //playKouka(5)
  "sounds/effects/chiin.mp3",   //playKouka(6)
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