document.addEventListener('DOMContentLoaded', () => {
    // selecting elements
    const startButton = document.getElementById("readyBtn");
    const quizDiv = document.getElementById("quiz");
    const questions = document.querySelectorAll(".question");
    const myHeader = document.getElementById("header");
    const myH1 = document.getElementById("AppTitle")
    let currentQIndex = 0;

    function takeTheQuiz(ev) {
        console.log(ev);
        ev.preventDefault();
        hideMe(startButton);
        showQuestion(currentQIndex);

    }

    function loadResult() { //helperfunction using doc frag to load the result depending on the answers to the quiz. then add to page.
        const answerScore = ((Number(document.getElementById('birthMonth').value) + Number(document.querySelector('input[name="spiritAnimal"]:checked').value)) / 2);
        let textResult;
        if (answerScore <= 0.6) {
            textResult = "I am getting better and better.\nI am smart and capable of being a winner.\nI am an abundant being.\nI allow the flow of abundance in and through me.\nAll my problems have solutions.\nI have enough. I am enough.";
        }
        else {
            textResult = "I am proud of myself.\nI am full of potential.\nI am naturally confident and at ease in my own life.\nI bring value to the people in my life.\nI have natural good fortune and boundless opportunity.\nMy dreams are coming true.";
        }
        const resultContainer = document.createElement('div');
        resultContainer.setAttribute("id", "resultBox");
        resultContainer.textContent = textResult;

        //adding print option 
        const printButton = document.createElement('button');
        printButton.textContent = 'Print';
        printButton.addEventListener('click', printResult);


        const fragResult = document.createDocumentFragment(); //make template
        fragResult.appendChild(resultContainer);
        fragResult.appendChild(printButton);
        document.getElementById('app').appendChild(fragResult); //add result to webpage


        function printResult() { //using BOM .print
            window.print();
        }
    }

    function handleSubmit(ev) {

        ev.preventDefault();
        //validation
        const emailInput = document.getElementById('userEmail');
        const usernameInput = document.getElementById('username');
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (re.test(String(emailInput.value).toLowerCase()) === false) {
            window.alert('Please enter a valid email address.');
            emailInput.focus();
            return
        }
        if (usernameInput.checkValidity() === false) {
            window.alert('Please enter a valid username (only letters).');
            usernameInput.focus();
            return
        }

        questions[questions.length - 1].classList.remove("fade-in");
        questions[questions.length - 1].classList.add("hidden");
        myHeader.innerHTML = "";
        loadResult();
    }

    //helper functions - function to unhide each question
    function showQuestion(index) {
        if (index < questions.length) {
            setTimeout(() => {
                questions[index].classList.remove("hidden");
                questions[index].classList.add("fade-in");
            }, 1000);
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


    // register event listeners
    startButton.addEventListener("click", takeTheQuiz);

    //iterate to add event listeners to buttons
    document.querySelectorAll(".nextBtn").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            hideMe(questions[currentQIndex]);
            currentQIndex++;
            if (currentQIndex < questions.length) {
                showQuestion(currentQIndex);
                questions[currentQIndex].previousElementSibling.classList.remove("fade-in");
                //questions[currentQIndex].previousElementSibling.classList.add("hidden");
            }
        });
    });

    // Event listener for the final submit button
    document.querySelector('#question3 button[type="submit"]').addEventListener("click", handleSubmit);

});
