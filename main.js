//VARIABLES/FUNCTIONS
var congratsMessage = "Congratulations! You won the game. Please play again to see other outcomes.";

var losingMessage = "Too bad...better luck next time.";

var notOptionMessage = function (){
alert("That's not an option. You lose!");
};

//BEGININNG OF GAME
var name = prompt("What is your name?");
console.log(name);
if (name !== 'null') {
    confirm("Thanks " + name + "!" + " Lets play the game!");
} else {
    prompt("You did not enter your name. Please enter your name.");
}

//AGE QUESTION
var appropriateAge = prompt("What's your age?");
if (appropriateAge > 17) {
  alert("You're old enough! Play on");
}
else {
  alert ("You're too young to play!");
}

//CHARACTER CHOICE QUESTION

var answer = prompt(
    "What character do you want to use for the fight? Each scenario is different based on the character you choose. 1. Arnold 2. Sylvester 3. Bruce");

console.log("Answer to Q1");

//ARNOLD CHOICE
if (answer === '1' || answer === 'Arnold' || answer === '1. Arnold' || answer === 'arnold') {
  answer = prompt("You chose Arnold! Decide what move to make: 1. Punch 2. Bodyslam 3. Bitchslap");
  console.log("Answer to Q2");
    if (answer === '1' || answer === 'Punch' || answer === '1. Punch') {
        answer = prompt("Nice punch! But the T-1000 dodged it. What's your next move? 1. Shoot 2. Run 3. Shake hands");
        console.log("Answer to Q3");
        if (answer === '1' || answer === 'Shoot' || answer === '1. Shoot') {
            alert ("Nice shot! But the T-1000 absorbed the bullet. He killed you. GAME OVER! ");
        }
        else if (answer === '2' || answer === 'Run' || answer === '2. Run') {
            alert ("Oh no! You couldn't outrun the T-1000. GAME OVER! ");
        }
        else if (answer === '3' || answer === 'Shake hands' || answer === "3. Shake hands") {
            alert ("Wow! The T-1000 was willing to make a compromise. He accepted the truce. " + congratsMessage);
        }
    }
    else if (answer === '2' || answer === 'Bodyslam' || answer === '2. Bodyslam') {
        answer = prompt("Nice bodyslam! But the T-1000 dodged it. What's your next move? 1. Shoot 2. Run 3. Shake hands ");
        if (answer === '1' || answer === 'Shoot' || answer === '1. Shoot') {
            alert ("Nice shot! But the T-1000 absorbed the bullet. He killed you. GAME OVER! ");
        }
        else if (answer === '2' || answer === 'Run' || answer === '2. Run') {
            alert ("Oh no! You couldn't outrun the T-1000. GAME OVER! ");
        }
        else if (answer === '3' || answer === 'Shake hands' || answer === "3. Shake hands") {
            alert ("Wow! The T-1000 was willing to make a compromise. He accepted the truce. YOU WON! ");
        }
    }
    else if (answer === '3' || answer === 'Bitchslap' || answer === '3. Bitchslap') {
        answer = prompt("Nice bitchslap! But the T-1000 dodged it. What's your next move? 1. Shoot 2. Run 3. Shake hands ");
        if (answer === '1' || answer === 'Shoot' || answer === '1. Shoot') {
            alert ("Nice shot! But the T-1000 absorbed the bullet. He killed you. GAME OVER! ");
        }
        else if (answer === '2' || answer === 'Run' || answer === '2. Run') {
            alert ("Oh no! You couldn't outrun the T-1000. GAME OVER! ");
        }
        else if (answer === '3' || answer === 'Shake hands' || answer === "3. Shake hands") {
            alert ("Wow! The T-1000 was willing to make a compromise. He accepted the truce. YOU WON! ");
        }
    }
}



//SYLVESTER CHOICE
else if (answer === '2' || answer === 'Sylvester' || answer === '2. Sylvester' || answer === 'sylvester') {
  answer = prompt("You chose Sylvester! You're up against the incredible Apollo Creed in the finals of the World Championship. He has gotten a few hits on you but you're still in it to win it. Decide what move to make next: 1. Hook 2. Jab 3. Straight punch");
  console.log("Answer to Q2");
    if (answer === '1' || answer === 'Hook' || answer === '1. Hook') {
      answer = prompt("Nice Hook! But wait, Apollo counter punched you. You're about to be KO but you have one last move left. What do you do? 1. Uppercut 2. Point away 3. Cartwhell ");
        if (answer === '1' || answer === "Uppercut" || answer === "1. Uppercut") {
          alert ("Nice try, but Apollo dodged your uppercut and walloped you with a dempsey roll punch. You KO'ed. " + losingMessage);
        }
        else if (answer === '2' || answer === "Point away" || answer === "1. Point away") {alert ("Omg! You distracted Apollo by pointing at his shoes. You then had a chance to uppercut and KO him. " + congratsMessage);
      }
        else if (answer === '3' || answer === "Cartwhell" || answer === "3. Cartwhell") {alert ("Suprisingly, the cartwheel did not work. Apollo KO'ed you.  " + losingMessage);
      }
    }
    else if (answer === '2' || answer === 'Jab' || answer === '2. Jab') {
      answer = prompt("Nice jab! You hit Apollo pretty hard but you need to do one last finishing move. What's your next move? 1. Uppercut 2. Jab 3. Hook ");
      if (answer === '1' || answer === "Uppercut" || answer === "1. Uppercut") {
        alert ("Nice try, but Apollo dodged your uppercut and walloped you with a dempsey roll punch. You KO'ed. " + losingMessage);
      }
      else if (answer === '2' || answer === "Jab" || answer === "1. Jab") {alert ("You got him! Apollo looks like he's ok, but he starts wobbling around and falls to the ground. It's a KO. " + congratsMessage);
    }
      else if (answer === '3' || answer === "Hook" || answer === "3. Hook") {alert ("Awesome! You hooked Apollo in the jaw and he was instantly down. But wait, he came back with a dempsey roll punch in your face. " + losingMessage);
    }
    }
    else if (answer === '3' || answer === 'Straight punch' || answer === '3. Straight Punch') {
      answer = prompt("Ouch! Apollo countered your straight punch with a jab. This caused some severe pain to where you could die if he hits you hard enough. This is a life or death decision. What's your next move? 1. Forfeit 2. Counter moves 3. Dance ");
      if (answer === '1' || answer === "Forfeit" || answer === "3. Forfeit") {
        alert ("Not a bad choice, but it pissed Apollo off so much that he won on a forfeit, that he punched you anyways in the gut and you died. " + losingMessage);
      }
      else if (answer === '2' || answer === "Counter moves" || answer === "3. Counter moves") {
        alert ("This did not work. You were in too much pain from Apollo's previous hit. He punched you in the nose and you sustained permanent brain damage and died. " + losingMessage);
      }
      else if (answer === '3' || answer === "Dance" || answer === "3. Dance") {
        alert ("Say what!? This worked. Apollo was in utter disbelief that you had the courage to dance during this momentous moment. He was so distracted, you saw an opening for a uppercut to the jaw. " + congratsMessage);
      }
    }
}

else {
notOptionMessage();
}

// else if (answer === "Angie"){}
//
// else {
//   prompt("No choice");
//   console.log ("User did not make a choice");
// }
