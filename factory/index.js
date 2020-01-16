// uses Factory methods to create an object
// create an oject without exposing the instantiation logic
// usage: create object conditionally

class Car {
    constructor(options) {
        this.doors = options.doors || 4;
        this.state = options.state || 'brand new';
        this.color = options.color || 'white';
    }
}

class Truck {
    constructor(options) {
        this.doors = options.doors || 4;
        this.color = options.color || 'white'
    }
}

class VehicleFactory {
    createVehicle(options) {
        if (options.vehicleType === 'car')
            return new Car(options);
        if (options.vehicleType === 'truck')
            return new Truck(options);
    }
}


// Test it:
const factory = new VehicleFactory();

const car = factory.createVehicle({
    vehicleType: 'car',
    color: 'silver'
});

const truck = new VehicleFactory().createVehicle({
    vehicleType: 'truck',
    color: 'red'
});

console.log(car.color);
console.log(truck.color);
