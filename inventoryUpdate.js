/*
*Compare and update inventory stored in a 2d array against 
*a second 2d array of a fresh delivery. 
*Update current inventory item quantity, 
*and if an item cannot be found, 
*add the new item and quantity 
*into the inventory array in alphabetical order.
*/

function inventory(arr1, arr2) {
    arr2.forEach(function(incomingItem){
        var foundAndUpdated = false;
        arr1.forEach(function(existingItem){
            if (incomingItem[1]===existingItem[1]){
                //console.log('incoming qty',incomingItem[0]);
                //console.log('existing qty',existingItem[0]);
                existingItem[0]+=incomingItem[0];
                foundAndUpdated = true;
                //console.log('New qty',existingItem[0]);
            }
        });
        if (!foundAndUpdated) {
        arr1.push(incomingItem);
        }

    });

    arr1.sort(function(a,b){
        if (a[1] > b[1]) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
    });
    
    
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);