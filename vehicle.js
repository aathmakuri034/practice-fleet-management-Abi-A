class Vehicle{

    constructor(type, make, model, year, milage){
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.milage = milage;
    }

    drive(distance){
        this.milage += distance;
    }

    getDetails(){
        console.log(`This is vehicle is ${this.type}`);
        console.log(`You have a ${this.year} ${this.make} ${this.model}`);
        console.log(`Current Milage: ${this.milage}\n`);
    }
}


car = new Vehicle("sedan", "honda", "accord", "2021", 10000)
car.getDetails()

car.drive(3000)

car.getDetails()