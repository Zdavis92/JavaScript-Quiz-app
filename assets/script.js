var navEl = document.querySelector("#nav")
var mainTextArea = document.querySelector("#mainTextArea")
var footer = document.querySelector("#footer")
var timerEl = document.querySelector("#timer")
var timeLeft = 100;
// questions to be used in the quiz stored in a nested array
var questions = Array();

questions[0] = ["Commonly used data types in JavaScript DO NOT include:", "Booleans", "Numbers", "Strings", "Alerts"]
questions[1] = ["Arrays in Javascrpit can be used to store:", "numbers", "arrays", "booleans", "all of the above"]
questions[2] = ["The conditions of an If/Else statement is enclosed with:", "quotation marks", "parentheses", "square brackets", "curly brackets"]
questions[3] = ["A String value must be enclosed in _______ when being assigned to a variable", "commas", "curly brackets", "quotes", "parentheses"]
questions[4] = ["A useful tool used during development and debugging for printing content to the debugger is:", "JavaScript", "terminal/bash", "for loop", "console.log"]

// function to disply the starting screen
function startUp() {
    // Welcome message
    mainTextArea.innerHTML = "<p>Welcome to the JavaScript quiz! <br> Try to beat the High Score!</p>"
    var startButton = document.createElement("button");
    startButton.textContent = "Start Quiz!"
    startButton.className = "startBtn"
    startButton.id = "startBtnId"

    mainTextArea.appendChild(startButton)
    startButton.addEventListener("click", firstQuestion)
    startButton.addEventListener("click", timer)

}
function timer() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 0){
            timerEl.textContent = "Time Left: " +timeLeft
            timeLeft--
        }
        else{
            endGame();
            clearInterval(timeInterval)
        }
    }, 1000);
}
function wrongAns() {
    footer.innerHTML = ""
    footer.innerHTML = "<p>Wrong!<p>"
    timeLeft = timeLeft - 20
}
function rightAns() {
    footer.innerHTML = ""
    footer.innerHTML = "<p>Right!<p>"
    timeLeft = timeLeft + 20
}

