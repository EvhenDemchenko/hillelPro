function Man(name, age) {
    this.name = name;
    this.age = age;

    this.getInfo = function () {
        console.log(this.name, this.age);
    }
}


const Alex = new Man('Alex', 22)
Alex.getInfo();


function Car(engine, seats, runAndDrive, owner) {
    this.engine = engine;
    this.seats = seats;
    this.runAndDrive = runAndDrive;
    this.owner = 'no owner';

    this.aboutCar = function () {
        if (typeof this.owner === "object"){
            console.log(` 
            1 : engine model is  ${this.engine}
            2 : number of seats  is ${this.seats} 
            3 : runAndDrive is  ${this.runAndDrive} 
            4 : owner is  ${this.owner.name} and he is ${this.owner.age};
            `);
        }else {
            console.log(` 
            1 : engine model is  ${this.engine}
            2 : number of seats  is ${this.seats}
            3 : runAndDrive is  ${this.runAndDrive}`);
        }
    }
    this.setOwner = function (Name, Age) {
        if (Name === '' || Age < 18) {
            return false
        } else {
            this.owner = {
                name: Name,
                age: Age,
            }
        }
    }
}

const xyndai = new Car('g4kj', 4, false);
xyndai.setOwner('Yevhen' , 25);
// console.log(xyndai);
xyndai.aboutCar();