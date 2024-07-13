// Q.no 18....Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placeToVisit:string[]=["paris" , "switzerland" , "new york" , "turkey" , "istanbol"]
console.log("original order" ,placeToVisit);

console.log("alphabetical oreder" ,placeToVisit.slice().sort());

console.log("original order",placeToVisit);

console.log("reverse order", placeToVisit.slice().sort().reverse());

console.log("original order" , placeToVisit);

console.log("reverse order changed");
placeToVisit.reverse()
console.log(placeToVisit);

console.log("orginal order" , placeToVisit.sort());
console.log(placeToVisit);

console.log("reverse alphabetical order changed" , placeToVisit.sort().reverse());
console.log(placeToVisit);











