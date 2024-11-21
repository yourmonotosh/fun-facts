const facts = [
    "I am 20 years old and have a passion for exploring mountains.",
    "I have hiked several mountain trails and plan to conquer more.",
    "The serenity of mountain landscapes inspires my creativity.",
    "I enjoy capturing the beauty of mountains through photography.",
    "I am learning about the geology and ecosystems of mountainous regions."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});
