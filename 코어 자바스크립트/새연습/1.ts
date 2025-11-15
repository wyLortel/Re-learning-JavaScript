interface User {
  name?: string;
  age: number;
}

interface Developer extends User {
  skill: string;
}

var sehi: User = { name: "세히", age: 12 };

type User2 = {
  name: string;
  age: number;
};

const user: User2 = {
  name: "우영",
  age: 29,
};

// type Product = {
//   name : string;

// }

// type ID =string;
// type Product = Tshirt | Shoes ;
// type Product2 = Tshirt & Shoes ;

// type Person = {
//   name : string;
//   age : number;
// }

// // type Developer = {
// //   skill : string
// // }

// var joo: Person & Developer = {
//   name : '형주',
//   age : 21,
//   skill : '웹 개발'
// }

// function getText(text) {
//   return text;
// }

// function getText(text: string): string {
//   return text;
// }

// function getNumber(num: number): number {
//   return num;
// }

// interface Dropdown<T> {
//   value: T;
//   selected: boolean;
// }

// class Duck {
//   quack(): void {
//     console.log("Quack!");
//   }
// }

// class Robbot {
//   quack(): void {
//     console.log("Robbot Quack!");
//   }
// }

// class Chiken {
//   cluck(): void {
//     console.log("cluck");
//   }
// }

// // function makeItQuack(animal: { quack(): void }) {
// //   animal.quack();
// // }

// let duck = new Duck();
// let robot = new Robbot();
// let chiken = new Chiken();

// makeItQuack(duck);
// makeItQuack(robot);
// // makeItQuack(chiken) 오류

// function isQuackable(animal:any):animal is {quack:()=> void} {
//   return "quack" in animal;
// }

// function makeItQuack(animal:unknown){
//   if(isQuackable(animal)){
//     animal.quack();
//   }
// }

interface Quackable {
  quack(): void;
}

class Duck implements Quackable {
  quack() {
    console.log("Quack");
  }
}

class Robbot implements Quackable {
  quack() {
    console.log("Robbot Quack");
  }
}

function makeItQuack(animal: Quackable) {
  animal.quack();
}

makeItQuack(new Duck());
makeItQuack(new Robbot());
