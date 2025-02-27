//function hello(){
 //   console.log("hello")
//}
//setTimeout(hello,6000)// timeout 2sec=2ms

//setTimeout(() => {
  //  console.log("Manish")
//}, 6000);// we can also write like this

//console.log("one")//
//console.log("two")
//setTimeout(() => {
  // console.log("Manish") 
//}, 8000);   // yaha par three aur four jo hai wo wait nhi karogi 8sec tak ki pehle wo 8sec complete karlo tab print karenge
//console.log("three")
//console.log("four") // isse hum asynchronous programin bhi kahte hai


//nesting means inside one function there will be another function

//let age=19
//if(age>=18){
  //  if(age>=60){  // this is nested function written 
    //console.log("adult") //
    //}else{    //
     //   console.log("middle")
    //}// This is nested function

//}else{
  //  console.log("child")
//}


//function getData(Dataid){
  //  setTimeout(() => {
    //    console.log("data",Dataid)
        
    //}, 2000);

//}



//promise


//let promise=new Promise((resolve,reject) =>{
//console.log("I am promise")
//resolve(123)
//});

// promise ek object hoti hai jiske 3 state hoti 
//1) reject
//2)pending
//3) resolve

//function getData(dataid, getNextData){
  //return new Promise((resolve,reject) => {
    //setTimeout(() => {
      //console.log("data",dataid);
      //resolve("success");
      //if(getNextData) {
        //getNextData();
      //}
      
    //}, 5000);
  //});
//}

 //const getPromise=() => {
   // return new Promise((resolve,reject) => {
    //console.log(" I am promise")
    //resolve("success")
   //});
 //};
 //let promise=getPromise();
 //promise.then(()=>{
  //console.log("promise is kept")
 //});

 //const getPromise=()=>{
  //return new Promise((resolve,reject) =>{
    //console.log("i am promise")
    //reject("error")

  //});
 //};
 //let promise =getPromise();
 //promise.then((res) => {
  //console.log("promise is kept", res)
 //});
 //promise.catch((err)=>{
  //console.log("rejected",err)
 //});

 //function asyncFunc1() {
  ///return new Promise((resolve,reject) =>{
   //setTimeout(() => {
    //console.log("some data1")
    //resolve("success")
   //}, 4000); 
  //});
 //};
 //function asyncFunc2() {
  //return new Promise((resolve,reject) =>{
   //setTimeout(() => {
    //console.log("some data2")
    //resolve("success")
   //}, 6000); 
 // });
 //};
 //console.log("feticing data1......");
 
//asyncFunc1().then((res)=>{
  
  //console.log("feticing data2....");
  //asyncFunc2().then((res)=>{
   
 //})
//});

 //function getData(dataid,){
  //return new Promise((resolve,reject) => {
    //setTimeout(() => {
      //console.log("data",dataid);
      //resolve("success");
     
      
    //}, 5000);
  //});
//}


//Promise chain
//getData(1)
//.then((res) => {
 // return getData(3);
//})
//.then((res)  => {
  //console.log(res)
//})


//await async

//function api(){
  //return new Promise((resolve,reject)  =>{
    //setTimeout(() => {
      //console.log("weather data")
      //resolve(200)
      
    //}, 2000);
  //})
//}
//async function getweatherdata(){
  //await api();  //hum yaha await likhenge 
  //await api();//
//}

function getData(dataid){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("data",dataid);
      resolve("success");  
    }, 2000);
  });
}
async function getalldata(){
  console.log("fetching data1.....")
  await getData(1);
  console.log("fetching data2...")
  await getData(2);
  console.log("fetching data3...")
  await getData(3);
  console.log("fetching data4...")
  await getData(4);
  console.log("fetching data5...")
  await getData(5);
}