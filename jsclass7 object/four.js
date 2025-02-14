let employees=[{eid:101,ename:"rg"},
{eid:102,ename:"sg"},
{eid:103,ename:"pg"},
]
//console.log(employees[0].ename)
//console.log(employees[1].ename)
//console.log(employees[2].ename)
//using for-of loop
for(let emp of employees){
  //  console.log(emp.ename);
  console.log("emp id:", emp.eid,"&& name:",emp.ename)
}
