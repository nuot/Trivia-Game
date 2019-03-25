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
            a:"white", 
            b:"black", 
            c:"silver", 
            d:"golden"
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
    q10 ={
        question:"what color is it?",
        choices: {
            a: "lucky", 
            b: "cutey", 
            c: "fatty", 
            d: "biggie"
        },
        correctAnswer: 'a'

    }
]
console.log(quizContent[0].choices)

let timer
let correct = 0
let inCorrect = 0
let currQues = 0
let i = 0

const dispQuestion = _ =>{
    if (i >= quizContent.length){
        document.querySelector('#quiz').innerHTML = `<h1>Game over!</h1>`
        document.querySelector('#answer').innerHTML = `<h1>Your score:</h1>`
        document.querySelector('#timer').innerHTML = `<h1>Try again</h1>`

    } else {
        timer = 20
        quiz = quizContent[i].question
        choice = quizContent[i].choices
        rightAnswer = quizContent[i].correctAnswer
        document.querySelector('#quiz').innerHTML = '<h3>' + quiz + '</h3>'
        document.querySelector('#choices').innerHTML = '<p> a: </p>'+ quizContent[0].choices.a +'<p> b: </p>'+quizContent[0].choices.b
}
}
dispQuestion()

// const init = _ =>{
//     timer = 20
//     document.querySelector('#timer').innerHTML = `Time Remining : ${timer} seconds`
// }

// const timeLeft = _ =>{
//     document.querySelector('#timer').innerHTML =  `Time Remining : ${timer} seconds`
//     timer --
// }

// const stopper = _ =>{
//     clearInterval()
// }

// const restart = _ =>{
//     document.querySelector(`#quiz`).innerHTML = ''
//     document.querySelector(`#answer`).innerHTML= ''
// }




// init()
