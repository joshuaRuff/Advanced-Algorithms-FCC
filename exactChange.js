//Data array showing values of potential cash in drawer
var denominations = [
  {name: 'ONE HUNDRED', value: 100.00},
  {name: 'TWENTY', value: 20.00},
  {name: 'TEN', value: 10.00},
  {name: 'FIVE', value: 5.00},
  {name: 'ONE', value: 1.00},
  {name: 'QUARTER', value: 0.25},
  {name: 'DIME', value: 0.10},
  {name: 'NICKLE', value: 0.05},
  {name: 'PENNY', value: 0.01}  
];
function checkCashRegister(price, cash, cid) {
  //determine the change
  var change = cash - price;
  //determine how much money we have in our drawer
  var totalCid = cid.reduce(function(acc, next) {
    return acc + next[1];
  }, 0.0);
  //If we don't have enough to give change
  if(totalCid < change) {
    return 'Insufficient Funds';
  }
  //If we are out of money in the drawer
  else if(totalCid === change) {
    return 'Closed';
  }
  //reverse the user inputed array to match our denominations array
  cid = cid.reverse();
  
  //Create function that determines change to give back
  var result = denominations.reduce(function(acc, next, index) {
    if(change >= next.value) {
      var currentValue = 0.0;
      while(change >= next.value && cid[index][1] >= next.value) {
       currentValue += next.value;
       change -= next.value;
       change = Math.round(change * 100) / 100;
        cid[index][1] -= next.value;
      }
      acc.push([next.name, currentValue]);
      return acc;
    } else {
      return acc;
    }
  }, []);
  //Make sure we have the right money value to give back even change
  return result.length > 0 && change === 0 ? result : 'Insufficient Funds';
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
