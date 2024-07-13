//Q.no 41... Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians:string[] = ["sana" , "uzma" , "atiqa"] ;
function func(magician:string[]){
    magician .forEach(magician => {
        console.log(magician);
        
    });
}
console.log(func(magicians));
