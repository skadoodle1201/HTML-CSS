let Max = parseInt(prompt("Enter your the maximum no"));
while(!Max){
    Max= parseInt(prompt("Enter a valid number : "));
}
const targetNum = Math.floor(Math.random()*Max)+ 1;
console.log(targetNum);
let guess = parseInt(prompt("Enter your first guess :"));
let attempts = 1;
while(parseInt(guess)  !== targetNum)
{   
    if(guess === 'q') break;
    attempts++;
    if(guess>targetNum){
        guess = prompt("Too high! enter new guess:")
    }
    else{
        guess = prompt("Too low! enter new guess:")
    }
    
} 
console.log(`You Got it it took you ${attempts} guesses`);
