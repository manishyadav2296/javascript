//using if-else statement verifying object is empty or not
let account={
    acc_id:101,
    acc_name:"rahul"
}
let user={}
if (Object.keys(account).length>0) {
    console.log("not empty object")
}
else{
    console.log("empty object")
}