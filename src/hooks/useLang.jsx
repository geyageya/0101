import {useSetup} from "/useSetup"



export const useLang =() => {

  const {language, setLanguage, basicLists} = useSetup();

      //読みあげ （引数あり）
      let clueSounds=new Audio();
 
      const readClue = (currentNum)=> {
    
        if (currentNum < basicLists.length -1){
          //switch
        switch (language){
          case "default":
            clueSounds.src = basicLists[currentNum].read; //英語
            setLanguage("default")
            break
          case "japanese":
            clueSounds.src = basicLists[currentNum].yomu; //日本語
            break
          case "english":
            clueSounds.src = basicLists[currentNum].read; //英語
            break
          default:
            clueSounds.src = basicLists[currentNum].read; //英語
        }
    
        clueSounds.play();}
        clueSounds.preload = "auto";
        clueSounds.loop = false;
      }

  return {readClue};
}
