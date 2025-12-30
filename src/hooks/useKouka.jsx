import { useRef, useCallback } from "react";
import { resolveAsset } from "../utils/assetResolver";

export const useKouka = () => {
  const effectSounds = useRef([
    "sounds/effects/siin.mp3",
    "sounds/effects/pan.mp3",
    "sounds/effects/bubu.mp3",
    "sounds/effects/chan.mp3",
    "sounds/effects/rappa.mp3",
    "sounds/effects/clap.mp3",
    "sounds/effects/chiin.mp3",
    "sounds/effects/button1.mp3",
    "sounds/effects/button2.mp3",
    "sounds/effects/suiteki.mp3",
  ]);

  const audioRef = useRef(null);
  if (!audioRef.current) audioRef.current = new Audio();

  const playKouka = useCallback((effectNum) => {
    const path = effectSounds.current[effectNum];
    const src = resolveAsset(path);
    if (!src) return;

    const a = audioRef.current;
    a.preload = "auto";
    a.src = src;
    a.loop = false;
    a.currentTime = 0;

    // 連打で play が詰まる/失敗するのを最小化
    const p = a.play();
    if (p?.catch) p.catch(() => {});
  }, []);

  return { playKouka };
};

// import { resolveAsset } from "../utils/assetResolver";

// export const useKouka = () => {
//   const effectSounds = [
//     "sounds/effects/siin.mp3",
//     "sounds/effects/pan.mp3",
//     "sounds/effects/bubu.mp3",
//     "sounds/effects/chan.mp3",
//     "sounds/effects/rappa.mp3",
//     "sounds/effects/clap.mp3",
//     "sounds/effects/chiin.mp3",
//     "sounds/effects/button1.mp3",
//     "sounds/effects/button2.mp3",
//     "sounds/effects/suiteki.mp3",
//   ];

//   const kouka = new Audio();

//   const playKouka = (effectNum) => {
//     const src = resolveAsset(effectSounds[effectNum]);
//     if (!src) return;

//     kouka.preload = "auto";
//     kouka.src = src;
//     kouka.loop = false;
//     kouka.currentTime = 0;
//     kouka.play().catch(() => {});
//   };

//   return { playKouka };
// };


