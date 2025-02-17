// practise question no1 )print all number fron 0 to 100

//for (let index = 0; index<=100; index++) {
 //console.log("index=",index)   
    
//}
//print even number from 0 t0 100
//for(let num=0;num<+100; num++){
 //   if (num%2===0){// condition for even number
     //   console.log("num=",num)
   // }
//}
//print even number from 0to 100
//for(let i=0;i<=100; i++){
  //  if(i%2!==0){
    //    console.log("i=",i)
    //}
//}





//practice question 2
let  gameNUm=23;
let userNum=prompt("guess the gamenumber:");
while(userNum!=gameNUm){
    userNum=prompt("you entered the wrong number .Guess again:")

}
console.log("congratulation you guessed the right number");
