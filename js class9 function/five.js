function cal_Age(birth_Year){
    let current_Year= new Date().getFullYear()
    return current_Year-birth_Year;

}
let r_age = cal_Age(1973)
let s_age =cal_Age(1953)
let p_age =cal_Age(1983)
console.log(r_age);
console.log(s_age);
console.log(p_age)