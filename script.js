 let tableau = [0, 1, 2, 3, 4]
 
 const v = tableau.reduce(function(accumulateur, valeurCourante, index, array){
        let som = accumulateur+valeurCourante
        return tableau.indexOf(3)
        // return som
  });

  console.log(v)