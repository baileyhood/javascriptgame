//VARIABLES/FUNCTIONS
var congratsMessage =
    "Congratulations! You won the game. Please play again to see other outcomes.";
var losingMessage = "Too bad...better luck next time.";
var notOptionMessage = function()
{
    alert("That's not an option. You lose!");
};
//BEGININNG OF GAME
var name = prompt("What is your name?");
console.log(name);
if (name !== 'null')
{
    confirm("Thanks " + name + "!" + " Lets play the game!");
}
else
{
    prompt("You did not enter your name. Please enter your name.");
}
//AGE QUESTION
var appropriateAge = prompt("What's your age?");
if (appropriateAge > 17)
{
    alert("You're old enough! Play on");
}
else
{
    alert("You're too young to play!");
}
//CHARACTER CHOICE QUESTION
var answer = prompt(
    "What character do you want to use for the fight? Each scenario is different based on the character you choose. 1. Arnold 2. Sylvester 3. Bruce"
).toLowerCase();
console.log("Answer to Q1");
//ARNOLD CHOICE
if (answer === '1' || answer === 'arnold' || answer === '1. arnold')
{
    var move = prompt(
        "You chose Arnold! Decide what move to make: 1. Punch 2. Bodyslam 3. Bitchslap"
    ).toLowerCase();
    console.log("Answer to Q2");
    if (move === '1' || move === 'punch' || move === '1. punch')
    {
        var secondMove = prompt(
            "Nice punch! But the T-1000 dodged it. What's your next move? 1. Shoot 2. Run 3. Shake hands"
        ).toLowerCase();
        console.log("Answer to Q3");
        if (secondMove === '1' || secondMove === 'shoot' || secondMove ===
            '1. shoot')
        {
            alert(
                "Nice shot! But the T-1000 absorbed the bullet. He killed you. GAME OVER! "
            );
        }
        else if (secondMove === '2' || secondMove === 'run' || secondMove ===
            '2. run')
        {
            alert("Oh no! You couldn't outrun the T-1000. GAME OVER! ");
        }
        else if (secondMove === '3' || secondMove === 'shake hands' ||
            secondMove === "3. shake hands")
        {
            alert(
                "Wow! The T-1000 was willing to make a compromise. He accepted the truce. " +
                congratsMessage);
        }
    }
    else if (move === '2' || move === 'bodyslam' || move === '2. bodyslam')
    {
        var secondMove = prompt(
            "Nice bodyslam! But the T-1000 dodged it. What's your next move? 1. Shoot 2. Run 3. Shake hands"
        ).toLowerCase();
        if (secondMove === '1' || secondMove === 'Shoot' || secondMove ===
            '1. shoot')
        {
            alert(
                "Nice shot! But the T-1000 absorbed the bullet. He killed you. GAME OVER! "
            );
        }
        else if (secondMove === '2' || secondMove === 'run' || secondMove ===
            '2. run')
        {
            alert("Oh no! You couldn't outrun the T-1000. GAME OVER! ");
        }
        else if (secondMove === '3' || secondMove === 'shake hands' ||
            secondMove === "3. shake hands")
        {
            alert(
                "Wow! The T-1000 was willing to make a compromise. He accepted the truce. YOU WON! "
            );
        }
    }
    else if (move === '3' || move === 'bitchslap' || move === '3. bitchslap')
    {
        var secondMove = prompt(
            "Nice bitchslap! But the T-1000 dodged it. What's your next move? 1. Shoot 2. Run 3. Shake hands"
        ).toLowerCase();
        if (secondMove === '1' || secondMove === 'Shoot' || secondMove ===
            '1. shoot')
        {
            alert(
                "Nice shot! But the T-1000 absorbed the bullet. He killed you. GAME OVER! "
            );
        }
        else if (secondMove === '2' || secondMove === 'run' || secondMove ===
            '2. run')
        {
            alert("Oh no! You couldn't outrun the T-1000. GAME OVER! ");
        }
        else if (secondMove === '3' || secondMove === 'shake hands' ||
            secondMove === "3. shake hands")
        {
            alert(
                "Wow! The T-1000 was willing to make a compromise. He accepted the truce. YOU WON! "
            );
        }
    }
}
//SYLVESTER CHOICE
else if (answer === '2' || answer === 'sylvester' || answer === '2. sylvester')
{
    var move = prompt(
        "You chose Sylvester! You're up against the incredible Apollo Creed in the finals of the World Championship. He has gotten a few hits on you but you're still in it to win it. Decide what move to make next: 1. Hook 2. Jab 3. Straight punch"
    ).toLowerCase();
    console.log("Answer to Q2");
    if (move === '1' || move === 'hook' || move === '1. hook')
    {
        var secondMove = prompt(
            "Nice Hook! But wait, Apollo counter punched you. You're about to be KO but you have one last move left. What do you do? 1. Uppercut 2. Point away 3. Cartwhell "
        ).toLowerCase();
        if (secondMove === '1' || secondMove === "uppercut" || secondMove ===
            "1. uppercut")
        {
            alert(
                "Nice try, but Apollo dodged your uppercut and walloped you with a dempsey roll punch. You KO'ed. " +
                losingMessage);
        }
        else if (secondMove === '2' || secondMove === "point away" ||
            secondMove === "1. point away")
        {
            alert(
                "Omg! You distracted Apollo by pointing at his shoes. You then had a chance to uppercut and KO him. " +
                congratsMessage);
        }
        else if (secondMove === '3' || secondMove === "cartwhell" || secondMove ===
            "3. cartwhell")
        {
            alert(
                "Suprisingly, the cartwheel did not work. Apollo KO'ed you.  " +
                losingMessage);
        }
    }
    else if (move === '2' || move === 'jab' || move === '2. jab')
    {
        var secondMove = prompt(
            "Nice jab! You hit Apollo pretty hard but you need to do one last finishing move. What's your next move? 1. Uppercut 2. Jab 3. Hook "
        ).toLowerCase();
        if (secondMove === '1' || secondMove === "uppercut" || secondMOve ===
            "1. uppercut")
        {
            alert(
                "Nice try, but Apollo dodged your uppercut and walloped you with a dempsey roll punch. You KO'ed. " +
                losingMessage);
        }
        else if (secondMove === '2' || secondMove === "jab" || secondMove ===
            "1. jab")
        {
            alert(
                "You got him! Apollo looks like he's ok, but he starts wobbling around and falls to the ground. It's a KO. " +
                congratsMessage);
        }
        else if (secondMove === '3' || secondMove === "hook" || secondMove ===
            "3. hook")
        {
            alert(
                "Awesome! You hooked Apollo in the jaw and he was instantly down. But wait, he came back with a dempsey roll punch in your face. " +
                losingMessage);
        }
    }
    else if (move === '3' || move === 'straight punch' || move ===
        '3. straight punch')
    {
        var secondMove = prompt(
            "Ouch! Apollo countered your straight punch with a jab. This caused some severe pain to where you could die if he hits you hard enough. This is a life or death decision. What's your next move? 1. Forfeit 2. Counter moves 3. Dance "
        ).toLowerCase();
        if (secondMove === '1' || secondMove === "forfeit" || secondMove ===
            "3. forfeit")
        {
            alert(
                "Not a bad choice, but it pissed Apollo off so much that he won on a forfeit, he decided to punch you anyways in the gut and you died. " +
                losingMessage);
        }
        else if (secondMove === '2' || secondMove === "counter moves" ||
            secondMove === "3. counter moves")
        {
            alert(
                "This did not work. You were in too much pain from Apollo's previous hit. He punched you in the nose and you sustained permanent brain damage and died. " +
                losingMessage);
        }
        else if (secondMove === '3' || secondMove === "dance" || secondMove ===
            "3. dance")
        {
            alert(
                "Say what!? This worked. Apollo was in utter disbelief that you had the courage to dance during this momentous moment. He was so distracted, you saw an opening for a uppercut to the jaw. " +
                congratsMessage);
        }
    }
}
//BRUCE CHOICE
else if (answer === '3' || answer === 'bruce' || answer === '2. bruce')
{
    var move = prompt(
        "You chose Bruce! You're up against Chuck Norris. He has gotten a few hits on you but you're still have a little fight. Decide what move to make next: 1. Kick 2. Nunchucks 3. Smack"
    ).toLowerCase();
    console.log("Answer to Q2");
    if (move === '1' || move === 'kick' || move === '1. kick')
    {
        var secondMove = prompt(
            "Nice Kick! But wait, Norris countered you with a roundhouse kick to the face. You're about to be out but you have one last move left. What do you do? 1. Scream 2. Run 3. Cry "
        ).toLowerCase();
        if (secondMove === '1' || secondMove === "scream" || secondMove ===
            "1. scream")
        {
            alert(
                "Nice try, but this did not distract Norris. Instead, he roundhouse kicked you again. " +
                losingMessage);
        }
        else if (secondMove === '2' || secondMove === "run" || secondMove ===
            "1. run")
        {
            alert(
                "Omg! You're getting away but Norris was able to catch up to you on his horse. " +
                losingMessage);
        }
        else if (secondMove === '3' || secondMove === "cry" || secondMove ===
            "3. cry")
        {
            alert(
                "Norris was so embarrassed for you that he let you get one free punch to his face. You punched him hard enough to where he could no longer fight.  " +
                congratsMessage);
        }
    }
    else if (move === '2' || move === 'nunchucks' || move === '2. nunchucks')
    {
        var secondMove = prompt(
            "Nice nunchuck move! You hit Norris pretty hard but you need to do one last finishing move. What's your next move? 1. Slap 2. Kick 3. Push "
        ).toLowerCase();
        if (secondMove === '1' || secondMove === "slap" || secondMove ===
            "1. slap")
        {
            alert(
                "Seriously? A slap? This was not the right move. Norris countered it with a roundhouse kick to the face. " +
                losingMessage);
        }
        else if (secondMove === '2' || secondMove === "kick" || secondMove ===
            "1. kick")
        {
            alert("You did it! You defeated Norris with this finishing move." +
                congratsMessage);
        }
        else if (secondMove === '3' || secondMove === "push" || secondMove ===
            "3. push")
        {
            alert(
                "This was not a good choice for a finishing move. Norris instantly got up and bodyslammed you to where you could no longer breath. " +
                losingMessage);
        }
    }
    else if (move === '3' || move === 'smack' || move === '3. smack')
    {
        var secondMove = prompt(
            "What an embarassing move. Norris was stunned that you tried to smack him, so he kicked you in the face. You're down and Norris is about to finish you off. What's you're next move? 1. Dodge 2. Run 3. Play dead "
        ).toLowerCase();
        if (secondMove === '1' || secondMove === "dodge" || secondMove ===
            "3. dodge")
        {
            alert(
                "You were not able to dodge Norris's fatality move. He instantly defeated you. " +
                losingMessage);
        }
        else if (secondMove === '2' || secondMove === "run" || secondMove ===
            "3. run")
        {
            alert(
                "You were not fast enough to escape the wrath of Chuck Norris. He caught up to you and punched you in the face 253 times. Needless to say, you did not survive. " +
                losingMessage);
        }
        else if (secondMove === '3' || secondMove === "play dead" || secondMove ===
            "3. play dead")
        {
            alert(
                "Say what!? This worked. Norris really thought you were dead despite the fact that you were still breathing heavily. He's strong but not so bright. He came over to check your pulse and you tripped him. He feel and broke his neck.  " +
                congratsMessage);
        }
    }
}
else
{
    notOptionMessage();
}
