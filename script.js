 let tableau = [0, 1, 2, 3, 4]
 
 const v = tableau.reduce(function(accumulateur, valeurCourante, index, array){
        let som = accumulateur+valeurCourante
        return tableau.indexOf(3)
        // return som
  });
  console.log(v)


//   #################### AvEC OBJOT ############################

let tableaux = [{x: 1}, {x:2}, {x:3}]
var valeurInitiale = 0;

let somme = tableaux.reduce((acc, val)=>
    acc+val.x, 0
)

console.log(somme)