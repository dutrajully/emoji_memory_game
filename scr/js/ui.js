// ui.js - updates the interface

function showMessage(text) {
    document.getElementById('message').textContent = text;
  }
  
  function renderBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    deck.forEach((emoji, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.index = index;
      board.appendChild(card);
    });
  }
  