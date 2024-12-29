const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const endgameScore = endgameEl.querySelector('#end-game-score');
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


// Focus on text on start
text.focus();



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


// Start counting down: the function get called every 1 second
const timeInterval = setInterval(updateTime, 1000);


// Update Time
function updateTime() {
    time--; 
    timeEl.innerText = `${time}s`; 
    
    if (time === 0) {
        clearInterval(timeInterval);
        // end game
        gameOver();
    }
}


// Game over & show end screen
function gameOver() {
    endgameEl.style.display = 'flex'; 
    endgameScore.innerText = `Your final score is ${score}`;
}


// Set difficulty to value in localStorage or easy
let difficulty = localStorage.getItem('difficulty') !== null ? JSON.parse(localStorage.getItem('difficulty')) : 'easy';


// Display difficulty select to DOM
difficultySelect.value = `${difficulty}`;


// Event listeners

// Typing
text.addEventListener('input', (e) => {
    const insertedText = e.target.value;

    if (insertedText === randomWord) {
        addWordToDOM();
        updateScore();

        // clear the input value
        e.target.value = '';

        if (difficulty === 'easy') {
            time += 5;
        } else if (difficulty === 'medium') {
            time += 3; 
        } else {
            time += 1; 
        }
        
        updateTime();
    } 
});


// Settings btn click
settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('hide');
});


// Settings difficulty select
settingsForm.addEventListener('change', (e) => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', JSON.stringify(difficulty));
} );
