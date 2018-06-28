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