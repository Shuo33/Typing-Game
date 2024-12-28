const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');


// List of words
const words = [
    'ami',
    'attention',
    'camarade',
    'copain',
    'coquin',
    'dame',
    'directeur',
    'droit',
    'effort',
    'enfant',
    'fatigue',
    'fille',
    'garçon',
    'gardien',
    'madame',
    'mensonge',
    'ordre',
    'personne',
    'retard',
    'sourire',
    'travail'
];



// Init word
let randomWord;

// Init score
let score = 0; 

// Init time 
let time = 10; 



// Generate random word from 'Words' array
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]; 
}

// Add word to DOM 
function addWordToDOM() {
    randomWord = getRandomWord(); 
    word.innerText = randomWord; 
}

addWordToDOM();


// Update score
function updateScore() {
    score++; 
    scoreEl.innerText = score; 
}


// Event listeners
text.addEventListener('input', (e) => {
    const insertedText = e.target.value;

    if (insertedText === randomWord) {
        addWordToDOM();
        updateScore();

        // clear the input value
        e.target.value = '';
    } 

});