const rangeForm = document.querySelector(".js-rangeForm"),
    range = rangeForm.querySelector("input"),
    numberForm = document.querySelector(".js-numberForm"),
    number = numberForm.querySelector("input"),
    playBtn = numberForm.querySelector("button"),
    question = document.querySelector("h3");
const resultContainer = document.querySelector("div"),
    guesingAndAnswer = resultContainer.querySelector(".js-resultBoard"),
    result = resultContainer.querySelector(".js-result");

let maxNumber = 0,
    answer = 0,
    guesing = 0;

function setQuestion(number) {
    question.innerText = `Generate a number between 0 and ${number}`;
}

function setAnswer(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function handleClick(event) {
    event.preventDefault();
    answer = setAnswer(maxNumber);
    guesing = number.value;
    guesingAndAnswer.innerText = `You choose: ${guesing}, the answer: ${answer}`;
    if (guesing == answer) {
        result.innerText = "You Won!";
    } else {
        result.innerText = "You lost!";
    }
}

function handleSlide() {
    maxNumber = range.value;
    setQuestion(maxNumber);
}

function init() {
    range.addEventListener("change", handleSlide);
    playBtn.addEventListener("click", handleClick);
}

init();