let users=[{id:1,name:"rg", gender:'male'},
{id:2,name:"sg", gender:'female'},
{id:3,name:"pg", gender:'female'},
]//print no of male and female user
let no_of_male_users=0;
for(user of users){
    if(user.gender=== 'male'){
        no_of_male_users++;
    }

}
console.log("no of male users", no_of_male_users)

