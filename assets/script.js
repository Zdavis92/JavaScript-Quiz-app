var navEl = document.querySelector("#nav")
var mainTextArea = document.querySelector("#mainTextArea")
var footer = document.querySelector("#footer")
var timerEl = document.querySelector("#timer")
var timeLeft = 100;
var timeInterval
var score = ""
var playerInitials = ""
var savedHighScores = []
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
    startButton.addEventListener("click", startTimer)

}
function startTimer() {
    timeInterval = setInterval(timer, 1000)
}
function timer() {
        if (timeInterval && timeLeft > 0) {
            timerEl.textContent = "Time Left: " + timeLeft
            timeLeft--
        }
        else {
            endGame();
            clearInterval(timeInterval)
        }
};
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
    timeInterval = !timeInterval
    navEl.innerHTML = ""
    mainTextArea.innerHTML = ""
    footer.innerHTML = ""
    if (timeLeft < 0)
        timeLeft = 0
    score = timeLeft.toString()
    mainTextArea.innerHTML = "<p>All Done!<br>Your final score is<p>"
    var scoreEl = document.createElement("p")
    scoreEl.textContent = score
    mainTextArea.appendChild(scoreEl)
    var inputInitLabel = document.createElement("label")
    var inputInitInput = document.createElement("input")
    var inputBtn = document.createElement("button")
    inputInitLabel.for = "initials"
    inputInitLabel.textContent = "Enter your intitals"
    inputInitLabel.className = "inputLabel"
    inputInitInput.name = "inititals"
    inputInitInput.id = "initials"
    inputBtn.className = "answerOpt"
    inputBtn.textContent = "Save Score"
    mainTextArea.appendChild(inputInitLabel)
    mainTextArea.appendChild(inputInitInput)
    mainTextArea.appendChild(inputBtn)
    inputBtn.addEventListener("click", savePlInt)
};
function savePlInt() {
    initialField = document.getElementById("initials")
    var playerInfo = {
        initials: initialField.value.trim(),
        playerScore: score
    };
    savedHighScores = JSON.parse(localStorage.getItem("highScores"))
    if (savedHighScores === null) {
        savedHighScores = []
        savedHighScores.push(playerInfo);
        localStorage.setItem("highScores", JSON.stringify(savedHighScores))
        highScores();
    }
    else {
        savedHighScores.push(playerInfo);
        savedHighScores.sort((a, b) => b.playerScore - a.playerScore);
        localStorage.setItem("highScores", JSON.stringify(savedHighScores));
        highScores();
    }
};


function highScores() {
    mainTextArea.innerHTML = ""
    mainTextArea.innerHTML = "<p>Top 5<br>High Scores!<p>"
    for (i = 0; i < savedHighScores.length; i++) {
        var scoreEl = document.createElement("p")
        scoreEl.textContent = savedHighScores[i].initials + " with a score of " + savedHighScores[i].playerScore
        mainTextArea.appendChild(scoreEl)
        if (i === 4) {
            return false
        }
    }
    var startOver = document.createElement("button")
    var quit = document.createElement("button")
    startOver.textContent = "Would you like to play again?"
    quit.textContent = "Quit"
    startOver.className = "answerOpt"
    quit.className = "answerOpt"
    footer.appendChild(startOver)
    footer.appendChild(quit)
};

startUp();