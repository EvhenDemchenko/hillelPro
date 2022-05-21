function Man(name, age) {
    this.name = name;
    this.age = age;

    this.getInfo = function () {
        console.log(this.name, this.age);
    }
}


document.querySelector('.btn1').addEventListener('click', () => {
    const Alex = new Man(prompt('enter name'), prompt('enter age'));
    Alex.getInfo();
});

document.querySelector('.btn').addEventListener('click', () => {
    const hyundai = new Car(prompt('enter engine version'), prompt('enter seats count'), prompt('is your car work?'));
    hyundai.setOwner(prompt('owner name'), +prompt('owner age'));
    hyundai.aboutCar();
})

function Car(engine, seats, runAndDrive,) {
    this.engine = engine;
    this.seats = seats;
    this.runAndDrive = runAndDrive;

    this.aboutCar = function () {
        console.group(`
            1 : engine model is  ${this.engine}
            2 : number of seats  is ${this.seats} 
            3 : runAndDrive is  ${this.runAndDrive} `)
        if (typeof this.owner === "object") {
            console.log(` 
                4 : owner is  ${this.owner.name} and he is ${this.owner.age};
            `);
        }
    }

    this.setOwner = function (name, age) {
        if (name === '' || age < 18 || age > 100) {
            return false
        } else {
            this.owner = {
                name: name,
                age: age,
            }
        }
    }
}

