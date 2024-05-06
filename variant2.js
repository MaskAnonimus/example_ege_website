let ans1;
let ans2;
let ans3;
let ans4;
let ans5;
let ans6;
let ans7;
let ans8;
let ans9;
let ans10;
let shres1 = document.getElementById("shres1");
let count1 = document.getElementById("count1");
let wrong1 = document.getElementById("wrong1");
let score = 0;
let wrong11 = "";
let length1 = 0;
count1.onclick = function(){
    ans1 = ""+document.getElementById("ans1").value;
    if(ans1=="120"){
        score++;
    }
    else{
        wrong11 += "1, ";
    }
    ans2 = ""+document.getElementById("ans2").value;
    if(ans2=="62820"){
        score++;
    }
    else{
        wrong11 += "2, ";
    }
    ans3 = ""+document.getElementById("ans3").value;
    if(ans3=="ГБВА"){
        score++;
    }
    else{
        wrong11 += "3, ";
    }
    ans4 = ""+document.getElementById("ans4").value;
    if(ans4=="БВАГ"){
        score++;
    }
    else{
        wrong11 += "4, ";
    }
    ans5 = ""+document.getElementById("ans5").value;
    if(ans5=="160"){
        score++;
    }
    else{
        wrong11 += "5, ";
    }
    ans6 = ""+document.getElementById("ans6").value;
    if(ans6=="183"){
        score++;
    }
    else{
        wrong11 += "6, ";
    }
    ans7 = ""+document.getElementById("ans7").value;
    if(ans7=="xzy"){
        score++;
    }
    else{
        wrong11 += "7, ";
    }
    ans8 = ""+document.getElementById("ans8").value;
    if(ans8=="zyxw"){
        score++;
    }
    else{
        wrong11 += "8, ";
    }
    ans9 = ""+document.getElementById("ans9").value;
    if(ans9=="118467"){
        score++;
    }
    else{
        wrong11 += "9, ";
    }
    ans10 = ""+document.getElementById("ans10").value;
    if(ans10=="23 и 1306"){
        score++;
    }
    else{
        wrong11 += "10, ";
        length1 += 1;
    }
    length1 += ((10-score)*3)-2;
    wrong1.textContent = wrong11.slice(0,length1);
    shres1.textContent = score;
}
