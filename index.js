

function takeTheQuiz(ev) {
    console.log(ev);

    function loadResult() { //helperfunction using doc frag to load the result depending on the answers to the quiz.
        const fragResult = document.createDocumentFragment();
    }
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

// register event listener
startButton.addEventListener("click", takeTheQuiz);