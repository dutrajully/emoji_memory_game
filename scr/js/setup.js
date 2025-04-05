// setup.js - creates the deck and prepares the board

// Array of unique emojis (will be duplicated to create pairs)
const emojis = ['🐶', '🐱', '🐭', '🐰', '🦊', '🐻', '🐼', '🐸'];

let deck = []; // Final game deck with duplicated and shuffled emojis

// Function to create the game deck
function createDeck() {
  // Duplicate the emojis and shuffle the combined array
  deck = [...emojis, ...emojis].sort(() => 0.5 - Math.random());
}
