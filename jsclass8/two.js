let users=[{id:1,name:"rg", gender:'male'},//using for loop
    
    {id:2,name:"sg", gender:'female'},
    {id:3,name:"pg", gender:'female'},
    ]//print no of male and female user
    let no_of_female_users=0;
    for(i=0; i<3;i++){
        if(users[i].gender==='female'){
            no_of_female_users++;
        }


    }console.log("no of female users", no_of_female_users)