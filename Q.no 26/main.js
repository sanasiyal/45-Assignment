"use strict";
//Q .no 26... Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let aliensColor = "green";
if (aliensColor == "green") {
    console.log("the player just earned 5 points for shooting the alien");
}
else {
    console.log("you just earned 10 points");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
aliensColor = "yellow";
if (aliensColor !== "green") {
    console.log("the player just earned 10 points.");
}
else {
    "you just earned 10 points";
}
