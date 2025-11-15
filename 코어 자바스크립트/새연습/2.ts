class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getInitial(): string {
    const firstInitial = this.firstName.charAt(0).toUpperCase();
    const lastInitial = this.lastName.charAt(0).toUpperCase();
    return `${firstInitial}.${lastInitial}`;
  }
}

class Dog {
  name: string;
  size: number;
  age: number;

  constructor(name: string, size: number, age: number) {
    this.name = name;
    this.size = size;
    this.age = age;
  }

  bark(): string {
    if (this.size >= 50) {
      return "Wooof! Woof!";
    } else if (this.size >= 20) {
      return "Ruff! Ruff!";
    } else {
      return "Yip! Yip!";
    }
  }

  calHumanAge(): number {
    return 12 + (this.age - 1) * 7;
  }
}

class Plant {
  species: string;
  height: number;
  age: number;

  constructor(species: string, height: number, age: number) {
    this.species = species;
    this.height = height;
    this.age = age;
  }

  photosynthesize(sunlightHours: number): string {
    if (sunlightHours > 12) {
      return "Too much sunlight";
    } else if (sunlightHours >= 8) {
      return "Healthy growth!";
    } else {
      return "Needs more sunlight!";
    }
  }

  absorbWater(waterAmount: number): string {
    if (waterAmount < 1) {
      return "Needs more water!";
    } else if (waterAmount <= 2) {
      return "Perfectly watered!";
    } else {
      return "Overwatered!";
    }
  }
}
