"use strict";
//Q.NO ...31.. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let username = ["sana", "uzma", "atiqa"];
if (username.length == 0) {
    console.log("We need to find some users");
}
else {
    username = [];
    console.log("all usernames have been removed" + ` ` + username.length);
}
