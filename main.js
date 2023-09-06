
const change = document.querySelector("#change");
let x=0;
setInterval(()=>{
    x++
   if(x==1){
    change.style.color="red"
   } 
   else if(x==2){
    change.style.color="blue"
   }
   else if(x==3){
    change.style.color="green"
   }
   else if(x==4){
    change.style.color="pink"
    x=0
   }
  
 
   


},1000)