document.querySelector('.btn1').addEventListener('click', () => {
    console.log(taskOne())
});
// первый вариант
function taskOne() {
    let inputValue;
    for (let i = 0; i < 10; i++) {
        inputValue = prompt('enter value > 100');
        if (inputValue > 100) {
            return +inputValue;
        } else if (inputValue < 100) {
            if (i === 9) {
                return inputValue;
            } else {
                continue;
            }
        } else {
            return inputValue;
        }
    }
}
// второй вариант
function taskOne1() {
    let inputValue;
    for (let i = 0; i < 10; i++) {
        inputValue = prompt('enter value > 100');
        if (inputValue > 100 || i === 9 || isNaN(inputValue)) {
            return inputValue
        }
    }
}


