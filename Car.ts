interface Vehicule {
  make: string;
  model: string;
  year: number;
  start(): void;
}
class Car implements Vehicule {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log(`${this.make} engine started`);
  }
}

const jeep: Car = new Car("wrangler", "Rubicon 392 ", 2018);
jeep.start;
