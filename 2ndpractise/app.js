// class & Object
//let student={
  //  fullName:"Manish",
    //marks:98.6,
    //printmarks: function(){
      //  console.log("marks=",this.marks);// student.marks

    //},
//};
//let employee={
    //calctax(){
    //    console.log("the tax  rate is 10%");
  //  },
//};

// jab object aur prototype same name se aa jaye tho humesa Object ko prefare karte hai
//let karanarjun={
    //salary:50000,
    //calctax(){
    //    console.log("the tax rate is 20%")
  //  }
//};
//karanarjun__proto__=employee



//Class

//class Toyatocar{
  //  start(){
    //    console.log("start")
    //}
    //stop(){
      //  console.log("stop")
    //}
    //setBrand(brand){
      //  this.brand=brand; // jo this ke sath likha hai wo object ka property hai aur jo equalto ke baad likha hai wo variable hai jo setBrand main 


    //}
//}
  //let fortuner=new Toyatocar(); // this is used for creating object
//fortuner.setBrand("fortuner");
 //let lexus=new Toyatocar();
//lexus.setBrand("lexus");


//constructor
//constructor humesa pehle se hi run karta hai javascript
//class Toyatocar{
  //constructor(brand,mileage){
    //console.log("creating new object");
    //this.brand=brand
    //this.mileage=mileage
  //}
  //start(){
    //console.log("start")

  //}
  //stop(){
    //console.log("stop")
  //}
//}
//let fortuner=new Toyatocar("fortuner",10);//constructor alredy created
//console.log(fortuner)
//let lexus=new Toyatocar("lexus",20)
//console.log(lexus)

 //class person{
  //constructor(){
    //this.species="homo sapiens"
  //}
  //eat(){
    //console.log("eat")
  //}
  //sleep(){
    //console.log("sleep")
  //}
//}
//class engineer extends person{
  //work(){
   // console.log("solve problem ","build something")
 // }
//}
//class doctor extends person{
  //work(){
    //console.log("treatment")
  //}
//}
//let Manishobj=new engineer()

//class person{
  //constructor(){
    //console.log("enter parent constructor")
    //this.species="homo sapiens"
  //}
  //sleep(){
    //console.log("sleep")
  //}
//}
//class engineer extends person{
  //constructor(branch){
    //console.log("enter child constructor")
    //super(); //to invoke parent class constructor
    //this.branch=branch;
    //console.log("exit child constructor")
  //}
  //work(){
    //console.log("problem solver","build something")
  //}
//}
// let engobj=new engineer("chemical engineer")

//class person{  // if we want to print name
  //constructor(name){
    //this.species="homo sapiens"
    //this.name=name
  //}
  //sleep(){
    //console.log("sleep")
  //}
//}
//class  engineer extends person{
  //constructor(name){
    //super(name);// agar super empty rahega tho wo humesa print kuch nhi karega
//}
//work(){
  //super.sleep();
  //console.log("problem saver", "build something")
//}
//}
//let engobj=new engineer("Manish")


//exercise
//let  data="secret info"
//class user{
  //constructor(name,email){
    //this.name=name;
    //this.email=email
  //}
  //viewdata(){
   // console.log(" data=", data)
 // }
//}
//let stud1=new user("manish", "manishkyadav2296@gmail.com")
//let stud2=new user("ansh","anshkyadav2296@gmail.com")


let Data="secret info";
class user{
  constructor(name,email){
    this.name=name;
    this.email=email;

  }
  viewData(){
    console.log("data=",data)
  }
}
class Admin extends user{
  constructor(name,email){
    super(name,email);

  }
  editData(){
    Data="some new value"
  }
}
let Admin1=new Admin("admin","admin123.com")