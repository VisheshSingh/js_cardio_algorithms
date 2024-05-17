// shuffle arr
function shuffle(arr) {
  return arr.sort(() => 0.5 - Math.random());
}
console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Take a deck of cards and draw 4 cards at random
function cardDeck() {
  const nums = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  const hearts = nums.map((n) => `${n}💗`);
  const spades = nums.map((n) => `${n}♠️`);
  const clubs = nums.map((n) => `${n}♣️`);
  const diamond = nums.map((n) => `${n}♦️`);
  const allCards = [...hearts, ...clubs, ...spades, ...diamond];
  const drawfour = shuffle(allCards).slice(0, 4);
  return drawfour;
}

console.log(cardDeck());
console.log(cardDeck());
console.log(cardDeck());
