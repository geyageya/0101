// import useSound from 'use-sound';

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
  "sounds/effects/button1.mp3",   //playKouka(7)
  "sounds/effects/button2.mp3",   //playKouka(8)
  "sounds/effects/suiteki.mp3",   //playKouka(9)
]

 const koukaSounds =
  [
    "../siin.mp3",    //playKouka(0)
    "../pan.mp3",     //playKouka(1)
    "../bubu.mp3",    //playKouka(2)
    "../effects/chan.mp3",    //playKouka(3)
    "../rappa.mp3",   //playKouka(4)
    "../clap.mp3",    //playKouka(5)
    "../chiin.mp3",   //playKouka(6)
    "../button1.mp3",   //playKouka(7)
    "../button2.mp3",   //playKouka(8)
    "../suiteki.mp3",   //playKouka(9)
  ]



// //効果音
let kouka=new Audio();

const playKouka= (effectNum)=> {
  kouka.preload = "auto";
  kouka.src = effectSounds[effectNum];
  kouka.load();
  kouka.loop = false;
  kouka.play();
};
  return {effectSounds, playKouka, koukaSounds}
};