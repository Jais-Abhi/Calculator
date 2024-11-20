let display = document.querySelector(".display");
let ans;
let value ="";
let perAns = "";
//Calculate using ketboard buttons
document.addEventListener("keypress",(event)=>{
    if((event.key >= 0)||(event.key == "+")||(event.key == "-")||(event.key == "*")||(event.key == "/")||(event.key == "%")||(event.key == ".")||(event.key == "Enter")){
        console.log(event.key);
        if((event.key == "Enter")){
            calc(value);
        }
        else{
            value = value+event.key;
            dis(value);
        }
        
    }
})
function dis(key,perValue){
      display.innerText = `${key}`
}
function calc(exp){
        let newExp = exp.replace(/(\d+)%(\d+)/g, (_, num1, num2) => `(${num1} / 100) * ${num2}`);
        ans = eval(newExp);
        display.innerText = `${ans}`
        display.style.fontSize = "3rem"
        console.log(ans);
        value = "";
}
//Now calculate using display buttons
let btns = document.querySelectorAll("button");
for(const btn of btns){
    btn.addEventListener("click",(e)=>{
        let targetBtn = e.target.innerText;
        if (e.target.classList[0] == "delete"){
            console.log(e.target.classList[0]);
               value = value.slice(0,-1);
               dis(value);
            }
        else if(("000123456789+-*/.%".includes(targetBtn))){
            console.log(targetBtn);
            value = value + targetBtn;
            dis(value);
        }
        else if(targetBtn === "="){
            calc(value);
        }
        else if(targetBtn === "AC"){
            display.innerText = "";
            value = "";
        }  
    })
    
}