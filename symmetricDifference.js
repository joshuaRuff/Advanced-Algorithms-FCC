function sym(args) {
  //assemble array from all args
  var comboArray = [].slice.call(arguments);
  
  //create the callback function for reduce
  function reducifier(arr1, arr2) {
    var newArray = [];
    arr1.forEach(function(i){
      if(arr2.indexOf(i)<0 && newArray.indexOf(i)) {
        newArray.push(i);
      }
    });
    arr2.forEach(function(j){
     if(arr1.indexOf(j)<0 && newArray.indexOf(j)<0) {
       newArray.push(j);
     }
    });
    return newArray;
  }
  
  //call reduce on my comboArray
  return comboArray.reduce(reducifier);
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
