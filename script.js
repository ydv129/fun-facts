// Fun Facts Array
const facts = [
  "Honey never spoils. Archaeologists have found pots of honey in Egyptian tombs over 3000 years old!",
  "Bananas are berries, but strawberries are not.",
  "Octopuses have three hearts!",
  "A group of flamingos is called a 'flamboyance.'",
  "The heart of a blue whale is as big as a small car.",
  "Sloths can hold their breath longer than dolphins — up to 40 minutes.",
  "A day on Venus is longer than a year on Venus.",
  "There are more stars in the universe than grains of sand on Earth."
];

// DOM Elements
const factDisplay = document.getElementById('fact');
const button = document.getElementById('new-fact-button');
const factBox = document.getElementById('fact-box');

// Function to display a random fact with animation
button.addEventListener('click', () => {
  // Button Animation
  button.classList.add('loading');

  // Add animation to fact box
  factBox.classList.add('animate');

  // Generate a random fact
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];

    // Remove animations
    factBox.classList.remove('animate');
    button.classList.remove('loading');
  }, 500); // Simulates loading animation
});
