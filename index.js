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




  //CALCULATING SLEEP HOURS
  // const getSleepHours = day => {
  //   if(day === 'monday'){
  //     return 9;
  //   }
  //   else if(day === 'tuesday'){
  //     return 9;
  //   }
  //    else if(day === 'wednesday'){
  //     return 7;
  //   }
  //    else if(day === 'thursday'){
  //     return 6;
  //   }
  //    else if(day === 'friday'){
  //     return 10;
  //   }
  //    else if(day === 'saturday'){
  //     return 8;
  //   }
  //    else if(day === 'sunday'){
  //     return 9;
  //   }
  // }
  
  // const getActualSleepHours = () => 
  //   getSleepHours('monday') + 
  //   getSleepHours('tuesday') +
  //   getSleepHours('wednesday') +
  //   getSleepHours('thursday') +
  //   getSleepHours('friday') +
  //   getSleepHours('saturday') +
  //   getSleepHours('sunday');
    
  // console.log(getSleepHours('monday'))
  //   console.log(getActualSleepHours())
    
  // const getIdealSleepHours = () => {
  //   let idealHours = 8;
  //   return idealHours * 7;
  // };
  
  // const calculateSleepDebt = () => {
  //   const actualSleepHours = getActualSleepHours();
  //   const idealSleepHours = getIdealSleepHours();
  
  //   if (actualSleepHours === idealSleepHours){
  //     console.log("User got the perfect amount of sleep")
  //   }
  //  else if (actualSleepHours > idealSleepHours){
  //     console.log("user got " + (actualSleepHours - idealSleepHours) + " more sleep than need")
  //   }
  //  else if (actualSleepHours < idealSleepHours){
  //     console.log('User Should get some rest b/c you slept ' + ( idealSleepHours - actualSleepHours) + " Hours less than you should")
  //   }
  
  //   else {
  //     console.log('ERROR! Something went wrong, check your code!')
  //   }
  // };
  
  // calculateSleepDebt();