let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      let wins = 0;
      let losses = 0;
      let guesses = [];
      let guessesLeft = 9;

      let directionsText = document.getElementById("directions-text");
      let winsText = document.getElementById("wins-text");
      let lossesText = document.getElementById("losses-text");
      let guessesLeftText = document.getElementById("guesses-text");
      let userChoiceText = document.getElementById("userchoice-text");

      function reset() {
        guessesLeft = 9;
        guesses = [];
      }

      document.onkeyup = function(event) {
        let userGuess = event.key;
        guesses.push(userGuess);
        let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          if (userGuess === computerGuess) {
            wins++;
            alert("Feel the power!");
            reset();
          } else {
            guessesLeft--;
          }

          if (guessesLeft === 0) {
            losses++;
            alert("You can't fool Miss Cleo!")
            reset();
          }

          directionsText.textContent = "";
          winsText.textContent = "Wins: " + wins;
          lossesText.textContent = "Losses: " + losses;
          guessesLeftText.textContent = "Guesses left: " + guessesLeft;
          userChoiceText.textContent = "Your guesses so far: " + guesses.join(', ');         
        }