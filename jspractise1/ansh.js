//for -in loop can used for object and array
let student={
    name:"Ansh",
    age:18,
    cgpa:8.2,
    isPass: true
};
for(let key in student){
    console.log("key=", key, "value=", student[key])
}