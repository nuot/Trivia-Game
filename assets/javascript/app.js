// need update js
// still have trouble comparing with the correct answer & move to next question


const quizContent = [
    q1 = {
        question: "what is my cat's name?",
        choices: {
            a: "lucky",
            b: "cutey",
            c: "fatty",
            d: "biggie"
        },
        correctAnswer: 'a'

    },
    q2 = {
        question: "what color is it?",
        choices: {
            a: "white",
            b: "black",
            c: "silver",
            d: "golden"
        },
        correctAnswer: "c"
    },

    q3 = {
        question: "what is my cat's name?",
        choices: {
            a: "lucky",
            b: "cutey",
            c: "fatty",
            d: "biggie"
        },
        correctAnswer: 'a'

    },

    q4 = {
        question: "what is my cat's name?",
        choices: {
            a: "lucky",
            b: "cutey",
            c: "fatty",
            d: "biggie"
        },
        correctAnswer: 'a'


    },
    q5 = {
        question: "what color is it?",
        choices: {
            a: "lucky",
            b: "cutey",
            c: "fatty",
            d: "biggie"
        },
        correctAnswer: 'a'

    },
    q6 = {
        question: "what is my cat's name?",
        choices: {
            a: "lucky",
            b: "cutey",
            c: "fatty",
            d: "biggie"
        },
        correctAnswer: 'a'

    },

    q7 = {
        question: "what is my cat's name?",
        choices: {
            a: "lucky",
            b: "cutey",
            c: "fatty",
            d: "biggie"
        },
        correctAnswer: 'a'


    },
    q8 = {
        question: "what color is it?",
        choices: {
            a: "lucky",
            b: "cutey",
            c: "fatty",
            d: "biggie"
        },
        correctAnswer: 'a'

    },
    q9 = {
        question: "what is my cat's name?",
        choices: {
            a: "lucky",
            b: "cutey",
            c: "fatty",
            d: "biggie"
        },
        correctAnswer: 'a'


    },
    q10 = {
        question: "what color is it?",
        choices: {
            a: "lucky",
            b: "cutey",
            c: "fatty",
            d: "biggie"
        },
        correctAnswer: 'a'

    }
]


let timer = 20
let correct = 0
let inCorrect = 0
let currQues = 0
let i = 0
let ifStart = false
let isNext = false
let correctAnswer = quizContent[i].correctAnswer

document.addEventListener('click', event => {
    if (event.target.className === 'start' && ifStart === false) {
        dispQuestion()
        let submitter = document.createElement('button')
        submitter.textContent = 'Submit'
        document.querySelector('.submit').append(submitter)
        ifStart = true
        timeLeft()
        answerCheck()
    }
}
)


const dispQuestion = _ => {
    if (i >= quizContent.length) {
        document.querySelector('#quiz').innerHTML = `<h1>Game over!</h1>`
        document.querySelector('#timer').innerHTML = `<h1>Try again</h1>`
        stopper()

    } else {
        quiz = quizContent[i].question
        choice = quizContent[i].choices
        rightAnswer = quizContent[i].correctAnswer
        document.querySelector('#quiz').innerHTML = '<h3>' + quiz + '</h3>'
        document.querySelector('#choices').innerHTML = '<button>a</button>' + quizContent[i].choices.a + '<br></br>' + '<button>b</button>' + quizContent[i].choices.b + '<br></br>' + '<button>c</button>' + quizContent[i].choices.c + '<br></br>' + '<button>d</button>' + quizContent[i].choices.d + '<br></br>'
        timer = 10
    }
}


// document.addEventListener('click', event =>{
//     if (event.target.className === 'submit'){
//         i++
//         dispQuestion()
//     }
// })

// const init = _ =>{
//     timer = 20
//     document.querySelector('#timer').innerHTML = `Time Remining : ${timer} seconds`
// }

const timeLeft = _ => {
    timeRemining = setInterval(() => {
        timer--
        document.querySelector('#timer').innerHTML = `Time Remining : ${timer} seconds`
        if (timer <= 0) {
            stopper()
            document.querySelector('.start').innerHTML = 'Time is up, next question!'
            isNext = true
        }
    }
        , 1000)
}

// const answerCheck = _ =>{
//     if (e.target. === correctAnswer){
//         document.querySelector('.start').innerHTML = 'You Are Correct! Next Question!'
//         i++
//         dispQuestion(
//         timeLeft()
//         )
//     }
// }
const answerCheck = _ => {
    document.addEventListener('click', event => {
        if (event.target.innerHTML === correctAnswer) {
            i++
            dispQuestion()
            
        } else {
            i++
            dispQuestion()
        }
    })
}



document.addEventListener('click', event => {
    if (event.target.className === 'start' && isNext === true && timer <= 0) {
        i++
        dispQuestion()
        timeLeft()
    }
})

const stopper = _ => {
    clearInterval(timeRemining)
}

// const restart = _ =>{
//     document.querySelector(`#quiz`).innerHTML = ''
//     document.querySelector(`#answer`).innerHTML= ''
// }




// init()
