// Quiz data containing questions, options, and correct answers
let quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the name of the tallest mountain in the world?",
        options: ["Earth cross", "Zoma rock", "mount marrigo", "Mount Everest"],
        correctAnswer: "Mount Everest"
    },
    {
        question: "What is the largest mammal on Earth?",
        options: [" Elephant", "Blue Whale", "Giraffe", "Gorilla"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Southern Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "In which year did the United States declare its independence?",
        options: [" 1776", "1789", " 1812", "1607"],
        correctAnswer: " 1776"
    },
    {
        question: "Who wrote Romeo and Juliet?",
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare ", "Jane Austen"],
        correctAnswer: "William Shakespeare "
    },
    {
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        options: [" Oxygen", "Carbon Monoxide", "Carbon Dioxide", "Nitrogen"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie ", "Amelia Earhart", "Rosa Parks", "Jane Goodall"],
        correctAnswer: "Marie Curie "
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
        correctAnswer: "Mitochondria"
    },

];
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to handle button clicks
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            // Check if the button is a submit button
            if (this.getAttribute("data-type") === "submit") {
                checkingAnswer();
            } else if (this.getAttribute("data-type") === "previous") {
                previousQuestion();
            } else {
                // Assign the value to gameType and call the runningGame function
                let gameType = this.getAttribute("data-type"); // Fix: Declare gameType using let
                runningGame(gameType);
            }
        });
    }
});

// Initialize variables for the current question and score
let currentQuestion = 0;
let score = 0;

// Get HTML elements by ID for later use
let questionContainer = document.getElementById("question-container");
let optionsContainer = document.getElementById("options-container");
let resultContainer = document.getElementById("result-container");
let scoreElement = document.getElementById("score");

// Function to load the current question and its options
function loadQuestion() {
    let currentQuizData = quizData[currentQuestion];
    questionContainer.textContent = currentQuizData.question;

    optionsContainer.innerHTML = "";
    // Create buttons for each option and add event listeners
    currentQuizData.options.forEach((option, index) => {
        let button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkingAnswer(option));
        optionsContainer.appendChild(button);
    });
}

// Function to check the user's answer against the correct answer
function checkingAnswer() {
    let userAnswer = document.getElementById("answer-box").value; // Fix: Get user answer from input field
    let currentQuizData = quizData[currentQuestion];
    let isCorrect = userAnswer === currentQuizData.correctAnswer;
    // Display appropriate message based on correctness
    if (isCorrect) {
        alert("Well done! You are Correct:)");
        incrementingScore();
    } else {
        alert(`Nooo... Your Answer is ${userAnswer} and the Correct Answer was ${currentQuizData.correctAnswer}. Please try again.`);
        incrementIncorrectAnswer();
    }

    nextQuestion();
}
// Function to move to the next question
function nextQuestion() {
    currentQuestion++;
    // Check if there are more questions, else show the result
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}
