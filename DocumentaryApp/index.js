var screens = {
    homeScreen: document.getElementById('homeScreen'),
    assessmentScreen: document.getElementById('assessmentScreen'),
    resultsScreen: document.getElementById('resultsScreen'),
    learnScreen: document.getElementById('learnScreen'),
    quizScreen: document.getElementById('quizScreen'),
    correctIncorrectScreen: document.getElementById('correctIncorrectScreen'),
}

var learnScreenIndex = 0 // 0/15

var learnScreens = [
    {
        type: "info",
        code: `//Note: console.log outputs whatever is inside the ()\n\nconsole.log("Hello world!")`,
        question: "The above code outputs",
        answer: "Hello World!"
    },
    {
        type: "quiz",
        code: `console.log("Pope John Paul")`,
        question: "What is the output of the following lines of code?",
        answers: [`Pope John Paul`, `pjp`, `undefined`],
        correctAnswer: 1
    },
    {
        type: "info",
        code: `/*Note:\n"word" is a string\ntrue is a boolean\n10 is number*/\n\nconsole.log(typeof "hello")`,
        question: "The above code outputs",
        answer: "string"
    },
    {
        type: "quiz",
        code: `console.log(typeof "Pope John Paul")`,
        question: "What is the output of the following lines of code?",
        answers: [`number`, `string`, `boolean`],
        correctAnswer: 2
    },
    {
        type: "info",
        code: `/*Note:\n"word" is a string\ntrue is a boolean\n10 is number*/\n\nconsole.log(typeof false)`,
        question: "The above code outputs",
        answer: "boolean"
    },
    {
        type: "quiz",
        code: `console.log(typeof true)`,
        question: "What is the output of the following lines of code?",
        answers: [`number`, `string`, `boolean`],
        correctAnswer: 3
    },
    {
        type: "info",
        code: `/*Note:\n"word" is a string\ntrue is a boolean\n10 is number*/\n\nconsole.log(typeof 10)`,
        question: "The above code outputs",
        answer: "number"
    },
    {
        type: "quiz",
        code: `console.log(typeof 24)`,
        question: "What is the output of the following lines of code?",
        answers: [`number`, `string`, `boolean`],
        correctAnswer: 1
    },
    {
        type: "info",
        code: `//Note: A comparison (< or >) results in true or false.\n\nconsole.log(10 > 9)`,
        question: "The above code outputs",
        answer: "true"
    },
    {
        type: "quiz",
        code: `console.log(10 < 9)`,
        question: "What is the output of the following lines of code?",
        answers: [`true`, `false`, `undefined`],
        correctAnswer: 2
    },
    {
        type: "info",
        code: `//Note: A basic arithmetic operation ouputs the resulting number.\n\nconsole.log(3 + 4)`,
        question: "The above code outputs",
        answer: "7"
    },
    {
        type: "quiz",
        code: `console.log(5 + 5)`,
        question: "What is the output of the following lines of code?",
        answers: [`10`, `55`, `"5"`],
        correctAnswer: 1
    },
    {
        type: "info",
        code: `//Note: Including a ! outputs the opposite.\n\nconsole.log(!false)`,
        question: "The above code outputs",
        answer: "true"
    },
    {
        type: "quiz",
        code: `console.log(!true)`,
        question: "What is the output of the following lines of code?",
        answers: [`true`, `undefined`, `false`],
        correctAnswer: 3
    },
    {
        type: "info",
        code: `//Note: .length ouputs how long the text is.\n\nconsole.log("hello".length)`,
        question: "The above code outputs",
        answer: "5"
    },
    {
        type: "quiz",
        code: `console.log("name".length)`,
        question: "What is the output of the following lines of code?",
        answers: [`4`, `5`, `3`],
        correctAnswer: 1
    },
    {
        type: "info",
        code: `//Note: Adding two pieces of text (strings) together combines the strings.\n\nconsole.log("Hello" + "World!")`,
        question: "The above code outputs",
        answer: "HelloWorld!"
    },
    {
        type: "quiz",
        code: `console.log("I " + " am " + " awesome!")`,
        question: "What is the output of the following lines of code?",
        answers: [`I am awesome!`, `Iamawesome!`, `I amawesome!`],
        correctAnswer: 1
    },
    {
        type: "info",
        code: `//Note: A basic arithmetic operation ouputs the resulting number.\n\nconsole.log(8 / 2)`,
        question: "The above code outputs",
        answer: "4"
    },
    {
        type: "quiz",
        code: `console.log(15/3)`,
        question: "What is the output of the following lines of code?",
        answers: [`Five`, `5`, `undefined`],
        correctAnswer: 2
    }
]

