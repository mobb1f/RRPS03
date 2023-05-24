class Car {
    constructor(name) {
      this.type = "Car";
      this.name = name;
    }
  }
  
  class Bike {
    constructor(name) {
      this.type = "Bike";
      this.name = name;
    }
  }
  
  class VehicleFactory {
    createVehicle(type, name) {
      switch (type) {
        case "Car":
          return new Car(name);
        case "Bike":
          return new Bike(name);
        default:
          return null;
      }
    }
  }
  
  const factory = new VehicleFactory();
  const car = factory.createVehicle("Car", "Audi");
  console.log(car); // Car { type: 'Car', name: 'Audi' }
  