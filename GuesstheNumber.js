


const prompt = require("prompt-sync")({sigint:true});

const GuesstheNumber=(rand)=>{

    user_guess = 0;
    var guess_counter = 0;

    while(true){

        user_guess = Number.parseInt(prompt(`Make a guess : `));

        if(user_guess != rand){
            if(user_guess > rand){
                console.log(`Number is less than ${user_guess}`);
            }else if(user_guess < rand){
                console.log(`Number is greater than ${user_guess}`);
            }
            guess_counter +=1;
        }
        else{
            console.log();
            console.log("Congratulations !!! You have correctly guessed the correct number !!!");
            console.log(`You guessed ${guess_counter} times`);
            break;
        }


    }

}

console.log("Welcome to the Guessing number game !!!!")
const rand = Math.round(Math.random()*100);

GuesstheNumber(rand);

