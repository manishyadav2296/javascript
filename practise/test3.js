// for-each function
//let arr=[1,2,3,4,5];
//arr.forEach(function squareVal(val){
  //  console.log(val*val)
//});



//Map loop

//let num=[1,4,3,2,5];
//num.map((val)=>{
  //  console.log(val*val);

//});



// filter method


//let num=[5,2,8,4,10,60,86,42,43];
//let evennum=num.filter((val)=>{
  //  return val % 2!==0;

//})
//console.log(evennum);


//reduce method


//let num=[1,2,3,4,5];
//constsum=num.reduce((res,curr)=>{
  //  return res+curr;
//});
//console.log(constsum);

// if we want to find largest number through reduce method

//let num=[4,8,99,122,33];
//largestnum=num.reduce((prev,curr)=>{
  //  return prev>curr  ? prev:curr;

//});
//console.log(largestnum);



//if we want to find smallest number through reduce method
//let num=[1,2,3,4,5];
//allestnum=num.reduce((prev,curr)=>{
//    return prev<curr ? prev:curr;
//});
//console.log(smallestnum);

//lets practise print all number greater than 90 using filter method
//let num=[99,45,97,91,69,75,38];
 //newnum=num.filter((val)=>{
//return val>90;
//});
//console.log(newnum);

// calculate number using reduce method
// calculate sum from 1 to n
 let n=prompt("enter the num:");

 let arr=[];
 for(let i=1; i<=n; i++){
arr[i-1]=1;
 }
 sumnum=arr.reduce((res,curr)=>{
    return res+curr;
 });
 console.log(sumnum);
