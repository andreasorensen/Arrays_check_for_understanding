var peopleILove = ["Parents", "Parnter", "Friends", "Family"];
var numbers = [1, 2, 3, 4, 5];
var boolean = [true, false, true, false];

// This will remove the last element in the array (0)
peopleILove.pop()
console.log(peopleILove);

// This will remove the element in the number 4 position
console.log(numbers.slice(4));

//This will remove the first element in the array.
boolean.shift()
console.log(boolean);

// This will put back the first element in the array that was removed with the method shift
boolean.unshift()
console.log(boolean);
