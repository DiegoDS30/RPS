
    let computerScore = 0;
    let playerScore = 0;
    let playerP = null;

    let rock = document.getElementById ('rock');
    let paper = document.getElementById ('paper');
    let scissors = document.getElementById ('scissor');

    let playerScoreCount = document.getElementById ('player-score');
    let computerScoreCount = document.getElementById ('computer-score');
    let outcome = document.getElementById ('outcome')

    rock.addEventListener ('click', () => {
        
        playerP = 'rock';

        console.log (playerP);

        singleRound ();

    });

    paper.addEventListener ('click', () => {
        
        playerP = 'paper';

        console.log (playerP);

        singleRound ();
        
    });

    scissors.addEventListener ('click', () => {
    
        playerP = 'scissors';

        console.log (playerP);

        singleRound ();

    });

    function computerPlay () {

        let arrPlay = ["rock", "paper", "scissors"];
        let randomPlay = Math.floor (Math.random() * arrPlay.length);

        return arrPlay [randomPlay];

    }

    /* function playerPlay () {

        let selection = prompt ('Rock, paper, scissors?')

        selection.toLowerCase ();

        return selection;

    } */

    function singleRound () {

        let computerP = computerPlay ();
        // let playerP = playerPlay ();

        if (computerP === playerP) {

            outcome.innerHTML = "It's a tie!";

            return console.log ("It's a tie!");

        } else if

        ((computerP === "rock" && playerP === "paper") || 
        (computerP === "paper" && playerP === "scissors") ||
        (computerP === "scissors" && playerP === "rock"))  {

            playerScore++;

            playerScoreCount.innerHTML = `<strong>${playerScore}</strong>`;

            outcome.innerHTML = "You win!";
            
            finish ();

            return console.log ("You win!");

        } else if

        ((computerP === "rock" && playerP === "scissors") ||
        (computerP === "paper" && playerP === "rock") ||
        (computerP === "scissors" && playerP === "paper")) {

            computerScore++;

            computerScoreCount.innerHTML = `<strong>${computerScore}</strong>`;
            
            outcome.innerHTML = "You... lost?!";

            finish ();

            return console.log ("You lose!");

        } else {

            return console.log ("Something went wrong??" + computerP + playerP);

        }

    }

    function game () {

        do {

            if (playerScore === 5) {

            console.log ('Congratulations, you won!');

            break;

            } else if (computerScore === 5) {

            console.log ('You lost against the computer!');

            break;

            } else {

            singleRound ();

            }

        } while (playerScore !== 5 || computerScore !== 5)

    }

    function finish () {

        if (playerScore == 5) {

            outcome.innerHTML = "You won them FIVE rounds, congrats!"
    
            rock.removeEventListener ('click');
            paper.removeEventListener ('click');
            scissors.removeEventListener ('click');
    
        } 
        
        if (computerScore == 5) {
    
            outcome.innerHTML = "You lost those rounds eh? wanna try again?"
    
            rock.removeEventListener ('click');
            paper.removeEventListener ('click');
            scissors.removeEventListener ('click');
    
        }

    }

    //game ();