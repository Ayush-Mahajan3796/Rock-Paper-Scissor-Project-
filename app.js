let uscore=0;
let cscore=0;
const choices=document.querySelectorAll(".c1");
const msg=document.querySelector("#msg");
const u=document.querySelector("#user");
const c=document.querySelector("#comp");
const compchoice=()=>{
    const options=["rock","scissor","paper"];
    const randid=Math.floor(Math.random()*3);
    return options[randid];
}
 const show=(userwin,userchoice,compchoose)=>{
    if(userwin){
        uscore++;
        u.innerText=uscore;
      
        msg.innerText=`You Win! your ${userchoice} beats ${compchoose}`;
        msg.style.backgroundColor="green";
    }else{
        cscore++;
        c.innerText=cscore;
       
         msg.innerText=`You Lose. ${compchoose} beats your ${userchoice} `;
          msg.style.backgroundColor="red";
    }
 }
 const playgame=(userchoice)=>{
      console.log(userchoice);
      const compchoose=compchoice();
      console.log(compchoose);
      if(userchoice==compchoose){
        console.log("Game Was Draw..")
         msg.innerText="Game Was Draw. Play Again.";
          msg.style.backgroundColor="blue";
      }else{
        let userwin=true;
        if(userchoice=="rock"){
          userwin=compchoose==="paper"?false:true;  
        }else if(userchoice=="paper"){
            userwin=compchoose==="scissor"?false:true;
        }else{
            userwin=compchoose==="rock"?false:true;
        }
        show(userwin,userchoice,compchoose);
      }
 };

choices.forEach((c1)=>{
   
    c1.addEventListener("click",()=>{
       
        const uid=c1.getAttribute("id");
        
        playgame(uid);
    });
});