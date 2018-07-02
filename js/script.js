// Questions array
const questions = [
    { question: 'Enter Your First Name'},
    { question: 'Enter Your Last Name'},
    { question: 'Enter Your Email', pattern: /\S+@\S+\.\S+/ },
    { question: 'Create A Password', type: 'password'},
];

// Transition Times 
const shakeTime = 100; // Shake Transition Time
const switchTime = 200; // Transition Between Questions

// Initialize Position At First Question
let position = 0;

// Initialize DOM elements
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

//Events

// Get question on dom load
document.addEventListener('DOMContentLoaded', getQuestion);

// Next Button Click 
nextBtn.addEventListener('click', validate);

document.addEventListener('DOMContentLoaded', getQuestion);

// Functions 

// Get question from array & add to page
function getQuestion() {
    // Get Current Questions
    inputLabel.innerHTML = questions[position].question;
    // Get Current Type 
    inputField.type = questions[position].type || 'text';
    // Get Current Answer
    inputField.value = questions[position].answer || '';
    // Focus On Element
    inputField.focus();

    // Set Progress Bar Width - Variable to the questions length
    progress.style.width = (position * 100) / questions.length + '%';

    // Add user icon or nav depending on question 
    prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';

    showQuestion();
}

// Display question
function showQuestion() {
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = '';
    inputProgress.style.width = '100%';
}

// Hide question

function hideQuestion() {
    inputGroup.style.opacity = 0;
    inputLabel.style.marginLeft = 0;
    inputProgress.style.width = 0;
    inputProgress.style.transition = 'none';
    inputGroup.style.border = null;
}

// Transform To Create Shake Motion
function transform(x, y) {
    formBox.style.transform = `translate(${x}px, ${y}px)`;
}

// Validate field 
function validate() {
    // Validate pattern matches if it exists
    if(!inputField.value.match(questions[position].pattern || /.+/))
    {
        inputFail();
    } else {
        inputPass();
    }

}

 // Field Input Fail
 function inputFail() {

 }

 // Field Input Passed
 function inputPass() {

 }