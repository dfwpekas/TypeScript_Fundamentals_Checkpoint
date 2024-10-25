// 1 // Define an interface named Vehicle with the following properties:
// // make of type string
// // model of type string
// // year of type number
// // start method which returns void and logs "Engine started" to the console.
// 2  // Implement a class named Car that implements the Vehicle interface. The Car class should have:
// A constructor that initializes the make, model, and year properties.
// Implement the start method to log "Car engine started" to the console.
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log('Engine Started');
    };
    return Car;
}());
// 3 Create an instance of the Car class and initialize it with some values for make, model, and year.
var newCar = new Car('Mercedes-Benz', 'S-Class', 2023);
// 4 Call the start method on the instance of the Car class.
newCar.start(); // Engine Started
