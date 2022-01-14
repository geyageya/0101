import {useState,useCallback} from "react";

export const useSetup =() => {

  //かるたデータ
  const [basicLists,setBasicLists] = useState([]);  //API利用時
  const [karutaLists,setKarutaLists] = useState(basicLists);  //絵札用データ配列

  //トップ画面
  const [language, setLanguage]= useState("default")
  // const [level, setLevel]= useState("default")
  const [area, setArea]= useState("default")
  const [screen, setScreen] = useState(true);  //トップ画面の表示・非表示

   //  APIデータを取得
  const getApiLists = useCallback(async () => {
    const res =await fetch("https://server-karuta2020.herokuapp.com/api/v1/karuta");
    const json = await res.json();
    setBasicLists(json);
  },[]);

  const shuffle=(arr) => { 
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
    }

  // //エリア別札選出）
  const chooseArea = () => {
    switch (area){
      case "Asia":
        {
          const filtered= basicLists.filter(list => list.area==="Asia");
          const shuffled=shuffle(filtered).slice(0,4)
          const result = shuffle([...shuffled]);
          setBasicLists(result)
          const result2 = shuffle([...shuffled]);
          setKarutaLists(result2)
          setArea("default")
        break
        }
      case "Europe":
        {
          const filtered= basicLists.filter(list => list.area==="Europe");
          const shuffled=shuffle(filtered).slice(0,12)
          const result = shuffle([...shuffled]);
          setBasicLists(result)
          const result2 = shuffle([...shuffled]);
          setKarutaLists(result2)
          setArea("default")
        break
        }
      case "Africa":
        {
          const filtered= basicLists.filter(list => list.area==="Africa");
          const shuffled=shuffle(filtered).slice(0,12)
          const result = shuffle([...shuffled]);
          setBasicLists(result)
          const result2 = shuffle([...shuffled]);
          setKarutaLists(result2)
          setArea("default")
        break
        }
      case "Americas":
        {
          const filtered= basicLists.filter(list => list.area==="Americas");
          const shuffled=shuffle(filtered).slice(0,12)
          const result = shuffle([...shuffled]);
          setBasicLists(result)
          const result2 = shuffle([...shuffled]);
          setKarutaLists(result2)
          setArea("default")
        break
        }
      case "Oceania":
       {
          const filtered= basicLists.filter(list => list.area==="Oceania");
          const shuffled=shuffle(filtered).slice(0,12)
          const result = shuffle([...shuffled]);
          setBasicLists(result)
          const result2 = shuffle([...shuffled]);
          setKarutaLists(result2)
          setArea("default")
        break
       }

       case "World":
        {
          const shuffled=shuffle(basicLists).slice(0,12)
          const result = shuffle([...shuffled]);
          setBasicLists(result)
          const result2 = shuffle([...shuffled]);
          setKarutaLists(result2)
          setArea("default")
        break
       }
      default: //World
        {
          const shuffled=shuffle(basicLists).slice(0,12)
          const result = shuffle([...shuffled]);
          setBasicLists(result)
          const result2 = shuffle([...shuffled]);
          setKarutaLists(result2)
          setArea("default")
        }
    }//switch
  }//chooseArea

//ラジオボタン

const chooseAsia=(e) => {
  setArea("Asia")
}

const chooseEurope=(e) => {
  setArea("Europe")
}
const chooseAfrica=(e) => {
  setArea("Africa")
}
const chooseAmericas=(e) => {
  setArea("Americas")
}
const chooseOceania=(e) => {
  setArea("Oceania")
}

const chooseWorld=(e) => {
  setArea("World")
}



  return {basicLists, setBasicLists, karutaLists, setKarutaLists, getApiLists,
    area, setArea, shuffle, chooseArea, chooseAsia, chooseEurope, chooseAfrica, 
    chooseAmericas, chooseOceania, chooseWorld, language, setLanguage, screen, setScreen};
}