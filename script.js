const facts = [
  "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!",
  "Bananas are berries, but strawberries are not.",
  "A group of flamingos is called a 'flamboyance.'",
  "Octopuses have three hearts!",
  "The heart of a blue whale is as big as a small car.",
  "A day on Venus is longer than a year on Venus.",
  "Sloths can hold their breath longer than dolphins can — up to 40 minutes.",
  "There are more stars in the universe than grains of sand on Earth."
];

const factDisplay = document.getElementById('fact');
const button = document.getElementById('new-fact-button');

// Function to display a random fact
button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factDisplay.textContent = facts[randomIndex];
});
