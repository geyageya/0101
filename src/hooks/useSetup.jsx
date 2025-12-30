//シマブーReact動画を見て作成（第２版）loading, error、２つのuseStateを統合。try..catch (finallyなし)
// import { useState, useCallback, useEffect} from "react";
import { useState, useCallback} from "react";
import {useData} from "./useData";

export const useSetup = () => {
  const {dataLists} = useData();
  //かるたデータ
  const [basicLists,setBasicLists] = useState(dataLists);
  //24年3月記載APIなし??
  // const [basicLists, setBasicLists] = useState([]); //API利用時
  const [karutaLists, setKarutaLists] = useState(basicLists); //絵札用データ配列
  //トップ画面
  const [area, setArea] = useState("default");
  //API
  // eslint-disable-next-line no-unused-vars

  // const [state, setState] = useState({
  //   data: [],
  //   loading: true,
  //   error: null,
  // });

  //札の準備ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  //■■■■■useEffect (API)■■■■■
  //APIデータ取得を実行する
  // useEffect(() => {
  //   getApiLists();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  //  APIデータを取得する関数
  // const getApiLists = useCallback(async () => {
  //   // const res = await fetch(
  //   //   "https://server-karuta2020.herokuapp.com/api/v1/karuta"
  //   // );
  //   // const json = await res.json();
  //   // setBasicLists(json);
  //   try {
  //     const res = await fetch(
  //       "https://server-karuta2020.herokuapp.com/api/v1/karuta"
  //     );
  //     if (!res.ok) {
  //       throw new Error("エラーが発生したため、データの取得に失敗しました");
  //     }
  //     const json = await res.json();
  //     setBasicLists(json);
  //     setState((prevState) => {
  //       return {
  //         ...prevState,
  //         //前のデータを展開し
  //         // loading:true,
  //         // error: null,
  //         //下記データで上書きされている
  //         loading: false,
  //       };
  //     });
  //   } catch (error) {
  //     setState((prevState) => {
  //       return {
  //         ...prevState,
  //         //前のデータを展開し
  //         // loading:true,
  //         // error: null,
  //         //下記データで上書きされている
  //         loading: false,
  //         //キーと値が同じ場合、値を省略できる
  //         error,
  //       };
  //     });
  //   }
  // }, []);

  // const shuffle = useCallback((arr) => {
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [arr[j], arr[i]] = [arr[i], arr[j]];
  //   }
  //   return arr;
  // }, []);

  const shuffle = useCallback((arr) => {
  const a = [...arr]; // ★ ここが超重要（コピー）
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[j], a[i]] = [a[i], a[j]];
  }
  return a;
}, []);


  // //エリア別札選出）
  const chooseArea = () => {
    switch (area) {
      case "Asia": {
        const filtered = basicLists.filter((list) => list.area === "Asia");
        const shuffled = shuffle(filtered).slice(0, 12);
        const result = shuffle([...shuffled]);
        setBasicLists(result);
        const result2 = shuffle([...shuffled]);
        setKarutaLists(result2);
        // setArea("default")
        break;
      }
      case "Europe": {
        const filtered = basicLists.filter((list) => list.area === "Europe");
        const shuffled = shuffle(filtered).slice(0, 12);
        const result = shuffle([...shuffled]);
        setBasicLists(result);
        const result2 = shuffle([...shuffled]);
        setKarutaLists(result2);
        // setArea("default")
        break;
      }
      case "Africa": {
        const filtered = basicLists.filter((list) => list.area === "Africa");
        const shuffled = shuffle(filtered).slice(0, 12);
        const result = shuffle([...shuffled]);
        setBasicLists(result);
        const result2 = shuffle([...shuffled]);
        setKarutaLists(result2);
        // setArea("default")
        break;
      }
      case "Americas": {
        const filtered = basicLists.filter((list) => list.area === "Americas");
        const shuffled = shuffle(filtered).slice(0, 12);
        const result = shuffle([...shuffled]);
        setBasicLists(result);
        const result2 = shuffle([...shuffled]);
        setKarutaLists(result2);
        // setArea("default")
        break;
      }
      case "Oceania": {
        const filtered = basicLists.filter((list) => list.area === "Oceania");
        const shuffled = shuffle(filtered).slice(0, 12);
        const result = shuffle([...shuffled]);
        setBasicLists(result);
        const result2 = shuffle([...shuffled]);
        setKarutaLists(result2);
        // setArea("default")
        break;
      }

      case "World": {
        const shuffled = shuffle(basicLists).slice(0, 12);
        const result = shuffle([...shuffled]);
        setBasicLists(result);
        const result2 = shuffle([...shuffled]);
        setKarutaLists(result2);
        // setArea("default")
        break;
      }
      default: //World
      {
        const shuffled = shuffle(basicLists).slice(0, 12);
        const result = shuffle([...shuffled]);
        setBasicLists(result);
        const result2 = shuffle([...shuffled]);
        setKarutaLists(result2);
        setArea("default");
      }
    } //switch
  }; //chooseArea

  return {
    basicLists,
    setBasicLists,
    karutaLists,
    setKarutaLists,
    // getApiLists,
    shuffle,
    chooseArea,
    area,
    setArea,
    // state,
  };
};
