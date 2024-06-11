

function takeTheQuiz(ev) {
    console.log(ev);

    function loadResult() { //helperfunction using doc frag to load the result depending on the answers to the quiz.
        const fragResult = document.createDocumentFragment();
    }
}


// selecting elements
const startButton = document.getElementById("readyBtn");

// register event listener
startButton.addEventListener("click", takeTheQuiz);