var mainTextArea = document.querySelector("#mainTextArea")
var footer = document.querySelector("#footer")
// questions to be used in the quiz stored in a nested array
var questions = Array();

questions[0] = ["Commonly used data types in JavaScript DO NOT include:", "Booleans", "Numbers", "Strings", "Alerts"]
questions[1] = ["Arrays in Javascrpit can be used to store:", "numbers", "arrays", "booleans", "all of the above"]
questions[2] = ["The conditions of an If/Else statement is enclosed with:", "quotation marks", "parentheses", "square brackets", "curly brackets"]
questions[3] = ["String value must be enclosed in _______ when being assigned to a variable", "commas", "curly brackets", "quotes", "parentheses"]
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

}
function wrongAns() {
    var wrong = document.createElement("p")
    wrong.textContent = "Wrong!"
    footer.appendChild(wrong)
}
function rightAns() {
    var right = document.createElement("p")
    right.textContent = "Right!"
    footer.appendChild(right)
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
    answerOpt1.addEventListener("click", wrongAns, test())
    answerOpt2.addEventListener("click", wrongAns)
    answerOpt3.addEventListener("click", wrongAns)
    answerOpt4.addEventListener("click", rightAns)
};
function test() {
    console.log("working");
};

startUp();