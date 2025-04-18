let userscore=0;
let compscore=0;
const choices= document.querySelectorAll(".choice");
const msg=document.getElementById("msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#system-score")

const gencpmchoice=()=>{
 const options=["rock","paper","scissor"];
 const idx=Math.floor(Math.random()*3);
    return options[idx];
}
const showWinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You Win:)");
        msg.innerText="You won:)";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose :(");
        msg.innerText="you lose :("
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice= gencpmchoice();
    console.log("comp choose=",compchoice);
    if(userchoice===compchoice){
        console.log("game is draw :");
        msg.innerText="game is draw!!! Play again:"
        msg.style.backgroundColor="purple";
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper" ? false:true;
        }
        else if(userchoice==="paper"){
          userwin=compchoice==="scissor"? false:true;
        }
        else{
            userwin=compchoice==="rock" ? false:true;
        }
        showWinner(userwin);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
 const userchoice=choice.getAttribute("id");
 playgame(userchoice);
    });
});