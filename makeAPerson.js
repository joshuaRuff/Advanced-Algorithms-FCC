var Person = function(firstAndLast) {
    var array = firstAndLast.split(" ");
    this.getFirstName = function() {
      return array[0];
    };
   this.getLastName = function() {
     return array[1];
   };
   this.getFullName = function () {
     return array[0] + " " + array[1];
   };
  this.setFirstName = function(first) {
     array[0] = first;
  };
  this.setLastName = function(last) {
     array[1] = last; 
  };
  this.setFullName = function(firstAndLast) {
     firstAndLast = firstAndLast.split(" ");
    
    this.setFirstName(firstAndLast[0]);
    this.setLastName(firstAndLast[1]);     
  };
};
var bob = new Person('Bob Ross');
