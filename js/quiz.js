const quiz = [
    {
        question:"人間の心臓は一生で何回動くでしょうか？",
        answers:["約1000万回","約1億回","約20億回"],
        correct:"約20億回",
        explan:"人の心臓は一分で60回から100回ほど動きます。これは一生にすると約20億回となります。ちなみに、小さな動物ほど心臓が速く動き、ゾウのような大きな動物の心臓はゆっくりと動きます。"
    },{
        question:"大人の体には何本の骨があるでしょうか？",
        answers:["約30個","約200個","約1000個"],
        correct:"約200個",
        explan:"赤ちゃんのときには約300個の骨があります。しかし、大きくなるにつれて、骨がくっついたりして数が減っていきます。"
    },{
        question:"一日のうちで身長が一番高くなるのはどの時間でしょうか？",
        answers:["朝","昼","夜"],
        correct:"朝",
        explan:"背骨をささえる部位が、寝ているときに水分を吸ってふくらむことで、朝のほうが夜より身長が高くなります。"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// 定数＄choiceを定義する。.choiceのテキストを取得
const $choice = document.getElementsByClassName("choice");

// 毎回使うので定数として上に記載。
const choiceLength = $choice.length;


// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    // #js-questionのテキストを取得して、定数questionに書き換える
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let choiceIndex = 0; 
    while(choiceIndex < choiceLength){
        $choice[choiceIndex].textContent = quiz[quizIndex].answers[choiceIndex];
        choiceIndex++;
    }
}

setupQuiz();

//ボタンクリックで正誤判定
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){ // targetが指すのはクリックされた部分
        window.alert("正解！")
        score++;
    }else{
        window.alert("不正解！")
    }
    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert("終了！あなたの正解数は"+ score +"/"+ quizLength +"です！");
    }
}

let handlerIndex = 0;
// const choiceLength = $choice.Length;
while (handlerIndex < choiceLength) {
    $choice[handlerIndex].addEventListener("click",(e) => { //eはイベントオブジェクト
        clickHandler(e);
    });
    handlerIndex++;
}
