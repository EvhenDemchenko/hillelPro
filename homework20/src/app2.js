// document.querySelector('.btn2').addEventListener('click', () => {
//     let result = getAge();
//     console.log(result);
// });

export default function getAge() {
    let age = +prompt('enter age')
    let result = '';
    if (age >= 18 && age <= 100) {
        result = ' Ура ';
        return result;
    } else {
        return false;
    }
}
