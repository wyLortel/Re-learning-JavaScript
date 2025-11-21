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

const plant1 = new Plant("Rose", 10, 1);
console.log(plant1.photosynthesize(6));
console.log(plant1.absorbWater(0));

const plant2 = new Plant("Oak", 200, 50);
console.log(plant2.photosynthesize(10));
console.log(plant2.absorbWater(2));

const plant3 = new Plant("Cactus", 30, 100);
console.log(plant3.photosynthesize(15));
console.log(plant3.absorbWater(3));

function federalTax(income: number): number {
  return income * 0.21;
}

function printTaxByState(state: string) {
  const stateRates: Record<string, number> = {
    Arizona: 0.049,
    California: 0.088,
    Northcarolina: 0.025,
  };

  const stateRate = stateRates[state];

  if (stateRate === undefined) {
    throw new Error(`State "${state}" is not supported.`);
  }

  return function (income: number): void {
    const federal = federalTax(income);
    const stateTax = income * stateRate;
    const total = federal + stateTax;

    console.log(`Federal Tax: ${federal}`);
    console.log(`${state} State Tax: ${stateTax}`);
    console.log(`Tax Amount: ${total}`);
  };
}

function swapCase(charList: string[]): string[] {
  // 関数を完成させてください
  return charList.map((ch) =>
    ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
  );
}

function ageCheck(ages: number[]): number[] {
  // 関数を完成させてください
  return ages.filter((age) => age > 18);
}
