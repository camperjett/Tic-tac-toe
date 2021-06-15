document.addEventListener('DOMContentLoaded', () => {
  //creating a node for array of squares
  const squares = document.querySelectorAll('.col');
  //creating a node for the dyanmic playerName element
  const playerDisplay = document.querySelector('.playerDisplay');
  let currentPlayer = 'playerX';
  //adding a reaction to each click on any square
  squares.forEach((square) => {
    square.addEventListener('click', clickOutcome)
  });

  function clickOutcome(e) {
    console.log(currentPlayer + " clicked");
    //creating a local copy of 'squares' array
    const squaresArray = Array.from(squares);
    //storing the clicked index
    const indexOfClickedSquare = squaresArray.indexOf(e.target);

    //changing the display value of currentPLayer!
    if(currentPlayer === 'playerO') {
      squares[indexOfClickedSquare].classList.add('circleO');
      currentPlayer = 'playerX';
    } else {
      squares[indexOfClickedSquare].classList.add('crossX');
      currentPlayer = 'playerO';
    }
    //assigning the address fo innerHTML of playerDisplay to currentPlayer
    playerDisplay.innerHTML = currentPlayer;
  }

});
