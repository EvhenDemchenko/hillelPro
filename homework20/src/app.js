import app2 from './app2'
import './styles/_colors.css'

document.querySelector('.btn1').addEventListener('click', () => {
    console.log(taskOne())
});

function taskOne_1() {
    let inputValue;
    for (let i = 0; i < 10; i++) {
        inputValue = prompt('enter value > 100');
        if (inputValue > 100 || isNaN(inputValue)) {
            return inputValue
        }
    }
}


document.querySelector('.btn2').addEventListener('click', () => {
    console.log(app2());
});

function taskOne() {
    let userInput
    for (let i = 0; i < 10; i++) {
        userInput = prompt('enter number > 100');
        if (userInput > 100 || isNaN(userInput)) {
            break;
        }
    }
    console.log(userInput);
}


console.log('qweqweqweqweqewqweqwe')