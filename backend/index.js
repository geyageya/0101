const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3001;



//---以下、Udemy講座で作成（バックエンドとフロントエンドの関係を学ぶのに最適）----
//バックエンドのみで表示する場合
app.get("/", (req,res)=>{
    res.send("<h1>Topページ</h1>");
});

 //Heroku対応
 const PORT = process.env.PORT || 3001;
 app.listen(PORT, ()=> {
 console.log(`I am running':${port}`);
 });

// app.get('/about', function (req,res){
//     res.send('Aboutページ')
// })

//フォームで受けとった情報(req.body)を使うために必要
app.use(express.urlencoded({ extended: false}));
//publicフォルダー内のhtmlを表示できるようにする（フロントエンド）
app.use(express.static(path.join(__dirname,"public")));

//フロントエンドとして別にする場合（HTMLファイルの置き場を設ける）
app.post("/api/v1/quiz", function (req, res) {
    //bodyに入力情報(数値でなく文字)が入ってくる。
    const answer = req.body.answer;
    //req.bodyに入る情報が文字のため、2ではなく、"2"とする
    if(answer==="2"){
        //バックエンドだけで表示
        // res.send("<h1>正解</h1>");
        //フロントエンドで表示（別途htmlを作りリダイレクト）
        res.redirect("/correct.html");
    }
    else {
        // res.send("<h1>不正解</h1>");
        //別途htmlページを作りそこにリダイレクトして表示
        res.redirect("/wrong.html");
    }
});

//--------APIサーバー（Udemyと関係ない）


app.use(cors());

// app.use(cors({
//   origin: 'https://react-karuta2020.herokuapp.com/', //アクセス許可するオリジン
//   credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
//   optionsSuccessStatus: 200 //レスポンスstatusを200に設定
// }))

