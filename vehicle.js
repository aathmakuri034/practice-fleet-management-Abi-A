class Vehicle{
    constructor(type, make, model, year, mileage = 0){
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    drive(distance){
        this.mileage += distance;
    }

    getDetails(){
        return `This ${this.year} ${this.make} ${this.model} ${this.type} has ${this.mileage} miles.`;
    }
}


let car = new Vehicle("car", "Honda", "Civic", 2023, 2000);
let truck = new Vehicle("truck", "Ford", "F-150", 2000, 12000);
let motorcycle = new Vehicle("motorcycle", "Harley", "Cruiser", 2013);

car.drive(1000);
truck.drive(4000);
motorcycle.drive(800);


console.log(car.getDetails());
console.log(truck.getDetails());
console.log(motorcycle.getDetails());