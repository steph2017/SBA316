

function takeTheQuiz(ev) {
    console.log(ev);
    ev.preventDefault();
    hideMe(startButton);
    showQuestion(currentQIndex);

}

function loadResult() { //helperfunction using doc frag to load the result depending on the answers to the quiz. then add to page.
    const answerScore = (((Number(document.getElementById('birthMonth').value)) / Number(document.querySelector('input[name="spiritAnimal"]:checked').value)) / 2);
    if (answerScore <= 0.6) {
        const textResult = "I am getting better and better.\nI am smart and capable of being a winner.\nI am an abundant being.\nI allow the flow of abundance in and through me.\nAll my problems have solutions.\nI have enough. I am enough.";
    }
    else {
        const textResult = "I am proud of myself.\nI am full of potential.\nI am naturally confident and at ease in my own life.\nI bring value to the people in my life.\nI have natural good fortune and boundless opportunity.\nMy dreams are coming true.";
    }
    const resultContainer = document.createElement('div');
    resultContainer.setAttribute("id", "resultBox");
    resultContainer.textContent = textResult;

    const fragResult = document.createDocumentFragment(); //make template
    fragResult.appendChild(resultDiv);
    document.getElementById('app').appendChild(fragResult); //add result to webpage
}

//helper functions - function to unhide each question
function showQuestion(index) {
    if (index < questions.length) {
        questions[index].classList.remove("hidden");
        questions[index].classList.add("fade-in");
    }
}

//helperfunction - hide the target
function hideMe(target) {
    target.classList.add("fade-out");
    setTimeout(() => {
        target.classList.add("hidden");
        target.classList.remove("fade-out");
    }, 1000);
}

// selecting elements
const startButton = document.getElementById("readyBtn");
const quizDiv = document.getElementById("quiz");
const questions = document.querySelectorAll(".question");
let currentQIndex = 0;

// register event listeners
startButton.addEventListener("click", takeTheQuiz);

//iterate to add event listeners to buttons
document.querySelectorAll(".nextBtn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        hideElement(questions[currentQuestionIndex]);
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    });
});