function paper1(){
    document.getElementById("text").innerHTML="PAPER";
    var list=["ROCK","PAPER","SCISSOR"]
        var com=document.getElementById('comput');
        com.innerHTML=list[Math.floor(Math.random() * list.length)];
        let u=document.getElementById('text').innerHTML;
        let c=document.getElementById('comput').innerHTML;
        if(u == "PAPER" && c == "SCISSOR"){
            document.getElementById('result1').innerHTML="USER LOST";
            document.getElementById('result-color').style.backgroundColor="red";

        }else if(u == "PAPER" && c == "ROCK"){
            document.getElementById('result1').innerHTML="USER WON";
            document.getElementById('result-color').style.backgroundColor="limegreen";

        }else if(u == "PAPER" && c == "PAPER"){
            document.getElementById('result1').innerHTML="TIE ";
            document.getElementById('result-color').style.backgroundColor="white";

        }else{
            document.getElementById('result1').innerHTML="USER LOST ";

        }
}
function scissor(){
    document.getElementById("text").innerHTML="SCISSOR";
    var list=["ROCK","PAPER","SCISSOR"]
    var com=document.getElementById('comput');
    com.innerHTML=list[Math.floor(Math.random() * list.length)];
    let u=document.getElementById('text').innerHTML;
    let c=document.getElementById('comput').innerHTML;
    if(u == "SCISSOR" && c == "PAPER"){
        document.getElementById('result1').innerHTML="USER WON";
        document.getElementById('result-color').style.backgroundColor="limegreen";

    }else if(u == "SCISSOR" && c == "ROCK"){
        document.getElementById('result1').innerHTML="USER LOST";
        document.getElementById('result-color').style.backgroundColor="red";

    }else if(u == "SCISSOR" && c == "SCISSOR"){
        document.getElementById('result1').innerHTML="TIE ";
        document.getElementById('result-color').style.backgroundColor="white";
    }else{
        document.getElementById('result1').innerHTML="USER LOST ";
        document.getElementById('result-color').style.backgroundColor="red";

    }
}
function rock(){
    document.getElementById("text").innerHTML="ROCK";
    var list=["ROCK","PAPER","SCISSOR"]
    var com=document.getElementById('comput');
    com.innerHTML=list[Math.floor(Math.random() * list.length)];
    let u=document.getElementById('text').innerHTML;
    let c=document.getElementById('comput').innerHTML;
    if(u == "ROCK" && c == "SCISSOR"){
        document.getElementById('result1').innerHTML="USER WON";
        document.getElementById('result-color').style.backgroundColor="limegreen";

    }else if(u == "ROCK" && c == "PAPER"){
        document.getElementById('result1').innerHTML="USER LOST";
        document.getElementById('result-color').style.backgroundColor="red";

    }else if(u == "ROCK" && c == "ROCK"){
        document.getElementById('result1').innerHTML="TIE ";
        document.getElementById('result-color').style.backgroundColor="white";

    }else{
        document.getElementById('result1').innerHTML="USER LOST ";
        document.getElementById('result-color').style.backgroundColor="red";

    }
}
    
    