function setScreen(screenName) {
    for (var screenIndex in screens) {
        screens[screenIndex].classList.remove("active")
        screens[screenIndex].classList.add("inactive")
    }

    screens[screenName + "Screen"].classList.add("active")
}

function updateLearnScreen(screenNumber) {
    if (screenNumber == learnScreens.length) {
        setScreen("home")

        return
    }

    var screenData = learnScreens[screenNumber]

    if (screenData.type == "info") {
        setScreen("learn")

        var highlightedCode = hljs.highlight(screenData.code, {language: "JavaScript"}).value

        $("#learnScreenCodeText").html(highlightedCode)
        $("#learnScreenQuestionText").text(screenData.question)
        $("#learnScreenAnswerText").text(screenData.answer)
    } else if (screenData.type == "quiz") {
        setScreen("quiz")

        var highlightedCode = hljs.highlight(screenData.code, {language: "JavaScript"}).value

        $("#quizScreenCodeText").html(highlightedCode)
        $("#quizScreenQuestionText").text(screenData.question)
        $("#quizScreenAnswer1Text").text(screenData.answers[0])
        $("#quizScreenAnswer2Text").text(screenData.answers[1])
        $("#quizScreenAnswer3Text").text(screenData.answers[2])
    }

    hljs.highlightAll();

    $(".learn-percent-indicator").text(`${learnScreenIndex + 1}/${learnScreens.length}`)
}


async function checkAnswer(learnScreenIndex, selectedAnswer) {
    var screenData = learnScreens[learnScreenIndex]
    var correctAnswer = screenData.correctAnswer

    setScreen("correctIncorrect")

    if (selectedAnswer == correctAnswer) {
        $(`#correctIncorrectText`).text("Correct!")
        $(`#correctIncorrectPandaImage`).attr("src", "./PandaHappy.png")
        $(`#correctIncorrectScreenText`).text("Great job! You got it!")
        $(`#correctIncorrectNextButton`).text("Next")
    } else {
        $(`#correctIncorrectText`).text("Incorrect")
        $(`#correctIncorrectPandaImage`).attr("src", "./PandaSad.png")
        $(`#correctIncorrectScreenText`).text("Oh no! Try again!")
        $(`#correctIncorrectNextButton`).text("Learn Again")
    }
}

async function startLearn() {
    await setScreen("learn")

    learnScreenIndex = 0

    updateLearnScreen(learnScreenIndex)
}

async function main() {
    await setScreen("home")
}

$("#learnButton").on("click", async function() {
    await startLearn()
})

$("#learnScreenNextButton").on("click", async function() {
    learnScreenIndex += 1
    updateLearnScreen(learnScreenIndex)
})

$("#quizScreenAnswer1Text").on("click", async function() {
    checkAnswer(learnScreenIndex, 1)
})

$("#quizScreenAnswer2Text").on("click", async function() {
    checkAnswer(learnScreenIndex, 2)
})

$("#quizScreenAnswer3Text").on("click", async function() {
    checkAnswer(learnScreenIndex, 3)
})

$("#correctIncorrectNextButton").on("click", async function() {
    var correctOrIncorrect = $(`#correctIncorrectText`).text()

    if (correctOrIncorrect == "Correct!") {
        learnScreenIndex += 1
        updateLearnScreen(learnScreenIndex)    
    } else {
        learnScreenIndex -= 1
        updateLearnScreen(learnScreenIndex)
    }
})

main()