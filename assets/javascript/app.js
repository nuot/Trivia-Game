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
        question: "what color is it?"
        choices: {
            a:"white", 
            b:"black", 
            c:"silver", 
            d:"golden"
        },
        correctAnswer: "c"
    }
    q3 = {
        question: "what is my cat's name?",
        choices: {
            a: "lucky", 
            b: "cutey", 
            c: "fatty", 
            d: "biggie"
        },
        correctAnswer: 'a'

    }

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
        question: "what color is it?"
        choices: {
            a: "lucky", 
            b: "cutey", 
            c: "fatty", 
            d: "biggie"
        },
        correctAnswer: 'a'

    }
    q6 = {
        question: "what is my cat's name?",
        choices: {
            a: "lucky", 
            b: "cutey", 
            c: "fatty", 
            d: "biggie"
        },
        correctAnswer: 'a'

    }

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
        question: "what color is it?"
        choices: {
            a: "lucky", 
            b: "cutey", 
            c: "fatty", 
            d: "biggie"
        },
        correctAnswer: 'a'

    }
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
        question:"what color is it?"
        choices: {
            a: "lucky", 
            b: "cutey", 
            c: "fatty", 
            d: "biggie"
        },
        correctAnswer: 'a'

    }
]

let timer
let correct
let inCorrect

const init = _ =>{
    timer = 10
    document.querySelector('#timer').innerHTML = '10s'
}

const restart = _ =>{
    document.querySelector(`#quiz`).innerHTML = ''
    document.querySelector(`#answer`).innerHTML= ''
    
}


init()

