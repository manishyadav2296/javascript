//let heroes=["IronMan","SuperMan","Thor","Hulk","ShaktiMan"]
//for(let idx=0;idx<heroes.length;idx++){
  //  console.log(heroes[idx])
//}


//using for-of loops
//let heroes=["IronMan","SuperMan","Thor","Hulk","ShaktiMan"]
//for(let hero of heroes){
  //  console.log(hero)
//}

//cal average marks of class
//let marks=[85,97,44,37,76,60];
//let sum=0;
//using for of loop
//for(let val of marks){
//sum=sum+val;
//}
//let avg= sum/marks.length;
//console.log(`avg marks of class =${avg}`);

let items=[250,645,300,900,50];
for(let i=0; i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;
}
console.log(items);