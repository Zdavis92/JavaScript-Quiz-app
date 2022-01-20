var mainTextArea = document.querySelector("#mainTextArea")

var questions = Array();

questions[0] = ["Commonly used data types DO NOT include:", "Booleans", "Numbers", "Strings", "Alerts"]
questions[1] = ["Arrays in Javascrpit can be used to store:", "numbers", "arrays", "booleans", "all of the above"]
questions[2] = ["The conditions of an If/Else statement is enclosed with:", "quotation marks", "parentheses", "square brackets", "curly brackets"]
questions[3] = ["String value must be enclosed in _______ when being assigned to a variable", "commas", "curly brackets", "quotes", "parentheses"]
questions[4] = ["A useful tool used during development and debugging for printing content to the debugger is:", "JavaScript", "terminal/bash", "for loop", "console.log"]
console.log(questions[0][1])

function startUp() {
    mainTextArea.innerHTML = "<p>Welcome to the JavaScript quiz! <br> Try to beat the High Score!</p>"
    var startButton = document.createElement("button");
    startButton.textContent = "Start Quiz!"
    startButton.className = "startBtn"
    startButton.id = "startBtnId"

    mainTextArea.appendChild(startButton)
    startButton.addEventListener("click", startQuiz)

}

function startQuiz() {
    console.log("quiz started")
}

startUp();