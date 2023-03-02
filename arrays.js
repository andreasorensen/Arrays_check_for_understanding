var peopleILove = ["Parents", "Parnter", "Friends", "Family"];
var numbers = [1, 2, 3, 4, 5];
var boolean = [true, false, true, false];

// This will remove the last element in the array (0)
peopleILove.pop()
console.log(peopleILove);

// This will remove all elements except the one in index 4 position, in this case the #5
console.log(numbers.slice(4));

//This will remove the first element in the array.
boolean.shift()
console.log(boolean);

// This will put back the first element in the array that was removed with the method shift
boolean.unshift()
console.log(boolean);

// The index position of an element in an array describes it's position beginning at the number 0.
//For example: In the above code, I used the slice method to remove all the elements other than the one in the index #4 position, which in this case is 5.