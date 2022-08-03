

var amis = [
    { 
        "nom": "Quentin", "livres": ["City Hall", "Harry Potter"]
    },
    { 
        "nom": "Alice", "livres": ["L'Avare", "Les Fleurs du Mal"]
    }
  ]
// #######################################################
const livresList1 = amis.reduce(function(acc, val){
    return [...acc, ...val.livres];
}, [])

console.log(livresList1)


const livresList2 = amis.reduce((acc, val)=>
    [...acc, ...val.livres]
, [])

console.log(livresList2)