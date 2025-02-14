let users=[{id:1,name:"rg", gender:'male'},//using for - of loop
          {id:2,name:"sg", gender:'female'},
          {id:3,name:"pg", gender:'female'},
    ]//print no of male and female user
    let no_of_female_users=0;
    for(user of users){
        if(user.gender==='female'){
            
            no_of_female_users++;
        }
    } console.log("no of female users", no_of_female_users)