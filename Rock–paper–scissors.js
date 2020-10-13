let scissors = "https://callplay.in.th/manual_info/2019/07/vj_gift_random_v1/th/images/02.png"
let rock = "https://callplay.in.th/manual_info/2019/07/vj_gift_random_v1/th/images/01.png"
let paper = "https://callplay.in.th/manual_info/2019/07/vj_gift_random_v1/th/images/03.png"
let outputMe = ""
let outputCom = ""

function onBtnScissorsShowClick() {

    $("#imgMe").attr("src", scissors);
    outputMe = "บักแหลม";
    outputCom = comAI();
    console.log(outputMe, outputCom);
    meAndCom();
}
function onBtnHammerShowClick() {
    $("#imgMe").attr("src", rock);
    outputMe = "ค้อน";
    outputCom = comAI();
    console.log(outputMe, outputCom);
    meAndCom();

}

function onBtnPaperShowClick() {

    $("#imgMe").attr("src", paper);
    outputMe = "กระดาษ";
    outputCom = comAI();
    console.log(outputMe, outputCom);
    meAndCom();
}

function comAI() {

    var imgRandom = Math.floor(Math.random() * 3);
    if (imgRandom == 0) {
        $("#imgCom").attr("src", scissors)
        return "บักแหลม";
    } else if (imgRandom == 1) {
        $("#imgCom").attr("src", rock)
        return "ค้อน";
    } else {
        $("#imgCom").attr("src", paper)
        return "กระดาษ";
    }
}

function meAndCom() {
    // var result = false;
    if (outputMe == outputCom) {
        console.log("เสมอ");
    } else if (outputMe == "บักแหลม" && outputCom == "ค้อน") {
        scoreCom++;
    } else if (outputMe == "บักแหลม" && outputCom == "กระดาษ") {
        scoreMe++;
    } else if (outputMe == "ค้อน" && outputCom == "บักแหลม") {
        scoreMe++;
    } else if (outputMe == "ค้อน" && outputCom == "กระดาษ") {
        scoreCom++;
    } else if (outputMe == "กระดาษ" && outputCom == "บักแหลม") {
        scoreCom++;
    } else  if(outputMe == "กระดาษ" && outputCom == "ค้อน"){
        scoreMe++;
    }
var result = "";
    $("#scoreMe").html(scoreMe);
    $("#scoreCom").html(scoreCom);
    if (scoreMe == 2){
        scoreMe = 0;
        scoreCom = 0;
        result = "คุณชนะ";
    }else if (scoreCom == 2){
        scoreCom = 0;
        scoreMe = 0;
        result = "คุณแพ้";
    }
    $("#resultMeAndCom").html(result);
}

var scoreMe = 0 ; 
var scoreCom = 0; 
