document.querySelector('.btn1').addEventListener('click', () => {
    console.log(taskOne())
});

function taskOne() {
    let number;
    for (let i = 0; i < 10; i++) {
        number = +prompt('enter number > 100 : ');
        if (number > 100) return number;
    }
    console.log('все числа были меньше 100');
}

