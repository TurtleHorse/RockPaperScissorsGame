const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Error!");
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
    }
  };
  
  const determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      console.log("Its a tie");
    } else if (userChoice === "bomb"){
      console.log("USER USED A SECRET ATTACK AND WON")
    }else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    )
    {
      return console.log("You won!");
    } else {
      return console.log("You Lost!");
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb'); //user puts his pick here
    const computerChoice = getComputerChoice()
    console.log( 'You threw:' + userChoice)
    console.log('The Computer threw:' + computerChoice)
    console.log (determineWinner(userChoice, computerChoice));
  }
  
  playGame();