function firstQuestion() {
    mainTextArea.innerHTML = "<p>" + questions[0][0] + "<p>"
    var answerContainer = document.createElement("ul")
    var answer1 = document.createElement("li")
    var answer2 = document.createElement("li")
    var answer3 = document.createElement("li")
    var answer4 = document.createElement("li")
    var answerOpt1 = document.createElement("button")
    var answerOpt2 = document.createElement("button")
    var answerOpt3 = document.createElement("button")
    var answerOpt4 = document.createElement("button")
    mainTextArea.appendChild(answerContainer)
    answerContainer.appendChild(answer1)
    answerContainer.appendChild(answer2)
    answerContainer.appendChild(answer3)
    answerContainer.appendChild(answer4)
    answer1.appendChild(answerOpt1)
    answer2.appendChild(answerOpt2)
    answer3.appendChild(answerOpt3)
    answer4.appendChild(answerOpt4)
    answerOpt1.className = "answerOpt"
    answerOpt2.className = "answerOpt"
    answerOpt3.className = "answerOpt"
    answerOpt4.className = "answerOpt"
    answerOpt1.textContent = questions[0][1]
    answerOpt2.textContent = questions[0][2]
    answerOpt3.textContent = questions[0][3]
    answerOpt4.textContent = questions[0][4]
    answerOpt1.addEventListener("click", wrongAns)
    answerOpt2.addEventListener("click", wrongAns)
    answerOpt3.addEventListener("click", wrongAns)
    answerOpt4.addEventListener("click", rightAns)
    answerOpt1.addEventListener("click", secondQuestion)
    answerOpt2.addEventListener("click", secondQuestion)
    answerOpt3.addEventListener("click", secondQuestion)
    answerOpt4.addEventListener("click", secondQuestion)
};
function secondQuestion() {
    mainTextArea.innerHTML = ""
    mainTextArea.innerHTML = "<p>" + questions[1][0] + "<p>"
    var answerContainer = document.createElement("ul")
    var answer1 = document.createElement("li")
    var answer2 = document.createElement("li")
    var answer3 = document.createElement("li")
    var answer4 = document.createElement("li")
    var answerOpt1 = document.createElement("button")
    var answerOpt2 = document.createElement("button")
    var answerOpt3 = document.createElement("button")
    var answerOpt4 = document.createElement("button")
    mainTextArea.appendChild(answerContainer)
    answerContainer.appendChild(answer1)
    answerContainer.appendChild(answer2)
    answerContainer.appendChild(answer3)
    answerContainer.appendChild(answer4)
    answer1.appendChild(answerOpt1)
    answer2.appendChild(answerOpt2)
    answer3.appendChild(answerOpt3)
    answer4.appendChild(answerOpt4)
    answerOpt1.className = "answerOpt"
    answerOpt2.className = "answerOpt"
    answerOpt3.className = "answerOpt"
    answerOpt4.className = "answerOpt"
    answerOpt1.textContent = questions[1][1]
    answerOpt2.textContent = questions[1][2]
    answerOpt3.textContent = questions[1][3]
    answerOpt4.textContent = questions[1][4]
    answerOpt1.addEventListener("click", wrongAns)
    answerOpt2.addEventListener("click", wrongAns)
    answerOpt3.addEventListener("click", wrongAns)
    answerOpt4.addEventListener("click", rightAns)
    answerOpt1.addEventListener("click", thirdQuestion)
    answerOpt2.addEventListener("click", thirdQuestion)
    answerOpt3.addEventListener("click", thirdQuestion)
    answerOpt4.addEventListener("click", thirdQuestion)
};
function thirdQuestion() {
    mainTextArea.innerHTML = ""
    mainTextArea.innerHTML = "<p>" + questions[2][0] + "<p>"
    var answerContainer = document.createElement("ul")
    var answer1 = document.createElement("li")
    var answer2 = document.createElement("li")
    var answer3 = document.createElement("li")
    var answer4 = document.createElement("li")
    var answerOpt1 = document.createElement("button")
    var answerOpt2 = document.createElement("button")
    var answerOpt3 = document.createElement("button")
    var answerOpt4 = document.createElement("button")
    mainTextArea.appendChild(answerContainer)
    answerContainer.appendChild(answer1)
    answerContainer.appendChild(answer2)
    answerContainer.appendChild(answer3)
    answerContainer.appendChild(answer4)
    answer1.appendChild(answerOpt1)
    answer2.appendChild(answerOpt2)
    answer3.appendChild(answerOpt3)
    answer4.appendChild(answerOpt4)
    answerOpt1.className = "answerOpt"
    answerOpt2.className = "answerOpt"
    answerOpt3.className = "answerOpt"
    answerOpt4.className = "answerOpt"
    answerOpt1.textContent = questions[2][1]
    answerOpt2.textContent = questions[2][2]
    answerOpt3.textContent = questions[2][3]
    answerOpt4.textContent = questions[2][4]
    answerOpt1.addEventListener("click", wrongAns)
    answerOpt2.addEventListener("click", rightAns)
    answerOpt3.addEventListener("click", wrongAns)
    answerOpt4.addEventListener("click", wrongAns)
    answerOpt1.addEventListener("click", fourthQuestion)
    answerOpt2.addEventListener("click", fourthQuestion)
    answerOpt3.addEventListener("click", fourthQuestion)
    answerOpt4.addEventListener("click", fourthQuestion)
};
function fourthQuestion() {
    mainTextArea.innerHTML = ""
    mainTextArea.innerHTML = "<p>" + questions[3][0] + "<p>"
    var answerContainer = document.createElement("ul")
    var answer1 = document.createElement("li")
    var answer2 = document.createElement("li")
    var answer3 = document.createElement("li")
    var answer4 = document.createElement("li")
    var answerOpt1 = document.createElement("button")
    var answerOpt2 = document.createElement("button")
    var answerOpt3 = document.createElement("button")
    var answerOpt4 = document.createElement("button")
    mainTextArea.appendChild(answerContainer)
    answerContainer.appendChild(answer1)
    answerContainer.appendChild(answer2)
    answerContainer.appendChild(answer3)
    answerContainer.appendChild(answer4)
    answer1.appendChild(answerOpt1)
    answer2.appendChild(answerOpt2)
    answer3.appendChild(answerOpt3)
    answer4.appendChild(answerOpt4)
    answerOpt1.className = "answerOpt"
    answerOpt2.className = "answerOpt"
    answerOpt3.className = "answerOpt"
    answerOpt4.className = "answerOpt"
    answerOpt1.textContent = questions[3][1]
    answerOpt2.textContent = questions[3][2]
    answerOpt3.textContent = questions[3][3]
    answerOpt4.textContent = questions[3][4]
    answerOpt1.addEventListener("click", wrongAns)
    answerOpt2.addEventListener("click", wrongAns)
    answerOpt3.addEventListener("click", rightAns)
    answerOpt4.addEventListener("click", wrongAns)
    answerOpt1.addEventListener("click", fifthQuestion)
    answerOpt2.addEventListener("click", fifthQuestion)
    answerOpt3.addEventListener("click", fifthQuestion)
    answerOpt4.addEventListener("click", fifthQuestion)
};
function fifthQuestion() {
    mainTextArea.innerHTML = ""
    mainTextArea.innerHTML = "<p>" + questions[4][0] + "<p>"
    var answerContainer = document.createElement("ul")
    var answer1 = document.createElement("li")
    var answer2 = document.createElement("li")
    var answer3 = document.createElement("li")
    var answer4 = document.createElement("li")
    var answerOpt1 = document.createElement("button")
    var answerOpt2 = document.createElement("button")
    var answerOpt3 = document.createElement("button")
    var answerOpt4 = document.createElement("button")
    mainTextArea.appendChild(answerContainer)
    answerContainer.appendChild(answer1)
    answerContainer.appendChild(answer2)
    answerContainer.appendChild(answer3)
    answerContainer.appendChild(answer4)
    answer1.appendChild(answerOpt1)
    answer2.appendChild(answerOpt2)
    answer3.appendChild(answerOpt3)
    answer4.appendChild(answerOpt4)
    answerOpt1.className = "answerOpt"
    answerOpt2.className = "answerOpt"
    answerOpt3.className = "answerOpt"
    answerOpt4.className = "answerOpt"
    answerOpt1.textContent = questions[4][1]
    answerOpt2.textContent = questions[4][2]
    answerOpt3.textContent = questions[4][3]
    answerOpt4.textContent = questions[4][4]
    answerOpt1.addEventListener("click", wrongAns)
    answerOpt2.addEventListener("click", wrongAns)
    answerOpt3.addEventListener("click", wrongAns)
    answerOpt4.addEventListener("click", rightAns)
    answerOpt1.addEventListener("click", endGame)
    answerOpt2.addEventListener("click", endGame)
    answerOpt3.addEventListener("click", endGame)
    answerOpt4.addEventListener("click", endGame)
};
function endGame() {
    navEl.innerHTML = ""
    mainTextArea.innerHTML = ""
    footer.innerHTML = ""
    mainTextArea.innerHTML = "<p>All Done!<br>Your final score is<p>"
    mainTextArea.append(timeLeft)
};

startUp();