function Man(name, age) {
    this.name = name;
    this.age = age;

    this.getInfo = function () {
        console.log(this.name, this.age);
    }
}


const Alex = new Man('Alex', 22)
Alex.getInfo();


function Car(engine, seats, runAndDrive, owner = null) {
    this.engine = engine;
    this.seats = seats;
    this.runAndDrive = runAndDrive;
    this.owner = owner;

    this.aboutCar = function () {
        console.log(`engine is ${this.engine}\n, number of seats ${this.seats}\n, condition ${runAndDrive}`);
    }
    this.owner  = function () {
        console.log('my car is ',this.name, this.age )
    }
}
const toyota = new Car('4efe' , 4 , true , Alex );
toyota.aboutCar();
toyota.owner.bind(Alex)();

