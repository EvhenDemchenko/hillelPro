// person constructor
function Man(name, age) {
    this.name = name;
    this.age = age;

    this.getInfo = function () {
        console.log(this.name, this.age);
    }
}
// creating person
function getPerson() {
    const  Alex = new Man('Alex', 22);
    return Alex;
}

// car constructor
function Car(engine, seats, runAndDrive,) {
    this.engine = engine;
    this.seats = seats;
    this.runAndDrive = runAndDrive;


    this.setOwner = function (obj) {
        // setting  our Object
        if (obj === undefined) {
            console.log('first set Person in task 1')
        } else {
            this.owner = obj;
        }
    }
    this.aboutCar = function () {
        const info = `
            1 : engine model is  ${this.engine}
            2 : number of seats  is ${this.seats} 
            3 : runAndDrive is  ${this.runAndDrive}`;
        if (this.owner instanceof Man) {
            console.group(`${info}
            4 : owner is  ${this.owner.name} 
            and he is ${this.owner.age};
            `)
        } else {
            console.log(info);
        }
    }
}


// get our Person
document.querySelector('.btn1').addEventListener('click', getPerson);

//creating car &  set object as owner
document.querySelector('.btn').addEventListener('click', () => {
    const hyundai = new Car('g4kj', 4, false);
    hyundai.setOwner(getPerson());
    hyundai.aboutCar();
})