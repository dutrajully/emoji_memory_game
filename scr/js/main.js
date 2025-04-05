// main.js - Starts the game and handles user interactions

// Initialize the game board
createDeck();
renderBoard();

// Event listener for card clicks
document.getElementById('game-board').addEventListener('click', function (e) {
  // Check if the clicked element is a card
  if (e.target.classList.contains('card')) {
    handleCardClick(e);
  }
});

// Event listener for restart button
document.getElementById('restart-btn').addEventListener('click', () => {
  // Clear message and hide restart button
  document.getElementById('message').textContent = "";
  document.getElementById('restart-btn').style.display = "none";
  
  // Reinitialize the game
  createDeck();       // Shuffle and reset the deck
  renderBoard();      // Re-render the board with new cards
});
