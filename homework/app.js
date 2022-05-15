document.querySelector('.btn1').addEventListener('click', () => {
    console.log(taskOne())
});

function taskOne() {
    let inputValue;
    for (let i = 0; i < 10; i++) {
        inputValue = prompt('enter value > 100');
        if (inputValue > 100) {
            return inputValue;
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

