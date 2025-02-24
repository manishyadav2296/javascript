//let btn1=document.querySelector("#btn1")
//btn1.onclick=()=>{
  //  console.log("btn1 was clicked")
    //let a=25;
    //a++;
    //console.log(a);
//}
//let btn1=document.querySelector("#btn1")
/*btn1.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX,evt.clientY)
}*/


//let div=document.querySelector("div")
/*div.onmouseover=(evt)=>{
   console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX,evt.clientY)
   

}*/
//let btn1=document.querySelector("#btn1")
//btn1.addEventListener("click",()=>{
  //  console.log("button was clicked -handler1")

//});

//btn1.addEventListener("click",()=>{
  //  console.log("button was clicked -handler2")
//});

//const handler3=()=>{
  //  console.log("button was clicked-handler3")

//}
//btn1.addEventListener("click handler3");



//btn1.addEventListener("click",()=>{
  //  console.log("button was clicked-handler4")
//});
//btn1.removeEventListener("click,handler3")



let modeBtn=document.querySelector("#mode");
let currmode="light"//
modeBtn.addEventListener("click",() =>{
    if(currmode==="light"){
        currmode="dark;"
        document.querySelector("body").style.backgroundColor="black";
}else{
    currmode="light"
     document.querySelector("body").style.backgroundColor="red";
}
console.log(currmode)

})