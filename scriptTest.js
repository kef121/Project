//TEST FORMAT
const questionsArray = [
    {
        question: "What is the Igbo name of Dog?",
        answers: [
            { text: "Lorem", correct: false},
            { text: "Nkita", correct: true},
            { text: "Por", correct: false},
            { text: "Consect", correct: false},
        ]
    },
    {
        question: "What is the smallest animal?",
        answers: [
            { text: "Lore", correct: true},
            { text: "Nkitash", correct: false},
            { text: "Porsh", correct: false},
            { text: "Consectur", correct: false},
        ]
    },
    {
        question: "What is the Igbo name of Elephant?",
        answers: [
            { text: "Lorem", correct: false},
            { text: "Nkita", correct: false},
            { text: "Por", correct: false},
            { text: "Consect", correct: true},
        ]
    },
    {
        question: "What is the Igbo name of Pig?",
        answers: [
            { text: "Lorem", correct: false},
            { text: "Nkita", correct: false},
            { text: "Por", correct: true},
            { text: "Consect", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const testOptions = document.getElementById("test-options");
const nextBtn = document.getElementById("next-btn");
const endBtn = document.querySelector(".end-btn");

let currentQuestionIndex = 0;
let questions = questionsArray.sort(function () {
    return 0.5 - Math.random(currentQuestionIndex);
})
//console.log(questions)
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("option");
        testOptions.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextBtn.style.display = "none"
    endBtn.style.display = "none"
    while(testOptions.firstChild) {
        testOptions.removeChild(testOptions.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(testOptions.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Try again";
    nextBtn.style.display = "block"
    endBtn.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
})

startQuiz();
