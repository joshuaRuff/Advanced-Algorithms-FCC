function pairwise(arr, arg) {
//create a new array that checks for duplicates
  var holderArray = []; 
//loop through array testing the values
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
//check if values added === 20 and they are duplicates
      if(arr[i] + arr[j] === arg && holderArray.indexOf(i) == -1 && holderArray.indexOf(j) == -1 ) {
//push them to the holder array
        holderArray.push(i,j);        
      }
    }
  } 
//add together and return the holderArray
  return holderArray.reduce(function(a, b) { return a + b; }, 0);
}

pairwise([1,4,2,3,0,5], 7);
