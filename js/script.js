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

// document.addEventListener('DOMContentLoaded', getQuestion);

// Input field enter enable
inputField.addEventListener('keyup', e => {
    if(e.keyCode == 13) {
        validate();
    }
});

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
    console.log(x,y); // Test shake motion
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
     formBox.className = 'error'
     // Create for loop to specify the number of shakes
     for (let i = 0; i < 9; i++){
         setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20,0);
         setTimeout(transform, shakeTime * 9,0,0);
         inputField.focus();
     }


 }

 // Field Input Passed
 function inputPass() {
     formBox.className = '';
     setTimeout(transform,shakeTime * 0, 0, 10);
     setTimeout(transform,shakeTime * 1, 0, 0);

     // Store answer in array
     questions[position].answer = inputField.value;

     // Increment position 
     position++;

     // If new q, hide current and move on to next
     if(questions[position]) {
         hideQuestion();
         getQuestion();
     } else {
         hideQuestion();
         formBox.className = 'close';
         progress.style.width = '100%';
         formComplete();
     }


    }

    // All fields complete - Show h1 end 
    function formComplete(){
        console.log(questions); // Test questions array, see values passed
        const h1 = document.createElement('h1');
        h1.classList.add('end');
        h1.appendChild(document.createTextNode(`Dankjewel ${questions[0].answer} All seems to be good, you will get more details in your inbox shortly`));
        setTimeout(() => {
            formBox.parentElement.appendChild(h1);
            setTimeout(() => h1.style.opacity = 1, 50);
        }, 1000);
        
    }