app.get("/api/v1/karuta", function (req, res) {
    res.send(
      [
        {"id":"1","clue":"'By the river, a brown tower stands alone.","yomiku":"青タイルが　光るレンガの　ミナレット","answer":"../images/pictures/001_p.png","read":"../sounds/en/001_en.mp3","yomu":"../sounds/jp/001_jp.mp3","flag":"../images/flags/001_AFG_50.png","area":"Asia","subject":"Minaret of Jam","country":"Afghanistan","daizai":"ジャムのミナレット塔","kuni":"アフガニスタン","id-area":"AS-01","furigana":"あおたいるが　ひかるれんがの　みなれっと","hand":"", "handPc":""}
        ,
        {"id":"2","clue":"'Not a pet. Cats live in the desert.","yomiku":"砂漠に暮らす　足裏黒い　元気な猫","answer":"../images/pictures/002_p.png","read":"../sounds/en/002_en.mp3","yomu":"../sounds/jp/002_jp.mp3","flag":"../images/flags/028_BRN_50.png","area":"Asia","subject":"Arabian Sand Cats","country":"Bahrain","daizai":"スナネコ","kuni":"バーレーン","id-area":"AS-02","furigana":"さばくにくらす　あしうらくろい　げんきなねこ","hand":"", "handPc":""}
        ,
        {"id":"3","clue":"'Beat drums and carry paper animals in the New Year.","yomiku":"新年に　はりぼて担ぎ　太鼓打つ","answer":"../images/pictures/003_p.png","read":"../sounds/en/003_en.mp3","yomu":"../sounds/jp/003_jp.mp3","flag":"../images/flags/015_BAN_50.png","area":"Asia","subject":"Pahela Baishakh (Bengali New Year)","country":"Bangladesh","daizai":"ベンガル新年","kuni":"バングラディシュ","id-area":"AS-03","furigana":"しんねんに　はりぼてかつぎ　たいこうつ","hand":"", "handPc":""}
        ,
        {"id":"4","clue":"'Dressed in traditional costume, the King and Queen look happy.'","yomiku":"国王に　よりそう王妃　幸福の国","answer":"../images/pictures/004_p.png","read":"../sounds/en/004_en.mp3","yomu":"../sounds/jp/004_jp.mp3","flag":"../images/flags/021_BHU_50.png","area":"Asia","subject":"\"A Happy Country\"","country":"Bhutan","daizai":"「幸せの国」","kuni":"ブータン","id-area":"AS-04","furigana":"こくおうに　よりそうおうひ　こうふくのくに","hand":"", "handPc":""}
        ,
        {"id":"5","clue":"'By the water, a white building with a gold roof'","yomiku":"水辺に映る　ブルネイの誇り","answer":"../images/pictures/005_p.png","read":"../sounds/en/005_en.mp3","yomu":"../sounds/jp/005_jp.mp3","flag":"../images/flags/029_BRU_50.png","area":"Asia","subject":"Omar Ali Saifuddien Mosque","country":"Brunei Darussalam","daizai":"オマール・アリ・サイフディン・モスク","kuni":"ブルネイ・ダルサラーム","id-area":"AS-05","furigana":"みずべにうつる　ぶるねいのほこり","hand":"", "handPc":""}
        ,
        {"id":"6","clue":"'Put them in a pot, fry in oil and eat.'","yomiku":"鍋に入れ　油で揚げた　クモ食べる","answer":"../images/pictures/006_p.png","read":"../sounds/en/006_en.mp3","yomu":"../sounds/jp/006_jp.mp3","flag":"../images/flags/033_CAM_50.png","area":"Asia","subject":"Fried Spider","country":"Cambodia","daizai":"クモのフライ","kuni":"カンボジア","id-area":"AS-06","furigana":"なべにいれ　あぶらであげた　くもたべる","hand":"", "handPc":""}
        ,
        {"id":"7","clue":"'Fireworks in the night sky of a growing city'","yomiku":"101　街の夜空に　咲く花火","answer":"../images/pictures/007_p.png","read":"../sounds/en/007_en.mp3","yomu":"../sounds/jp/007_jp.mp3","flag":"../images/flags/189_TPE_50.png","area":"Asia","subject":"Taipei 101 Tower","country":"Chinese Taipei","daizai":"タイペイ101ビル","kuni":"チャイニーズ・タイペイ","id-area":"AS-07","furigana":"いちまるいち　まちのよぞらに　さくはなび","hand":"", "handPc":""}
        ,
        {"id":"8","clue":"'Dance and smile together in yellow or pink costumes.'","yomiku":"着飾って　笑顔で祝う　舞踏会","answer":"../images/pictures/008_p.png","read":"../sounds/en/008_en.mp3","yomu":"../sounds/jp/008_jp.mp3","flag":"../images/flags/154_PRK_50.png","area":"Asia","subject":"Dancing Ceremony","country":"Democratic People's Republic of Korea","daizai":"祝賀舞踏会","kuni":"朝鮮民主主義人民共和国","id-area":"AS-08","furigana":"きかざって　えがおでいわう　ぶとうかい","hand":"", "handPc":""}
        ,
        {"id":"9","clue":"'Walk around with a long monster to the beat of drums.'","yomiku":"龍が舞う　太鼓に合わせ　練り歩く","answer":"../images/pictures/009_p.png","read":"../sounds/en/009_en.mp3","yomu":"../sounds/jp/009_jp.mp3","flag":"../images/flags/082_HKG_50.png","area":"Asia","subject":"Tai Hang Fire Dragon Dance","country":"Hong Kong, China","daizai":"ファイヤー・ドラゴン・ダンス","kuni":"ホンコン・チャイナ","id-area":"AS-09","furigana":"りゅうがまう　たいこにあわせ　ねりあるく","hand":"", "handPc":""}
        ,
        {"id":"10","clue":"'Temples and festivals around the wheel'","yomiku":"奥深い　多様な文化　認め合い","answer":"../images/pictures/010_p.png","read":"../sounds/en/010_en.mp3","yomu":"../sounds/jp/010_jp.mp3","flag":"../images/flags/086_IND_50.png","area":"Asia","subject":"Indian Beauty","country":"India","daizai":"インド文化","kuni":"インド","id-area":"AS-10","furigana":"おくふかい　たようなぶんか　みとめあい","hand":"", "handPc":""}
        ,
        {"id":"11","clue":"'Move arms and legs with a folding fan in hand.'","yomiku":"扇子手に　冠かぶり　神の舞","answer":"../images/pictures/011_p.png","read":"../sounds/en/011_en.mp3","yomu":"../sounds/jp/011_jp.mp3","flag":"../images/flags/085_INA_50.png","area":"Asia","subject":"Balinese Dance","country":"Indonesia","daizai":"バリ舞踊","kuni":"インドネシア","id-area":"AS-11","furigana":"せんすてに　かんむりかぶり　かみのまい","hand":"", "handPc":""}
        ,
        {"id":"12","clue":"'Houses are crowded on top of the rocky mountain.'","yomiku":"岩山の　てっぺんの街　アマディヤ","answer":"../images/pictures/012_p.png","read":"../sounds/en/012_en.mp3","yomu":"../sounds/jp/012_jp.mp3","flag":"../images/flags/089_IRQ_50.png","area":"Asia","subject":"Amadiya (mountain top town)","country":"Iraq","daizai":"アマディヤ（山頂の街）","kuni":"イラク","id-area":"AS-12","furigana":"いわやまの　てっぺんのまち　あまでぃや","hand":"", "handPc":""}
        ,
        {"id":"13","clue":"'In winter, get together and enjoy food and poems.'","yomiku":"長い夜　皆で楽しむ　詩と食事","answer":"../images/pictures/013_p.png","read":"../sounds/en/013_en.mp3","yomu":"../sounds/jp/013_jp.mp3","flag":"../images/flags/087_IRI_50.png","area":"Asia","subject":"Yalda Eve Ceremony","country":"Islamic Republic of Iran","daizai":"ヤルダー(冬至の儀式)","kuni":"イラン・イスラム共和国","id-area":"AS-13","furigana":"ながいよる　みなでたのしむ　しとしょくじ","hand":"", "handPc":""}
        ,
        {"id":"14","clue":"'In the wind, a family of fish swims above the roof.'","yomiku":"風に乗り　親子が泳ぐ　鯉のぼり","answer":"../images/pictures/014_p.png","read":"../sounds/en/014_en.mp3","yomu":"../sounds/jp/014_jp.mp3","flag":"../images/flags/097_JPN_50.png","area":"Asia","subject":"Koinobori (carp streamer)","country":"Japan","daizai":"こいのぼり","kuni":"日本","id-area":"AS-14","furigana":"かぜにのり　おやこがおよぐ　こいのぼり","hand":"", "handPc":""}
        ,
        {"id":"15","clue":"'Cut out a rocky mountain to build a town.'","yomiku":"岩山を　削りつくった　街の跡","answer":"../images/pictures/015_p.png","read":"../sounds/en/015_en.mp3","yomu":"../sounds/jp/015_jp.mp3","flag":"../images/flags/096_JOR_50.png","area":"Asia","subject":"Petra Ruins","country":"Jordan","daizai":"ペトラ遺跡","kuni":"ヨルダン","id-area":"AS-15","furigana":"いわやまを　けずりつくった　まちのあと","hand":"", "handPc":""}
        ,
        {"id":"16","clue":"'Ride horses and catch an animal to the goal.'","yomiku":"馬に乗り　ヤギ奪い合い　ゴールする","answer":"../images/pictures/016_p.png","read":"../sounds/en/016_en.mp3","yomu":"../sounds/jp/016_jp.mp3","flag":"../images/flags/098_KAZ_50.png","area":"Asia","subject":"Kokpar (horse game)","country":"Kazakhstan","daizai":"キョクボル（馬競技）","kuni":"カザフスタン","id-area":"AS-16","furigana":"うまにのり　やぎうばいあい　ごおるする","hand":"", "handPc":""}
        ,
        {"id":"17","clue":"'Towers have blue and white lines, waiting for the rain.'","yomiku":"てっぺんに　雨水集める　キノコタワー","answer":"../images/pictures/017_p.png","read":"../sounds/en/017_en.mp3","yomu":"../sounds/jp/017_jp.mp3","flag":"../images/flags/105_KUW_50.png","area":"Asia","subject":"Kuwait Water Towers","country":"Kuwait","daizai":"クウェート給水塔","kuni":"クウェート","id-area":"AS-17","furigana":"てっぺんに　あまみずあつめる　きのこたわあ","hand":"", "handPc":""}
        ,
        {"id":"18","clue":"'Snow mountains, and the brown tower on the land'","yomiku":"草原に　堂々と立つ　塔一つ","answer":"../images/pictures/018_p.png","read":"../sounds/en/018_en.mp3","yomu":"../sounds/jp/018_jp.mp3","flag":"../images/flags/100_KGZ_50.png","area":"Asia","subject":"Burana Tower","country":"Kyrgyzstan","daizai":"ブラナの塔","kuni":"キルギスタン","id-area":"AS-18","furigana":"そうげんに　どうどうとたつ　とうひとつ","hand":"", "handPc":""}
        ,
        {"id":"19","clue":"'Over the net, hit a ball with feet and head.'","yomiku":"手は出すな　足と頭で　球を打て","answer":"../images/pictures/019_p.png","read":"../sounds/en/019_en.mp3","yomu":"../sounds/jp/019_jp.mp3","flag":"../images/flags/106_LAO_50.png","area":"Asia","subject":"Katow (kick volleyball)","country":"Lao People's Democratic Republic","daizai":"セパタクロー（キック・バレー）","kuni":"ラオス人民民主共和国","id-area":"AS-19","furigana":"てわだすな　あしとあたまで　たまをうて","hand":"", "handPc":""}
        ,
        {"id":"20","clue":"'People believe God planted the trees here.'","yomiku":"国旗にも　描かれている　聖なる木","answer":"../images/pictures/020_p.png","read":"../sounds/en/020_en.mp3","yomu":"../sounds/jp/020_jp.mp3","flag":"../images/flags/112_LIB_50.png","area":"Asia","subject":"The Cedars of God","country":"Lebanon","daizai":"神の杉","kuni":"レバノン","id-area":"AS-20","furigana":"こっきにも　えがかれている　せいなるき","hand":"", "handPc":""}
        ,
        {"id":"21","clue":"'Drink white coffee after a meal to wake up.'","yomiku":"目がさめる　食事のあとの　白コーヒー","answer":"../images/pictures/021_p.png","read":"../sounds/en/021_en.mp3","yomu":"../sounds/jp/021_jp.mp3","flag":"../images/flags/118_MAS_50.png","area":"Asia","subject":"Malaysian Breakfast","country":"Malaysia","daizai":"マレーシアの朝ごはん","kuni":"マレーシア","id-area":"AS-21","furigana":"めがさめる　しょくじのあとの　しろこおひい","hand":"", "handPc":""}
        ,
        {"id":"22","clue":"'Eyes and a nose are at either end of the long face.'","yomiku":"ハンマーか　顔の両端　離れた目","answer":"../images/pictures/022_p.png","read":"../sounds/en/022_en.mp3","yomu":"../sounds/jp/022_jp.mp3","flag":"../images/flags/121_MDV_50.png","area":"Asia","subject":"Hammerhead Shark","country":"Maldives","daizai":"シュモクザメ","kuni":"モルディヴ","id-area":"AS-22","furigana":"はんまあか　かおのりょうはし　はなれため","hand":"", "handPc":""}
        ,
        {"id":"23","clue":"'Play an instrument with two strings and a horse's head.'","yomiku":"２本の弦　馬頭の飾り　ついた楽器","answer":"../images/pictures/023_p.png","read":"../sounds/en/023_en.mp3","yomu":"../sounds/jp/023_jp.mp3","flag":"../images/flags/123_MGL_50.png","area":"Asia","subject":"Morin Khuur (music instrument)","country":"Mongolia","daizai":"モリンホール（弦楽器）","kuni":"モンゴル","id-area":"AS-23","furigana":"にほんのげん　ばとうのかざり　ついたがっき","hand":"", "handPc":""}
        ,
        {"id":"24","clue":"'Take off your shoes and enter the golden temple.'","yomiku":"金色の　塔たち並ぶ　聖地なり","answer":"../images/pictures/024_p.png","read":"../sounds/en/024_en.mp3","yomu":"../sounds/jp/024_jp.mp3","flag":"../images/flags/133_MYA_50.png","area":"Asia","subject":"Shwedagon Pagoda","country":"Myanmar","daizai":"シェダゴンパゴダ（仏塔）","kuni":"ミャンマー","id-area":"AS-24","furigana":"きんいろの　とうたちならぶ　せいちなり","hand":"", "handPc":""}
        ,
        {"id":"25","clue":"'Many colourful flags and a face with big eyes'","yomiku":"ドームから　四方見つめる　仏の目","answer":"../images/pictures/025_p.png","read":"../sounds/en/025_en.mp3","yomu":"../sounds/jp/025_jp.mp3","flag":"../images/flags/137_NEP_50.png","area":"Asia","subject":"Boudhanath Stupa","country":"Nepal","daizai":"ボダナート仏塔","kuni":"ネパール","id-area":"AS-25","furigana":"どおむから　しほうみつめる　ほとけのめ","hand":"", "handPc":""}
        ,
        {"id":"26","clue":"'Brown castles and palm trees on a pot.'","yomiku":"真鍮の　ポットに映る　城の街","answer":"../images/pictures/026_p.png","read":"../sounds/en/026_en.mp3","yomu":"../sounds/jp/026_jp.mp3","flag":"../images/flags/143_OMA_50.png","area":"Asia","subject":"Aspects of Oman","country":"Oman","daizai":"城とポット","kuni":"オマーン","id-area":"AS-26","furigana":"しんちゅうの　ぽっとにうつる　しろのまち","hand":"", "handPc":""}
        ,
        {"id":"27","clue":"'Drive through the high mountains and cross the border.'","yomiku":"山を越え　天空の旅　カラコルム","answer":"../images/pictures/027_p.png","read":"../sounds/en/027_en.mp3","yomu":"../sounds/jp/027_jp.mp3","flag":"../images/flags/144_PAK_50.png","area":"Asia","subject":"Karakoram Highway","country":"Pakistan","daizai":"カラコラム・ハイウェイ","kuni":"パキスタン","id-area":"AS-27","furigana":"やまをこえ　てんくうのたび　からこるむ","hand":"", "handPc":""}
        ,
        {"id":"28","clue":"'Cover the face with a black and white cloth.'","yomiku":"さっそうと　白黒の布　顔に巻く","answer":"../images/pictures/028_p.png","read":"../sounds/en/028_en.mp3","yomu":"../sounds/jp/028_jp.mp3","flag":"../images/flags/149_PLE_50.png","area":"Asia","subject":"Palestinian Keffiyeh (scarf)","country":"Palestine","daizai":"クーフィーヤ（スカーフ）","kuni":"パレスチナ","id-area":"AS-28","furigana":"さっそうと　しろくろのぬの　かおにまく","hand":"", "handPc":""}
        ,
        {"id":"29","clue":"'Imagine a view from the wall of six thousand kilometres long.'","yomiku":"長い壁　えんえん続く　6000キロ","answer":"../images/pictures/029_p.png","read":"../sounds/en/029_en.mp3","yomu":"../sounds/jp/029_jp.mp3","flag":"../images/flags/039_CHN_50.png","area":"Asia","subject":"The Great Wall of China","country":"People's Republic of China","daizai":"万里の長城","kuni":"中華人民共和国","id-area":"AS-29","furigana":"ながいかべ　えんえんつづく　ろくせんきろ","hand":"", "handPc":""}
        ,
        {"id":"30","clue":"'Children are happy to buy ice cream from a stall.'","yomiku":"アイスやフルーツの露店出て　街元気","answer":"../images/pictures/030_p.png","read":"../sounds/en/030_en.mp3","yomu":"../sounds/jp/030_jp.mp3","flag":"../images/flags/148_PHI_50.png","area":"Asia","subject":"Street Vendors","country":"Philippines","daizai":"露店商","kuni":"フィリピン","id-area":"AS-30","furigana":"あいすやふるうつの　ろてんでて　まちげんき","hand":"", "handPc":""}
        ,
        {"id":"31","clue":"'Connect two knives and build them across the road.'","yomiku":"道またぎ　2本の剣が　アーチ描く","answer":"../images/pictures/031_p.png","read":"../sounds/en/031_en.mp3","yomu":"../sounds/jp/031_jp.mp3","flag":"../images/flags/156_QAT_50.png","area":"Asia","subject":"Arch of Swords","country":"Qatar","daizai":"剣のアーチ","kuni":"カタール","id-area":"AS-31","furigana":"みちまたぎ　にほんのけんが　ああちえがく","hand":"", "handPc":""}
        ,
        {"id":"32","clue":"'With a drum in hand, jump and turn round and round.'","yomiku":"太鼓打ち　笛吹き豊作　願う舞い","answer":"../images/pictures/032_p.png","read":"../sounds/en/032_en.mp3","yomu":"../sounds/jp/032_jp.mp3","flag":"../images/flags/102_KOR_50.png","area":"Asia","subject":"Pungmul Farmer's Dance","country":"Republic of Korea","daizai":"農楽舞","kuni":"大韓民国","id-area":"AS-32","furigana":"たいこうち　ふえふきほうさく　ねがうまい","hand":"", "handPc":""}
        ,
        {"id":"33","clue":"'In the sun shines a building with a green roof.'","yomiku":"陽を浴びて　輝くモスク　屋根みどり","answer":"../images/pictures/033_p.png","read":"../sounds/en/033_en.mp3","yomu":"../sounds/jp/033_jp.mp3","flag":"../images/flags/104_KSA_50.png","area":"Asia","subject":"The Prophet's Mosque","country":"Saudi Arabia","daizai":"預言者のモスク","kuni":"サウジアラビア","id-area":"AS-33","furigana":"ひをあびて　かがやくもすく　やねみどり","hand":"", "handPc":""}
        ,
        {"id":"34","clue":"'Kiss a flower in the air with buildings across the sea.'","yomiku":"羽広げ　花の蜜吸う　太陽の鳥","answer":"../images/pictures/034_p.png","read":"../sounds/en/034_en.mp3","yomu":"../sounds/jp/034_jp.mp3","flag":"../images/flags/164_SIN_50.png","area":"Asia","subject":"Crimson Sunbird","country":"Singapore","daizai":"キゴシタイヨウチョウ","kuni":"シンガポール","id-area":"AS-34","furigana":"はねひろげ　はなのみつすう　たいようのとり","hand":"", "handPc":""}
        ,
        {"id":"35","clue":"'Elephants and other animals live together in the forest.'","yomiku":"森の中　仲良く暮らす　象と鹿","answer":"../images/pictures/035_p.png","read":"../sounds/en/035_en.mp3","yomu":"../sounds/jp/035_jp.mp3","flag":"../images/flags/172_SRI_50.png","area":"Asia","subject":"Yala National Park","country":"Sri Lanka","daizai":"ヤラ国立公園","kuni":"スリランカ","id-area":"AS-35","furigana":"もりのなか　なかよくくらす　ぞうとしか","hand":"", "handPc":""}
        ,
        {"id":"36","clue":"'Hiding half of the body, a small golden animal'","yomiku":"金色の　毛をしたねずみ　走り回る","answer":"../images/pictures/036_p.png","read":"../sounds/en/036_en.mp3","yomu":"../sounds/jp/036_jp.mp3","flag":"../images/flags/181_SYR_50.png","area":"Asia","subject":"Golden Hamster","country":"Syrian Arab Republic","daizai":"ゴールデンハムスター","kuni":"シリア・アラブ共和国","id-area":"AS-36","furigana":"きんいろの　けをしたねずみ　はしりまわる","hand":"", "handPc":""}
        ,
        {"id":"37","clue":"'On top of the gate, towers stand with a blue roof.'","yomiku":"青い屋根　街を見下ろす　ムグ・テペ城","answer":"../images/pictures/037_p.png","read":"../sounds/en/037_en.mp3","yomu":"../sounds/jp/037_jp.mp3","flag":"../images/flags/185_TJK_50.png","area":"Asia","subject":"Mug Tepe Citadel","country":"Tajikistan","daizai":"ムグ・テペ砦","kuni":"タジキスタン","id-area":"AS-37","furigana":"あおいやね　まちをみおろす　むぐ・てぺじょう","hand":"", "handPc":""}
        ,
        {"id":"38","clue":"'Cross the river by boat and visit the temple.'","yomiku":"舟に乗り　川を渡れば　暁の寺","answer":"../images/pictures/038_p.png","read":"../sounds/en/038_en.mp3","yomu":"../sounds/jp/038_jp.mp3","flag":"../images/flags/184_THA_50.png","area":"Asia","subject":"Wat Arun Temple","country":"Thailand","daizai":"ワットアルン寺院","kuni":"タイ","id-area":"AS-38","furigana":"ふねにのり　かわをわたれば　あかつきのてら","hand":"", "handPc":""}
        ,
        {"id":"39","clue":"'Spreading arms, the statue stands on a globe.'","yomiku":"腕広げ　地球儀に立つ　キリスト像","answer":"../images/pictures/039_p.png","read":"../sounds/en/039_en.mp3","yomu":"../sounds/jp/039_jp.mp3","flag":"../images/flags/187_TLS_50.png","area":"Asia","subject":"Cristo Rei Statue","country":"Timor-Leste","daizai":"クリストレイ像","kuni":"東ティモール","id-area":"AS-39","furigana":"うでひろげ　ちきゅうぎにたつ　きりすとぞう","hand":"", "handPc":""}
        ,
        {"id":"40","clue":"'Run beside the natural gas burning in the big hole.'","yomiku":"燃えあがる　炎の脇を　駆け抜ける","answer":"../images/pictures/040_p.png","read":"../sounds/en/040_en.mp3","yomu":"../sounds/jp/040_jp.mp3","flag":"../images/flags/186_TKM_50.png","area":"Asia","subject":"Gas Crater & Akhal-Teke Horse","country":"Turkmenistan","daizai":"天然ガス田・アハルテケ馬","kuni":"トルクメニスタン","id-area":"AS-40","furigana":"もえあがる　ほのおのわきを　かけぬける","hand":"", "handPc":""}
        ,
        {"id":"41","clue":"'Very tall building about to touch the sky'","yomiku":"青空を　突き刺すように　伸びるビル","answer":"../images/pictures/041_p.png","read":"../sounds/en/041_en.mp3","yomu":"../sounds/jp/041_jp.mp3","flag":"../images/flags/194_UAE_50.png","area":"Asia","subject":"Burj Khalifa Tower","country":"United Arab Emirates","daizai":"ブルジュ・ハリファ・タワー","kuni":"アラブ首長国連邦","id-area":"AS-41","furigana":"あおぞらを　つきさすように　のびるびる","hand":"", "handPc":""}
        ,
        {"id":"42","clue":"'In memory of the dead, blue buildings continue.'","yomiku":"青色の　死者の建物　続く道","answer":"../images/pictures/042_p.png","read":"../sounds/en/042_en.mp3","yomu":"../sounds/jp/042_jp.mp3","flag":"../images/flags/199_UZB_50.png","area":"Asia","subject":"Shah-i-Zinda Mausoleums","country":"Uzbekistan","daizai":"シャーヒズインダ霊廟群","kuni":"ウズベキスタン","id-area":"AS-42","furigana":"あおいろの　ししゃのたてもの　つづくみち","hand":"", "handPc":""}
        ,
        {"id":"43","clue":"'Hang colourful lamps in the whole town on full moon night.'","yomiku":"満月の　夜を彩る　提灯祭","answer":"../images/pictures/043_p.png","read":"../sounds/en/043_en.mp3","yomu":"../sounds/jp/043_jp.mp3","flag":"../images/flags/202_VIE_50.png","area":"Asia","subject":"Hoi An Full Moon Lantern Festival","country":"Vietnam","daizai":"ホイアン・ランタン祭り","kuni":"ベトナム","id-area":"AS-43","furigana":"まんげつの　よるをいろどる　ちょうちんまつり","hand":"", "handPc":""}
        ,
        {"id":"44","clue":"'Sell knives for men to use for dancing.'","yomiku":"伝統の　儀式に使う　短い剣","answer":"../images/pictures/044_p.png","read":"../sounds/en/044_en.mp3","yomu":"../sounds/jp/044_jp.mp3","flag":"../images/flags/204_YEM_50.png","area":"Asia","subject":"Jambiya Knife","country":"Yemen","daizai":"ジャンビーア短剣","kuni":"イエメン","id-area":"AS-44","furigana":"でんとうの　ぎしきにつかう　みじかいけん","hand":"", "handPc":""}
        ,
        {"id":"45","clue":"'Water comes out of the river bed and shines blue.'","yomiku":"川底の　湧き出る泉　青透きとおる","answer":"../images/pictures/045_p.png","read":"../sounds/en/045_en.mp3","yomu":"../sounds/jp/045_jp.mp3","flag":"../images/flags/002_ALB_50.png","area":"Europe","subject":"Blue Eye Spring","country":"Albania","daizai":"ブルーアイ（泉）","kuni":"アルバニア","id-area":"EU-01","furigana":"かわぞこの　わきでるいずみ　あおすきとおる","hand":"", "handPc":""}
        ,
        {"id":"46","clue":"'In the mountain, dance in a circle hand in hand.'","yomiku":"手をとって　輪になり踊る　コントラパス","answer":"../images/pictures/046_p.png","read":"../sounds/en/046_en.mp3","yomu":"../sounds/jp/046_jp.mp3","flag":"../images/flags/004_AND_50.png","area":"Europe","subject":"Contrap?s Dance","country":"Andorra","daizai":"コントラパス・ダンス","kuni":"アンドラ","id-area":"EU-02","furigana":"てをとって　わになりおどる　こんとらぱす","hand":"", "handPc":""}
        ,
        {"id":"47","clue":"'Parts of the old church still exist after the earthquake.'","yomiku":"教会の　アーチが残る　震災跡","answer":"../images/pictures/047_p.png","read":"../sounds/en/047_en.mp3","yomu":"../sounds/jp/047_jp.mp3","flag":"../images/flags/008_ARM_50.png","area":"Europe","subject":"Zvartnots Cathedral Ruins","country":"Armenia","daizai":"ズヴァルトノッツ大聖堂跡","kuni":"アルメニア","id-area":"EU-03","furigana":"きょうかいの　ああちがのこる　しんさいあと","hand":"", "handPc":""}
        ,
        {"id":"48","clue":"'In steep mountains, animals are in the moonlight.'","yomiku":"山険し　月夜が照らす　キツネたち","answer":"../images/pictures/048_p.png","read":"../sounds/en/048_en.mp3","yomu":"../sounds/jp/048_jp.mp3","flag":"../images/flags/012_AUT_50.png","area":"Europe","subject":"Austrian Alps","country":"Austria","daizai":"オーストリア・アルプス","kuni":"オーストリア","id-area":"EU-04","furigana":"やまけわし　つきよがてらす　きつねたち","hand":"", "handPc":""}
        ,
        {"id":"49","clue":"'Standing in the old town with strong winds from the sea'","yomiku":"どっしりと　海沿いに立つ　石の城","answer":"../images/pictures/049_p.png","read":"../sounds/en/049_en.mp3","yomu":"../sounds/jp/049_jp.mp3","flag":"../images/flags/013_AZE_50.png","area":"Europe","subject":"Maiden Tower","country":"Azerbaijan","daizai":"乙女の塔","kuni":"アゼルバイジャン","id-area":"EU-05","furigana":"どっしりと　うみぞいにたつ　いしのようさい","hand":"", "handPc":""}
        ,
        {"id":"50","clue":"'On the ice, the players shoot with their stick.'","yomiku":"氷の上　スティック自在に　シュート打つ","answer":"../images/pictures/050_p.png","read":"../sounds/en/050_en.mp3","yomu":"../sounds/jp/050_jp.mp3","flag":"../images/flags/024_BLR_50.png","area":"Europe","subject":"Ice Hockey","country":"Belarus","daizai":"アイスホッケー","kuni":"ベラルーシ","id-area":"EU-06","furigana":"こおりのうえ　すてぃっくじざいに　しゅうとうつ","hand":"", "handPc":""}
        ,
        {"id":"51","clue":"'Use the ingredients on the table to make the bar.'","yomiku":"テーブルに　美食の国の　甘い菓子","answer":"../images/pictures/051_p.png","read":"../sounds/en/051_en.mp3","yomu":"../sounds/jp/051_jp.mp3","flag":"../images/flags/018_BEL_50.png","area":"Europe","subject":"Belgian Chocolate","country":"Belgium","daizai":"ベルギーチョコレート","kuni":"ベルギー","id-area":"EU-07","furigana":"てえぶるに　びしょくのくにの　あまいかし","hand":"", "handPc":""}
        ,
        {"id":"52","clue":"'Put nose close to the ground and find the hidden bombs.'","yomiku":"くんくんと　隠れた地雷　見つけ出す","answer":"../images/pictures/052_p.png","read":"../sounds/en/052_en.mp3","yomu":"../sounds/jp/052_jp.mp3","flag":"../images/flags/022_BIH_50.png","area":"Europe","subject":"Betsy (mine detection dog)","country":"Bosnia and Herzegovina","daizai":"ベッツィ（地雷探査犬）","kuni":"ボスニア・ヘルツェゴビナ","id-area":"EU-08","furigana":"くんくんと　かくれたじらい　みつけだす","hand":"", "handPc":""}
        ,
        {"id":"53","clue":"'Hold a bunch of red flowers in both hands.'","yomiku":"花束を　両手に抱え　プレゼント","answer":"../images/pictures/053_p.png","read":"../sounds/en/053_en.mp3","yomu":"../sounds/jp/053_jp.mp3","flag":"../images/flags/030_BUL_50.png","area":"Europe","subject":"Bulgarian Rose Oil","country":"Bulgaria","daizai":"ローズオイル","kuni":"ブルガリア","id-area":"EU-09","furigana":"はなたばを　りょうてにかかえ　ぷれぜんと","hand":"", "handPc":""}
        ,
        {"id":"54","clue":"'In a national park, lakes and waterfalls continue.'","yomiku":"湖と　滝が連なる　大自然","answer":"../images/pictures/054_p.png","read":"../sounds/en/054_en.mp3","yomu":"../sounds/jp/054_jp.mp3","flag":"../images/flags/048_CRO_50.png","area":"Europe","subject":"Plitvice Lakes National Park","country":"Croatia","daizai":"プリトヴィツェ湖国立公園","kuni":"クロアチア","id-area":"EU-10","furigana":"みずうみと　たきがつらなる　だいしぜん","hand":"", "handPc":""}
        ,
        {"id":"55","clue":"'Pink flowers grow in the mountains on the island.'","yomiku":"島国の　ピンクの花は　国の花","answer":"../images/pictures/055_p.png","read":"../sounds/en/055_en.mp3","yomu":"../sounds/jp/055_jp.mp3","flag":"../images/flags/050_CYP_50.png","area":"Europe","subject":"Cyprus Cyclamen","country":"Cyprus","daizai":"キプロス・シクラメン","kuni":"キプロス","id-area":"EU-11","furigana":"しまぐにの　ぴんくのはなわ　くにのはな","hand":"", "handPc":""}
        ,
        {"id":"56","clue":"'Every hour, the small doors open to tell the time.'","yomiku":"正確に　時をきざんで　６００年","answer":"../images/pictures/056_p.png","read":"../sounds/en/056_en.mp3","yomu":"../sounds/jp/056_jp.mp3","flag":"../images/flags/051_CZE_50.png","area":"Europe","subject":"Prague Astronomical Clock","country":"Czech Republic","daizai":"プラハの天文時計","kuni":"チェコ共和国","id-area":"EU-12","furigana":"せいかくに　ときをきざんで　ろっぴゃくねん","hand":"", "handPc":""}
        ,
        {"id":"57","clue":"'Change her tail to legs and visit the prince's castle.'","yomiku":"人魚姫　姿をかえて　王子の城へ","answer":"../images/pictures/057_p.png","read":"../sounds/en/057_en.mp3","yomu":"../sounds/jp/057_jp.mp3","flag":"../images/flags/052_DEN_50.png","area":"Europe","subject":"The Little Mermaid","country":"Denmark","daizai":"人魚姫","kuni":"デンマーク","id-area":"EU-13","furigana":"にんぎょひめ　すがたをかえて　おうじのしろえ","hand":"", "handPc":""}
        ,
        {"id":"58","clue":"'Singing brings everyone together at the summer festival.'","yomiku":"5年ごと　国民つなぐ　歌まつり","answer":"../images/pictures/058_p.png","read":"../sounds/en/058_en.mp3","yomu":"../sounds/jp/058_jp.mp3","flag":"../images/flags/061_EST_50.png","area":"Europe","subject":"Estonian Song Festival","country":"Estonia","daizai":"全国歌謡祭","kuni":"エストニア","id-area":"EU-14","furigana":"ごねんごと　こくみんつなぐ　うたまつり","hand":"", "handPc":""}
        ,
        {"id":"59","clue":"'Trees and the castle are on the surface of the lake.'","yomiku":"戦い終え　湖面に映る　古い城","answer":"../images/pictures/059_p.png","read":"../sounds/en/059_en.mp3","yomu":"../sounds/jp/059_jp.mp3","flag":"../images/flags/064_FIN_50.png","area":"Europe","subject":"Olavinlinna Castle","country":"Finland","daizai":"オラヴィン城","kuni":"フィンランド","id-area":"EU-15","furigana":"たたかいおえ　こめんにうつる　ふるいしろ","hand":"", "handPc":""}
        ,
        {"id":"60","clue":"'Fireworks go up, and the tower get colours.'","yomiku":"パリの街　続く輝き　エッフェルの願い","answer":"../images/pictures/060_p.png","read":"../sounds/en/060_en.mp3","yomu":"../sounds/jp/060_jp.mp3","flag":"../images/flags/065_FRA_50.png","area":"Europe","subject":"Eiffel Tower","country":"France","daizai":"エッフェル塔","kuni":"フランス","id-area":"EU-16","furigana":"ぱりのまち　つづくかがやき　えっふぇるのねがい","hand":"", "handPc":""}
        ,
        {"id":"61","clue":"'Put nuts together and hang them to make a sweet.'","yomiku":"吊るして作る　木の実のお菓子","answer":"../images/pictures/061_p.png","read":"../sounds/en/061_en.mp3","yomu":"../sounds/jp/061_jp.mp3","flag":"../images/flags/071_GEO_50.png","area":"Europe","subject":"Churchkhela (candy)","country":"Georgia","daizai":"チュルチヘラ（菓子）","kuni":"ジョージア","id-area":"EU-17","furigana":"つるしてつくる　きのみのおかし","hand":"", "handPc":""}
        ,
        {"id":"62","clue":"'Shout to support the team, beer cups in hand.'","yomiku":"ジョッキ手に　チーム応援　声あげて","answer":"../images/pictures/062_p.png","read":"../sounds/en/062_en.mp3","yomu":"../sounds/jp/062_jp.mp3","flag":"../images/flags/073_GER_50.png","area":"Europe","subject":"Beer Party","country":"Germany","daizai":"ビールパーティー","kuni":"ドイツ","id-area":"EU-18","furigana":"じょっきてに　ちいむおうえん　こえあげて","hand":"", "handPc":""}
        ,
        {"id":"63","clue":"'Famous for its guards, clock tower and telephone box'","yomiku":"近衛兵　直立不動　城守る","answer":"../images/pictures/063_p.png","read":"../sounds/en/063_en.mp3","yomu":"../sounds/jp/063_jp.mp3","flag":"../images/flags/069_GBR_50.png","area":"Europe","subject":"Tourist Spots","country":"Great Britain","daizai":"観光スポット","kuni":"イギリス","id-area":"EU-19","furigana":"このえへい　ちょくりつふどう　しろまもる","hand":"", "handPc":""}
        ,
        {"id":"64","clue":"'Birds fly, and the ancient city turns orange.'","yomiku":"街中が　みかん色に染まる　古都アテネ","answer":"../images/pictures/064_p.png","read":"../sounds/en/064_en.mp3","yomu":"../sounds/jp/064_jp.mp3","flag":"../images/flags/075_GRE_50.png","area":"Europe","subject":"Orange Trees in Street","country":"Greece","daizai":"オレンジの街路樹","kuni":"ギリシャ","id-area":"EU-20","furigana":"まちじゅうが　みかんいろにそまる　ことあてね","hand":"", "handPc":""}
        ,
        {"id":"65","clue":"'Open the yellow door and get into the hot water.'","yomiku":"温泉都市の　黄色い建物　憩いの場","answer":"../images/pictures/065_p.png","read":"../sounds/en/065_en.mp3","yomu":"../sounds/jp/065_jp.mp3","flag":"../images/flags/084_HUN_50.png","area":"Europe","subject":"Szechenyi Baths","country":"Hungary","daizai":"セーチェーニ温泉","kuni":"ハンガリー","id-area":"EU-21","furigana":"おんせんとしの　きいろいたてもの　いこいのば","hand":"", "handPc":""}
        ,
        {"id":"66","clue":"'Take a boat to watch birds with red mouth and feet.'","yomiku":"くちばしカラフル　丸い目をした　人気者","answer":"../images/pictures/066_p.png","read":"../sounds/en/066_en.mp3","yomu":"../sounds/jp/066_jp.mp3","flag":"../images/flags/090_ISL_50.png","area":"Europe","subject":"Atlantic Puffin","country":"Iceland","daizai":"パフィン","kuni":"アイスランド","id-area":"EU-22","furigana":"くちばしからふる　まるいめをした　にんきもの","hand":"", "handPc":""}
        ,
        {"id":"67","clue":"'Taking a rest on a leaf, a red insect'","yomiku":"シャムロック　3枚の葉っぱ　国の花","answer":"../images/pictures/067_p.png","read":"../sounds/en/067_en.mp3","yomu":"../sounds/jp/067_jp.mp3","flag":"../images/flags/088_IRL_50.png","area":"Europe","subject":"Shamrock","country":"Ireland","daizai":"クローバー","kuni":"アイルランド","id-area":"EU-23","furigana":"しゃむろっく　さんまいのはっぱ　くにのはな","hand":"", "handPc":""}
        ,
        {"id":"68","clue":"'Put fried balls and green salad in flatbread.'","yomiku":"平パンに　豆のコロッケや　サラダをはさむ","answer":"../images/pictures/068_p.png","read":"../sounds/en/068_en.mp3","yomu":"../sounds/jp/068_jp.mp3","flag":"../images/flags/091_ISR_50.png","area":"Europe","subject":"Falafel Sandwich","country":"Israel","daizai":"ファラフェルサンド","kuni":"イスラエル","id-area":"EU-24","furigana":"ひらパンに　まめのコロッケや　サラダをはさむ","hand":"", "handPc":""}
        ,
        {"id":"69","clue":"'Take part in a mask contest in the canal city.'","yomiku":"仮面付け　水の都で　美を競う","answer":"../images/pictures/069_p.png","read":"../sounds/en/069_en.mp3","yomu":"../sounds/jp/069_jp.mp3","flag":"../images/flags/093_ITA_50.png","area":"Europe","subject":"Carnival of Venice","country":"Italy","daizai":"ヴェネツィア・カーニバル","kuni":"イタリア","id-area":"EU-25","furigana":"かめんつけ　みずのみやこで　びをきそう","hand":"", "handPc":""}
        ,
        {"id":"70","clue":"'Sculpture of six letters in front of the sports hall'","yomiku":"一列に　6文字並べ　独立祝う","answer":"../images/pictures/070_p.png","read":"../sounds/en/070_en.mp3","yomu":"../sounds/jp/070_jp.mp3","flag":"../images/flags/103_KOS_50.png","area":"Europe","subject":"Newborn Monument","country":"Kosovo","daizai":"ニューボーン・モニュメント（記念碑）","kuni":"コソボ","id-area":"EU-26","furigana":"いちれつに　ろくもじならべ　どくりついわう","hand":"", "handPc":""}
        ,
        {"id":"71","clue":"'Under the clouds, the buildings and streets look happy.'","yomiku":"独立の　誇りみなぎる　人とまち","answer":"../images/pictures/071_p.png","read":"../sounds/en/071_en.mp3","yomu":"../sounds/jp/071_jp.mp3","flag":"../images/flags/107_LAT_50.png","area":"Europe","subject":"Latvia 100 (anniversary of independence)","country":"Latvia","daizai":"独立100周年記念","kuni":"ラトビア","id-area":"EU-27","furigana":"どくりつの　ほこりみなぎる　ひととまち","hand":"", "handPc":""}
        ,
        {"id":"72","clue":"'On a hill, an old castle with red roofs'","yomiku":"赤い屋根　1000年の城　そびえ立つ","answer":"../images/pictures/072_p.png","read":"../sounds/en/072_en.mp3","yomu":"../sounds/jp/072_jp.mp3","flag":"../images/flags/113_LIE_50.png","area":"Europe","subject":"Vaduz Castle","country":"Liechtenstein","daizai":"ファドゥーツ城","kuni":"リヒテンシュタイン","id-area":"EU-28","furigana":"あかいやね　せんねんのしろ　そびえたつ","hand":"", "handPc":""}
        ,
        {"id":"73","clue":"'Paint eggs and give them to good children.'","yomiku":"おばあさん　卵に絵を描き　子に贈る","answer":"../images/pictures/073_p.png","read":"../sounds/en/073_en.mp3","yomu":"../sounds/jp/073_jp.mp3","flag":"../images/flags/114_LTU_50.png","area":"Europe","subject":"Easter Eggs","country":"Lithuania","daizai":"イースターエッグ","kuni":"リトアニア","id-area":"EU-29","furigana":"おばあさん　たまごにえをかき　こにおくる","hand":"", "handPc":""}
        ,
        {"id":"74","clue":"'Feel spring with the handmade birds appearing in shops.'","yomiku":"手作りの　小鳥が並び　春告げる","answer":"../images/pictures/074_p.png","read":"../sounds/en/074_en.mp3","yomu":"../sounds/jp/074_jp.mp3","flag":"../images/flags/115_LUX_50.png","area":"Europe","subject":"Peckvillercher (bird whistle)","country":"Luxembourg","daizai":"ペックフィラヒャー（鳥笛）","kuni":"ルクセンブルグ","id-area":"EU-30","furigana":"てづくりの　ことりがならび　はるつげる","hand":"", "handPc":""}
        ,
        {"id":"75","clue":"'Draw eyes on the boat to hope for safety.'","yomiku":"船先に　安全願い　目を描く","answer":"../images/pictures/075_p.png","read":"../sounds/en/075_en.mp3","yomu":"../sounds/jp/075_jp.mp3","flag":"../images/flags/127_MLT_50.png","area":"Europe","subject":"Luzzus (fishing boat)","country":"Malta","daizai":"ルッツ(漁船）","kuni":"マルタ","id-area":"EU-31","furigana":"ふなさきに　あんぜんねがい　めをえがく","hand":"", "handPc":""}
        ,
        {"id":"76","clue":"'Show off your driving skills in such a sharp corner.'","yomiku":"急カーブ　世界のレース　腕競う","answer":"../images/pictures/076_p.png","read":"../sounds/en/076_en.mp3","yomu":"../sounds/jp/076_jp.mp3","flag":"../images/flags/129_MON_50.png","area":"Europe","subject":"Monaco Grand Prix (car race)","country":"Monaco","daizai":"モナコグランプリ（カーレース）","kuni":"モナコ","id-area":"EU-32","furigana":"きゅうかあぶ　せかいのれえす　うできそう","hand":"", "handPc":""}
        ,
        {"id":"77","clue":"'On a mountain cliff, the church stands out in white.'","yomiku":"断崖に　白くまぶしい　修道院","answer":"../images/pictures/077_p.png","read":"../sounds/en/077_en.mp3","yomu":"../sounds/jp/077_jp.mp3","flag":"../images/flags/128_MNE_50.png","area":"Europe","subject":"Ostrog Monastery","country":"Montenegro","daizai":"オストログ修道院","kuni":"モンテネグロ","id-area":"EU-33","furigana":"だんがいに　しろくまぶしい　しゅうどういん","hand":"", "handPc":""}
        ,
        {"id":"78","clue":"'Flowers all around and a windmill at the back'","yomiku":"チューリップ　満開の中　風車立つ","answer":"../images/pictures/078_p.png","read":"../sounds/en/078_en.mp3","yomu":"../sounds/jp/078_jp.mp3","flag":"../images/flags/136_NED_50.png","area":"Europe","subject":"Keukenhof Flower Garden","country":"Netherlands","daizai":"キューケンホフ公園","kuni":"オランダ","id-area":"EU-34","furigana":"ちゅうりっぷ　まんかいのなか　ふうしゃたつ","hand":"", "handPc":""}
        ,
        {"id":"79","clue":"'Dig holes and plant trees after a forest fire.'","yomiku":"山火事で　なくした森の　復活願う","answer":"../images/pictures/079_p.png","read":"../sounds/en/079_en.mp3","yomu":"../sounds/jp/079_jp.mp3","flag":"../images/flags/125_MKD_50.png","area":"Europe","subject":"Tree Day","country":"North Macedonia","daizai":"植樹祭","kuni":"北マケドニア","id-area":"EU-35","furigana":"やまかじで　なくしたもりの　ふっかつねがう","hand":"", "handPc":""}
        ,
        {"id":"80","clue":"'Carry weapons and cross the sea in a wooden ship.'","yomiku":"武器を持ち　木造船で　海渡る","answer":"../images/pictures/080_p.png","read":"../sounds/en/080_en.mp3","yomu":"../sounds/jp/080_jp.mp3","flag":"../images/flags/140_NOR_50.png","area":"Europe","subject":"Norwegian Vikings","country":"Norway","daizai":"バイキング","kuni":"ノルウェー","id-area":"EU-36","furigana":"ぶきをもち　もくぞうせんで　うみわたる","hand":"", "handPc":""}
        ,
        {"id":"81","clue":"'Decorate the walls of a house with flower patterns.'","yomiku":"花柄の　模様を描き　壁飾る","answer":"../images/pictures/081_p.png","read":"../sounds/en/081_en.mp3","yomu":"../sounds/jp/081_jp.mp3","flag":"../images/flags/152_POL_50.png","area":"Europe","subject":"Zalipie (painted village of flowers)","country":"Poland","daizai":"ザリピエ(花柄模様の村）","kuni":"ポーランド","id-area":"EU-37","furigana":"はながらの　もようをかき　かべかざる","hand":"", "handPc":""}
        ,
        {"id":"82","clue":"'Along the river stands a castle as white as a dress.'","yomiku":"白の貴婦人　ヴァスコ・ダ・ガマの　偉業たたえ","answer":"../images/pictures/082_p.png","read":"../sounds/en/082_en.mp3","yomu":"../sounds/jp/082_jp.mp3","flag":"../images/flags/153_POR_50.png","area":"Europe","subject":"Belem Tower","country":"Portugal","daizai":"ベレンの塔","kuni":"ポルトガル","id-area":"EU-38","furigana":"しろのきふじん　ばすこ・だ・がまの　いぎょうたたえ","hand":"", "handPc":""}
        ,
        {"id":"83","clue":"'Clouds flowing, a tower for prayer stands on the hill.'","yomiku":"雲流れ　丘に建つ塔　感謝のしるし","answer":"../images/pictures/083_p.png","read":"../sounds/en/083_en.mp3","yomu":"../sounds/jp/083_jp.mp3","flag":"../images/flags/120_MDA_50.png","area":"Europe","subject":"Thanksgiving Candle Monument","country":"Republic of Moldova","daizai":"感謝のキャンドル（記念塔）","kuni":"モルドバ共和国","id-area":"EU-39","furigana":"くもながれ　おかにたつとう　かんしゃのしるし","hand":"", "handPc":""}
        ,
        {"id":"84","clue":"'Swallows fly, people hold hands and dance in a circle.'","yomiku":"輪になって　民族衣装で　踊りだす","answer":"../images/pictures/084_p.png","read":"../sounds/en/084_en.mp3","yomu":"../sounds/jp/084_jp.mp3","flag":"../images/flags/157_ROU_50.png","area":"Europe","subject":"Hora Dance","country":"Romania","daizai":"ホラダンス","kuni":"ルーマニア","id-area":"EU-40","furigana":"わになって　みんぞくいしょうで　おどりだす","hand":"", "handPc":""}
        ,
        {"id":"85","clue":"'Dance in pair with the temple in the background.'","yomiku":"赤の広場　民族衣装　着て踊る","answer":"../images/pictures/085_p.png","read":"../sounds/en/085_en.mp3","yomu":"../sounds/jp/085_jp.mp3","flag":"../images/flags/159_RUS_50.png","area":"Europe","subject":"Russian Culture","country":"Russian Federation","daizai":"ロシアの文化","kuni":"ロシア連邦","id-area":"EU-41","furigana":"あかのひろば　みんぞくいしょう　きておどる","hand":"", "handPc":""}
        ,
        {"id":"86","clue":"'On a cliff, the castle stands at the top of the mountain.'","yomiku":"山頂の　崖に立つ城　お伽の世界","answer":"../images/pictures/086_p.png","read":"../sounds/en/086_en.mp3","yomu":"../sounds/jp/086_jp.mp3","flag":"../images/flags/168_SMR_50.png","area":"Europe","subject":"Guaita Castle","country":"San Marino","daizai":"グアイタ城","kuni":"サンマリノ","id-area":"EU-42","furigana":"さんちょうの　がけにたつしろ　おとぎのせかい","hand":"", "handPc":""}
        ,
        {"id":"87","clue":"'Cut wood, dry vegetables and keep chickens outside.'","yomiku":"家畜飼い　村人暮らす　おだやかに","answer":"../images/pictures/087_p.png","read":"../sounds/en/087_en.mp3","yomu":"../sounds/jp/087_jp.mp3","flag":"../images/flags/171_SRB_50.png","area":"Europe","subject":"Village House","country":"Serbia","daizai":"村の暮らし","kuni":"セルビア","id-area":"EU-43","furigana":"かちくかい　むらびとくらす　おだやかに","hand":"", "handPc":""}
        ,
        {"id":"88","clue":"'Ghosts appear in the castle with its colourful roofs.'","yomiku":"幽霊や　妖精に会える　森の城","answer":"../images/pictures/088_p.png","read":"../sounds/en/088_en.mp3","yomu":"../sounds/jp/088_jp.mp3","flag":"../images/flags/178_SVK_50.png","area":"Europe","subject":"Bojnice Castle","country":"Slovakia","daizai":"ボイニツェ城","kuni":"スロバキア","id-area":"EU-44","furigana":"ゆうれいや　ようせいにあえる　もりのしろ","hand":"", "handPc":""}
        ,
        {"id":"89","clue":"'In sheepskin dresses, ring bells to say goodbye to winter.'","yomiku":"毛皮着て　カウベル鳴らし　春を呼ぶ","answer":"../images/pictures/089_p.png","read":"../sounds/en/089_en.mp3","yomu":"../sounds/jp/089_jp.mp3","flag":"../images/flags/167_SLO_50.png","area":"Europe","subject":"Kurentovanje Carnival","country":"Slovenia","daizai":"クレントヴァニエ祭り","kuni":"スロベニア","id-area":"EU-45","furigana":"けがわきて　かうべるならし　はるをよぶ","hand":"", "handPc":""}
        ,
        {"id":"90","clue":"'Streets are full of people throwing tomatoes.'","yomiku":"人あふれ　トマト投げ合う　街の中","answer":"../images/pictures/090_p.png","read":"../sounds/en/090_en.mp3","yomu":"../sounds/jp/090_jp.mp3","flag":"../images/flags/060_ESP_50.png","area":"Europe","subject":"La Tomatina Festival","country":"Spain","daizai":"トマト祭り","kuni":"スペイン","id-area":"EU-46","furigana":"ひとあふれ　とまとなげあう　まちのなか","hand":"", "handPc":""}
        ,
        {"id":"91","clue":"'Curtains of light in the night sky and on the lake'","yomiku":"夜の空　湖面に映る　光のカーテン","answer":"../images/pictures/091_p.png","read":"../sounds/en/091_en.mp3","yomu":"../sounds/jp/091_jp.mp3","flag":"../images/flags/179_SWE_50.png","area":"Europe","subject":"Aurora","country":"Sweden","daizai":"オーロラ","kuni":"スウェーデン","id-area":"EU-47","furigana":"よるのそら　こめんにうつる　ひかりのかあてん","hand":"", "handPc":""}
        ,
        {"id":"92","clue":"'Look down on the snow mountains from air balloons.'","yomiku":"気球から　見るアルプスの　冬景色","answer":"../images/pictures/092_p.png","read":"../sounds/en/092_en.mp3","yomu":"../sounds/jp/092_jp.mp3","flag":"../images/flags/176_SUI_50.png","area":"Europe","subject":"Ch?teau d'Oex Villages","country":"Switzerland","daizai":"シャトー・デー（熱気球で有名）","kuni":"スイス","id-area":"EU-48","furigana":"ききゅうから　みるアルプスの　ふゆげしき","hand":"", "handPc":""}
        ,
        {"id":"93","clue":"'Balloons fly, and horses run between the rocks like a tower.'","yomiku":"ここは地球？奇妙な形の　岩また岩","answer":"../images/pictures/093_p.png","read":"../sounds/en/093_en.mp3","yomu":"../sounds/jp/093_jp.mp3","flag":"../images/flags/192_TUR_50.png","area":"Europe","subject":"Cappadocia","country":"Turkey","daizai":"カッパドキア（奇岩で有名）","kuni":"トルコ","id-area":"EU-49","furigana":"ここはちきゅう？きみょうなかたちの　いわまたいわ","hand":"", "handPc":""}
        ,
        {"id":"94","clue":"'Blow a long pipe to signal over the mountains.'","yomiku":"山の中　合図を送る　長い笛","answer":"../images/pictures/094_p.png","read":"../sounds/en/094_en.mp3","yomu":"../sounds/jp/094_jp.mp3","flag":"../images/flags/196_UKR_50.png","area":"Europe","subject":"Trembita (alphorn)","country":"Ukraine","daizai":"トレンビータ（アルプホルン）","kuni":"ウクライナ","id-area":"EU-50","furigana":"やまのなか　あいずをおくる　ながいふえ","hand":"", "handPc":""}
        ,
        {"id":"95","clue":"'Sit on the back and race through the desert.'","yomiku":"こぶつかみ　砂漠を走る　ラクダレース","answer":"../images/pictures/095_p.png","read":"../sounds/en/095_en.mp3","yomu":"../sounds/jp/095_jp.mp3","flag":"../images/flags/003_ALG_50.png","area":"Africa","subject":"Camel Racing","country":"Algeria","daizai":"ラクダレース","kuni":"アルジェリア","id-area":"AF-01","furigana":"こぶつかみ　さばくをはしる　らくだれえす","hand":"", "handPc":""}
        ,
        {"id":"96","clue":"'Lights shine in the forest with brown animals.'","yomiku":"アンテロープ　絶滅の危機　救いたい","answer":"../images/pictures/096_p.png","read":"../sounds/en/096_en.mp3","yomu":"../sounds/jp/096_jp.mp3","flag":"../images/flags/005_ANG_50.png","area":"Africa","subject":"Giant Sable Antelope","country":"Angola","daizai":"パランカ・ネグラ（アンテロープ）","kuni":"アンゴラ","id-area":"AF-02","furigana":"あんてろおぷ　ぜつめつのきき　すくいたい","hand":"", "handPc":""}
        ,
        {"id":"97","clue":"'Live in a village on the lake and travel by boat.'","yomiku":"湖の　上につくった　家と村","answer":"../images/pictures/097_p.png","read":"../sounds/en/097_en.mp3","yomu":"../sounds/jp/097_jp.mp3","flag":"../images/flags/019_BEN_50.png","area":"Africa","subject":"Ganvie Lake Village","country":"Benin","daizai":"水上集落ガンビエ","kuni":"ベナン","id-area":"AF-03","furigana":"みずうみの　うえにつくった　いえとむら","hand":"", "handPc":""}
        ,
        {"id":"98","clue":"'Stand up together and look around with big eyes.'","yomiku":"キョロキョロと　家族を守る　大きな目","answer":"../images/pictures/098_p.png","read":"../sounds/en/098_en.mp3","yomu":"../sounds/jp/098_jp.mp3","flag":"../images/flags/026_BOT_50.png","area":"Africa","subject":"Meercat","country":"Botswana","daizai":"ミーアキャット","kuni":"ボツワナ","id-area":"AF-04","furigana":"きょろきょろと　かぞくをまもる　おおきなめ","hand":"", "handPc":""}
        ,
        {"id":"99","clue":"'Women paint patterns on the outside walls of the houses.'","yomiku":"家族の　幸せ願い　描く模様","answer":"../images/pictures/099_p.png","read":"../sounds/en/099_en.mp3","yomu":"../sounds/jp/099_jp.mp3","flag":"../images/flags/031_BUR_50.png","area":"Africa","subject":"Kassena Painted Houses","country":"Burkina Faso","daizai":"幾何学模様の住居","kuni":"ブルキナファソ","id-area":"AF-05","furigana":"かぞくの　しあわせねがい　えがくもよう","hand":"", "handPc":""}
        ,
        {"id":"100","clue":"'Jumping up and down, dancing and beating the drums'","yomiku":"飛び跳ねて　踊りながらも　太鼓打つ","answer":"../images/pictures/100_p.png","read":"../sounds/en/100_en.mp3","yomu":"../sounds/jp/100_jp.mp3","flag":"../images/flags/017_BDI_50.png","area":"Africa","subject":"Royal Drummers of Burundi","country":"Burundi","daizai":"ブルンジ王立太鼓隊","kuni":"ブルンジ","id-area":"AF-06","furigana":"とびはねて　おどりながらも　たいこうつ","hand":"", "handPc":""}
        ,
        {"id":"101","clue":"'Houses are round and have patterns all over the walls.'","yomiku":"大きくて　つりがね型の　泥の家","answer":"../images/pictures/101_p.png","read":"../sounds/en/101_en.mp3","yomu":"../sounds/jp/101_jp.mp3","flag":"../images/flags/041_CMR_50.png","area":"Africa","subject":"Musgub Mud Huts","country":"Cameroon","daizai":"ムスグン族の家","kuni":"カメルーン","id-area":"AF-07","furigana":"おおきくて　つりがねがたの　どろのいえ","hand":"", "handPc":""}
        ,
        {"id":"102","clue":"'By the sea, a statue stands looking up at the sky.'","yomiku":"空見上げ　島を見つけた　船乗り像","answer":"../images/pictures/102_p.png","read":"../sounds/en/102_en.mp3","yomu":"../sounds/jp/102_jp.mp3","flag":"../images/flags/046_CPV_50.png","area":"Africa","subject":"Statue of Diogo Gomes","country":"Cape Verde","daizai":"ディオゴ・ゴメス像","kuni":"カーボベルデ","id-area":"AF-08","furigana":"そらみあげ　しまをみつけた　ふなのりぞう","hand":"", "handPc":""}
        ,
        {"id":"103","clue":"'Fly from flower to flower on blue wings.'","yomiku":"青い蝶　花から花へ　ひらひらと","answer":"../images/pictures/103_p.png","read":"../sounds/en/103_en.mp3","yomu":"../sounds/jp/103_jp.mp3","flag":"../images/flags/032_CAF_50.png","area":"Africa","subject":"Butterfly Kingdom","country":"Central African Republic","daizai":"蝶大国","kuni":"中央アフリカ","id-area":"AF-09","furigana":"あおいちょう　はなからはなへ　ひらひらと","hand":"", "handPc":""}
        ,
        {"id":"104","clue":"'Huge brown rocks invite climbers to the desert.'","yomiku":"大自然　砂漠にできた　岩の山","answer":"../images/pictures/104_p.png","read":"../sounds/en/104_en.mp3","yomu":"../sounds/jp/104_jp.mp3","flag":"../images/flags/037_CHA_50.png","area":"Africa","subject":"Ennedi Plateau","country":"Chad","daizai":"エネディ山地","kuni":"チャド","id-area":"AF-10","furigana":"だいしぜん　さばくにできた　いわのやま","hand":"", "handPc":""}
        ,
        {"id":"105","clue":"'Two players put balls in holes on the board.　'","yomiku":"木の穴の　玉数競う　バオゲーム","answer":"../images/pictures/105_p.png","read":"../sounds/en/105_en.mp3","yomu":"../sounds/jp/105_jp.mp3","flag":"../images/flags/045_COM_50.png","area":"Africa","subject":"Bao Board Game","country":"Comoros","daizai":"バオ（ボードゲーム）","kuni":"コモロ","id-area":"AF-11","furigana":"きのあなの　たまかずきそう　ばおげえむ","hand":"", "handPc":""}
        ,
        {"id":"106","clue":"'Men wear the finest clothing and look very happy.'","yomiku":"おしゃれして　街を闊歩の　男たち","answer":"../images/pictures/106_p.png","read":"../sounds/en/106_en.mp3","yomu":"../sounds/jp/106_jp.mp3","flag":"../images/flags/036_CGO_50.png","area":"Africa","subject":"Sapeur (dressed up gentlemen)","country":"Congo","daizai":"サプール（オシャレな紳士）","kuni":"コンゴ","id-area":"AF-12","furigana":"おしゃれして　まちをかっぽの　おとこたち","hand":"", "handPc":""}
        ,
        {"id":"107","clue":"'Make chocolate from the seeds of large fruit.'","yomiku":"大きな実　カカオの輸出は　世界一","answer":"../images/pictures/107_p.png","read":"../sounds/en/107_en.mp3","yomu":"../sounds/jp/107_jp.mp3","flag":"../images/flags/040_CIV_50.png","area":"Africa","subject":"Cacao Beans","country":"Cote D'ivoire","daizai":"カカオ豆","kuni":"コートジボワール","id-area":"AF-13","furigana":"おおきなみ　かかおのゆしゅつは　せかいいち","hand":"", "handPc":""}
        ,
        {"id":"108","clue":"'Dance in wooden masks at the summer festival.'","yomiku":"木でできた　仮面で踊る　夏祭り","answer":"../images/pictures/108_p.png","read":"../sounds/en/108_en.mp3","yomu":"../sounds/jp/108_jp.mp3","flag":"../images/flags/042_COD_50.png","area":"Africa","subject":"Gungu Festival","country":"Democratic Republic of the Congo","daizai":"ガング―祭り","kuni":"コンゴ民主共和国","id-area":"AF-14","furigana":"きでできた　かめんでおどる　なつまつり","hand":"", "handPc":""}
        ,
        {"id":"109","clue":"'Rock landscape looks like the surface of the moon.　'","yomiku":"月面の　景色のような　岩ばかり","answer":"../images/pictures/109_p.png","read":"../sounds/en/109_en.mp3","yomu":"../sounds/jp/109_jp.mp3","flag":"../images/flags/053_DJI_50.png","area":"Africa","subject":"Travertine (rock tower)","country":"Djibouti","daizai":"トラバーチン (岩山）","kuni":"ジブチ","id-area":"AF-15","furigana":"げつめんの　けしきのような　いわばかり","hand":"", "handPc":""}
        ,
        {"id":"110","clue":"'Inside the buildings lie ancient bodies and writings.'","yomiku":"ピラミッドに　眠るミイラと　古代文字","answer":"../images/pictures/110_p.png","read":"../sounds/en/110_en.mp3","yomu":"../sounds/jp/110_jp.mp3","flag":"../images/flags/057_EGY_50.png","area":"Africa","subject":"Ancient Egypt","country":"Egypt","daizai":"古代エジプト","kuni":"エジプト","id-area":"AF-16","furigana":"ぴらみっどに　ねむるみいらと　こだいもじ","hand":"", "handPc":""}
        ,
        {"id":"111","clue":"'Brown body with white lines, long bones out of the head'","yomiku":"長い角　茶色に白の　縞模様","answer":"../images/pictures/111_p.png","read":"../sounds/en/111_en.mp3","yomu":"../sounds/jp/111_jp.mp3","flag":"../images/flags/072_GEQ_50.png","area":"Africa","subject":"Bongos (antelope)","country":"Equatorial Guinea","daizai":"ボンゴ (アンテロープ)","kuni":"赤道ギニア","id-area":"AF-17","furigana":"ながいつの　ちゃいろにしろの　しまもよう","hand":"", "handPc":""}
        ,
        {"id":"112","clue":"'Black trains carry everyone and run on steam.'","yomiku":"元気よく　山沿い走る　黒い汽車","answer":"../images/pictures/112_p.png","read":"../sounds/en/112_en.mp3","yomu":"../sounds/jp/112_jp.mp3","flag":"../images/flags/058_ERI_50.png","area":"Africa","subject":"Eritrean Railway","country":"Eritrea","daizai":"エリトリア鉄道","kuni":"エリトリア","id-area":"AF-18","furigana":"げんきよく　やまぞいはしる　くろいきしゃ","hand":"", "handPc":""}
        ,
        {"id":"113","clue":"'Girls walk together after they cut tall grass.'","yomiku":"背の高い　アシを掲げる　少女の行進","answer":"../images/pictures/113_p.png","read":"../sounds/en/113_en.mp3","yomu":"../sounds/jp/113_jp.mp3","flag":"../images/flags/180_SWZ_50.png","area":"Africa","subject":"Reed Dance Ceremony","country":"Eswatini","daizai":"リードダンス（行事）","kuni":"エスワティニ","id-area":"AF-19","furigana":"せのたかい　あしをかかげる　しょうじょのこうしん","hand":"", "handPc":""}
        ,
        {"id":"114","clue":"'Bones of an ancient woman got a name after a song.'","yomiku":"大発見　グレートマザー　よみがえる","answer":"../images/pictures/114_p.png","read":"../sounds/en/114_en.mp3","yomu":"../sounds/jp/114_jp.mp3","flag":"../images/flags/062_ETH_50.png","area":"Africa","subject":"Lucy's Bones (fossils)","country":"Ethiopia","daizai":"ルーシーの骨（化石）","kuni":"エチオピア","id-area":"AF-20","furigana":"だいはっけん　ぐれえとまざあ　よみがえる","hand":"", "handPc":""}
        ,
        {"id":"115","clue":"'Covered with a hard shell, eat with a long tongue.'","yomiku":"鎧着て　長い舌伸び　アリ食べる","answer":"../images/pictures/115_p.png","read":"../sounds/en/115_en.mp3","yomu":"../sounds/jp/115_jp.mp3","flag":"../images/flags/067_GAB_50.png","area":"Africa","subject":"Pangolin","country":"Gabon","daizai":"センザンコウ","kuni":"ガボン","id-area":"AF-21","furigana":"よろいきて　ながいしたのび　ありたべる","hand":"", "handPc":""}
        ,
        {"id":"116","clue":"'Open a big mouth in the small pool under the sun.'","yomiku":"公園で　おそるおそる　ワニ触る","answer":"../images/pictures/116_p.png","read":"../sounds/en/116_en.mp3","yomu":"../sounds/jp/116_jp.mp3","flag":"../images/flags/068_GAM_50.png","area":"Africa","subject":"Kachikally Crocodile Pool","country":"Gambia","daizai":"ワニ園","kuni":"ガンビア","id-area":"AF-22","furigana":"こうえんで　おそるおそる　わにさわる","hand":"", "handPc":""}
        ,
        {"id":"117","clue":"'Men make colourful cloth by hand using a wooden tool.'","yomiku":"あざやかな　布を手で織る　男たち","answer":"../images/pictures/117_p.png","read":"../sounds/en/117_en.mp3","yomu":"../sounds/jp/117_jp.mp3","flag":"../images/flags/074_GHA_50.png","area":"Africa","subject":"Kente Cloth","country":"Ghana","daizai":"ケンテ布","kuni":"ガーナ","id-area":"AF-23","furigana":"あざやかな　ぬのをてでおる　おとこたち","hand":"", "handPc":""}
        ,
        {"id":"118","clue":"'Fly through the air on a stage made of wood.'","yomiku":"木を組んだ　空の舞台を　とび回る","answer":"../images/pictures/118_p.png","read":"../sounds/en/118_en.mp3","yomu":"../sounds/jp/118_jp.mp3","flag":"../images/flags/078_GUI_50.png","area":"Africa","subject":"Circus Baobab","country":"Guinea","daizai":"バオバブサーカス","kuni":"ギニア","id-area":"AF-24","furigana":"きをくんだ　そらのぶたいを　とびまわる","hand":"", "handPc":""}
        ,
        {"id":"119","clue":"'Attach shells around a dried fruit and make a sound.'","yomiku":"ひょうたんに　貝殻つけて　音を出す","answer":"../images/pictures/119_p.png","read":"../sounds/en/119_en.mp3","yomu":"../sounds/jp/119_jp.mp3","flag":"../images/flags/070_GBS_50.png","area":"Africa","subject":"Shekere (calabash shaker)","country":"Guinea-Bissau","daizai":"シェケレ（打楽器）","kuni":"ギニア・ビサウ","id-area":"AF-25","furigana":"ひょうたんに　かいがらつけて　おとをだす","hand":"", "handPc":""}
        ,
        {"id":"120","clue":"'People and animals with the setting sun behind them.'","yomiku":"夕焼けに　ヤリ持ちりりしい　マサイの戦士","answer":"../images/pictures/120_p.png","read":"../sounds/en/120_en.mp3","yomu":"../sounds/jp/120_jp.mp3","flag":"../images/flags/099_KEN_50.png","area":"Africa","subject":"Maasai People","country":"Kenya","daizai":"マサイ族","kuni":"ケニア","id-area":"AF-26","furigana":"ゆうやけに　やりもちりりしい　マサイのせんし","hand":"", "handPc":""}
        ,
        {"id":"121","clue":"'Smile in a hat of a mountain's shape.'","yomiku":"三角の　麦わら帽子　にっこりと","answer":"../images/pictures/121_p.png","read":"../sounds/en/121_en.mp3","yomu":"../sounds/jp/121_jp.mp3","flag":"../images/flags/111_LES_50.png","area":"Africa","subject":"Mokorotlo (Basotho Hat)","country":"Lesotho","daizai":"パソトハット（麦わら帽子）","kuni":"レソト","id-area":"AF-27","furigana":"さんかくの　むぎわらぼうし　にっこりと","hand":"", "handPc":""}
        ,
        {"id":"122","clue":"'Dance around in a costume hiding the whole body.'","yomiku":"神々や　悪魔の姿　着飾り踊る","answer":"../images/pictures/122_p.png","read":"../sounds/en/122_en.mp3","yomu":"../sounds/jp/122_jp.mp3","flag":"../images/flags/109_LBR_50.png","area":"Africa","subject":"Dancing Devils","country":"Liberia","daizai":"踊る悪魔","kuni":"リベリア","id-area":"AF-28","furigana":"かみがみや　あくまのすがた　きかざりおどる","hand":"", "handPc":""}
        ,
        {"id":"123","clue":"'By the water, a woman stands in a red dress.'","yomiku":"少女の憧れ　記念日祝う　衣装着て","answer":"../images/pictures/123_p.png","read":"../sounds/en/123_en.mp3","yomu":"../sounds/jp/123_jp.mp3","flag":"../images/flags/108_LBA_50.png","area":"Africa","subject":"Libyan Traditional Clothing","country":"Libya","daizai":"リビア伝統衣装","kuni":"リビア","id-area":"AF-29","furigana":"しょうじょのあこがれ　きねんびいわう　いしょうきせて","hand":"", "handPc":""}
        ,
        {"id":"124","clue":"'Giant trees along the road with the sinking sun'","yomiku":"天に向かって　まっすぐ伸びる　樹の街道","answer":"../images/pictures/124_p.png","read":"../sounds/en/124_en.mp3","yomu":"../sounds/jp/124_jp.mp3","flag":"../images/flags/116_MAD_50.png","area":"Africa","subject":"Avenue of the Baobabs","country":"Madagascar","daizai":"バオバブ街道","kuni":"マダガスカル","id-area":"AF-30","furigana":"てんにむかって　まっすぐのびる　きのかいどう","hand":"", "handPc":""}
        ,
        {"id":"125","clue":"'Colourful fish, a local food, swim in the lake.'","yomiku":"カラフルな　魚が群れる　マラウイ湖","answer":"../images/pictures/125_p.png","read":"../sounds/en/125_en.mp3","yomu":"../sounds/jp/125_jp.mp3","flag":"../images/flags/119_MAW_50.png","area":"Africa","subject":"Lake Malawi","country":"Malawi","daizai":"マラウィ湖","kuni":"マラウイ","id-area":"AF-31","furigana":"からふるな　さかながむれる　まらういこ","hand":"", "handPc":""}
        ,
        {"id":"126","clue":"'With big mouth open, the statues stand in the city.'","yomiku":"カバの国　交差点でも人気者","answer":"../images/pictures/126_p.png","read":"../sounds/en/126_en.mp3","yomu":"../sounds/jp/126_jp.mp3","flag":"../images/flags/126_MLI_50.png","area":"Africa","subject":"Hippo","country":"Mali","daizai":"カバ","kuni":"マリ","id-area":"AF-32","furigana":"カバのくに　こうさてんでも　にんきもの","hand":"", "handPc":""}
        ,
        {"id":"127","clue":"'Live in a historic village made of red bricks.'","yomiku":"中世から　人が行きかう　レンガの街","answer":"../images/pictures/127_p.png","read":"../sounds/en/127_en.mp3","yomu":"../sounds/jp/127_jp.mp3","flag":"../images/flags/132_MTN_50.png","area":"Africa","subject":"Ancient Ksour Villages","country":"Mauritania","daizai":"クスール（古代集落）","kuni":"モーリタニア","id-area":"AF-33","furigana":"ちゅうせいから　ひとがいきかう　れんがのまち","hand":"", "handPc":""}
        ,
        {"id":"128","clue":"'Hold a thin round drum and beat it with both hands.'","yomiku":"両手でたたく　大きな形の タンバリン","answer":"../images/pictures/128_p.png","read":"../sounds/en/128_en.mp3","yomu":"../sounds/jp/128_jp.mp3","flag":"../images/flags/131_MRI_50.png","area":"Africa","subject":"Ravanne Drum","country":"Mauritius","daizai":"ラバンヌドラム","kuni":"モーリシャス","id-area":"AF-34","furigana":"りょうてでたたく　おおきなかたちの たんばりん","hand":"", "handPc":""}
        ,
        {"id":"129","clue":"'Walls of the houses, stairs in the street, all in blue'","yomiku":"神聖な　青の街並み　シャウエン","answer":"../images/pictures/129_p.png","read":"../sounds/en/129_en.mp3","yomu":"../sounds/jp/129_jp.mp3","flag":"../images/flags/117_MAR_50.png","area":"Africa","subject":"Chefchaouen (the blue city)","country":"Morocco","daizai":"シャウエン（青の街）","kuni":"モロッコ","id-area":"AF-35","furigana":"しんせいな　あおのまちなみ　しゃうえん","hand":"", "handPc":""}
        ,
        {"id":"130","clue":"'Wearing a mask, men dance in front of the audience.'","yomiku":"男たち　力を誇示する　仮面のダンス","answer":"../images/pictures/130_p.png","read":"../sounds/en/130_en.mp3","yomu":"../sounds/jp/130_jp.mp3","flag":"../images/flags/130_MOZ_50.png","area":"Africa","subject":"Mapiko Dance","country":"Mozambique","daizai":"マピコ（仮面舞踊）","kuni":"モザンビーク","id-area":"AF-36","furigana":"おとこたち　ちからをこじする　かめんのだんす","hand":"", "handPc":""}
        ,
        {"id":"131","clue":"'Mountains of sand turn orange in the evening sun.'","yomiku":"海沿いを　夕陽が染める　砂の山","answer":"../images/pictures/131_p.png","read":"../sounds/en/131_en.mp3","yomu":"../sounds/jp/131_jp.mp3","flag":"../images/flags/134_NAM_50.png","area":"Africa","subject":"Namib Desert","country":"Namibia","daizai":"ナミビ砂漠","kuni":"ナミビア","id-area":"AF-37","furigana":"うみぞいを　ゆうひがそめる　すなのやま","hand":"", "handPc":""}
        ,
        {"id":"132","clue":"'Find a man with an attractive smile and clothes.'","yomiku":"おしゃれして　男を競う　婚活祭り","answer":"../images/pictures/132_p.png","read":"../sounds/en/132_en.mp3","yomu":"../sounds/jp/132_jp.mp3","flag":"../images/flags/139_NIG_50.png","area":"Africa","subject":"Gerewol Festival (male beauty contest)","country":"Niger","daizai":"ゲレウォール祭（美男子コンテスト）","kuni":"ニジェール","id-area":"AF-38","furigana":"おしゃれして　おとこをきそう　こんかつまつり","hand":"", "handPc":""}
        ,
        {"id":"133","clue":"'Everyone jumps into the river and catches fish.'","yomiku":"一斉に 川に飛び込み　魚捕る","answer":"../images/pictures/133_p.png","read":"../sounds/en/133_en.mp3","yomu":"../sounds/jp/133_jp.mp3","flag":"../images/flags/138_NGR_50.png","area":"Africa","subject":"Argungu Fishing Festival","country":"Nigeria","daizai":"魚獲り大会","kuni":"ナイジェリア","id-area":"AF-39","furigana":"いっせいに かわにとびこみ　さかなとる","hand":"", "handPc":""}
        ,
        {"id":"134","clue":"'Shake the long hair and dance in a skirt.'","yomiku":"英雄演じる　イントーレダンス　勇猛に","answer":"../images/pictures/134_p.png","read":"../sounds/en/134_en.mp3","yomu":"../sounds/jp/134_jp.mp3","flag":"../images/flags/160_RWA_50.png","area":"Africa","subject":"Intore Dance","country":"Rwanda","daizai":"イントーレダンス","kuni":"ルワンダ","id-area":"AF-40","furigana":"えいゆうえんじる　いんとおれだんす　ゆうもうに","hand":"", "handPc":""}
        ,
        {"id":"135","clue":"'Like a tower, a rock mountain stands out of the forest.'","yomiku":"ジャングルの　空にそびえる　岩の山","answer":"../images/pictures/135_p.png","read":"../sounds/en/135_en.mp3","yomu":"../sounds/jp/135_jp.mp3","flag":"../images/flags/174_STP_50.png","area":"Africa","subject":"Pico C?o Grande (peak)","country":"Sao Tome and Principe","daizai":"ピコ・カン・グランデ(岩山)","kuni":"サントメ・プリンシペ","id-area":"AF-41","furigana":"じゃんぐるそびえる　いわのやま","hand":"", "handPc":""}
        ,
        {"id":"136","clue":"'Two men fight to throw each other in an outdoor ring.'","yomiku":"コーランの　聖句身に着け　投げ技競う","answer":"../images/pictures/136_p.png","read":"../sounds/en/136_en.mp3","yomu":"../sounds/jp/136_jp.mp3","flag":"../images/flags/162_SEN_50.png","area":"Africa","subject":"Senegalese Wrestling","country":"Senegal","daizai":"セネガル相撲","kuni":"セネガル","id-area":"AF-42","furigana":"こおらんの　せいくみにつけ　なげわざきそう","hand":"", "handPc":""}
        ,
        {"id":"137","clue":"'Look up and see a large fruit like a twin.'","yomiku":"見上げれば　双子のような　大きな実","answer":"../images/pictures/137_p.png","read":"../sounds/en/137_en.mp3","yomu":"../sounds/jp/137_jp.mp3","flag":"../images/flags/163_SEY_50.png","area":"Africa","subject":"Double Coconut","country":"Seychelles","daizai":"フタゴヤシ","kuni":"セイシェル","id-area":"AF-43","furigana":"みあげれば　ふたごのような　おおきなみ","hand":"", "handPc":""}
        ,
        {"id":"138","clue":"'In the town grows an old giant tree, a symbol of freedom.'","yomiku":"街なかに　大木育つ　500歳","answer":"../images/pictures/138_p.png","read":"../sounds/en/138_en.mp3","yomu":"../sounds/jp/138_jp.mp3","flag":"../images/flags/166_SLE_50.png","area":"Africa","subject":"Cotton Tree","country":"Sierra Leone","daizai":"コットン・ツリー","kuni":"シェラレオネ","id-area":"AF-44","furigana":"まちなかに　たいぼくそだつ　ごひゃくさい","hand":"", "handPc":""}
        ,
        {"id":"139","clue":"'People painted cows in the cave a long time ago.'","yomiku":"洞窟壁画　ともに暮らした　牛や犬","answer":"../images/pictures/139_p.png","read":"../sounds/en/139_en.mp3","yomu":"../sounds/jp/139_jp.mp3","flag":"../images/flags/170_SOM_50.png","area":"Africa","subject":"Laas Geel Cave Paintings","country":"Somalia","daizai":"ラースゲール洞窟壁画","kuni":"ソマリア","id-area":"AF-45","furigana":"どうくつへきが　ともにくらした　うしやいぬ","hand":"", "handPc":""}
        ,
        {"id":"140","clue":"'Yellow animals with spots run through the open land.'","yomiku":"サバンナを　一番速く　走る猫","answer":"../images/pictures/140_p.png","read":"../sounds/en/140_en.mp3","yomu":"../sounds/jp/140_jp.mp3","flag":"../images/flags/158_RSA_50.png","area":"Africa","subject":"Cheetah","country":"South Africa","daizai":"チーター","kuni":"南アフリカ","id-area":"AF-46","furigana":"さばんなを　いちばんはやく　はしるねこ","hand":"", "handPc":""}
        ,
        {"id":"141","clue":"'Build a city like the animal's shape and make it exciting.'","yomiku":"首都の形を　サイにする　都市計画","answer":"../images/pictures/141_p.png","read":"../sounds/en/141_en.mp3","yomu":"../sounds/jp/141_jp.mp3","flag":"../images/flags/173_SSD_50.png","area":"Africa","subject":"Rhino-Shaped City","country":"South Sudan","daizai":"サイの形の街","kuni":"南スーダン","id-area":"AF-47","furigana":"しゅとのかたちを　さいにする　としけいかく","hand":"", "handPc":""}
        ,
        {"id":"142","clue":"'Desert animals walk in front of ancient buildings.'","yomiku":"そびえたつ　ナイル川沿いの　ピラミッド","answer":"../images/pictures/142_p.png","read":"../sounds/en/142_en.mp3","yomu":"../sounds/jp/142_jp.mp3","flag":"../images/flags/175_SUD_50.png","area":"Africa","subject":"Nubian Pyramids","country":"Sudan","daizai":"ヌビアのピラミッド","kuni":"スーダン","id-area":"AF-48","furigana":"そびえたつ　ないるがわぞいの　ぴらみっど","hand":"", "handPc":""}
        ,
        {"id":"143","clue":"'Live in brown mud houses. The roof is from plants.'","yomiku":"土の家　黄色の屋根は　わらぶき","answer":"../images/pictures/143_p.png","read":"../sounds/en/143_en.mp3","yomu":"../sounds/jp/143_jp.mp3","flag":"../images/flags/188_TOG_50.png","area":"Africa","subject":"Koutammakou Houses","country":"Togo","daizai":"クタマクの住居","kuni":"トーゴ","id-area":"AF-49","furigana":"つちのいえ　きいろのやねは　わらぶき","hand":"", "handPc":""}
        ,
        {"id":"144","clue":"'Humans and violent animals fought in a round building.'","yomiku":"ローマ時代　虎と死闘の　競技場","answer":"../images/pictures/144_p.png","read":"../sounds/en/144_en.mp3","yomu":"../sounds/jp/144_jp.mp3","flag":"../images/flags/191_TUN_50.png","area":"Africa","subject":"Amphitheatre of El Jem","country":"Tunisia","daizai":"エルジェム円形闘技場","kuni":"チュニジア","id-area":"AF-50","furigana":"ろおまじだい　とらとしとうの　きょうぎじょう","hand":"", "handPc":""}
        ,
        {"id":"145","clue":"'Dark body, thick arms, living in the forest'","yomiku":"真っ黒で　気はやさしくて　力持ち","answer":"../images/pictures/145_p.png","read":"../sounds/en/145_en.mp3","yomu":"../sounds/jp/145_jp.mp3","flag":"../images/flags/195_UGA_50.png","area":"Africa","subject":"Mountain Gorilla","country":"Uganda","daizai":"マウンテンゴリラ","kuni":"ウガンダ","id-area":"AF-51","furigana":"まっくろで　きはやさしくて　ちからもち","hand":"", "handPc":""}
        ,
        {"id":"146","clue":"'Elephants, lions and other animals gather here for water.'","yomiku":"水求め　集まる動物　遊ぶ象","answer":"../images/pictures/146_p.png","read":"../sounds/en/146_en.mp3","yomu":"../sounds/jp/146_jp.mp3","flag":"../images/flags/182_TAN_50.png","area":"Africa","subject":"Ngorongoro Conservation Area","country":"United Republic of Tanzania","daizai":"ンゴロンゴロ保護地域","kuni":"タンザニア連合共和国","id-area":"AF-52","furigana":"みずもとめ　あつまるどうぶつ　あそぶぞう","hand":"", "handPc":""}
        ,
        {"id":"147","clue":"'Move on a ship with an elephant in the rainy season.'","yomiku":"雨期になり　ボートで移動　象を乗せ","answer":"../images/pictures/147_p.png","read":"../sounds/en/147_en.mp3","yomu":"../sounds/jp/147_jp.mp3","flag":"../images/flags/205_ZAM_50.png","area":"Africa","subject":"Kuomboka Celemony","country":"Zambia","daizai":"クオンボカ（行事）","kuni":"ザンビア","id-area":"AF-53","furigana":"うきになり　ぼおとでいどう　ぞうをのせ","hand":"", "handPc":""}
        ,
        {"id":"148","clue":"'Three rocks and many zeros are on paper money.'","yomiku":"たくさんの　ゼロを並べた　高額紙幣","answer":"../images/pictures/148_p.png","read":"../sounds/en/148_en.mp3","yomu":"../sounds/jp/148_jp.mp3","flag":"../images/flags/206_ZIM_50.png","area":"Africa","subject":"Hundred Trillion Dollar Note","country":"Zimbabwe","daizai":"百兆ドル紙幣","kuni":"ジンバブエ","id-area":"AF-54","furigana":"たくさんの　ぜろをならべた　こうがくしへい","hand":"", "handPc":""}
        ,
        {"id":"149","clue":"'Long leaves and red flowers produce yellow fruits.'","yomiku":"長い葉に　囲まれ育つ　赤い花","answer":"../images/pictures/149_p.png","read":"../sounds/en/149_en.mp3","yomu":"../sounds/jp/149_jp.mp3","flag":"../images/flags/006_ANT_50.png","area":"Americas","subject":"Antigua Black Pineapple","country":"Antigua and Barbuda","daizai":"ブラック・パイナップル","kuni":"アンティグア・バーブーダ","id-area":"AM-01","furigana":"ながいはに　かこまれそだつ　あかいはな","hand":"", "handPc":""}
        ,
        {"id":"150","clue":"'Dressed in red and black, they dance in a pair.'","yomiku":"からだ寄せ　華麗に踊る　男女ペア","answer":"../images/pictures/150_p.png","read":"../sounds/en/150_en.mp3","yomu":"../sounds/jp/150_jp.mp3","flag":"../images/flags/007_ARG_50.png","area":"Americas","subject":"Argentine Tango","country":"Argentina","daizai":"アルゼンチン・タンゴ","kuni":"アルゼンチン","id-area":"AM-02","furigana":"からだよせ　かれいにおどる　だんじょぺあ","hand":"", "handPc":""}
        ,
        {"id":"151","clue":"'Go under the sea on a ship and watch tropical fish.'","yomiku":"サンゴ礁　潜れば広がる　水族館","answer":"../images/pictures/151_p.png","read":"../sounds/en/151_en.mp3","yomu":"../sounds/jp/151_jp.mp3","flag":"../images/flags/009_ARU_50.png","area":"Americas","subject":"Submarine Dive","country":"Aruba","daizai":"潜水艦探検","kuni":"アルバ","id-area":"AM-03","furigana":"さんごしょう　もぐればひろがる　すいぞくかん","hand":"", "handPc":""}
        ,
        {"id":"152","clue":"'Thin blue fish with a long lower mouth'","yomiku":"スマートで　下あご長い　青魚","answer":"../images/pictures/152_p.png","read":"../sounds/en/152_en.mp3","yomu":"../sounds/jp/152_jp.mp3","flag":"../images/flags/014_BAH_50.png","area":"Americas","subject":"Wahoo Fish","country":"Bahamas","daizai":"カマスサワラ","kuni":"バハマ","id-area":"AM-04","furigana":"すまあとで　したあごながい　あおざかな","hand":"", "handPc":""}
        ,
        {"id":"153","clue":"'Fly over the sea using a kind of wing.'","yomiku":"ひれ広げ　まるでヒコーキ　海の上","answer":"../images/pictures/153_p.png","read":"../sounds/en/153_en.mp3","yomu":"../sounds/jp/153_jp.mp3","flag":"../images/flags/016_BAR_50.png","area":"Americas","subject":"Bajan Flying Fish","country":"Barbados","daizai":"トビウオ","kuni":"バルバドス","id-area":"AM-05","furigana":"ひれひろげ　まるでひこおき　うみのうえ","hand":"", "handPc":""}
        ,
        {"id":"154","clue":"'Jump from the sky into a hole in the sea.'","yomiku":"ぽっかりと　海の大穴　ダイビング","answer":"../images/pictures/154_p.png","read":"../sounds/en/154_en.mp3","yomu":"../sounds/jp/154_jp.mp3","flag":"../images/flags/023_BIZ_50.png","area":"Americas","subject":"Great Blue Hole","country":"Belize","daizai":"グレートブルーホール（陥没穴）","kuni":"ベリーズ","id-area":"AM-06","furigana":"ぽっかりと　うみのおおあな　だいびんぐ","hand":"", "handPc":""}
        ,
        {"id":"155","clue":"'Stone castle stands between the sea and a green park.'","yomiku":"波しぶき　海に突き出た　石の要塞","answer":"../images/pictures/155_p.png","read":"../sounds/en/155_en.mp3","yomu":"../sounds/jp/155_jp.mp3","flag":"../images/flags/020_BER_50.png","area":"Americas","subject":"Fort St. Catherine","country":"Bermuda","daizai":"セント・キャサリン砦","kuni":"バミューダ","id-area":"AM-07","furigana":"なみしぶき　うみにつきでた　いしのようさい","hand":"", "handPc":""}
        ,
        {"id":"156","clue":"'Dancers walk on the street in scary masks.'","yomiku":"大きな仮面　楽しいダンス","answer":"../images/pictures/156_p.png","read":"../sounds/en/156_en.mp3","yomu":"../sounds/jp/156_jp.mp3","flag":"../images/flags/025_BOL_50.png","area":"Americas","subject":"Diablada (Dance of the Devils)","country":"Bolivia","daizai":"ディアブラーダ（悪魔の踊り）","kuni":"ボリビア","id-area":"AM-08","furigana":"おおきなかめん　たのしいだんす","hand":"", "handPc":""}
        ,
        {"id":"157","clue":"'Dance hard in a town with a statue on the mountain.'","yomiku":"サンバでみんな　はじける街は　カーニバル","answer":"../images/pictures/157_p.png","read":"../sounds/en/157_en.mp3","yomu":"../sounds/jp/157_jp.mp3","flag":"../images/flags/027_BRA_50.png","area":"Americas","subject":"Rio Carnival","country":"Brazil","daizai":"リオのカーニバル","kuni":"ブラジル","id-area":"AM-09","furigana":"さんばでみんな　はじけるまちは　かあにばる","hand":"", "handPc":""}
        ,
        {"id":"158","clue":"'Leaves fall, and the wings cross the sea.'","yomiku":"落ち葉舞い　羽根を広げて　空渡る","answer":"../images/pictures/158_p.png","read":"../sounds/en/158_en.mp3","yomu":"../sounds/jp/158_jp.mp3","flag":"../images/flags/034_CAN_50.png","area":"Americas","subject":"Canada Goose","country":"Canada","daizai":"カナダガン","kuni":"カナダ","id-area":"AM-10","furigana":"おちばまい　はねをひろげて　そらわたる","hand":"", "handPc":""}
        ,
        {"id":"159","clue":"'Send a letter from the post office in hell.'","yomiku":"悪魔住む　郵便局で　手紙出す","answer":"../images/pictures/159_p.png","read":"../sounds/en/159_en.mp3","yomu":"../sounds/jp/159_jp.mp3","flag":"../images/flags/035_CAY_50.png","area":"Americas","subject":"Hell (black rock formations)","country":"Cayman Islands","daizai":"地獄（黒い岩層）","kuni":"ケイマン諸島","id-area":"AM-11","furigana":"あくますむ　ゆうびんきょくで　てがみだす","hand":"", "handPc":""}
        ,
        {"id":"160","clue":"'Suddenly, a huge hand appears in the desert.'","yomiku":"砂が舞い　びっくり仰天　大きな手","answer":"../images/pictures/160_p.png","read":"../sounds/en/160_en.mp3","yomu":"../sounds/jp/160_jp.mp3","flag":"../images/flags/038_CHI_50.png","area":"Americas","subject":"Mano del Desierto (sculpture of a hand）","country":"Chile","daizai":"マノ・デル・デシエルト（手の彫刻）","kuni":"チリ","id-area":"AM-12","furigana":"すながまい　びっくりぎょうてん　おおきなて","hand":"", "handPc":""}
        ,
        {"id":"161","clue":"'At lunchtime, enjoy a hot drink with melted cheese.'","yomiku":"温まる　ココアにチーズ　溶かし飲む","answer":"../images/pictures/161_p.png","read":"../sounds/en/161_en.mp3","yomu":"../sounds/jp/161_jp.mp3","flag":"../images/flags/044_COL_50.png","area":"Americas","subject":"Hot Chocolate with Cheese","country":"Colombia","daizai":"チーズ入りホットチョコレート","kuni":"コロンビア","id-area":"AM-13","furigana":"あたたまる　ここあにちいず　とかしのむ","hand":"", "handPc":""}
        ,
        {"id":"162","clue":"'Climb trees and hang on all day long.'","yomiku":"木に登り　ぶらさがるのが　日課です","answer":"../images/pictures/162_p.png","read":"../sounds/en/162_en.mp3","yomu":"../sounds/jp/162_jp.mp3","flag":"../images/flags/047_CRC_50.png","area":"Americas","subject":"Sloth","country":"Costa Rica","daizai":"ナマケモノ","kuni":"コスタリカ","id-area":"AM-14","furigana":"きにのぼり　ぶらさがるのが　にっかです","hand":"", "handPc":""}
        ,
        {"id":"163","clue":"'On the street stands a man and a windmill from the novel.'","yomiku":"姫のため　風車と戦う　ダテ男","answer":"../images/pictures/163_p.png","read":"../sounds/en/163_en.mp3","yomu":"../sounds/jp/163_jp.mp3","flag":"../images/flags/049_CUB_50.png","area":"Americas","subject":"Statue of El Quixote","country":"Cuba","daizai":"ドン・キホーテ像","kuni":"キューバ","id-area":"AM-15","furigana":"ひめのため　かざぐるまとたたかう　だておとこ","hand":"", "handPc":""}
        ,
        {"id":"164","clue":"'Fly on green wings in a tropical forest.'","yomiku":"色鮮やか　原生林に　暮らす鳥","answer":"../images/pictures/164_p.png","read":"../sounds/en/164_en.mp3","yomu":"../sounds/jp/164_jp.mp3","flag":"../images/flags/054_DMA_50.png","area":"Americas","subject":"Sisserou Parrot","country":"Dominica","daizai":"ミカドボウシインコ","kuni":"ドミニカ","id-area":"AM-16","furigana":"いろあざやか　げんせいりんに　くらすとり","hand":"", "handPc":""}
        ,
        {"id":"165","clue":"'Face to face, dance to the sound of the guitar.'","yomiku":"お互いの　顔見つめ合い　踊る男女","answer":"../images/pictures/165_p.png","read":"../sounds/en/165_en.mp3","yomu":"../sounds/jp/165_jp.mp3","flag":"../images/flags/055_DOM_50.png","area":"Americas","subject":"Bachata Dance","country":"Dominican Republic","daizai":"バチャータ（ダンス）","kuni":"ドミニカ共和国","id-area":"AM-17","furigana":"おたがいの　かおみつめあい　おどるだんじょ","hand":"", "handPc":""}
        ,
        {"id":"166","clue":"'Home to rare animals and birds far from the continent'","yomiku":"ゾウガメや　イグアナたちが　暮らす島","answer":"../images/pictures/166_p.png","read":"../sounds/en/166_en.mp3","yomu":"../sounds/jp/166_jp.mp3","flag":"../images/flags/056_ECU_50.png","area":"Americas","subject":"Gal?pagos Islands","country":"Ecuador","daizai":"ガラパゴス諸島","kuni":"エクアドル","id-area":"AM-18","furigana":"ぞうがめや　いぐあなたちが　くらすしま","hand":"", "handPc":""}
        ,
        {"id":"167","clue":"'Draw a woman, a dove and different shapes together.'","yomiku":"鮮やかな　色とラインの　現代アート","answer":"../images/pictures/167_p.png","read":"../sounds/en/167_en.mp3","yomu":"../sounds/jp/167_jp.mp3","flag":"../images/flags/059_ESA_50.png","area":"Americas","subject":"\tLa Palma Style Art","country":"El Salvador","daizai":"パルマ・スタイルのアート","kuni":"エルサルバドル","id-area":"AM-19","furigana":"あざやかな　いろとらいんの　げんだいああと","hand":"", "handPc":""}
        ,
        {"id":"168","clue":"'Hand in hand, all stand at the bottom of the sea.'","yomiku":"神秘的　彫刻沈む　美術館","answer":"../images/pictures/168_p.png","read":"../sounds/en/168_en.mp3","yomu":"../sounds/jp/168_jp.mp3","flag":"../images/flags/076_GRN_50.png","area":"Americas","subject":"Underwater Sculpture Park","country":"Grenada","daizai":"海底彫刻公園","kuni":"グレナダ","id-area":"AM-20","furigana":"しんぴてき　ちょうこくしずむ　びじゅつかん","hand":"", "handPc":""}
        ,
        {"id":"169","clue":"'Rocks fall from space and destroy human society.'","yomiku":"地球に隕石　人類の　滅亡説","answer":"../images/pictures/169_p.png","read":"../sounds/en/169_en.mp3","yomu":"../sounds/jp/169_jp.mp3","flag":"../images/flags/077_GUA_50.png","area":"Americas","subject":"2012 End of the World","country":"Guatemala","daizai":"2012年人類滅亡説","kuni":"グアテマラ","id-area":"AM-21","furigana":"ちきゅうにいんせき　じんるいの　めつぼうせつ","hand":"", "handPc":""}
        ,
        {"id":"170","clue":"'Put coloured powder on each other in the spring.'","yomiku":"ヒンズーの　春来た知らせ　ホーリー祭","answer":"../images/pictures/170_p.png","read":"../sounds/en/170_en.mp3","yomu":"../sounds/jp/170_jp.mp3","flag":"../images/flags/080_GUY_50.png","area":"Americas","subject":"Phagwah Holi Festival","country":"Guyana","daizai":"ホーリー祭","kuni":"ガイアナ","id-area":"AM-22","furigana":"ひんずうの　はるきたたしらせ　ほおりいさい","hand":"", "handPc":""}
        ,
        {"id":"171","clue":"'Spread out the colourful skirts like a bird's wing.'","yomiku":"カーニバル　クジャクスカート　華やかに","answer":"../images/pictures/171_p.png","read":"../sounds/en/171_en.mp3","yomu":"../sounds/jp/171_jp.mp3","flag":"../images/flags/081_HAI_50.png","area":"Americas","subject":"Haitian Carnival","country":"Haiti","daizai":"ハイチカーニバル","kuni":"ハイチ","id-area":"AM-23","furigana":"かあにばる　くじゃくすかあと　はなやかに","hand":"", "handPc":""}
        ,
        {"id":"172","clue":"'Fish fall and catch them in the basket.'","yomiku":"落ちてくる　魚を籠で　つかまえる","answer":"../images/pictures/172_p.png","read":"../sounds/en/172_en.mp3","yomu":"../sounds/jp/172_jp.mp3","flag":"../images/flags/083_HON_50.png","area":"Americas","subject":"Fish Rain","country":"Honduras","daizai":"空から降る魚","kuni":"ホンジュラス","id-area":"AM-24","furigana":"おちてくる　さかなをかごで　つかまえる","hand":"", "handPc":""}
        ,
        {"id":"173","clue":"'Play drums and guitars for peace.'","yomiku":"レゲエの　リズムにのり　踊り合う","answer":"../images/pictures/173_p.png","read":"../sounds/en/173_en.mp3","yomu":"../sounds/jp/173_jp.mp3","flag":"../images/flags/095_JAM_50.png","area":"Americas","subject":"Reggae Music","country":"Jamaica","daizai":"レゲエ音楽","kuni":"ジャマイカ","id-area":"AM-25","furigana":"れげえの　りずむにのり　おどりあう","hand":"", "handPc":""}
        ,
        {"id":"174","clue":"'Wear a mask with flowers to remember the dead.'","yomiku":"お面付け　祖先を偲ぶ　花添えて","answer":"../images/pictures/174_p.png","read":"../sounds/en/174_en.mp3","yomu":"../sounds/jp/174_jp.mp3","flag":"../images/flags/122_MEX_50.png","area":"Americas","subject":"Day of the Dead","country":"Mexico","daizai":"死者の日","kuni":"メキシコ","id-area":"AM-26","furigana":"おめんつけ　そせんをしのぶ　はなそえて","hand":"", "handPc":""}
        ,
        {"id":"175","clue":"'Two islands, large and small, in the lake'","yomiku":"湖に　浮かぶ二つの　火山島","answer":"../images/pictures/175_p.png","read":"../sounds/en/175_en.mp3","yomu":"../sounds/jp/175_jp.mp3","flag":"../images/flags/135_NCA_50.png","area":"Americas","subject":"Ometepe Island","country":"Nicaragua","daizai":"オメテべ島","kuni":"ニカラグア","id-area":"AM-27","furigana":"みずうみに　うかぶふたつの　かざんとう","hand":"", "handPc":""}
        ,
        {"id":"176","clue":"'View the colourful museum from a boat on the canal.'","yomiku":"太平洋と　大西洋を　つなぐ道","answer":"../images/pictures/176_p.png","read":"../sounds/en/176_en.mp3","yomu":"../sounds/jp/176_jp.mp3","flag":"../images/flags/145_PAN_50.png","area":"Americas","subject":"Panama City","country":"Panama","daizai":"パナマ市","kuni":"パナマ","id-area":"AM-28","furigana":"たいへいようと　たいせいようを　つなぐみち","hand":"", "handPc":""}
        ,
        {"id":"177","clue":"'Pour water over the leaves and drink through a tube.'","yomiku":"茶葉に冷水　タンブラーで　飲むサラダ","answer":"../images/pictures/177_p.png","read":"../sounds/en/177_en.mp3","yomu":"../sounds/jp/177_jp.mp3","flag":"../images/flags/146_PAR_50.png","area":"Americas","subject":"Terer? (cold mate tea)","country":"Paraguay","daizai":"テレレ（冷マテ茶）","kuni":"パラグアイ","id-area":"AM-29","furigana":"ちゃばにれいすい　たんぶらあで　のむさらだ","hand":"", "handPc":""}
        ,
        {"id":"178","clue":"'Over the ground, who drew the bird with a long mouth?'","yomiku":"なぞ多い　誰が描いたか　ナスカの絵","answer":"../images/pictures/178_p.png","read":"../sounds/en/178_en.mp3","yomu":"../sounds/jp/178_jp.mp3","flag":"../images/flags/147_PER_50.png","area":"Americas","subject":"Nazca Lines","country":"Peru","daizai":"ナスカの地上絵","kuni":"ペルー","id-area":"AM-30","furigana":"なぞおおい　だれがえがいたか　なすかのえ","hand":"", "handPc":""}
        ,
        {"id":"179","clue":"'Watch for the enemy from the castle's small tower.'","yomiku":"攻撃から　街を守った　監視塔","answer":"../images/pictures/179_p.png","read":"../sounds/en/179_en.mp3","yomu":"../sounds/jp/179_jp.mp3","flag":"../images/flags/155_PUR_50.png","area":"Americas","subject":"Castillo San Crist?bal (fortress)","country":"Puerto Rico","daizai":"サンクリストバル要塞","kuni":"プエルトリコ","id-area":"AM-31","furigana":"こうげきから　まちをまもった　かんしとう","hand":"", "handPc":""}
        ,
        {"id":"180","clue":"'Feels good to dance with a long stick on each foot.'","yomiku":"長い棒　足に継ぎたし　踊り出す","answer":"../images/pictures/180_p.png","read":"../sounds/en/180_en.mp3","yomu":"../sounds/jp/180_jp.mp3","flag":"../images/flags/165_SKN_50.png","area":"Americas","subject":"Moko Jumbie (stilts walker)","country":"Saint Kitts and Nevis","daizai":"モコジャンビー（竹馬ダンサー）","kuni":"セントクリストファー・ネイビス","id-area":"AM-32","furigana":"ながいぼう　あしにつぎたし　おどりだす","hand":"", "handPc":""}
        ,
        {"id":"181","clue":"'In the park stand an unusual cross and a \"v\" for \"victory\".'","yomiku":"公園の　フランスクロスと　勝利のV","answer":"../images/pictures/181_p.png","read":"../sounds/en/181_en.mp3","yomu":"../sounds/jp/181_jp.mp3","flag":"../images/flags/110_LCA_50.png","area":"Americas","subject":"WWII Memorial","country":"Saint Lucia","daizai":"第2次世界大戦記念碑","kuni":"セントルシア","id-area":"AM-33","furigana":"こうえんの　ふらんすくろすと　しょうりのぶい","hand":"", "handPc":""}
        ,
        {"id":"182","clue":"'Each leaf has a dark green and a light green part.'","yomiku":"光さす　まだら模様の　クズウコン","answer":"../images/pictures/182_p.png","read":"../sounds/en/182_en.mp3","yomu":"../sounds/jp/182_jp.mp3","flag":"../images/flags/203_VIN_50.png","area":"Americas","subject":"Arrowroot","country":"St Vincent and the Grenadines","daizai":"クズウコン","kuni":"セントビンセント及びグレナディーン諸島","id-area":"AM-34","furigana":"ひかりさす　まだらもようの　くずうこん","hand":"", "handPc":""}
        ,
        {"id":"183","clue":"'Bats and fish live in the tropical forest.'","yomiku":"原始の姿　とどめた森林　今も見る","answer":"../images/pictures/183_p.png","read":"../sounds/en/183_en.mp3","yomu":"../sounds/jp/183_jp.mp3","flag":"../images/flags/177_SUR_50.png","area":"Americas","subject":"Central Suriname Nature Reserve","country":"Suriname","daizai":"中央スリナム自然保護区","kuni":"スリナム","id-area":"AM-35","furigana":"げんしのすがた　とどめたしんりん　いまもみる","hand":"", "handPc":""}
        ,
        {"id":"184","clue":"'Dance in costumes with designs of bones and feathers.'","yomiku":"骸骨や　羽根つき衣装で　皆踊る","answer":"../images/pictures/184_p.png","read":"../sounds/en/184_en.mp3","yomu":"../sounds/jp/184_jp.mp3","flag":"../images/flags/190_TRI_50.png","area":"Americas","subject":"Trinidad Carnival","country":"Trinidad and Tobago","daizai":"トリニダード・カーニバル","kuni":"トリニダード・トバゴ","id-area":"AM-36","furigana":"がいこつや　はねつきいしょうで　みなおどる","hand":"", "handPc":""}
        ,
        {"id":"185","clue":"'People cross the road at the foot of the tall buildings.'","yomiku":"ニューヨーク　人と文化の　交差点","answer":"../images/pictures/185_p.png","read":"../sounds/en/185_en.mp3","yomu":"../sounds/jp/185_jp.mp3","flag":"../images/flags/198_USA_50.png","area":"Americas","subject":"Times Square","country":"United States of America","daizai":"タイムズスクエア","kuni":"アメリカ合衆国","id-area":"AM-37","furigana":"にゅうよおく　ひととぶんかの　こうさてん","hand":"", "handPc":""}
        ,
        {"id":"186","clue":"'Protect themselves with a hard shell on the body.'","yomiku":"鎧つけ　体丸めて　身を守る","answer":"../images/pictures/186_p.png","read":"../sounds/en/186_en.mp3","yomu":"../sounds/jp/186_jp.mp3","flag":"../images/flags/197_URU_50.png","area":"Americas","subject":"Armadillo","country":"Uruguay","daizai":"アルマジロ","kuni":"ウルグアイ","id-area":"AM-38","furigana":"よろいつけ　からだまるめて　みをまもる","hand":"", "handPc":""}
        ,
        {"id":"187","clue":"'Above the clouds, a rocky mountain with a flat top'","yomiku":"雲の上　岩山テーブル　マウンテン","answer":"../images/pictures/187_p.png","read":"../sounds/en/187_en.mp3","yomu":"../sounds/jp/187_jp.mp3","flag":"../images/flags/201_VEN_50.png","area":"Americas","subject":"Monte Roraima","country":"Venezuela","daizai":"ロライマ山","kuni":"ベネズエラ","id-area":"AM-39","furigana":"くものうえ　いわやまてえぶる　まうんてん","hand":"", "handPc":""}
        ,
        {"id":"188","clue":"'Birds come down, and the lake turns pink.'","yomiku":"湖を　ピンクに染める　鳥の群れ","answer":"../images/pictures/188_p.png","read":"../sounds/en/188_en.mp3","yomu":"../sounds/jp/188_jp.mp3","flag":"../images/flags/094_IVB_50.png","area":"Americas","subject":"Flamingo","country":"Virgin Islands, British","daizai":"フラミンゴ","kuni":"英領バージン諸島","id-area":"AM-40","furigana":"みずうみを　ぴんくにそめる　とりのむれ","hand":"", "handPc":""}
        ,
        {"id":"189","clue":"'From a tower with a flag up, watch for enemy ships.'","yomiku":"黒ひげの　カリブの海賊　住んだ城","answer":"../images/pictures/189_p.png","read":"../sounds/en/189_en.mp3","yomu":"../sounds/jp/189_jp.mp3","flag":"../images/flags/092_ISV_50.png","area":"Americas","subject":"Blackbeard's Castle","country":"Virgin Islands, US","daizai":"黒髭城","kuni":"米領バージン諸島","id-area":"AM-41","furigana":"くろひげの　かりぶのかいぞく　すんだしろ","hand":"", "handPc":""}
        ,
        {"id":"190","clue":"'Make a large cloth by hand and add red lines.'","yomiku":"手で編んだ　大きな布に　赤い線","answer":"../images/pictures/190_p.png","read":"../sounds/en/190_en.mp3","yomu":"../sounds/jp/190_jp.mp3","flag":"../images/flags/010_ASA_50.png","area":"Oceania","subject":"Fine Mat (gift cloth)","country":"American Samoa","daizai":"ファインマット（贈答用布）","kuni":"米領サモア","id-area":"OC-01","furigana":"てであんだ　おおきなぬのに　あかいせん","hand":"", "handPc":""}
        ,
        {"id":"191","clue":"'Fireworks above the theatre on New Year's Day'","yomiku":"ニューイヤー　オペラハウスに　花火咲く","answer":"../images/pictures/191_p.png","read":"../sounds/en/191_en.mp3","yomu":"../sounds/jp/191_jp.mp3","flag":"../images/flags/011_AUS_50.png","area":"Oceania","subject":"Sydney Opera House","country":"Australia","daizai":"シドニー・オペラハウス","kuni":"オーストラリア","id-area":"OC-02","furigana":"にゅういやあ　おぺらはうすに　はなびさく","hand":"", "handPc":""}
        ,
        {"id":"192","clue":"'Use black wings for swimming in the sea, not to fly.'","yomiku":"切手に　描かれた　ペンギンたち","answer":"../images/pictures/192_p.png","read":"../sounds/en/192_en.mp3","yomu":"../sounds/jp/192_jp.mp3","flag":"../images/flags/043_COK_50.png","area":"Oceania","subject":"Penguin","country":"Cook Islands","daizai":"ペンギン","kuni":"クック諸島","id-area":"OC-03","furigana":"きってに　えがかれた　ぺんぎんたち","hand":"", "handPc":""}
        ,
        {"id":"193","clue":"'Cut stones and make a hole inside to complete large coins.'","yomiku":"石削り　穴あけできた　大きなお金","answer":"../images/pictures/193_p.png","read":"../sounds/en/193_en.mp3","yomu":"../sounds/jp/193_jp.mp3","flag":"../images/flags/066_FSM_50.png","area":"Oceania","subject":"Yapese Stone Money","country":"Federated States of Micronesia","daizai":"ストーンマネー","kuni":"ミクロネシア連邦","id-area":"OC-04","furigana":"いしけずり　あなあけできた　おおきなおかね","hand":"", "handPc":""}
        ,
        {"id":"194","clue":"'Kick the ball over the goal bar.'","yomiku":"最強の　呼び声高い　ラガーマン","answer":"../images/pictures/194_p.png","read":"../sounds/en/194_en.mp3","yomu":"../sounds/jp/194_jp.mp3","flag":"../images/flags/063_FIJ_50.png","area":"Oceania","subject":"Rugby","country":"Fiji","daizai":"ラグビー","kuni":"フィジー","id-area":"OC-05","furigana":"さいきょうの　よびごえたかい　らがあまん","hand":"", "handPc":""}
        ,
        {"id":"195","clue":"'Walk hand in hand to the cliff top for love.'","yomiku":"恋人岬　ハートに名を書き　愛誓う","answer":"../images/pictures/195_p.png","read":"../sounds/en/195_en.mp3","yomu":"../sounds/jp/195_jp.mp3","flag":"../images/flags/079_GUM_50.png","area":"Oceania","subject":"Puntan Dos Amantes (Two Lovers Point)","country":"Guam","daizai":"恋人岬","kuni":"グアム","id-area":"OC-06","furigana":"こいびとみさき　はあとになをかき　あいちかう","hand":"", "handPc":""}
        ,
        {"id":"196","clue":"'On a branch, looking for food and about to fly'","yomiku":"枝にとまり　ボッキコキコと　鳴く小鳥","answer":"../images/pictures/196_p.png","read":"../sounds/en/196_en.mp3","yomu":"../sounds/jp/196_jp.mp3","flag":"../images/flags/101_KIR_50.png","area":"Oceania","subject":"Christmas Island Warbler","country":"Kiribati","daizai":"クリスマスヨシキリ","kuni":"キリバス","id-area":"OC-07","furigana":"えだにとまり　ぼっきこきこと　なくことり","hand":"", "handPc":""}
        ,
        {"id":"197","clue":"'In the blue sea, the islands form a curve.'","yomiku":"弧を描く　サンゴでできた　島と浜","answer":"../images/pictures/197_p.png","read":"../sounds/en/197_en.mp3","yomu":"../sounds/jp/197_jp.mp3","flag":"../images/flags/124_MHL_50.png","area":"Oceania","subject":"Majuro Atoll","country":"Marshall Islands","daizai":"マジュロ環礁","kuni":"マーシャル諸島","id-area":"OC-08","furigana":"こをえがく　さんごでできた　しまとはま","hand":"", "handPc":""}
        ,
        {"id":"198","clue":"'Hang a string on the fingers to make different shapes.'","yomiku":"指に紐かけ　いろいろな形　創り出す","answer":"../images/pictures/198_p.png","read":"../sounds/en/198_en.mp3","yomu":"../sounds/jp/198_jp.mp3","flag":"../images/flags/141_NRU_50.png","area":"Oceania","subject":"Ekawada (string figure)","country":"Nauru","daizai":"あやとり","kuni":"ナウル","id-area":"OC-09","furigana":"ゆびにひもかけ　いろいろなかたち　つくりだす","hand":"", "handPc":""}
        ,
        {"id":"199","clue":"'Long sharp mouth, the same name as the fruit'","yomiku":"果物と　同じ名前の　国の鳥","answer":"../images/pictures/199_p.png","read":"../sounds/en/199_en.mp3","yomu":"../sounds/jp/199_jp.mp3","flag":"../images/flags/142_NZL_50.png","area":"Oceania","subject":"Kiwi","country":"New Zealand","daizai":"キ－ウィ","kuni":"ニュージーランド","id-area":"OC-10","furigana":"くだものと　おなじなまえの　くにのとり","hand":"", "handPc":""}
        ,
        {"id":"200","clue":"'Green islands, large and small, spread out in the sea.'","yomiku":"大小の　不思議な形　島の国","answer":"../images/pictures/200_p.png","read":"../sounds/en/200_en.mp3","yomu":"../sounds/jp/200_jp.mp3","flag":"../images/flags/150_PLW_50.png","area":"Oceania","subject":"Rock Islands","country":"Palau","daizai":"ロックアイランド","kuni":"パラオ","id-area":"OC-11","furigana":"だいしょうの　ふしぎなかたち　しまのくに","hand":"", "handPc":""}
        ,
        {"id":"201","clue":"'Sea cows swim with their large grey body.'","yomiku":"伝説の　人魚のモデル　青い海","answer":"../images/pictures/201_p.png","read":"../sounds/en/201_en.mp3","yomu":"../sounds/jp/201_jp.mp3","flag":"../images/flags/151_PNG_50.png","area":"Oceania","subject":"Dugong (sea cow)","country":"Papua New Guinea","daizai":"ジュゴン","kuni":"パプアニューギニア","id-area":"OC-12","furigana":"でんせつの　にんぎょのもでる　あおいうみ","hand":"", "handPc":""}
        ,
        {"id":"202","clue":"'From the red line on the map, the date changes.'","yomiku":"太平洋　日付が変わる　赤い線","answer":"../images/pictures/202_p.png","read":"../sounds/en/202_en.mp3","yomu":"../sounds/jp/202_jp.mp3","flag":"../images/flags/161_SAM_50.png","area":"Oceania","subject":"International Date Line","country":"Samoa","daizai":"国際日付変更線","kuni":"サモア","id-area":"OC-13","furigana":"たいへいよう　ひづけがかわる　あかいせん","hand":"", "handPc":""}
        ,
        {"id":"203","clue":"'On the coast, clear water shows traces of war.'","yomiku":"戦争の　爪痕残る　澄んだ海","answer":"../images/pictures/203_p.png","read":"../sounds/en/203_en.mp3","yomu":"../sounds/jp/203_jp.mp3","flag":"../images/flags/169_SOL_50.png","area":"Oceania","subject":"Island View","country":"Solomon Islands","daizai":"島の風景","kuni":"ソロモン諸島","id-area":"OC-14","furigana":"せんそうの　つめあとのこる　すんだうみ","hand":"", "handPc":""}
        ,
        {"id":"204","clue":"'Blow water and come to swim for giving birth.'","yomiku":"人になつく　ザトウクジラと　海泳ぐ","answer":"../images/pictures/204_p.png","read":"../sounds/en/204_en.mp3","yomu":"../sounds/jp/204_jp.mp3","flag":"../images/flags/183_TGA_50.png","area":"Oceania","subject":"Humpback Whales","country":"Tonga","daizai":"ザトウクジラ","kuni":"トンガ","id-area":"OC-15","furigana":"ひとになつく　ざとうくじらと　うみおよぐ","hand":"", "handPc":""}
        ,
        {"id":"205","clue":"'Swim in the sea with the head out of the shell.'","yomiku":"温暖化　防止を願う　ウミガメと","answer":"../images/pictures/205_p.png","read":"../sounds/en/205_en.mp3","yomu":"../sounds/jp/205_jp.mp3","flag":"../images/flags/193_TUV_50.png","area":"Oceania","subject":"Sea Turtle","country":"Tuvalu","daizai":"ウミガメ","kuni":"ツバル","id-area":"OC-16","furigana":"おんだんか　ぼうしをねがう　うみがめと","hand":"", "handPc":""}
        ,
        {"id":"206","clue":"'Dive into the sea and put a letter in the post.'","yomiku":"絵葉書よ　世界に届け　海中ポスト","answer":"../images/pictures/206_p.png","read":"../sounds/en/206_en.mp3","yomu":"../sounds/jp/206_jp.mp3","flag":"../images/flags/200_VAN_50.png","area":"Oceania","subject":"Underwater Post Office","country":"Vanuatu","daizai":"水中郵便局","kuni":"バヌアツ","id-area":"OC-17","furigana":"えはがきよ　せかいにとどけ　かいちゅうぽすと","hand":"", "handPc":""}
        
        ]
  
   );
  });


  app.get("/api/v1/nextjs", function (req, res) {
    res.send(

        [
            {"id":"1","clue":"'By the river, a brown tower stands alone.'","yomiku":"青タイルが　光るレンガの　ミナレット","answer":"/images/pictures/001_p.png","read":"/sounds/en/001_en.mp3","yomu":"/sounds/jp/001_jp.mp3","flag":"/images/flags/001_AFG_50.png","area":"Asia","subject":"Minaret of Jam","country":"Afghanistan","daizai":"ジャムのミナレット塔","kuni":"アフガニスタン","id-area":"AS-01","furigana":"あおたいるが　ひかるれんがの　みなれっと"}
            ,
            {"id":"2","clue":"'Not a pet. Cats live in the desert.'","yomiku":"砂漠に暮らす　足裏黒い　元気な猫","answer":"/images/pictures/002_p.png","read":"/sounds/en/002_en.mp3","yomu":"/sounds/jp/002_jp.mp3","flag":"/images/flags/028_BRN_50.png","area":"Asia","subject":"Arabian Sand Cats","country":"Bahrain","daizai":"スナネコ","kuni":"バーレーン","id-area":"AS-02","furigana":"さばくにくらす　あしうらくろい　げんきなねこ"}
            ,
            {"id":"3","clue":"'Beat drums and carry paper animals in the New Year.'","yomiku":"新年に　はりぼて担ぎ　太鼓打つ","answer":"/images/pictures/003_p.png","read":"/sounds/en/003_en.mp3","yomu":"/sounds/jp/003_jp.mp3","flag":"/images/flags/015_BAN_50.png","area":"Asia","subject":"Pahela Baishakh (Bengali New Year)","country":"Bangladesh","daizai":"ベンガル新年","kuni":"バングラディシュ","id-area":"AS-03","furigana":"しんねんに　はりぼてかつぎ　たいこうつ"}
            ,
            {"id":"4","clue":"'Dressed in traditional costume, the King and Queen look happy.'","yomiku":"国王に　よりそう王妃　幸福の国","answer":"/images/pictures/004_p.png","read":"/sounds/en/004_en.mp3","yomu":"/sounds/jp/004_jp.mp3","flag":"/images/flags/021_BHU_50.png","area":"Asia","subject":"A Happy Country","country":"Bhutan","daizai":"「幸せの国」","kuni":"ブータン","id-area":"AS-04","furigana":"こくおうに　よりそうおうひ　こうふくのくに"}
            ,
            {"id":"5","clue":"'By the water, a white building with a gold roof'","yomiku":"水辺に映る　ブルネイの誇り","answer":"/images/pictures/005_p.png","read":"/sounds/en/005_en.mp3","yomu":"/sounds/jp/005_jp.mp3","flag":"/images/flags/029_BRU_50.png","area":"Asia","subject":"Omar Ali Saifuddien Mosque","country":"Brunei Darussalam","daizai":"オマール・アリ・サイフディン・モスク","kuni":"ブルネイ・ダルサラーム","id-area":"AS-05","furigana":"みずべにうつる　ぶるねいのほこり"}
            ,
            {"id":"6","clue":"'Put them in a pot, fry in oil and eat.'","yomiku":"鍋に入れ　油で揚げた　クモ食べる","answer":"/images/pictures/006_p.png","read":"/sounds/en/006_en.mp3","yomu":"/sounds/jp/006_jp.mp3","flag":"/images/flags/033_CAM_50.png","area":"Asia","subject":"Fried Spider","country":"Cambodia","daizai":"クモのフライ","kuni":"カンボジア","id-area":"AS-06","furigana":"なべにいれ　あぶらであげた　くもたべる"}
            ,
            {"id":"7","clue":"'Fireworks in the night sky of a growing city'","yomiku":"101　街の夜空に　咲く花火","answer":"/images/pictures/007_p.png","read":"/sounds/en/007_en.mp3","yomu":"/sounds/jp/007_jp.mp3","flag":"/images/flags/189_TPE_50.png","area":"Asia","subject":"Taipei 101 Tower","country":"Chinese Taipei","daizai":"タイペイ101ビル","kuni":"チャイニーズ・タイペイ","id-area":"AS-07","furigana":"いちまるいち　まちのよぞらに　さくはなび"}
            ,
            {"id":"8","clue":"'Dance and smile together in yellow or pink costumes.'","yomiku":"着飾って　笑顔で祝う　舞踏会","answer":"/images/pictures/008_p.png","read":"/sounds/en/008_en.mp3","yomu":"/sounds/jp/008_jp.mp3","flag":"/images/flags/154_PRK_50.png","area":"Asia","subject":"Dancing Ceremony","country":"Democratic People's Republic of Korea","daizai":"祝賀舞踏会","kuni":"朝鮮民主主義人民共和国","id-area":"AS-08","furigana":"きかざって　えがおでいわう　ぶとうかい"}
            ,
            {"id":"9","clue":"'Walk around with a long monster to the beat of drums.'","yomiku":"龍が舞う　太鼓に合わせ　練り歩く","answer":"/images/pictures/009_p.png","read":"/sounds/en/009_en.mp3","yomu":"/sounds/jp/009_jp.mp3","flag":"/images/flags/082_HKG_50.png","area":"Asia","subject":"Tai Hang Fire Dragon Dance","country":"Hong Kong, China","daizai":"ファイヤー・ドラゴン・ダンス","kuni":"ホンコン・チャイナ","id-area":"AS-09","furigana":"りゅうがまう　たいこにあわせ　ねりあるく"}
            ,
            {"id":"10","clue":"'Temples and festivals around the wheel'","yomiku":"奥深い　多様な文化　認め合い","answer":"/images/pictures/010_p.png","read":"/sounds/en/010_en.mp3","yomu":"/sounds/jp/010_jp.mp3","flag":"/images/flags/086_IND_50.png","area":"Asia","subject":"Indian Beauty","country":"India","daizai":"インド文化","kuni":"インド","id-area":"AS-10","furigana":"おくふかい　たようなぶんか　みとめあい"}
            ,
            {"id":"11","clue":"'Move arms and legs with a folding fan in hand.'","yomiku":"扇子手に　冠かぶり　神の舞","answer":"/images/pictures/011_p.png","read":"/sounds/en/011_en.mp3","yomu":"/sounds/jp/011_jp.mp3","flag":"/images/flags/085_INA_50.png","area":"Asia","subject":"Balinese Dance","country":"Indonesia","daizai":"バリ舞踊","kuni":"インドネシア","id-area":"AS-11","furigana":"せんすてに　かんむりかぶり　かみのまい"}
            ,
            {"id":"12","clue":"'Houses are crowded on top of the rocky mountain.'","yomiku":"岩山の　てっぺんの街　アマディヤ","answer":"/images/pictures/012_p.png","read":"/sounds/en/012_en.mp3","yomu":"/sounds/jp/012_jp.mp3","flag":"/images/flags/089_IRQ_50.png","area":"Asia","subject":"Amadiya (mountain top town)","country":"Iraq","daizai":"アマディヤ（山頂の街）","kuni":"イラク","id-area":"AS-12","furigana":"いわやまの　てっぺんのまち　あまでぃや"}
            ,
            {"id":"13","clue":"'In winter, get together and enjoy food and poems.'","yomiku":"長い夜　皆で楽しむ　詩と食事","answer":"/images/pictures/013_p.png","read":"/sounds/en/013_en.mp3","yomu":"/sounds/jp/013_jp.mp3","flag":"/images/flags/087_IRI_50.png","area":"Asia","subject":"Yalda Eve Ceremony","country":"Islamic Republic of Iran","daizai":"ヤルダー(冬至の儀式)","kuni":"イラン・イスラム共和国","id-area":"AS-13","furigana":"ながいよる　みなでたのしむ　しとしょくじ"}
            ,
            {"id":"14","clue":"'In the wind, a family of fish swims above the roof.'","yomiku":"風に乗り　親子が泳ぐ　鯉のぼり","answer":"/images/pictures/014_p.png","read":"/sounds/en/014_en.mp3","yomu":"/sounds/jp/014_jp.mp3","flag":"/images/flags/097_JPN_50.png","area":"Asia","subject":"Koinobori (carp streamer)","country":"Japan","daizai":"こいのぼり","kuni":"日本","id-area":"AS-14","furigana":"かぜにのり　おやこがおよぐ　こいのぼり"}
            ,
            {"id":"15","clue":"'Cut out a rocky mountain to build a town.'","yomiku":"岩山を　削りつくった　街の跡","answer":"/images/pictures/015_p.png","read":"/sounds/en/015_en.mp3","yomu":"/sounds/jp/015_jp.mp3","flag":"/images/flags/096_JOR_50.png","area":"Asia","subject":"Petra Ruins","country":"Jordan","daizai":"ペトラ遺跡","kuni":"ヨルダン","id-area":"AS-15","furigana":"いわやまを　けずりつくった　まちのあと"}
            ,
            {"id":"16","clue":"'Ride horses and catch an animal to the goal.'","yomiku":"馬に乗り　ヤギ奪い合い　ゴールする","answer":"/images/pictures/016_p.png","read":"/sounds/en/016_en.mp3","yomu":"/sounds/jp/016_jp.mp3","flag":"/images/flags/098_KAZ_50.png","area":"Asia","subject":"Kokpar (horse game)","country":"Kazakhstan","daizai":"キョクボル（馬競技）","kuni":"カザフスタン","id-area":"AS-16","furigana":"うまにのり　やぎうばいあい　ごおるする"}
            ,
            {"id":"17","clue":"'Towers have blue and white lines, waiting for the rain.'","yomiku":"てっぺんに　雨水集める　キノコタワー","answer":"/images/pictures/017_p.png","read":"/sounds/en/017_en.mp3","yomu":"/sounds/jp/017_jp.mp3","flag":"/images/flags/105_KUW_50.png","area":"Asia","subject":"Kuwait Water Towers","country":"Kuwait","daizai":"クウェート給水塔","kuni":"クウェート","id-area":"AS-17","furigana":"てっぺんに　あまみずあつめる　きのこたわあ"}
            ,
            {"id":"18","clue":"'Snow mountains, and the brown tower on the land'","yomiku":"草原に　堂々と立つ　塔一つ","answer":"/images/pictures/018_p.png","read":"/sounds/en/018_en.mp3","yomu":"/sounds/jp/018_jp.mp3","flag":"/images/flags/100_KGZ_50.png","area":"Asia","subject":"Burana Tower","country":"Kyrgyzstan","daizai":"ブラナの塔","kuni":"キルギスタン","id-area":"AS-18","furigana":"そうげんに　どうどうとたつ　とうひとつ"}
            ,
            {"id":"19","clue":"'Over the net, hit a ball with feet and head.'","yomiku":"手は出すな　足と頭で　球を打て","answer":"/images/pictures/019_p.png","read":"/sounds/en/019_en.mp3","yomu":"/sounds/jp/019_jp.mp3","flag":"/images/flags/106_LAO_50.png","area":"Asia","subject":"Katow (kick volleyball)","country":"Lao People's Democratic Republic","daizai":"セパタクロー（キック・バレー）","kuni":"ラオス人民民主共和国","id-area":"AS-19","furigana":"てわだすな　あしとあたまで　たまをうて"}
            ,
            {"id":"20","clue":"'People believe God planted the trees here.'","yomiku":"国旗にも　描かれている　聖なる木","answer":"/images/pictures/020_p.png","read":"/sounds/en/020_en.mp3","yomu":"/sounds/jp/020_jp.mp3","flag":"/images/flags/112_LIB_50.png","area":"Asia","subject":"The Cedars of God","country":"Lebanon","daizai":"神の杉","kuni":"レバノン","id-area":"AS-20","furigana":"こっきにも　えがかれている　せいなるき"}
            ,
            {"id":"21","clue":"'Drink white coffee after a meal to wake up.'","yomiku":"目がさめる　食事のあとの　白コーヒー","answer":"/images/pictures/021_p.png","read":"/sounds/en/021_en.mp3","yomu":"/sounds/jp/021_jp.mp3","flag":"/images/flags/118_MAS_50.png","area":"Asia","subject":"Malaysian Breakfast","country":"Malaysia","daizai":"マレーシアの朝ごはん","kuni":"マレーシア","id-area":"AS-21","furigana":"めがさめる　しょくじのあとの　しろこおひい"}
            ,
            {"id":"22","clue":"'Eyes and a nose are at either end of the long face.'","yomiku":"ハンマーか　顔の両端　離れた目","answer":"/images/pictures/022_p.png","read":"/sounds/en/022_en.mp3","yomu":"/sounds/jp/022_jp.mp3","flag":"/images/flags/121_MDV_50.png","area":"Asia","subject":"Hammerhead Shark","country":"Maldives","daizai":"シュモクザメ","kuni":"モルディヴ","id-area":"AS-22","furigana":"はんまあか　かおのりょうはし　はなれため"}
            ,
            {"id":"23","clue":"'Play an instrument with two strings and a horse's head.'","yomiku":"２本の弦　馬頭の飾り　ついた楽器","answer":"/images/pictures/023_p.png","read":"/sounds/en/023_en.mp3","yomu":"/sounds/jp/023_jp.mp3","flag":"/images/flags/123_MGL_50.png","area":"Asia","subject":"Morin Khuur (music instrument)","country":"Mongolia","daizai":"モリンホール（弦楽器）","kuni":"モンゴル","id-area":"AS-23","furigana":"にほんのげん　ばとうのかざり　ついたがっき"}
            ,
            {"id":"24","clue":"'Take off your shoes and enter the golden temple.'","yomiku":"金色の　塔たち並ぶ　聖地なり","answer":"/images/pictures/024_p.png","read":"/sounds/en/024_en.mp3","yomu":"/sounds/jp/024_jp.mp3","flag":"/images/flags/133_MYA_50.png","area":"Asia","subject":"Shwedagon Pagoda","country":"Myanmar","daizai":"シェダゴンパゴダ（仏塔）","kuni":"ミャンマー","id-area":"AS-24","furigana":"きんいろの　とうたちならぶ　せいちなり"}
            ,
            {"id":"25","clue":"'Many colourful flags and a face with big eyes'","yomiku":"ドームから　四方見つめる　仏の目","answer":"/images/pictures/025_p.png","read":"/sounds/en/025_en.mp3","yomu":"/sounds/jp/025_jp.mp3","flag":"/images/flags/137_NEP_50.png","area":"Asia","subject":"Boudhanath Stupa","country":"Nepal","daizai":"ボダナート仏塔","kuni":"ネパール","id-area":"AS-25","furigana":"どおむから　しほうみつめる　ほとけのめ"}
            ,
            {"id":"26","clue":"'Brown castles and palm trees on a pot.'","yomiku":"真鍮の　ポットに映る　城の街","answer":"/images/pictures/026_p.png","read":"/sounds/en/026_en.mp3","yomu":"/sounds/jp/026_jp.mp3","flag":"/images/flags/143_OMA_50.png","area":"Asia","subject":"Aspects of Oman","country":"Oman","daizai":"城とポット","kuni":"オマーン","id-area":"AS-26","furigana":"しんちゅうの　ぽっとにうつる　しろのまち"}
            ,
            {"id":"27","clue":"'Drive through the high mountains and cross the border.'","yomiku":"山を越え　天空の旅　カラコルム","answer":"/images/pictures/027_p.png","read":"/sounds/en/027_en.mp3","yomu":"/sounds/jp/027_jp.mp3","flag":"/images/flags/144_PAK_50.png","area":"Asia","subject":"Karakoram Highway","country":"Pakistan","daizai":"カラコラム・ハイウェイ","kuni":"パキスタン","id-area":"AS-27","furigana":"やまをこえ　てんくうのたび　からこるむ"}
            ,
            {"id":"28","clue":"'Cover the face with a black and white cloth.'","yomiku":"さっそうと　白黒の布　顔に巻く","answer":"/images/pictures/028_p.png","read":"/sounds/en/028_en.mp3","yomu":"/sounds/jp/028_jp.mp3","flag":"/images/flags/149_PLE_50.png","area":"Asia","subject":"Palestinian Keffiyeh (scarf)","country":"Palestine","daizai":"クーフィーヤ（スカーフ）","kuni":"パレスチナ","id-area":"AS-28","furigana":"さっそうと　しろくろのぬの　かおにまく"}
            ,
            {"id":"29","clue":"'Imagine a view from the wall of six thousand kilometres long.'","yomiku":"長い壁　えんえん続く　6000キロ","answer":"/images/pictures/029_p.png","read":"/sounds/en/029_en.mp3","yomu":"/sounds/jp/029_jp.mp3","flag":"/images/flags/039_CHN_50.png","area":"Asia","subject":"The Great Wall of China","country":"People's Republic of China","daizai":"万里の長城","kuni":"中華人民共和国","id-area":"AS-29","furigana":"ながいかべ　えんえんつづく　ろくせんきろ"}
            ,
            {"id":"30","clue":"'Children are happy to buy ice cream from a stall.'","yomiku":"アイスやフルーツの露店出て　街元気","answer":"/images/pictures/030_p.png","read":"/sounds/en/030_en.mp3","yomu":"/sounds/jp/030_jp.mp3","flag":"/images/flags/148_PHI_50.png","area":"Asia","subject":"Street Vendors","country":"Philippines","daizai":"露店商","kuni":"フィリピン","id-area":"AS-30","furigana":"あいすやふるうつの　ろてんでて　まちげんき"}
            ,
            {"id":"31","clue":"'Connect two knives and build them across the road.'","yomiku":"道またぎ　2本の剣が　アーチ描く","answer":"/images/pictures/031_p.png","read":"/sounds/en/031_en.mp3","yomu":"/sounds/jp/031_jp.mp3","flag":"/images/flags/156_QAT_50.png","area":"Asia","subject":"Arch of Swords","country":"Qatar","daizai":"剣のアーチ","kuni":"カタール","id-area":"AS-31","furigana":"みちまたぎ　にほんのけんが　ああちえがく"}
            ,
            {"id":"32","clue":"'With a drum in hand, jump and turn round and round.'","yomiku":"太鼓打ち　笛吹き豊作　願う舞い","answer":"/images/pictures/032_p.png","read":"/sounds/en/032_en.mp3","yomu":"/sounds/jp/032_jp.mp3","flag":"/images/flags/102_KOR_50.png","area":"Asia","subject":"Pungmul Farmer's Dance","country":"Republic of Korea","daizai":"農楽舞","kuni":"大韓民国","id-area":"AS-32","furigana":"たいこうち　ふえふきほうさく　ねがうまい"}
            ,
            {"id":"33","clue":"'In the sun shines a building with a green roof.'","yomiku":"陽を浴びて　輝くモスク　屋根みどり","answer":"/images/pictures/033_p.png","read":"/sounds/en/033_en.mp3","yomu":"/sounds/jp/033_jp.mp3","flag":"/images/flags/104_KSA_50.png","area":"Asia","subject":"The Prophet's Mosque","country":"Saudi Arabia","daizai":"預言者のモスク","kuni":"サウジアラビア","id-area":"AS-33","furigana":"ひをあびて　かがやくもすく　やねみどり"}
            ,
            {"id":"34","clue":"'Kiss a flower in the air with buildings across the sea.'","yomiku":"羽広げ　花の蜜吸う　太陽の鳥","answer":"/images/pictures/034_p.png","read":"/sounds/en/034_en.mp3","yomu":"/sounds/jp/034_jp.mp3","flag":"/images/flags/164_SIN_50.png","area":"Asia","subject":"Crimson Sunbird","country":"Singapore","daizai":"キゴシタイヨウチョウ","kuni":"シンガポール","id-area":"AS-34","furigana":"はねひろげ　はなのみつすう　たいようのとり"}
            ,
            {"id":"35","clue":"'Elephants and other animals live together in the forest.'","yomiku":"森の中　仲良く暮らす　象と鹿","answer":"/images/pictures/035_p.png","read":"/sounds/en/035_en.mp3","yomu":"/sounds/jp/035_jp.mp3","flag":"/images/flags/172_SRI_50.png","area":"Asia","subject":"Yala National Park","country":"Sri Lanka","daizai":"ヤラ国立公園","kuni":"スリランカ","id-area":"AS-35","furigana":"もりのなか　なかよくくらす　ぞうとしか"}
            ,
            {"id":"36","clue":"'Hiding half of the body, a small golden animal'","yomiku":"金色の　毛をしたねずみ　走り回る","answer":"/images/pictures/036_p.png","read":"/sounds/en/036_en.mp3","yomu":"/sounds/jp/036_jp.mp3","flag":"/images/flags/181_SYR_50.png","area":"Asia","subject":"Golden Hamster","country":"Syrian Arab Republic","daizai":"ゴールデンハムスター","kuni":"シリア・アラブ共和国","id-area":"AS-36","furigana":"きんいろの　けをしたねずみ　はしりまわる"}
            ,
            {"id":"37","clue":"'On top of the gate, towers stand with a blue roof.'","yomiku":"青い屋根　街を見下ろす　ムグ・テペ城","answer":"/images/pictures/037_p.png","read":"/sounds/en/037_en.mp3","yomu":"/sounds/jp/037_jp.mp3","flag":"/images/flags/185_TJK_50.png","area":"Asia","subject":"Mug Tepe Citadel","country":"Tajikistan","daizai":"ムグ・テペ砦","kuni":"タジキスタン","id-area":"AS-37","furigana":"あおいやね　まちをみおろす　むぐ・てぺじょう"}
            ,
            {"id":"38","clue":"'Cross the river by boat and visit the temple.'","yomiku":"舟に乗り　川を渡れば　暁の寺","answer":"/images/pictures/038_p.png","read":"/sounds/en/038_en.mp3","yomu":"/sounds/jp/038_jp.mp3","flag":"/images/flags/184_THA_50.png","area":"Asia","subject":"Wat Arun Temple","country":"Thailand","daizai":"ワットアルン寺院","kuni":"タイ","id-area":"AS-38","furigana":"ふねにのり　かわをわたれば　あかつきのてら"}
            ,
            {"id":"39","clue":"'Spreading arms, the statue stands on a globe.'","yomiku":"腕広げ　地球儀に立つ　キリスト像","answer":"/images/pictures/039_p.png","read":"/sounds/en/039_en.mp3","yomu":"/sounds/jp/039_jp.mp3","flag":"/images/flags/187_TLS_50.png","area":"Asia","subject":"Cristo Rei Statue","country":"Timor-Leste","daizai":"クリストレイ像","kuni":"東ティモール","id-area":"AS-39","furigana":"うでひろげ　ちきゅうぎにたつ　きりすとぞう"}
            ,
            {"id":"40","clue":"'Run beside the natural gas burning in the big hole.'","yomiku":"燃えあがる　炎の脇を　駆け抜ける","answer":"/images/pictures/040_p.png","read":"/sounds/en/040_en.mp3","yomu":"/sounds/jp/040_jp.mp3","flag":"/images/flags/186_TKM_50.png","area":"Asia","subject":"Gas Crater & Akhal-Teke Horse","country":"Turkmenistan","daizai":"天然ガス田・アハルテケ馬","kuni":"トルクメニスタン","id-area":"AS-40","furigana":"もえあがる　ほのおのわきを　かけぬける"}
            ,
            {"id":"41","clue":"'Very tall building about to touch the sky'","yomiku":"青空を　突き刺すように　伸びるビル","answer":"/images/pictures/041_p.png","read":"/sounds/en/041_en.mp3","yomu":"/sounds/jp/041_jp.mp3","flag":"/images/flags/194_UAE_50.png","area":"Asia","subject":"Burj Khalifa Tower","country":"United Arab Emirates","daizai":"ブルジュ・ハリファ・タワー","kuni":"アラブ首長国連邦","id-area":"AS-41","furigana":"あおぞらを　つきさすように　のびるびる"}
            ,
            {"id":"42","clue":"'In memory of the dead, blue buildings continue.'","yomiku":"青色の　死者の建物　続く道","answer":"/images/pictures/042_p.png","read":"/sounds/en/042_en.mp3","yomu":"/sounds/jp/042_jp.mp3","flag":"/images/flags/199_UZB_50.png","area":"Asia","subject":"Shah-i-Zinda Mausoleums","country":"Uzbekistan","daizai":"シャーヒズインダ霊廟群","kuni":"ウズベキスタン","id-area":"AS-42","furigana":"あおいろの　ししゃのたてもの　つづくみち"}
            ,
            {"id":"43","clue":"'Hang colourful lamps in the whole town on full moon night.'","yomiku":"満月の　夜を彩る　提灯祭","answer":"/images/pictures/043_p.png","read":"/sounds/en/043_en.mp3","yomu":"/sounds/jp/043_jp.mp3","flag":"/images/flags/202_VIE_50.png","area":"Asia","subject":"Hoi An Full Moon Lantern Festival","country":"Vietnam","daizai":"ホイアン・ランタン祭り","kuni":"ベトナム","id-area":"AS-43","furigana":"まんげつの　よるをいろどる　ちょうちんまつり"}
            ,
            {"id":"44","clue":"'Sell knives for men to use for dancing.'","yomiku":"伝統の　儀式に使う　短い剣","answer":"/images/pictures/044_p.png","read":"/sounds/en/044_en.mp3","yomu":"/sounds/jp/044_jp.mp3","flag":"/images/flags/204_YEM_50.png","area":"Asia","subject":"Jambiya Knife","country":"Yemen","daizai":"ジャンビーア短剣","kuni":"イエメン","id-area":"AS-44","furigana":"でんとうの　ぎしきにつかう　みじかいけん"}
            ,
            {"id":"45","clue":"'Water comes out of the river bed and shines blue.'","yomiku":"川底の　湧き出る泉　青透きとおる","answer":"/images/pictures/045_p.png","read":"/sounds/en/045_en.mp3","yomu":"/sounds/jp/045_jp.mp3","flag":"/images/flags/002_ALB_50.png","area":"Europe","subject":"Blue Eye Spring","country":"Albania","daizai":"ブルーアイ（泉）","kuni":"アルバニア","id-area":"EU-01","furigana":"かわぞこの　わきでるいずみ　あおすきとおる"}
            ,
            {"id":"46","clue":"'In the mountain, dance in a circle hand in hand.'","yomiku":"手をとって　輪になり踊る　コントラパス","answer":"/images/pictures/046_p.png","read":"/sounds/en/046_en.mp3","yomu":"/sounds/jp/046_jp.mp3","flag":"/images/flags/004_AND_50.png","area":"Europe","subject":"Contrap?s Dance","country":"Andorra","daizai":"コントラパス・ダンス","kuni":"アンドラ","id-area":"EU-02","furigana":"てをとって　わになりおどる　こんとらぱす"}
            ,
            {"id":"47","clue":"'Parts of the old church still exist after the earthquake.'","yomiku":"教会の　アーチが残る　震災跡","answer":"/images/pictures/047_p.png","read":"/sounds/en/047_en.mp3","yomu":"/sounds/jp/047_jp.mp3","flag":"/images/flags/008_ARM_50.png","area":"Europe","subject":"Zvartnots Cathedral Ruins","country":"Armenia","daizai":"ズヴァルトノッツ大聖堂跡","kuni":"アルメニア","id-area":"EU-03","furigana":"きょうかいの　ああちがのこる　しんさいあと"}
            ,
            {"id":"48","clue":"'In steep mountains, animals are in the moonlight.'","yomiku":"山険し　月夜が照らす　キツネたち","answer":"/images/pictures/048_p.png","read":"/sounds/en/048_en.mp3","yomu":"/sounds/jp/048_jp.mp3","flag":"/images/flags/012_AUT_50.png","area":"Europe","subject":"Austrian Alps","country":"Austria","daizai":"オーストリア・アルプス","kuni":"オーストリア","id-area":"EU-04","furigana":"やまけわし　つきよがてらす　きつねたち"}
            ,
            {"id":"49","clue":"'Standing in the old town with strong winds from the sea'","yomiku":"どっしりと　海沿いに立つ　石の城","answer":"/images/pictures/049_p.png","read":"/sounds/en/049_en.mp3","yomu":"/sounds/jp/049_jp.mp3","flag":"/images/flags/013_AZE_50.png","area":"Europe","subject":"Maiden Tower","country":"Azerbaijan","daizai":"乙女の塔","kuni":"アゼルバイジャン","id-area":"EU-05","furigana":"どっしりと　うみぞいにたつ　いしのようさい"}
            ,
            {"id":"50","clue":"'On the ice, the players shoot with their stick.'","yomiku":"氷の上　スティック自在に　シュート打つ","answer":"/images/pictures/050_p.png","read":"/sounds/en/050_en.mp3","yomu":"/sounds/jp/050_jp.mp3","flag":"/images/flags/024_BLR_50.png","area":"Europe","subject":"Ice Hockey","country":"Belarus","daizai":"アイスホッケー","kuni":"ベラルーシ","id-area":"EU-06","furigana":"こおりのうえ　すてぃっくじざいに　しゅうとうつ"}
            ,
            {"id":"51","clue":"'Use the ingredients on the table to make the bar.'","yomiku":"テーブルに　美食の国の　甘い菓子","answer":"/images/pictures/051_p.png","read":"/sounds/en/051_en.mp3","yomu":"/sounds/jp/051_jp.mp3","flag":"/images/flags/018_BEL_50.png","area":"Europe","subject":"Belgian Chocolate","country":"Belgium","daizai":"ベルギーチョコレート","kuni":"ベルギー","id-area":"EU-07","furigana":"てえぶるに　びしょくのくにの　あまいかし"}
            ,
            {"id":"52","clue":"'Put nose close to the ground and find the hidden bombs.'","yomiku":"くんくんと　隠れた地雷　見つけ出す","answer":"/images/pictures/052_p.png","read":"/sounds/en/052_en.mp3","yomu":"/sounds/jp/052_jp.mp3","flag":"/images/flags/022_BIH_50.png","area":"Europe","subject":"Betsy (mine detection dog)","country":"Bosnia and Herzegovina","daizai":"ベッツィ（地雷探査犬）","kuni":"ボスニア・ヘルツェゴビナ","id-area":"EU-08","furigana":"くんくんと　かくれたじらい　みつけだす"}
            ,
            {"id":"53","clue":"'Hold a bunch of red flowers in both hands.'","yomiku":"花束を　両手に抱え　プレゼント","answer":"/images/pictures/053_p.png","read":"/sounds/en/053_en.mp3","yomu":"/sounds/jp/053_jp.mp3","flag":"/images/flags/030_BUL_50.png","area":"Europe","subject":"Bulgarian Rose Oil","country":"Bulgaria","daizai":"ローズオイル","kuni":"ブルガリア","id-area":"EU-09","furigana":"はなたばを　りょうてにかかえ　ぷれぜんと"}
            ,
            {"id":"54","clue":"'In a national park, lakes and waterfalls continue.'","yomiku":"湖と　滝が連なる　大自然","answer":"/images/pictures/054_p.png","read":"/sounds/en/054_en.mp3","yomu":"/sounds/jp/054_jp.mp3","flag":"/images/flags/048_CRO_50.png","area":"Europe","subject":"Plitvice Lakes National Park","country":"Croatia","daizai":"プリトヴィツェ湖国立公園","kuni":"クロアチア","id-area":"EU-10","furigana":"みずうみと　たきがつらなる　だいしぜん"}
            ,
            {"id":"55","clue":"'Pink flowers grow in the mountains on the island.'","yomiku":"島国の　ピンクの花は　国の花","answer":"/images/pictures/055_p.png","read":"/sounds/en/055_en.mp3","yomu":"/sounds/jp/055_jp.mp3","flag":"/images/flags/050_CYP_50.png","area":"Europe","subject":"Cyprus Cyclamen","country":"Cyprus","daizai":"キプロス・シクラメン","kuni":"キプロス","id-area":"EU-11","furigana":"しまぐにの　ぴんくのはなわ　くにのはな"}
            ,
            {"id":"56","clue":"'Every hour, the small doors open to tell the time.'","yomiku":"正確に　時をきざんで　６００年","answer":"/images/pictures/056_p.png","read":"/sounds/en/056_en.mp3","yomu":"/sounds/jp/056_jp.mp3","flag":"/images/flags/051_CZE_50.png","area":"Europe","subject":"Prague Astronomical Clock","country":"Czech Republic","daizai":"プラハの天文時計","kuni":"チェコ共和国","id-area":"EU-12","furigana":"せいかくに　ときをきざんで　ろっぴゃくねん"}
            ,
            {"id":"57","clue":"'Change her tail to legs and visit the prince's castle.'","yomiku":"人魚姫　姿をかえて　王子の城へ","answer":"/images/pictures/057_p.png","read":"/sounds/en/057_en.mp3","yomu":"/sounds/jp/057_jp.mp3","flag":"/images/flags/052_DEN_50.png","area":"Europe","subject":"The Little Mermaid","country":"Denmark","daizai":"人魚姫","kuni":"デンマーク","id-area":"EU-13","furigana":"にんぎょひめ　すがたをかえて　おうじのしろえ"}
            ,
            {"id":"58","clue":"'Singing brings everyone together at the summer festival.'","yomiku":"5年ごと　国民つなぐ　歌まつり","answer":"/images/pictures/058_p.png","read":"/sounds/en/058_en.mp3","yomu":"/sounds/jp/058_jp.mp3","flag":"/images/flags/061_EST_50.png","area":"Europe","subject":"Estonian Song Festival","country":"Estonia","daizai":"全国歌謡祭","kuni":"エストニア","id-area":"EU-14","furigana":"ごねんごと　こくみんつなぐ　うたまつり"}
            ,
            {"id":"59","clue":"'Trees and the castle are on the surface of the lake.'","yomiku":"戦い終え　湖面に映る　古い城","answer":"/images/pictures/059_p.png","read":"/sounds/en/059_en.mp3","yomu":"/sounds/jp/059_jp.mp3","flag":"/images/flags/064_FIN_50.png","area":"Europe","subject":"Olavinlinna Castle","country":"Finland","daizai":"オラヴィン城","kuni":"フィンランド","id-area":"EU-15","furigana":"たたかいおえ　こめんにうつる　ふるいしろ"}
            ,
            {"id":"60","clue":"'Fireworks go up, and the tower get colours.'","yomiku":"パリの街　続く輝き　エッフェルの願い","answer":"/images/pictures/060_p.png","read":"/sounds/en/060_en.mp3","yomu":"/sounds/jp/060_jp.mp3","flag":"/images/flags/065_FRA_50.png","area":"Europe","subject":"Eiffel Tower","country":"France","daizai":"エッフェル塔","kuni":"フランス","id-area":"EU-16","furigana":"ぱりのまち　つづくかがやき　えっふぇるのねがい"}
            ,
            {"id":"61","clue":"'Put nuts together and hang them to make a sweet.'","yomiku":"吊るして作る　木の実のお菓子","answer":"/images/pictures/061_p.png","read":"/sounds/en/061_en.mp3","yomu":"/sounds/jp/061_jp.mp3","flag":"/images/flags/071_GEO_50.png","area":"Europe","subject":"Churchkhela (candy)","country":"Georgia","daizai":"チュルチヘラ（菓子）","kuni":"ジョージア","id-area":"EU-17","furigana":"つるしてつくる　きのみのおかし"}
            ,
            {"id":"62","clue":"'Shout to support the team, beer cups in hand.'","yomiku":"ジョッキ手に　チーム応援　声あげて","answer":"/images/pictures/062_p.png","read":"/sounds/en/062_en.mp3","yomu":"/sounds/jp/062_jp.mp3","flag":"/images/flags/073_GER_50.png","area":"Europe","subject":"Beer Party","country":"Germany","daizai":"ビールパーティー","kuni":"ドイツ","id-area":"EU-18","furigana":"じょっきてに　ちいむおうえん　こえあげて"}
            ,
            {"id":"63","clue":"'Famous for its guards, clock tower and telephone box'","yomiku":"近衛兵　直立不動　城守る","answer":"/images/pictures/063_p.png","read":"/sounds/en/063_en.mp3","yomu":"/sounds/jp/063_jp.mp3","flag":"/images/flags/069_GBR_50.png","area":"Europe","subject":"Tourist Spots","country":"Great Britain","daizai":"観光スポット","kuni":"イギリス","id-area":"EU-19","furigana":"このえへい　ちょくりつふどう　しろまもる"}
            ,
            {"id":"64","clue":"'Birds fly, and the ancient city turns orange.'","yomiku":"街中が　みかん色に染まる　古都アテネ","answer":"/images/pictures/064_p.png","read":"/sounds/en/064_en.mp3","yomu":"/sounds/jp/064_jp.mp3","flag":"/images/flags/075_GRE_50.png","area":"Europe","subject":"Orange Trees in Street","country":"Greece","daizai":"オレンジの街路樹","kuni":"ギリシャ","id-area":"EU-20","furigana":"まちじゅうが　みかんいろにそまる　ことあてね"}
            ,
            {"id":"65","clue":"'Open the yellow door and get into the hot water.'","yomiku":"温泉都市の　黄色い建物　憩いの場","answer":"/images/pictures/065_p.png","read":"/sounds/en/065_en.mp3","yomu":"/sounds/jp/065_jp.mp3","flag":"/images/flags/084_HUN_50.png","area":"Europe","subject":"Szechenyi Baths","country":"Hungary","daizai":"セーチェーニ温泉","kuni":"ハンガリー","id-area":"EU-21","furigana":"おんせんとしの　きいろいたてもの　いこいのば"}
            ,
            {"id":"66","clue":"'Take a boat to watch birds with red mouth and feet.'","yomiku":"くちばしカラフル　丸い目をした　人気者","answer":"/images/pictures/066_p.png","read":"/sounds/en/066_en.mp3","yomu":"/sounds/jp/066_jp.mp3","flag":"/images/flags/090_ISL_50.png","area":"Europe","subject":"Atlantic Puffin","country":"Iceland","daizai":"パフィン","kuni":"アイスランド","id-area":"EU-22","furigana":"くちばしからふる　まるいめをした　にんきもの"}
            ,
            {"id":"67","clue":"'Taking a rest on a leaf, a red insect'","yomiku":"シャムロック　3枚の葉っぱ　国の花","answer":"/images/pictures/067_p.png","read":"/sounds/en/067_en.mp3","yomu":"/sounds/jp/067_jp.mp3","flag":"/images/flags/088_IRL_50.png","area":"Europe","subject":"Shamrock","country":"Ireland","daizai":"クローバー","kuni":"アイルランド","id-area":"EU-23","furigana":"しゃむろっく　さんまいのはっぱ　くにのはな"}
            ,
            {"id":"68","clue":"'Put fried balls and green salad in flatbread.'","yomiku":"平パンに　豆のコロッケや　サラダをはさむ","answer":"/images/pictures/068_p.png","read":"/sounds/en/068_en.mp3","yomu":"/sounds/jp/068_jp.mp3","flag":"/images/flags/091_ISR_50.png","area":"Europe","subject":"Falafel Sandwich","country":"Israel","daizai":"ファラフェルサンド","kuni":"イスラエル","id-area":"EU-24","furigana":"ひらパンに　まめのコロッケや　サラダをはさむ"}
            ,
            {"id":"69","clue":"'Take part in a mask contest in the canal city.'","yomiku":"仮面付け　水の都で　美を競う","answer":"/images/pictures/069_p.png","read":"/sounds/en/069_en.mp3","yomu":"/sounds/jp/069_jp.mp3","flag":"/images/flags/093_ITA_50.png","area":"Europe","subject":"Carnival of Venice","country":"Italy","daizai":"ヴェネツィア・カーニバル","kuni":"イタリア","id-area":"EU-25","furigana":"かめんつけ　みずのみやこで　びをきそう"}
            ,
            {"id":"70","clue":"'Sculpture of six letters in front of the sports hall'","yomiku":"一列に　6文字並べ　独立祝う","answer":"/images/pictures/070_p.png","read":"/sounds/en/070_en.mp3","yomu":"/sounds/jp/070_jp.mp3","flag":"/images/flags/103_KOS_50.png","area":"Europe","subject":"Newborn Monument","country":"Kosovo","daizai":"ニューボーン・モニュメント（記念碑）","kuni":"コソボ","id-area":"EU-26","furigana":"いちれつに　ろくもじならべ　どくりついわう"}
            ,
            {"id":"71","clue":"'Under the clouds, the buildings and streets look happy.'","yomiku":"独立の　誇りみなぎる　人とまち","answer":"/images/pictures/071_p.png","read":"/sounds/en/071_en.mp3","yomu":"/sounds/jp/071_jp.mp3","flag":"/images/flags/107_LAT_50.png","area":"Europe","subject":"Latvia 100 (anniversary of independence)","country":"Latvia","daizai":"独立100周年記念","kuni":"ラトビア","id-area":"EU-27","furigana":"どくりつの　ほこりみなぎる　ひととまち"}
            ,
            {"id":"72","clue":"'On a hill, an old castle with red roofs'","yomiku":"赤い屋根　1000年の城　そびえ立つ","answer":"/images/pictures/072_p.png","read":"/sounds/en/072_en.mp3","yomu":"/sounds/jp/072_jp.mp3","flag":"/images/flags/113_LIE_50.png","area":"Europe","subject":"Vaduz Castle","country":"Liechtenstein","daizai":"ファドゥーツ城","kuni":"リヒテンシュタイン","id-area":"EU-28","furigana":"あかいやね　せんねんのしろ　そびえたつ"}
            ,
            {"id":"73","clue":"'Paint eggs and give them to good children.'","yomiku":"おばあさん　卵に絵を描き　子に贈る","answer":"/images/pictures/073_p.png","read":"/sounds/en/073_en.mp3","yomu":"/sounds/jp/073_jp.mp3","flag":"/images/flags/114_LTU_50.png","area":"Europe","subject":"Easter Eggs","country":"Lithuania","daizai":"イースターエッグ","kuni":"リトアニア","id-area":"EU-29","furigana":"おばあさん　たまごにえをかき　こにおくる"}
            ,
            {"id":"74","clue":"'Feel spring with the handmade birds appearing in shops.'","yomiku":"手作りの　小鳥が並び　春告げる","answer":"/images/pictures/074_p.png","read":"/sounds/en/074_en.mp3","yomu":"/sounds/jp/074_jp.mp3","flag":"/images/flags/115_LUX_50.png","area":"Europe","subject":"Peckvillercher (bird whistle)","country":"Luxembourg","daizai":"ペックフィラヒャー（鳥笛）","kuni":"ルクセンブルグ","id-area":"EU-30","furigana":"てづくりの　ことりがならび　はるつげる"}
            ,
            {"id":"75","clue":"'Draw eyes on the boat to hope for safety.'","yomiku":"船先に　安全願い　目を描く","answer":"/images/pictures/075_p.png","read":"/sounds/en/075_en.mp3","yomu":"/sounds/jp/075_jp.mp3","flag":"/images/flags/127_MLT_50.png","area":"Europe","subject":"Luzzus (fishing boat)","country":"Malta","daizai":"ルッツ(漁船）","kuni":"マルタ","id-area":"EU-31","furigana":"ふなさきに　あんぜんねがい　めをえがく"}
            ,
            {"id":"76","clue":"'Show off your driving skills in such a sharp corner.'","yomiku":"急カーブ　世界のレース　腕競う","answer":"/images/pictures/076_p.png","read":"/sounds/en/076_en.mp3","yomu":"/sounds/jp/076_jp.mp3","flag":"/images/flags/129_MON_50.png","area":"Europe","subject":"Monaco Grand Prix (car race)","country":"Monaco","daizai":"モナコグランプリ（カーレース）","kuni":"モナコ","id-area":"EU-32","furigana":"きゅうかあぶ　せかいのれえす　うできそう"}
            ,
            {"id":"77","clue":"'On a mountain cliff, the church stands out in white.'","yomiku":"断崖に　白くまぶしい　修道院","answer":"/images/pictures/077_p.png","read":"/sounds/en/077_en.mp3","yomu":"/sounds/jp/077_jp.mp3","flag":"/images/flags/128_MNE_50.png","area":"Europe","subject":"Ostrog Monastery","country":"Montenegro","daizai":"オストログ修道院","kuni":"モンテネグロ","id-area":"EU-33","furigana":"だんがいに　しろくまぶしい　しゅうどういん"}
            ,
            {"id":"78","clue":"'Flowers all around and a windmill at the back'","yomiku":"チューリップ　満開の中　風車立つ","answer":"/images/pictures/078_p.png","read":"/sounds/en/078_en.mp3","yomu":"/sounds/jp/078_jp.mp3","flag":"/images/flags/136_NED_50.png","area":"Europe","subject":"Keukenhof Flower Garden","country":"Netherlands","daizai":"キューケンホフ公園","kuni":"オランダ","id-area":"EU-34","furigana":"ちゅうりっぷ　まんかいのなか　ふうしゃたつ"}
            ,
            {"id":"79","clue":"'Dig holes and plant trees after a forest fire.'","yomiku":"山火事で　なくした森の　復活願う","answer":"/images/pictures/079_p.png","read":"/sounds/en/079_en.mp3","yomu":"/sounds/jp/079_jp.mp3","flag":"/images/flags/125_MKD_50.png","area":"Europe","subject":"Tree Day","country":"North Macedonia","daizai":"植樹祭","kuni":"北マケドニア","id-area":"EU-35","furigana":"やまかじで　なくしたもりの　ふっかつねがう"}
            ,
            {"id":"80","clue":"'Carry weapons and cross the sea in a wooden ship.'","yomiku":"武器を持ち　木造船で　海渡る","answer":"/images/pictures/080_p.png","read":"/sounds/en/080_en.mp3","yomu":"/sounds/jp/080_jp.mp3","flag":"/images/flags/140_NOR_50.png","area":"Europe","subject":"Norwegian Vikings","country":"Norway","daizai":"バイキング","kuni":"ノルウェー","id-area":"EU-36","furigana":"ぶきをもち　もくぞうせんで　うみわたる"}
            ,
            {"id":"81","clue":"'Decorate the walls of a house with flower patterns.'","yomiku":"花柄の　模様を描き　壁飾る","answer":"/images/pictures/081_p.png","read":"/sounds/en/081_en.mp3","yomu":"/sounds/jp/081_jp.mp3","flag":"/images/flags/152_POL_50.png","area":"Europe","subject":"Zalipie (painted village of flowers)","country":"Poland","daizai":"ザリピエ(花柄模様の村）","kuni":"ポーランド","id-area":"EU-37","furigana":"はながらの　もようをかき　かべかざる"}
            ,
            {"id":"82","clue":"'Along the river stands a castle as white as a dress.'","yomiku":"白の貴婦人　ヴァスコ・ダ・ガマの　偉業たたえ","answer":"/images/pictures/082_p.png","read":"/sounds/en/082_en.mp3","yomu":"/sounds/jp/082_jp.mp3","flag":"/images/flags/153_POR_50.png","area":"Europe","subject":"Belem Tower","country":"Portugal","daizai":"ベレンの塔","kuni":"ポルトガル","id-area":"EU-38","furigana":"しろのきふじん　ばすこ・だ・がまの　いぎょうたたえ"}
            ,
            {"id":"83","clue":"'Clouds flowing, a tower for prayer stands on the hill.'","yomiku":"雲流れ　丘に建つ塔　感謝のしるし","answer":"/images/pictures/083_p.png","read":"/sounds/en/083_en.mp3","yomu":"/sounds/jp/083_jp.mp3","flag":"/images/flags/120_MDA_50.png","area":"Europe","subject":"Thanksgiving Candle Monument","country":"Republic of Moldova","daizai":"感謝のキャンドル（記念塔）","kuni":"モルドバ共和国","id-area":"EU-39","furigana":"くもながれ　おかにたつとう　かんしゃのしるし"}
            ,
            {"id":"84","clue":"'Swallows fly, people hold hands and dance in a circle.'","yomiku":"輪になって　民族衣装で　踊りだす","answer":"/images/pictures/084_p.png","read":"/sounds/en/084_en.mp3","yomu":"/sounds/jp/084_jp.mp3","flag":"/images/flags/157_ROU_50.png","area":"Europe","subject":"Hora Dance","country":"Romania","daizai":"ホラダンス","kuni":"ルーマニア","id-area":"EU-40","furigana":"わになって　みんぞくいしょうで　おどりだす"}
            ,
            {"id":"85","clue":"'Dance in pair with the temple in the background.'","yomiku":"赤の広場　民族衣装　着て踊る","answer":"/images/pictures/085_p.png","read":"/sounds/en/085_en.mp3","yomu":"/sounds/jp/085_jp.mp3","flag":"/images/flags/159_RUS_50.png","area":"Europe","subject":"Russian Culture","country":"Russian Federation","daizai":"ロシアの文化","kuni":"ロシア連邦","id-area":"EU-41","furigana":"あかのひろば　みんぞくいしょう　きておどる"}
            ,
            {"id":"86","clue":"'On a cliff, the castle stands at the top of the mountain.'","yomiku":"山頂の　崖に立つ城　お伽の世界","answer":"/images/pictures/086_p.png","read":"/sounds/en/086_en.mp3","yomu":"/sounds/jp/086_jp.mp3","flag":"/images/flags/168_SMR_50.png","area":"Europe","subject":"Guaita Castle","country":"San Marino","daizai":"グアイタ城","kuni":"サンマリノ","id-area":"EU-42","furigana":"さんちょうの　がけにたつしろ　おとぎのせかい"}
            ,
            {"id":"87","clue":"'Cut wood, dry vegetables and keep chickens outside.'","yomiku":"家畜飼い　村人暮らす　おだやかに","answer":"/images/pictures/087_p.png","read":"/sounds/en/087_en.mp3","yomu":"/sounds/jp/087_jp.mp3","flag":"/images/flags/171_SRB_50.png","area":"Europe","subject":"Village House","country":"Serbia","daizai":"村の暮らし","kuni":"セルビア","id-area":"EU-43","furigana":"かちくかい　むらびとくらす　おだやかに"}
            ,
            {"id":"88","clue":"'Ghosts appear in the castle with its colourful roofs.'","yomiku":"幽霊や　妖精に会える　森の城","answer":"/images/pictures/088_p.png","read":"/sounds/en/088_en.mp3","yomu":"/sounds/jp/088_jp.mp3","flag":"/images/flags/178_SVK_50.png","area":"Europe","subject":"Bojnice Castle","country":"Slovakia","daizai":"ボイニツェ城","kuni":"スロバキア","id-area":"EU-44","furigana":"ゆうれいや　ようせいにあえる　もりのしろ"}
            ,
            {"id":"89","clue":"'In sheepskin dresses, ring bells to say goodbye to winter.'","yomiku":"毛皮着て　カウベル鳴らし　春を呼ぶ","answer":"/images/pictures/089_p.png","read":"/sounds/en/089_en.mp3","yomu":"/sounds/jp/089_jp.mp3","flag":"/images/flags/167_SLO_50.png","area":"Europe","subject":"Kurentovanje Carnival","country":"Slovenia","daizai":"クレントヴァニエ祭り","kuni":"スロベニア","id-area":"EU-45","furigana":"けがわきて　かうべるならし　はるをよぶ"}
            ,
            {"id":"90","clue":"'Streets are full of people throwing tomatoes.'","yomiku":"人あふれ　トマト投げ合う　街の中","answer":"/images/pictures/090_p.png","read":"/sounds/en/090_en.mp3","yomu":"/sounds/jp/090_jp.mp3","flag":"/images/flags/060_ESP_50.png","area":"Europe","subject":"La Tomatina Festival","country":"Spain","daizai":"トマト祭り","kuni":"スペイン","id-area":"EU-46","furigana":"ひとあふれ　とまとなげあう　まちのなか"}
            ,
            {"id":"91","clue":"'Curtains of light in the night sky and on the lake'","yomiku":"夜の空　湖面に映る　光のカーテン","answer":"/images/pictures/091_p.png","read":"/sounds/en/091_en.mp3","yomu":"/sounds/jp/091_jp.mp3","flag":"/images/flags/179_SWE_50.png","area":"Europe","subject":"Aurora","country":"Sweden","daizai":"オーロラ","kuni":"スウェーデン","id-area":"EU-47","furigana":"よるのそら　こめんにうつる　ひかりのかあてん"}
            ,
            {"id":"92","clue":"'Look down on the snow mountains from air balloons.'","yomiku":"気球から　見るアルプスの　冬景色","answer":"/images/pictures/092_p.png","read":"/sounds/en/092_en.mp3","yomu":"/sounds/jp/092_jp.mp3","flag":"/images/flags/176_SUI_50.png","area":"Europe","subject":"Ch?teau d'Oex Villages","country":"Switzerland","daizai":"シャトー・デー（熱気球で有名）","kuni":"スイス","id-area":"EU-48","furigana":"ききゅうから　みるアルプスの　ふゆげしき"}
            ,
            {"id":"93","clue":"'Balloons fly, and horses run between the rocks like a tower.'","yomiku":"ここは地球？奇妙な形の　岩また岩","answer":"/images/pictures/093_p.png","read":"/sounds/en/093_en.mp3","yomu":"/sounds/jp/093_jp.mp3","flag":"/images/flags/192_TUR_50.png","area":"Europe","subject":"Cappadocia","country":"Turkey","daizai":"カッパドキア（奇岩で有名）","kuni":"トルコ","id-area":"EU-49","furigana":"ここはちきゅう？きみょうなかたちの　いわまたいわ"}
            ,
            {"id":"94","clue":"'Blow a long pipe to signal over the mountains.'","yomiku":"山の中　合図を送る　長い笛","answer":"/images/pictures/094_p.png","read":"/sounds/en/094_en.mp3","yomu":"/sounds/jp/094_jp.mp3","flag":"/images/flags/196_UKR_50.png","area":"Europe","subject":"Trembita (alphorn)","country":"Ukraine","daizai":"トレンビータ（アルプホルン）","kuni":"ウクライナ","id-area":"EU-50","furigana":"やまのなか　あいずをおくる　ながいふえ"}
            ,
            {"id":"95","clue":"'Sit on the back and race through the desert.'","yomiku":"こぶつかみ　砂漠を走る　ラクダレース","answer":"/images/pictures/095_p.png","read":"/sounds/en/095_en.mp3","yomu":"/sounds/jp/095_jp.mp3","flag":"/images/flags/003_ALG_50.png","area":"Africa","subject":"Camel Racing","country":"Algeria","daizai":"ラクダレース","kuni":"アルジェリア","id-area":"AF-01","furigana":"こぶつかみ　さばくをはしる　らくだれえす"}
            ,
            {"id":"96","clue":"'Lights shine in the forest with brown animals.'","yomiku":"アンテロープ　絶滅の危機　救いたい","answer":"/images/pictures/096_p.png","read":"/sounds/en/096_en.mp3","yomu":"/sounds/jp/096_jp.mp3","flag":"/images/flags/005_ANG_50.png","area":"Africa","subject":"Giant Sable Antelope","country":"Angola","daizai":"パランカ・ネグラ（アンテロープ）","kuni":"アンゴラ","id-area":"AF-02","furigana":"あんてろおぷ　ぜつめつのきき　すくいたい"}
            ,
            {"id":"97","clue":"'Live in a village on the lake and travel by boat.'","yomiku":"湖の　上につくった　家と村","answer":"/images/pictures/097_p.png","read":"/sounds/en/097_en.mp3","yomu":"/sounds/jp/097_jp.mp3","flag":"/images/flags/019_BEN_50.png","area":"Africa","subject":"Ganvie Lake Village","country":"Benin","daizai":"水上集落ガンビエ","kuni":"ベナン","id-area":"AF-03","furigana":"みずうみの　うえにつくった　いえとむら"}
            ,
            {"id":"98","clue":"'Stand up together and look around with big eyes.'","yomiku":"キョロキョロと　家族を守る　大きな目","answer":"/images/pictures/098_p.png","read":"/sounds/en/098_en.mp3","yomu":"/sounds/jp/098_jp.mp3","flag":"/images/flags/026_BOT_50.png","area":"Africa","subject":"Meercat","country":"Botswana","daizai":"ミーアキャット","kuni":"ボツワナ","id-area":"AF-04","furigana":"きょろきょろと　かぞくをまもる　おおきなめ"}
            ,
            {"id":"99","clue":"'Women paint patterns on the outside walls of the houses.'","yomiku":"家族の　幸せ願い　描く模様","answer":"/images/pictures/099_p.png","read":"/sounds/en/099_en.mp3","yomu":"/sounds/jp/099_jp.mp3","flag":"/images/flags/031_BUR_50.png","area":"Africa","subject":"Kassena Painted Houses","country":"Burkina Faso","daizai":"幾何学模様の住居","kuni":"ブルキナファソ","id-area":"AF-05","furigana":"かぞくの　しあわせねがい　えがくもよう"}
            ,
            {"id":"100","clue":"'Jumping up and down, dancing and beating the drums'","yomiku":"飛び跳ねて　踊りながらも　太鼓打つ","answer":"/images/pictures/100_p.png","read":"/sounds/en/100_en.mp3","yomu":"/sounds/jp/100_jp.mp3","flag":"/images/flags/017_BDI_50.png","area":"Africa","subject":"Royal Drummers of Burundi","country":"Burundi","daizai":"ブルンジ王立太鼓隊","kuni":"ブルンジ","id-area":"AF-06","furigana":"とびはねて　おどりながらも　たいこうつ"}
            ,
            {"id":"101","clue":"'Houses are round and have patterns all over the walls.'","yomiku":"大きくて　つりがね型の　泥の家","answer":"/images/pictures/101_p.png","read":"/sounds/en/101_en.mp3","yomu":"/sounds/jp/101_jp.mp3","flag":"/images/flags/041_CMR_50.png","area":"Africa","subject":"Musgub Mud Huts","country":"Cameroon","daizai":"ムスグン族の家","kuni":"カメルーン","id-area":"AF-07","furigana":"おおきくて　つりがねがたの　どろのいえ"}
            ,
            {"id":"102","clue":"'By the sea, a statue stands looking up at the sky.'","yomiku":"空見上げ　島を見つけた　船乗り像","answer":"/images/pictures/102_p.png","read":"/sounds/en/102_en.mp3","yomu":"/sounds/jp/102_jp.mp3","flag":"/images/flags/046_CPV_50.png","area":"Africa","subject":"Statue of Diogo Gomes","country":"Cape Verde","daizai":"ディオゴ・ゴメス像","kuni":"カーボベルデ","id-area":"AF-08","furigana":"そらみあげ　しまをみつけた　ふなのりぞう"}
            ,
            {"id":"103","clue":"'Fly from flower to flower on blue wings.'","yomiku":"青い蝶　花から花へ　ひらひらと","answer":"/images/pictures/103_p.png","read":"/sounds/en/103_en.mp3","yomu":"/sounds/jp/103_jp.mp3","flag":"/images/flags/032_CAF_50.png","area":"Africa","subject":"Butterfly Kingdom","country":"Central African Republic","daizai":"蝶大国","kuni":"中央アフリカ","id-area":"AF-09","furigana":"あおいちょう　はなからはなへ　ひらひらと"}
            ,
            {"id":"104","clue":"'Huge brown rocks invite climbers to the desert.'","yomiku":"大自然　砂漠にできた　岩の山","answer":"/images/pictures/104_p.png","read":"/sounds/en/104_en.mp3","yomu":"/sounds/jp/104_jp.mp3","flag":"/images/flags/037_CHA_50.png","area":"Africa","subject":"Ennedi Plateau","country":"Chad","daizai":"エネディ山地","kuni":"チャド","id-area":"AF-10","furigana":"だいしぜん　さばくにできた　いわのやま"}
            ,
            {"id":"105","clue":"'Two players put balls in holes on the board.　'","yomiku":"木の穴の　玉数競う　バオゲーム","answer":"/images/pictures/105_p.png","read":"/sounds/en/105_en.mp3","yomu":"/sounds/jp/105_jp.mp3","flag":"/images/flags/045_COM_50.png","area":"Africa","subject":"Bao Board Game","country":"Comoros","daizai":"バオ（ボードゲーム）","kuni":"コモロ","id-area":"AF-11","furigana":"きのあなの　たまかずきそう　ばおげえむ"}
            ,
            {"id":"106","clue":"'Men wear the finest clothing and look very happy.'","yomiku":"おしゃれして　街を闊歩の　男たち","answer":"/images/pictures/106_p.png","read":"/sounds/en/106_en.mp3","yomu":"/sounds/jp/106_jp.mp3","flag":"/images/flags/036_CGO_50.png","area":"Africa","subject":"Sapeur (dressed up gentlemen)","country":"Congo","daizai":"サプール（オシャレな紳士）","kuni":"コンゴ","id-area":"AF-12","furigana":"おしゃれして　まちをかっぽの　おとこたち"}
            ,
            {"id":"107","clue":"'Make chocolate from the seeds of large fruit.'","yomiku":"大きな実　カカオの輸出は　世界一","answer":"/images/pictures/107_p.png","read":"/sounds/en/107_en.mp3","yomu":"/sounds/jp/107_jp.mp3","flag":"/images/flags/040_CIV_50.png","area":"Africa","subject":"Cacao Beans","country":"Cote D'ivoire","daizai":"カカオ豆","kuni":"コートジボワール","id-area":"AF-13","furigana":"おおきなみ　かかおのゆしゅつは　せかいいち"}
            ,
            {"id":"108","clue":"'Dance in wooden masks at the summer festival.'","yomiku":"木でできた　仮面で踊る　夏祭り","answer":"/images/pictures/108_p.png","read":"/sounds/en/108_en.mp3","yomu":"/sounds/jp/108_jp.mp3","flag":"/images/flags/042_COD_50.png","area":"Africa","subject":"Gungu Festival","country":"Democratic Republic of the Congo","daizai":"ガング—祭り","kuni":"コンゴ民主共和国","id-area":"AF-14","furigana":"きでできた　かめんでおどる　なつまつり"}
            ,
            {"id":"109","clue":"'Rock landscape looks like the surface of the moon.　'","yomiku":"月面の　景色のような　岩ばかり","answer":"/images/pictures/109_p.png","read":"/sounds/en/109_en.mp3","yomu":"/sounds/jp/109_jp.mp3","flag":"/images/flags/053_DJI_50.png","area":"Africa","subject":"Travertine (rock tower)","country":"Djibouti","daizai":"トラバーチン (岩山）","kuni":"ジブチ","id-area":"AF-15","furigana":"げつめんの　けしきのような　いわばかり"}
            ,
            {"id":"110","clue":"'Inside the buildings lie ancient bodies and writings.'","yomiku":"ピラミッドに　眠るミイラと　古代文字","answer":"/images/pictures/110_p.png","read":"/sounds/en/110_en.mp3","yomu":"/sounds/jp/110_jp.mp3","flag":"/images/flags/057_EGY_50.png","area":"Africa","subject":"Ancient Egypt","country":"Egypt","daizai":"古代エジプト","kuni":"エジプト","id-area":"AF-16","furigana":"ぴらみっどに　ねむるみいらと　こだいもじ"}
            ,
            {"id":"111","clue":"'Brown body with white lines, long bones out of the head'","yomiku":"長い角　茶色に白の　縞模様","answer":"/images/pictures/111_p.png","read":"/sounds/en/111_en.mp3","yomu":"/sounds/jp/111_jp.mp3","flag":"/images/flags/072_GEQ_50.png","area":"Africa","subject":"Bongos (antelope)","country":"Equatorial Guinea","daizai":"ボンゴ (アンテロープ)","kuni":"赤道ギニア","id-area":"AF-17","furigana":"ながいつの　ちゃいろにしろの　しまもよう"}
            ,
            {"id":"112","clue":"'Black trains carry everyone and run on steam.'","yomiku":"元気よく　山沿い走る　黒い汽車","answer":"/images/pictures/112_p.png","read":"/sounds/en/112_en.mp3","yomu":"/sounds/jp/112_jp.mp3","flag":"/images/flags/058_ERI_50.png","area":"Africa","subject":"Eritrean Railway","country":"Eritrea","daizai":"エリトリア鉄道","kuni":"エリトリア","id-area":"AF-18","furigana":"げんきよく　やまぞいはしる　くろいきしゃ"}
            ,
            {"id":"113","clue":"'Girls walk together after they cut tall grass.'","yomiku":"背の高い　アシを掲げる　少女の行進","answer":"/images/pictures/113_p.png","read":"/sounds/en/113_en.mp3","yomu":"/sounds/jp/113_jp.mp3","flag":"/images/flags/180_SWZ_50.png","area":"Africa","subject":"Reed Dance Ceremony","country":"Eswatini","daizai":"リードダンス（行事）","kuni":"エスワティニ","id-area":"AF-19","furigana":"せのたかい　あしをかかげる　しょうじょのこうしん"}
            ,
            {"id":"114","clue":"'Bones of an ancient woman got a name after a song.'","yomiku":"大発見　グレートマザー　よみがえる","answer":"/images/pictures/114_p.png","read":"/sounds/en/114_en.mp3","yomu":"/sounds/jp/114_jp.mp3","flag":"/images/flags/062_ETH_50.png","area":"Africa","subject":"Lucy's Bones (fossils)","country":"Ethiopia","daizai":"ルーシーの骨（化石）","kuni":"エチオピア","id-area":"AF-20","furigana":"だいはっけん　ぐれえとまざあ　よみがえる"}
            ,
            {"id":"115","clue":"'Covered with a hard shell, eat with a long tongue.'","yomiku":"鎧着て　長い舌伸び　アリ食べる","answer":"/images/pictures/115_p.png","read":"/sounds/en/115_en.mp3","yomu":"/sounds/jp/115_jp.mp3","flag":"/images/flags/067_GAB_50.png","area":"Africa","subject":"Pangolin","country":"Gabon","daizai":"センザンコウ","kuni":"ガボン","id-area":"AF-21","furigana":"よろいきて　ながいしたのび　ありたべる"}
            ,
            {"id":"116","clue":"'Open a big mouth in the small pool under the sun.'","yomiku":"公園で　おそるおそる　ワニ触る","answer":"/images/pictures/116_p.png","read":"/sounds/en/116_en.mp3","yomu":"/sounds/jp/116_jp.mp3","flag":"/images/flags/068_GAM_50.png","area":"Africa","subject":"Kachikally Crocodile Pool","country":"Gambia","daizai":"ワニ園","kuni":"ガンビア","id-area":"AF-22","furigana":"こうえんで　おそるおそる　わにさわる"}
            ,
            {"id":"117","clue":"'Men make colourful cloth by hand using a wooden tool.'","yomiku":"あざやかな　布を手で織る　男たち","answer":"/images/pictures/117_p.png","read":"/sounds/en/117_en.mp3","yomu":"/sounds/jp/117_jp.mp3","flag":"/images/flags/074_GHA_50.png","area":"Africa","subject":"Kente Cloth","country":"Ghana","daizai":"ケンテ布","kuni":"ガーナ","id-area":"AF-23","furigana":"あざやかな　ぬのをてでおる　おとこたち"}
            ,
            {"id":"118","clue":"'Fly through the air on a stage made of wood.'","yomiku":"木を組んだ　空の舞台を　とび回る","answer":"/images/pictures/118_p.png","read":"/sounds/en/118_en.mp3","yomu":"/sounds/jp/118_jp.mp3","flag":"/images/flags/078_GUI_50.png","area":"Africa","subject":"Circus Baobab","country":"Guinea","daizai":"バオバブサーカス","kuni":"ギニア","id-area":"AF-24","furigana":"きをくんだ　そらのぶたいを　とびまわる"}
            ,
            {"id":"119","clue":"'Attach shells around a dried fruit and make a sound.'","yomiku":"ひょうたんに　貝殻つけて　音を出す","answer":"/images/pictures/119_p.png","read":"/sounds/en/119_en.mp3","yomu":"/sounds/jp/119_jp.mp3","flag":"/images/flags/070_GBS_50.png","area":"Africa","subject":"Shekere (calabash shaker)","country":"Guinea-Bissau","daizai":"シェケレ（打楽器）","kuni":"ギニア・ビサウ","id-area":"AF-25","furigana":"ひょうたんに　かいがらつけて　おとをだす"}
            ,
            {"id":"120","clue":"'People and animals with the setting sun behind them.'","yomiku":"夕焼けに　ヤリ持ちりりしい　マサイの戦士","answer":"/images/pictures/120_p.png","read":"/sounds/en/120_en.mp3","yomu":"/sounds/jp/120_jp.mp3","flag":"/images/flags/099_KEN_50.png","area":"Africa","subject":"Maasai People","country":"Kenya","daizai":"マサイ族","kuni":"ケニア","id-area":"AF-26","furigana":"ゆうやけに　やりもちりりしい　マサイのせんし"}
            ,
            {"id":"121","clue":"'Smile in a hat of a mountain's shape.'","yomiku":"三角の　麦わら帽子　にっこりと","answer":"/images/pictures/121_p.png","read":"/sounds/en/121_en.mp3","yomu":"/sounds/jp/121_jp.mp3","flag":"/images/flags/111_LES_50.png","area":"Africa","subject":"Mokorotlo (Basotho Hat)","country":"Lesotho","daizai":"パソトハット（麦わら帽子）","kuni":"レソト","id-area":"AF-27","furigana":"さんかくの　むぎわらぼうし　にっこりと"}
            ,
            {"id":"122","clue":"'Dance around in a costume hiding the whole body.'","yomiku":"神々や　悪魔の姿　着飾り踊る","answer":"/images/pictures/122_p.png","read":"/sounds/en/122_en.mp3","yomu":"/sounds/jp/122_jp.mp3","flag":"/images/flags/109_LBR_50.png","area":"Africa","subject":"Dancing Devils","country":"Liberia","daizai":"踊る悪魔","kuni":"リベリア","id-area":"AF-28","furigana":"かみがみや　あくまのすがた　きかざりおどる"}
            ,
            {"id":"123","clue":"'By the water, a woman stands in a red dress.'","yomiku":"少女の憧れ　記念日祝う　衣装着て","answer":"/images/pictures/123_p.png","read":"/sounds/en/123_en.mp3","yomu":"/sounds/jp/123_jp.mp3","flag":"/images/flags/108_LBA_50.png","area":"Africa","subject":"Libyan Traditional Clothing","country":"Libya","daizai":"リビア伝統衣装","kuni":"リビア","id-area":"AF-29","furigana":"しょうじょのあこがれ　きねんびいわう　いしょうきせて"}
            ,
            {"id":"124","clue":"'Giant trees along the road with the sinking sun'","yomiku":"天に向かって　まっすぐ伸びる　樹の街道","answer":"/images/pictures/124_p.png","read":"/sounds/en/124_en.mp3","yomu":"/sounds/jp/124_jp.mp3","flag":"/images/flags/116_MAD_50.png","area":"Africa","subject":"Avenue of the Baobabs","country":"Madagascar","daizai":"バオバブ街道","kuni":"マダガスカル","id-area":"AF-30","furigana":"てんにむかって　まっすぐのびる　きのかいどう"}
            ,
            {"id":"125","clue":"'Colourful fish, a local food, swim in the lake.'","yomiku":"カラフルな　魚が群れる　マラウイ湖","answer":"/images/pictures/125_p.png","read":"/sounds/en/125_en.mp3","yomu":"/sounds/jp/125_jp.mp3","flag":"/images/flags/119_MAW_50.png","area":"Africa","subject":"Lake Malawi","country":"Malawi","daizai":"マラウィ湖","kuni":"マラウイ","id-area":"AF-31","furigana":"からふるな　さかながむれる　まらういこ"}
            ,
            {"id":"126","clue":"'With big mouth open, the statues stand in the city.'","yomiku":"カバの国　交差点でも人気者","answer":"/images/pictures/126_p.png","read":"/sounds/en/126_en.mp3","yomu":"/sounds/jp/126_jp.mp3","flag":"/images/flags/126_MLI_50.png","area":"Africa","subject":"Hippo","country":"Mali","daizai":"カバ","kuni":"マリ","id-area":"AF-32","furigana":"カバのくに　こうさてんでも　にんきもの"}
            ,
            {"id":"127","clue":"'Live in a historic village made of red bricks.'","yomiku":"中世から　人が行きかう　レンガの街","answer":"/images/pictures/127_p.png","read":"/sounds/en/127_en.mp3","yomu":"/sounds/jp/127_jp.mp3","flag":"/images/flags/132_MTN_50.png","area":"Africa","subject":"Ancient Ksour Villages","country":"Mauritania","daizai":"クスール（古代集落）","kuni":"モーリタニア","id-area":"AF-33","furigana":"ちゅうせいから　ひとがいきかう　れんがのまち"}
            ,
            {"id":"128","clue":"'Hold a thin round drum and beat it with both hands.'","yomiku":"両手でたたく　大きな形の タンバリン","answer":"/images/pictures/128_p.png","read":"/sounds/en/128_en.mp3","yomu":"/sounds/jp/128_jp.mp3","flag":"/images/flags/131_MRI_50.png","area":"Africa","subject":"Ravanne Drum","country":"Mauritius","daizai":"ラバンヌドラム","kuni":"モーリシャス","id-area":"AF-34","furigana":"りょうてでたたく　おおきなかたちの たんばりん"}
            ,
            {"id":"129","clue":"'Walls of the houses, stairs in the street, all in blue'","yomiku":"神聖な　青の街並み　シャウエン","answer":"/images/pictures/129_p.png","read":"/sounds/en/129_en.mp3","yomu":"/sounds/jp/129_jp.mp3","flag":"/images/flags/117_MAR_50.png","area":"Africa","subject":"Chefchaouen (the blue city)","country":"Morocco","daizai":"シャウエン（青の街）","kuni":"モロッコ","id-area":"AF-35","furigana":"しんせいな　あおのまちなみ　しゃうえん"}
            ,
            {"id":"130","clue":"'Wearing a mask, men dance in front of the audience.'","yomiku":"男たち　力を誇示する　仮面のダンス","answer":"/images/pictures/130_p.png","read":"/sounds/en/130_en.mp3","yomu":"/sounds/jp/130_jp.mp3","flag":"/images/flags/130_MOZ_50.png","area":"Africa","subject":"Mapiko Dance","country":"Mozambique","daizai":"マピコ（仮面舞踊）","kuni":"モザンビーク","id-area":"AF-36","furigana":"おとこたち　ちからをこじする　かめんのだんす"}
            ,
            {"id":"131","clue":"'Mountains of sand turn orange in the evening sun.'","yomiku":"海沿いを　夕陽が染める　砂の山","answer":"/images/pictures/131_p.png","read":"/sounds/en/131_en.mp3","yomu":"/sounds/jp/131_jp.mp3","flag":"/images/flags/134_NAM_50.png","area":"Africa","subject":"Namib Desert","country":"Namibia","daizai":"ナミビ砂漠","kuni":"ナミビア","id-area":"AF-37","furigana":"うみぞいを　ゆうひがそめる　すなのやま"}
            ,
            {"id":"132","clue":"'Find a man with an attractive smile and clothes.'","yomiku":"おしゃれして　男を競う　婚活祭り","answer":"/images/pictures/132_p.png","read":"/sounds/en/132_en.mp3","yomu":"/sounds/jp/132_jp.mp3","flag":"/images/flags/139_NIG_50.png","area":"Africa","subject":"Gerewol Festival (male beauty contest)","country":"Niger","daizai":"ゲレウォール祭（美男子コンテスト）","kuni":"ニジェール","id-area":"AF-38","furigana":"おしゃれして　おとこをきそう　こんかつまつり"}
            ,
            {"id":"133","clue":"'Everyone jumps into the river and catches fish.'","yomiku":"一斉に 川に飛び込み　魚捕る","answer":"/images/pictures/133_p.png","read":"/sounds/en/133_en.mp3","yomu":"/sounds/jp/133_jp.mp3","flag":"/images/flags/138_NGR_50.png","area":"Africa","subject":"Argungu Fishing Festival","country":"Nigeria","daizai":"魚獲り大会","kuni":"ナイジェリア","id-area":"AF-39","furigana":"いっせいに かわにとびこみ　さかなとる"}
            ,
            {"id":"134","clue":"'Shake the long hair and dance in a skirt.'","yomiku":"英雄演じる　イントーレダンス　勇猛に","answer":"/images/pictures/134_p.png","read":"/sounds/en/134_en.mp3","yomu":"/sounds/jp/134_jp.mp3","flag":"/images/flags/160_RWA_50.png","area":"Africa","subject":"Intore Dance","country":"Rwanda","daizai":"イントーレダンス","kuni":"ルワンダ","id-area":"AF-40","furigana":"えいゆうえんじる　いんとおれだんす　ゆうもうに"}
            ,
            {"id":"135","clue":"'Like a tower, a rock mountain stands out of the forest.'","yomiku":"ジャングルの　空にそびえる　岩の山","answer":"/images/pictures/135_p.png","read":"/sounds/en/135_en.mp3","yomu":"/sounds/jp/135_jp.mp3","flag":"/images/flags/174_STP_50.png","area":"Africa","subject":"Pico C?o Grande (peak)","country":"Sao Tome and Principe","daizai":"ピコ・カン・グランデ(岩山)","kuni":"サントメ・プリンシペ","id-area":"AF-41","furigana":"じゃんぐるそびえる　いわのやま"}
            ,
            {"id":"136","clue":"'Two men fight to throw each other in an outdoor ring.'","yomiku":"コーランの　聖句身に着け　投げ技競う","answer":"/images/pictures/136_p.png","read":"/sounds/en/136_en.mp3","yomu":"/sounds/jp/136_jp.mp3","flag":"/images/flags/162_SEN_50.png","area":"Africa","subject":"Senegalese Wrestling","country":"Senegal","daizai":"セネガル相撲","kuni":"セネガル","id-area":"AF-42","furigana":"こおらんの　せいくみにつけ　なげわざきそう"}
            ,
            {"id":"137","clue":"'Look up and see a large fruit like a twin.'","yomiku":"見上げれば　双子のような　大きな実","answer":"/images/pictures/137_p.png","read":"/sounds/en/137_en.mp3","yomu":"/sounds/jp/137_jp.mp3","flag":"/images/flags/163_SEY_50.png","area":"Africa","subject":"Double Coconut","country":"Seychelles","daizai":"フタゴヤシ","kuni":"セイシェル","id-area":"AF-43","furigana":"みあげれば　ふたごのような　おおきなみ"}
            ,
            {"id":"138","clue":"'In the town grows an old giant tree, a symbol of freedom.'","yomiku":"街なかに　大木育つ　500歳","answer":"/images/pictures/138_p.png","read":"/sounds/en/138_en.mp3","yomu":"/sounds/jp/138_jp.mp3","flag":"/images/flags/166_SLE_50.png","area":"Africa","subject":"Cotton Tree","country":"Sierra Leone","daizai":"コットン・ツリー","kuni":"シェラレオネ","id-area":"AF-44","furigana":"まちなかに　たいぼくそだつ　ごひゃくさい"}
            ,
            {"id":"139","clue":"'People painted cows in the cave a long time ago.'","yomiku":"洞窟壁画　ともに暮らした　牛や犬","answer":"/images/pictures/139_p.png","read":"/sounds/en/139_en.mp3","yomu":"/sounds/jp/139_jp.mp3","flag":"/images/flags/170_SOM_50.png","area":"Africa","subject":"Laas Geel Cave Paintings","country":"Somalia","daizai":"ラースゲール洞窟壁画","kuni":"ソマリア","id-area":"AF-45","furigana":"どうくつへきが　ともにくらした　うしやいぬ"}
            ,
            {"id":"140","clue":"'Yellow animals with spots run through the open land.'","yomiku":"サバンナを　一番速く　走る猫","answer":"/images/pictures/140_p.png","read":"/sounds/en/140_en.mp3","yomu":"/sounds/jp/140_jp.mp3","flag":"/images/flags/158_RSA_50.png","area":"Africa","subject":"Cheetah","country":"South Africa","daizai":"チーター","kuni":"南アフリカ","id-area":"AF-46","furigana":"さばんなを　いちばんはやく　はしるねこ"}
            ,
            {"id":"141","clue":"'Build a city like the animal's shape and make it exciting.'","yomiku":"首都の形を　サイにする　都市計画","answer":"/images/pictures/141_p.png","read":"/sounds/en/141_en.mp3","yomu":"/sounds/jp/141_jp.mp3","flag":"/images/flags/173_SSD_50.png","area":"Africa","subject":"Rhino-Shaped City","country":"South Sudan","daizai":"サイの形の街","kuni":"南スーダン","id-area":"AF-47","furigana":"しゅとのかたちを　さいにする　としけいかく"}
            ,
            {"id":"142","clue":"'Desert animals walk in front of ancient buildings.'","yomiku":"そびえたつ　ナイル川沿いの　ピラミッド","answer":"/images/pictures/142_p.png","read":"/sounds/en/142_en.mp3","yomu":"/sounds/jp/142_jp.mp3","flag":"/images/flags/175_SUD_50.png","area":"Africa","subject":"Nubian Pyramids","country":"Sudan","daizai":"ヌビアのピラミッド","kuni":"スーダン","id-area":"AF-48","furigana":"そびえたつ　ないるがわぞいの　ぴらみっど"}
            ,
            {"id":"143","clue":"'Live in brown mud houses. The roof is from plants.'","yomiku":"土の家　黄色の屋根は　わらぶき","answer":"/images/pictures/143_p.png","read":"/sounds/en/143_en.mp3","yomu":"/sounds/jp/143_jp.mp3","flag":"/images/flags/188_TOG_50.png","area":"Africa","subject":"Koutammakou Houses","country":"Togo","daizai":"クタマクの住居","kuni":"トーゴ","id-area":"AF-49","furigana":"つちのいえ　きいろのやねは　わらぶき"}
            ,
            {"id":"144","clue":"'Humans and violent animals fought in a round building.'","yomiku":"ローマ時代　虎と死闘の　競技場","answer":"/images/pictures/144_p.png","read":"/sounds/en/144_en.mp3","yomu":"/sounds/jp/144_jp.mp3","flag":"/images/flags/191_TUN_50.png","area":"Africa","subject":"Amphitheatre of El Jem","country":"Tunisia","daizai":"エルジェム円形闘技場","kuni":"チュニジア","id-area":"AF-50","furigana":"ろおまじだい　とらとしとうの　きょうぎじょう"}
            ,
            {"id":"145","clue":"'Dark body, thick arms, living in the forest'","yomiku":"真っ黒で　気はやさしくて　力持ち","answer":"/images/pictures/145_p.png","read":"/sounds/en/145_en.mp3","yomu":"/sounds/jp/145_jp.mp3","flag":"/images/flags/195_UGA_50.png","area":"Africa","subject":"Mountain Gorilla","country":"Uganda","daizai":"マウンテンゴリラ","kuni":"ウガンダ","id-area":"AF-51","furigana":"まっくろで　きはやさしくて　ちからもち"}
            ,
            {"id":"146","clue":"'Elephants, lions and other animals gather here for water.'","yomiku":"水求め　集まる動物　遊ぶ象","answer":"/images/pictures/146_p.png","read":"/sounds/en/146_en.mp3","yomu":"/sounds/jp/146_jp.mp3","flag":"/images/flags/182_TAN_50.png","area":"Africa","subject":"Ngorongoro Conservation Area","country":"United Republic of Tanzania","daizai":"ンゴロンゴロ保護地域","kuni":"タンザニア連合共和国","id-area":"AF-52","furigana":"みずもとめ　あつまるどうぶつ　あそぶぞう"}
            ,
            {"id":"147","clue":"'Move on a ship with an elephant in the rainy season.'","yomiku":"雨期になり　ボートで移動　象を乗せ","answer":"/images/pictures/147_p.png","read":"/sounds/en/147_en.mp3","yomu":"/sounds/jp/147_jp.mp3","flag":"/images/flags/205_ZAM_50.png","area":"Africa","subject":"Kuomboka Celemony","country":"Zambia","daizai":"クオンボカ（行事）","kuni":"ザンビア","id-area":"AF-53","furigana":"うきになり　ぼおとでいどう　ぞうをのせ"}
            ,
            {"id":"148","clue":"'Three rocks and many zeros are on paper money.'","yomiku":"たくさんの　ゼロを並べた　高額紙幣","answer":"/images/pictures/148_p.png","read":"/sounds/en/148_en.mp3","yomu":"/sounds/jp/148_jp.mp3","flag":"/images/flags/206_ZIM_50.png","area":"Africa","subject":"Hundred Trillion Dollar Note","country":"Zimbabwe","daizai":"百兆ドル紙幣","kuni":"ジンバブエ","id-area":"AF-54","furigana":"たくさんの　ぜろをならべた　こうがくしへい"}
            ,
            {"id":"149","clue":"'Long leaves and red flowers produce yellow fruits.'","yomiku":"長い葉に　囲まれ育つ　赤い花","answer":"/images/pictures/149_p.png","read":"/sounds/en/149_en.mp3","yomu":"/sounds/jp/149_jp.mp3","flag":"/images/flags/006_ANT_50.png","area":"Americas","subject":"Antigua Black Pineapple","country":"Antigua and Barbuda","daizai":"ブラック・パイナップル","kuni":"アンティグア・バーブーダ","id-area":"AM-01","furigana":"ながいはに　かこまれそだつ　あかいはな"}
            ,
            {"id":"150","clue":"'Dressed in red and black, they dance in a pair.'","yomiku":"からだ寄せ　華麗に踊る　男女ペア","answer":"/images/pictures/150_p.png","read":"/sounds/en/150_en.mp3","yomu":"/sounds/jp/150_jp.mp3","flag":"/images/flags/007_ARG_50.png","area":"Americas","subject":"Argentine Tango","country":"Argentina","daizai":"アルゼンチン・タンゴ","kuni":"アルゼンチン","id-area":"AM-02","furigana":"からだよせ　かれいにおどる　だんじょぺあ"}
            ,
            {"id":"151","clue":"'Go under the sea on a ship and watch tropical fish.'","yomiku":"サンゴ礁　潜れば広がる　水族館","answer":"/images/pictures/151_p.png","read":"/sounds/en/151_en.mp3","yomu":"/sounds/jp/151_jp.mp3","flag":"/images/flags/009_ARU_50.png","area":"Americas","subject":"Submarine Dive","country":"Aruba","daizai":"潜水艦探検","kuni":"アルバ","id-area":"AM-03","furigana":"さんごしょう　もぐればひろがる　すいぞくかん"}
            ,
            {"id":"152","clue":"'Thin blue fish with a long lower mouth'","yomiku":"スマートで　下あご長い　青魚","answer":"/images/pictures/152_p.png","read":"/sounds/en/152_en.mp3","yomu":"/sounds/jp/152_jp.mp3","flag":"/images/flags/014_BAH_50.png","area":"Americas","subject":"Wahoo Fish","country":"Bahamas","daizai":"カマスサワラ","kuni":"バハマ","id-area":"AM-04","furigana":"すまあとで　したあごながい　あおざかな"}
            ,
            {"id":"153","clue":"'Fly over the sea using a kind of wing.'","yomiku":"ひれ広げ　まるでヒコーキ　海の上","answer":"/images/pictures/153_p.png","read":"/sounds/en/153_en.mp3","yomu":"/sounds/jp/153_jp.mp3","flag":"/images/flags/016_BAR_50.png","area":"Americas","subject":"Bajan Flying Fish","country":"Barbados","daizai":"トビウオ","kuni":"バルバドス","id-area":"AM-05","furigana":"ひれひろげ　まるでひこおき　うみのうえ"}
            ,
            {"id":"154","clue":"'Jump from the sky into a hole in the sea.'","yomiku":"ぽっかりと　海の大穴　ダイビング","answer":"/images/pictures/154_p.png","read":"/sounds/en/154_en.mp3","yomu":"/sounds/jp/154_jp.mp3","flag":"/images/flags/023_BIZ_50.png","area":"Americas","subject":"Great Blue Hole","country":"Belize","daizai":"グレートブルーホール（陥没穴）","kuni":"ベリーズ","id-area":"AM-06","furigana":"ぽっかりと　うみのおおあな　だいびんぐ"}
            ,
            {"id":"155","clue":"'Stone castle stands between the sea and a green park.'","yomiku":"波しぶき　海に突き出た　石の城","answer":"/images/pictures/155_p.png","read":"/sounds/en/155_en.mp3","yomu":"/sounds/jp/155_jp.mp3","flag":"/images/flags/020_BER_50.png","area":"Americas","subject":"Fort St. Catherine","country":"Bermuda","daizai":"セント・キャサリン砦","kuni":"バミューダ","id-area":"AM-07","furigana":"なみしぶき　うみにつきでた　いしのようさい"}
            ,
            {"id":"156","clue":"'Dancers walk on the street in scary masks.'","yomiku":"大きな仮面　楽しいダンス","answer":"/images/pictures/156_p.png","read":"/sounds/en/156_en.mp3","yomu":"/sounds/jp/156_jp.mp3","flag":"/images/flags/025_BOL_50.png","area":"Americas","subject":"Diablada (Dance of the Devils)","country":"Bolivia","daizai":"ディアブラーダ（悪魔の踊り）","kuni":"ボリビア","id-area":"AM-08","furigana":"おおきなかめん　たのしいだんす"}
            ,
            {"id":"157","clue":"'Dance hard in a town with a statue on the mountain.'","yomiku":"サンバでみんな　はじける街は　カーニバル","answer":"/images/pictures/157_p.png","read":"/sounds/en/157_en.mp3","yomu":"/sounds/jp/157_jp.mp3","flag":"/images/flags/027_BRA_50.png","area":"Americas","subject":"Rio Carnival","country":"Brazil","daizai":"リオのカーニバル","kuni":"ブラジル","id-area":"AM-09","furigana":"さんばでみんな　はじけるまちは　かあにばる"}
            ,
            {"id":"158","clue":"'Leaves fall, and the wings cross the sea.'","yomiku":"落ち葉舞い　羽根を広げて　空渡る","answer":"/images/pictures/158_p.png","read":"/sounds/en/158_en.mp3","yomu":"/sounds/jp/158_jp.mp3","flag":"/images/flags/034_CAN_50.png","area":"Americas","subject":"Canada Goose","country":"Canada","daizai":"カナダガン","kuni":"カナダ","id-area":"AM-10","furigana":"おちばまい　はねをひろげて　そらわたる"}
            ,
            {"id":"159","clue":"'Send a letter from the post office in hell.'","yomiku":"悪魔住む　郵便局で　手紙出す","answer":"/images/pictures/159_p.png","read":"/sounds/en/159_en.mp3","yomu":"/sounds/jp/159_jp.mp3","flag":"/images/flags/035_CAY_50.png","area":"Americas","subject":"Hell (black rock formations)","country":"Cayman Islands","daizai":"地獄（黒い岩層）","kuni":"ケイマン諸島","id-area":"AM-11","furigana":"あくますむ　ゆうびんきょくで　てがみだす"}
            ,
            {"id":"160","clue":"'Suddenly, a huge hand appears in the desert.'","yomiku":"砂が舞い　びっくり仰天　大きな手","answer":"/images/pictures/160_p.png","read":"/sounds/en/160_en.mp3","yomu":"/sounds/jp/160_jp.mp3","flag":"/images/flags/038_CHI_50.png","area":"Americas","subject":"Mano del Desierto (sculpture of a hand）","country":"Chile","daizai":"マノ・デル・デシエルト（手の彫刻）","kuni":"チリ","id-area":"AM-12","furigana":"すながまい　びっくりぎょうてん　おおきなて"}
            ,
            {"id":"161","clue":"'At lunchtime, enjoy a hot drink with melted cheese.'","yomiku":"温まる　ココアにチーズ　溶かし飲む","answer":"/images/pictures/161_p.png","read":"/sounds/en/161_en.mp3","yomu":"/sounds/jp/161_jp.mp3","flag":"/images/flags/044_COL_50.png","area":"Americas","subject":"Hot Chocolate with Cheese","country":"Colombia","daizai":"チーズ入りホットチョコレート","kuni":"コロンビア","id-area":"AM-13","furigana":"あたたまる　ここあにちいず　とかしのむ"}
            ,
            {"id":"162","clue":"'Climb trees and hang on all day long.'","yomiku":"木に登り　ぶらさがるのが　日課です","answer":"/images/pictures/162_p.png","read":"/sounds/en/162_en.mp3","yomu":"/sounds/jp/162_jp.mp3","flag":"/images/flags/047_CRC_50.png","area":"Americas","subject":"Sloth","country":"Costa Rica","daizai":"ナマケモノ","kuni":"コスタリカ","id-area":"AM-14","furigana":"きにのぼり　ぶらさがるのが　にっかです"}
            ,
            {"id":"163","clue":"'On the street stands a man and a windmill from the novel.'","yomiku":"姫のため　風車と戦う　ダテ男","answer":"/images/pictures/163_p.png","read":"/sounds/en/163_en.mp3","yomu":"/sounds/jp/163_jp.mp3","flag":"/images/flags/049_CUB_50.png","area":"Americas","subject":"Statue of El Quixote","country":"Cuba","daizai":"ドン・キホーテ像","kuni":"キューバ","id-area":"AM-15","furigana":"ひめのため　かざぐるまとたたかう　だておとこ"}
            ,
            {"id":"164","clue":"'Fly on green wings in a tropical forest.'","yomiku":"色鮮やか　原生林に　暮らす鳥","answer":"/images/pictures/164_p.png","read":"/sounds/en/164_en.mp3","yomu":"/sounds/jp/164_jp.mp3","flag":"/images/flags/054_DMA_50.png","area":"Americas","subject":"Sisserou Parrot","country":"Dominica","daizai":"ミカドボウシインコ","kuni":"ドミニカ","id-area":"AM-16","furigana":"いろあざやか　げんせいりんに　くらすとり"}
            ,
            {"id":"165","clue":"'Face to face, dance to the sound of the guitar.'","yomiku":"お互いの　顔見つめ合い　踊る男女","answer":"/images/pictures/165_p.png","read":"/sounds/en/165_en.mp3","yomu":"/sounds/jp/165_jp.mp3","flag":"/images/flags/055_DOM_50.png","area":"Americas","subject":"Bachata Dance","country":"Dominican Republic","daizai":"バチャータ（ダンス）","kuni":"ドミニカ共和国","id-area":"AM-17","furigana":"おたがいの　かおみつめあい　おどるだんじょ"}
            ,
            {"id":"166","clue":"'Home to rare animals and birds far from the continent'","yomiku":"ゾウガメや　イグアナたちが　暮らす島","answer":"/images/pictures/166_p.png","read":"/sounds/en/166_en.mp3","yomu":"/sounds/jp/166_jp.mp3","flag":"/images/flags/056_ECU_50.png","area":"Americas","subject":"Gal?pagos Islands","country":"Ecuador","daizai":"ガラパゴス諸島","kuni":"エクアドル","id-area":"AM-18","furigana":"ぞうがめや　いぐあなたちが　くらすしま"}
            ,
            {"id":"167","clue":"'Draw a woman, a dove and different shapes together.'","yomiku":"鮮やかな　色とラインの　現代アート","answer":"/images/pictures/167_p.png","read":"/sounds/en/167_en.mp3","yomu":"/sounds/jp/167_jp.mp3","flag":"/images/flags/059_ESA_50.png","area":"Americas","subject":"¥tLa Palma Style Art","country":"El Salvador","daizai":"パルマ・スタイルのアート","kuni":"エルサルバドル","id-area":"AM-19","furigana":"あざやかな　いろとらいんの　げんだいああと"}
            ,
            {"id":"168","clue":"'Hand in hand, all stand at the bottom of the sea.'","yomiku":"神秘的　彫刻沈む　美術館","answer":"/images/pictures/168_p.png","read":"/sounds/en/168_en.mp3","yomu":"/sounds/jp/168_jp.mp3","flag":"/images/flags/076_GRN_50.png","area":"Americas","subject":"Underwater Sculpture Park","country":"Grenada","daizai":"海底彫刻公園","kuni":"グレナダ","id-area":"AM-20","furigana":"しんぴてき　ちょうこくしずむ　びじゅつかん"}
            ,
            {"id":"169","clue":"'Rocks fall from space and destroy human society.'","yomiku":"地球に隕石　人類の　滅亡説","answer":"/images/pictures/169_p.png","read":"/sounds/en/169_en.mp3","yomu":"/sounds/jp/169_jp.mp3","flag":"/images/flags/077_GUA_50.png","area":"Americas","subject":"2012 End of the World","country":"Guatemala","daizai":"2012年人類滅亡説","kuni":"グアテマラ","id-area":"AM-21","furigana":"ちきゅうにいんせき　じんるいの　めつぼうせつ"}
            ,
            {"id":"170","clue":"'Put coloured powder on each other in the spring.'","yomiku":"ヒンズーの　春来た知らせ　ホーリー祭","answer":"/images/pictures/170_p.png","read":"/sounds/en/170_en.mp3","yomu":"/sounds/jp/170_jp.mp3","flag":"/images/flags/080_GUY_50.png","area":"Americas","subject":"Phagwah Holi Festival","country":"Guyana","daizai":"ホーリー祭","kuni":"ガイアナ","id-area":"AM-22","furigana":"ひんずうの　はるきたたしらせ　ほおりいさい"}
            ,
            {"id":"171","clue":"'Spread out the colourful skirts like a bird's wing.'","yomiku":"カーニバル　クジャクスカート　華やかに","answer":"/images/pictures/171_p.png","read":"/sounds/en/171_en.mp3","yomu":"/sounds/jp/171_jp.mp3","flag":"/images/flags/081_HAI_50.png","area":"Americas","subject":"Haitian Carnival","country":"Haiti","daizai":"ハイチカーニバル","kuni":"ハイチ","id-area":"AM-23","furigana":"かあにばる　くじゃくすかあと　はなやかに"}
            ,
            {"id":"172","clue":"'Fish fall and catch them in the basket.'","yomiku":"落ちてくる　魚を籠で　つかまえる","answer":"/images/pictures/172_p.png","read":"/sounds/en/172_en.mp3","yomu":"/sounds/jp/172_jp.mp3","flag":"/images/flags/083_HON_50.png","area":"Americas","subject":"Fish Rain","country":"Honduras","daizai":"空から降る魚","kuni":"ホンジュラス","id-area":"AM-24","furigana":"おちてくる　さかなをかごで　つかまえる"}
            ,
            {"id":"173","clue":"'Play drums and guitars for peace.'","yomiku":"レゲエの　リズムにのり　踊り合う","answer":"/images/pictures/173_p.png","read":"/sounds/en/173_en.mp3","yomu":"/sounds/jp/173_jp.mp3","flag":"/images/flags/095_JAM_50.png","area":"Americas","subject":"Reggae Music","country":"Jamaica","daizai":"レゲエ音楽","kuni":"ジャマイカ","id-area":"AM-25","furigana":"れげえの　りずむにのり　おどりあう"}
            ,
            {"id":"174","clue":"'Wear a mask with flowers to remember the dead.'","yomiku":"お面付け　祖先を偲ぶ　花添えて","answer":"/images/pictures/174_p.png","read":"/sounds/en/174_en.mp3","yomu":"/sounds/jp/174_jp.mp3","flag":"/images/flags/122_MEX_50.png","area":"Americas","subject":"Day of the Dead","country":"Mexico","daizai":"死者の日","kuni":"メキシコ","id-area":"AM-26","furigana":"おめんつけ　そせんをしのぶ　はなそえて"}
            ,
            {"id":"175","clue":"'Two islands, large and small, in the lake'","yomiku":"湖に　浮かぶ二つの　火山島","answer":"/images/pictures/175_p.png","read":"/sounds/en/175_en.mp3","yomu":"/sounds/jp/175_jp.mp3","flag":"/images/flags/135_NCA_50.png","area":"Americas","subject":"Ometepe Island","country":"Nicaragua","daizai":"オメテべ島","kuni":"ニカラグア","id-area":"AM-27","furigana":"みずうみに　うかぶふたつの　かざんとう"}
            ,
            {"id":"176","clue":"'View the colourful museum from a boat on the canal.'","yomiku":"太平洋と　大西洋を　つなぐ道","answer":"/images/pictures/176_p.png","read":"/sounds/en/176_en.mp3","yomu":"/sounds/jp/176_jp.mp3","flag":"/images/flags/145_PAN_50.png","area":"Americas","subject":"Panama City","country":"Panama","daizai":"パナマ市","kuni":"パナマ","id-area":"AM-28","furigana":"たいへいようと　たいせいようを　つなぐみち"}
            ,
            {"id":"177","clue":"'Pour water over the leaves and drink through a tube.'","yomiku":"茶葉に冷水　タンブラーで　飲むサラダ","answer":"/images/pictures/177_p.png","read":"/sounds/en/177_en.mp3","yomu":"/sounds/jp/177_jp.mp3","flag":"/images/flags/146_PAR_50.png","area":"Americas","subject":"Terer? (cold mate tea)","country":"Paraguay","daizai":"テレレ（冷マテ茶）","kuni":"パラグアイ","id-area":"AM-29","furigana":"ちゃばにれいすい　たんぶらあで　のむさらだ"}
            ,
            {"id":"178","clue":"'Over the ground, who drew the bird with a long mouth?'","yomiku":"なぞ多い　誰が描いたか　ナスカの絵","answer":"/images/pictures/178_p.png","read":"/sounds/en/178_en.mp3","yomu":"/sounds/jp/178_jp.mp3","flag":"/images/flags/147_PER_50.png","area":"Americas","subject":"Nazca Lines","country":"Peru","daizai":"ナスカの地上絵","kuni":"ペルー","id-area":"AM-30","furigana":"なぞおおい　だれがえがいたか　なすかのえ"}
            ,
            {"id":"179","clue":"'Watch for the enemy from the castle's small tower.'","yomiku":"攻撃から　街を守った　監視塔","answer":"/images/pictures/179_p.png","read":"/sounds/en/179_en.mp3","yomu":"/sounds/jp/179_jp.mp3","flag":"/images/flags/155_PUR_50.png","area":"Americas","subject":"Castillo San Crist?bal (fortress)","country":"Puerto Rico","daizai":"サンクリストバル要塞","kuni":"プエルトリコ","id-area":"AM-31","furigana":"こうげきから　まちをまもった　かんしとう"}
            ,
            {"id":"180","clue":"'Feels good to dance with a long stick on each foot.'","yomiku":"長い棒　足に継ぎたし　踊り出す","answer":"/images/pictures/180_p.png","read":"/sounds/en/180_en.mp3","yomu":"/sounds/jp/180_jp.mp3","flag":"/images/flags/165_SKN_50.png","area":"Americas","subject":"Moko Jumbie (stilts walker)","country":"Saint Kitts and Nevis","daizai":"モコジャンビー（竹馬ダンサー）","kuni":"セントクリストファー・ネイビス","id-area":"AM-32","furigana":"ながいぼう　あしにつぎたし　おどりだす"}
            ,
            {"id":"181","clue":"In the park stand an unusual cross and a 'v' for 'victory'.","yomiku":"公園の　フランスクロスと　勝利のV","answer":"/images/pictures/181_p.png","read":"/sounds/en/181_en.mp3","yomu":"/sounds/jp/181_jp.mp3","flag":"/images/flags/110_LCA_50.png","area":"Americas","subject":"WWII Memorial","country":"Saint Lucia","daizai":"第2次世界大戦記念碑","kuni":"セントルシア","id-area":"AM-33","furigana":"こうえんの　ふらんすくろすと　しょうりのぶい"}
            ,
            {"id":"182","clue":"'Each leaf has a dark green and a light green part.'","yomiku":"光さす　まだら模様の　クズウコン","answer":"/images/pictures/182_p.png","read":"/sounds/en/182_en.mp3","yomu":"/sounds/jp/182_jp.mp3","flag":"/images/flags/203_VIN_50.png","area":"Americas","subject":"Arrowroot","country":"St Vincent and the Grenadines","daizai":"クズウコン","kuni":"セントビンセント及びグレナディーン諸島","id-area":"AM-34","furigana":"ひかりさす　まだらもようの　くずうこん"}
            ,
            {"id":"183","clue":"'Bats and fish live in the tropical forest.'","yomiku":"原始の姿　とどめた森林　今も見る","answer":"/images/pictures/183_p.png","read":"/sounds/en/183_en.mp3","yomu":"/sounds/jp/183_jp.mp3","flag":"/images/flags/177_SUR_50.png","area":"Americas","subject":"Central Suriname Nature Reserve","country":"Suriname","daizai":"中央スリナム自然保護区","kuni":"スリナム","id-area":"AM-35","furigana":"げんしのすがた　とどめたしんりん　いまもみる"}
            ,
            {"id":"184","clue":"'Dance in costumes with designs of bones and feathers.'","yomiku":"骸骨や　羽根つき衣装で　皆踊る","answer":"/images/pictures/184_p.png","read":"/sounds/en/184_en.mp3","yomu":"/sounds/jp/184_jp.mp3","flag":"/images/flags/190_TRI_50.png","area":"Americas","subject":"Trinidad Carnival","country":"Trinidad and Tobago","daizai":"トリニダード・カーニバル","kuni":"トリニダード・トバゴ","id-area":"AM-36","furigana":"がいこつや　はねつきいしょうで　みなおどる"}
            ,
            {"id":"185","clue":"'People cross the road at the foot of the tall buildings.'","yomiku":"ニューヨーク　人と文化の　交差点","answer":"/images/pictures/185_p.png","read":"/sounds/en/185_en.mp3","yomu":"/sounds/jp/185_jp.mp3","flag":"/images/flags/198_USA_50.png","area":"Americas","subject":"Times Square","country":"United States of America","daizai":"タイムズスクエア","kuni":"アメリカ合衆国","id-area":"AM-37","furigana":"にゅうよおく　ひととぶんかの　こうさてん"}
            ,
            {"id":"186","clue":"'Protect themselves with a hard shell on the body.'","yomiku":"鎧つけ　体丸めて　身を守る","answer":"/images/pictures/186_p.png","read":"/sounds/en/186_en.mp3","yomu":"/sounds/jp/186_jp.mp3","flag":"/images/flags/197_URU_50.png","area":"Americas","subject":"Armadillo","country":"Uruguay","daizai":"アルマジロ","kuni":"ウルグアイ","id-area":"AM-38","furigana":"よろいつけ　からだまるめて　みをまもる"}
            ,
            {"id":"187","clue":"'Above the clouds, a rocky mountain with a flat top'","yomiku":"雲の上　岩山テーブル　マウンテン","answer":"/images/pictures/187_p.png","read":"/sounds/en/187_en.mp3","yomu":"/sounds/jp/187_jp.mp3","flag":"/images/flags/201_VEN_50.png","area":"Americas","subject":"Monte Roraima","country":"Venezuela","daizai":"ロライマ山","kuni":"ベネズエラ","id-area":"AM-39","furigana":"くものうえ　いわやまてえぶる　まうんてん"}
            ,
            {"id":"188","clue":"'Birds come down, and the lake turns pink.'","yomiku":"湖を　ピンクに染める　鳥の群れ","answer":"/images/pictures/188_p.png","read":"/sounds/en/188_en.mp3","yomu":"/sounds/jp/188_jp.mp3","flag":"/images/flags/094_IVB_50.png","area":"Americas","subject":"Flamingo","country":"Virgin Islands, British","daizai":"フラミンゴ","kuni":"英領バージン諸島","id-area":"AM-40","furigana":"みずうみを　ぴんくにそめる　とりのむれ"}
            ,
            {"id":"189","clue":"'From a tower with a flag up, watch for enemy ships.'","yomiku":"黒ひげの　カリブの海賊　住んだ城","answer":"/images/pictures/189_p.png","read":"/sounds/en/189_en.mp3","yomu":"/sounds/jp/189_jp.mp3","flag":"/images/flags/092_ISV_50.png","area":"Americas","subject":"Blackbeard's Castle","country":"Virgin Islands, US","daizai":"黒髭城","kuni":"米領バージン諸島","id-area":"AM-41","furigana":"くろひげの　かりぶのかいぞく　すんだしろ"}
            ,
            {"id":"190","clue":"'Make a large cloth by hand and add red lines.'","yomiku":"手で編んだ　大きな布に　赤い線","answer":"/images/pictures/190_p.png","read":"/sounds/en/190_en.mp3","yomu":"/sounds/jp/190_jp.mp3","flag":"/images/flags/010_ASA_50.png","area":"Oceania","subject":"Fine Mat (gift cloth)","country":"American Samoa","daizai":"ファインマット（贈答用布）","kuni":"米領サモア","id-area":"OC-01","furigana":"てであんだ　おおきなぬのに　あかいせん"}
            ,
            {"id":"191","clue":"'Fireworks above the theatre on New Year's Day'","yomiku":"ニューイヤー　オペラハウスに　花火咲く","answer":"/images/pictures/191_p.png","read":"/sounds/en/191_en.mp3","yomu":"/sounds/jp/191_jp.mp3","flag":"/images/flags/011_AUS_50.png","area":"Oceania","subject":"Sydney Opera House","country":"Australia","daizai":"シドニー・オペラハウス","kuni":"オーストラリア","id-area":"OC-02","furigana":"にゅういやあ　おぺらはうすに　はなびさく"}
            ,
            {"id":"192","clue":"'Use black wings for swimming in the sea, not to fly.'","yomiku":"切手に　描かれた　ペンギンたち","answer":"/images/pictures/192_p.png","read":"/sounds/en/192_en.mp3","yomu":"/sounds/jp/192_jp.mp3","flag":"/images/flags/043_COK_50.png","area":"Oceania","subject":"Penguin","country":"Cook Islands","daizai":"ペンギン","kuni":"クック諸島","id-area":"OC-03","furigana":"きってに　えがかれた　ぺんぎんたち"}
            ,
            {"id":"193","clue":"'Cut stones and make a hole inside to complete large coins.'","yomiku":"石削り　穴あけできた　大きなお金","answer":"/images/pictures/193_p.png","read":"/sounds/en/193_en.mp3","yomu":"/sounds/jp/193_jp.mp3","flag":"/images/flags/066_FSM_50.png","area":"Oceania","subject":"Yapese Stone Money","country":"Federated States of Micronesia","daizai":"ストーンマネー","kuni":"ミクロネシア連邦","id-area":"OC-04","furigana":"いしけずり　あなあけできた　おおきなおかね"}
            ,
            {"id":"194","clue":"'Kick the ball over the goal bar.'","yomiku":"最強の　呼び声高い　ラガーマン","answer":"/images/pictures/194_p.png","read":"/sounds/en/194_en.mp3","yomu":"/sounds/jp/194_jp.mp3","flag":"/images/flags/063_FIJ_50.png","area":"Oceania","subject":"Rugby","country":"Fiji","daizai":"ラグビー","kuni":"フィジー","id-area":"OC-05","furigana":"さいきょうの　よびごえたかい　らがあまん"}
            ,
            {"id":"195","clue":"'Walk hand in hand to the cliff top for love.'","yomiku":"恋人岬　ハートに名を書き　愛誓う","answer":"/images/pictures/195_p.png","read":"/sounds/en/195_en.mp3","yomu":"/sounds/jp/195_jp.mp3","flag":"/images/flags/079_GUM_50.png","area":"Oceania","subject":"Puntan Dos Amantes (Two Lovers Point)","country":"Guam","daizai":"恋人岬","kuni":"グアム","id-area":"OC-06","furigana":"こいびとみさき　はあとになをかき　あいちかう"}
            ,
            {"id":"196","clue":"'On a branch, looking for food and about to fly'","yomiku":"枝にとまり　ボッキコキコと　鳴く小鳥","answer":"/images/pictures/196_p.png","read":"/sounds/en/196_en.mp3","yomu":"/sounds/jp/196_jp.mp3","flag":"/images/flags/101_KIR_50.png","area":"Oceania","subject":"Christmas Island Warbler","country":"Kiribati","daizai":"クリスマスヨシキリ","kuni":"キリバス","id-area":"OC-07","furigana":"えだにとまり　ぼっきこきこと　なくことり"}
            ,
            {"id":"197","clue":"'In the blue sea, the islands form a curve.'","yomiku":"弧を描く　サンゴでできた　島と浜","answer":"/images/pictures/197_p.png","read":"/sounds/en/197_en.mp3","yomu":"/sounds/jp/197_jp.mp3","flag":"/images/flags/124_MHL_50.png","area":"Oceania","subject":"Majuro Atoll","country":"Marshall Islands","daizai":"マジュロ環礁","kuni":"マーシャル諸島","id-area":"OC-08","furigana":"こをえがく　さんごでできた　しまとはま"}
            ,
            {"id":"198","clue":"'Hang a string on the fingers to make different shapes.'","yomiku":"指に紐かけ　いろいろな形　創り出す","answer":"/images/pictures/198_p.png","read":"/sounds/en/198_en.mp3","yomu":"/sounds/jp/198_jp.mp3","flag":"/images/flags/141_NRU_50.png","area":"Oceania","subject":"Ekawada (string figure)","country":"Nauru","daizai":"あやとり","kuni":"ナウル","id-area":"OC-09","furigana":"ゆびにひもかけ　いろいろなかたち　つくりだす"}
            ,
            {"id":"199","clue":"'Long sharp mouth, the same name as the fruit'","yomiku":"果物と　同じ名前の　国の鳥","answer":"/images/pictures/199_p.png","read":"/sounds/en/199_en.mp3","yomu":"/sounds/jp/199_jp.mp3","flag":"/images/flags/142_NZL_50.png","area":"Oceania","subject":"Kiwi","country":"New Zealand","daizai":"キ−ウィ","kuni":"ニュージーランド","id-area":"OC-10","furigana":"くだものと　おなじなまえの　くにのとり"}
            ,
            {"id":"200","clue":"'Green islands, large and small, spread out in the sea.'","yomiku":"大小の　不思議な形　島の国","answer":"/images/pictures/200_p.png","read":"/sounds/en/200_en.mp3","yomu":"/sounds/jp/200_jp.mp3","flag":"/images/flags/150_PLW_50.png","area":"Oceania","subject":"Rock Islands","country":"Palau","daizai":"ロックアイランド","kuni":"パラオ","id-area":"OC-11","furigana":"だいしょうの　ふしぎなかたち　しまのくに"}
            ,
            {"id":"201","clue":"'Sea cows swim with their large grey body.'","yomiku":"伝説の　人魚のモデル　青い海","answer":"/images/pictures/201_p.png","read":"/sounds/en/201_en.mp3","yomu":"/sounds/jp/201_jp.mp3","flag":"/images/flags/151_PNG_50.png","area":"Oceania","subject":"Dugong (sea cow)","country":"Papua New Guinea","daizai":"ジュゴン","kuni":"パプアニューギニア","id-area":"OC-12","furigana":"でんせつの　にんぎょのもでる　あおいうみ"}
            ,
            {"id":"202","clue":"'From the red line on the map, the date changes.'","yomiku":"太平洋　日付が変わる　赤い線","answer":"/images/pictures/202_p.png","read":"/sounds/en/202_en.mp3","yomu":"/sounds/jp/202_jp.mp3","flag":"/images/flags/161_SAM_50.png","area":"Oceania","subject":"International Date Line","country":"Samoa","daizai":"国際日付変更線","kuni":"サモア","id-area":"OC-13","furigana":"たいへいよう　ひづけがかわる　あかいせん"}
            ,
            {"id":"203","clue":"'On the coast, clear water shows traces of war.'","yomiku":"戦争の　爪痕残る　澄んだ海","answer":"/images/pictures/203_p.png","read":"/sounds/en/203_en.mp3","yomu":"/sounds/jp/203_jp.mp3","flag":"/images/flags/169_SOL_50.png","area":"Oceania","subject":"Island View","country":"Solomon Islands","daizai":"島の風景","kuni":"ソロモン諸島","id-area":"OC-14","furigana":"せんそうの　つめあとのこる　すんだうみ"}
            ,
            {"id":"204","clue":"'Blow water and come to swim for giving birth.'","yomiku":"人になつく　ザトウクジラと　海泳ぐ","answer":"/images/pictures/204_p.png","read":"/sounds/en/204_en.mp3","yomu":"/sounds/jp/204_jp.mp3","flag":"/images/flags/183_TGA_50.png","area":"Oceania","subject":"Humpback Whales","country":"Tonga","daizai":"ザトウクジラ","kuni":"トンガ","id-area":"OC-15","furigana":"ひとになつく　ざとうくじらと　うみおよぐ"}
            ,
            {"id":"205","clue":"'Swim in the sea with the head out of the shell.'","yomiku":"温暖化　防止を願う　ウミガメと","answer":"/images/pictures/205_p.png","read":"/sounds/en/205_en.mp3","yomu":"/sounds/jp/205_jp.mp3","flag":"/images/flags/193_TUV_50.png","area":"Oceania","subject":"Sea Turtle","country":"Tuvalu","daizai":"ウミガメ","kuni":"ツバル","id-area":"OC-16","furigana":"おんだんか　ぼうしをねがう　うみがめと"}
            ,
            {"id":"206","clue":"'Dive into the sea and put a letter in the post.'","yomiku":"絵葉書よ　世界に届け　海中ポスト","answer":"/images/pictures/206_p.png","read":"/sounds/en/206_en.mp3","yomu":"/sounds/jp/206_jp.mp3","flag":"/images/flags/200_VAN_50.png","area":"Oceania","subject":"Underwater Post Office","country":"Vanuatu","daizai":"水中郵便局","kuni":"バヌアツ","id-area":"OC-17","furigana":"えはがきよ　せかいにとどけ　かいちゅうぽすと"}
            
            ]

  

    );
  });
  
 
  