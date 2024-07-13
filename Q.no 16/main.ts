// Q.no 16...More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guest:string[] = ["sana" , "aina" , "atiqa" , "javeria"];
console.log(guest + " " + "you  found a bigger dinner table");

guest.unshift("haya");
guest.splice(2,0 , "hina");
guest.push("maheen");
guest.map((item=>console.log(`Dear ${item}, i found a bigger dinner table so i am invited more peoples`)
))
