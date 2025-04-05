// gameLogic.js - handles game logic

// Array to keep track of flipped cards (temporarily)
let flippedCards = [];
// Array to keep track of matched cards (pairs)
let matchedCards = [];

// Function that handles the card click event
function handleCardClick(event) {
    // Get the clicked card and its index
    const card = event.target;
    const index = card.dataset.index;
    
    // Ignore click if the card is already flipped or if there are already two flipped cards
    if (card.classList.contains('flipped') || flippedCards.length === 2) return;

     // Flip the card and display the emoji
    card.textContent = deck[index];
    card.classList.add('flipped');
    flippedCards.push({ card, index });

    // If two cards are flipped, check if they match
    if (flippedCards.length === 2) {
        checkMatch();
    }
}

// Function that checks if the two flipped cards match
function checkMatch() {
    // Destructure the flipped cards array to get the first and second card
    const [first, second] = flippedCards;
    // Check if the two cards match based on their emoji (index in deck)
    const isMatch = deck[first.index] === deck[second.index];

    if (isMatch) {
        // If they match, add their indices to the matchedCards array
        matchedCards.push(first.index, second.index);
        // Show a message indicating the match
        showMessage("Match!");
        // Check if all pairs have been matched (win condition)
        checkWin();
        // Clear the flippedCards array for the next turn
        flippedCards = [];
    } else {
        // If the cards don't match, show a "Try again..." message
        showMessage("Try again...");
        // After a short delay, flip the cards back over
        setTimeout(() => {
            first.card.textContent = ''; // Clear the text content of both cards
            second.card.textContent = '';
            first.card.classList.remove('flipped'); // Remove the flipped class from both cards
            second.card.classList.remove('flipped');
            // Reset the flippedCards array for the next pair of cards to be flipped
            flippedCards = [];
        }, 1000); // Wait 1 second before flipping the cards back
    }
}

// Function that checks if the player has won (all matches are found)
function checkWin() {
    // If all cards are matched (i.e., the length of matchedCards equals the total number of cards)
    if (matchedCards.length === deck.length) {
        // Show a congratulatory message
        showMessage("Congratulations! You won!");
         // Display the restart button for the player to play again
        document.getElementById('restart-btn').style.display = "inline-block";
    }
}

