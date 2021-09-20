// Parent Class
class Ship {
    constructor(id=1, health=100, damage=10, shipColor) {
      this.id = id;
      this.health = health;
      this.damage = damage;
      this.shipColor = shipColor;
    }
  //   Instance Method
    attack(target) {
      target.health = target.health - this.damage;
    }

    defineSelf() {
        return `Ship ID = ${this.id}, Ship Health = ${this.health}`
    }
    
  //   Class Method
    static getColors() {
      return ['red', 'blue', 'black']
    }
  }
  
  // Enemy1 is an instance of the ship class
  // We instantiate the ship class
  
  const enemy1 = new Ship(1);
  const enemy2 = new Ship(2);
  const enemy3 = new Ship(3);
  
  // Player Sub Class
  class Player extends Ship {
    constructor(id, health, damage, shipColor, specialWeapons) {
  //     super() calls the parent constructor in place, as if you copied and pasted it from the parent class below
      super(id, health, damage, shipColor); // returns this object "{}"
      this.specialWeapons = specialWeapons;
    }
  }
  
  const player1 = new Player(5, 100, 10, Ship.getColors()[2], ['laser']);
  console.log(player1)

//   player1.attack(enemy1);
//   console.log(enemy1)

console.log(player1.defineSelf())

// ENEMY SUB CLASS
class Enemy extends Ship {
    constructor(id=0, health=90, damage=8, shipColor='red') {
        super(id, health, damage, shipColor)
    }
    selfDestruct() {
        this.health = 0;
    }
}

const rogue1 = new Enemy();
rogue1.selfDestruct()
console.log(rogue1)


class Person {
    constructor(name, age, eyes, hair) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
    }
    static eyeColors() {
        return ['blue', 'green', 'brown']
    }
    setHair(hairColor) {
        this.hair = hairColor
    }
    greet(otherPerson) {
        console.log('hi ' + otherPerson + '!');
    }
    jump(){
        console.log('weeee!');
    }
};

class SuperHero extends Person {
    constructor(name, age, eyes, hair) {
        super(name, age, eyes, hair);
        this.superPowers = ['flight', 'super-strength', 'x-ray vision', 'heat-vision', 'cold breath', 'super-speed', 'enhanced hearing', 'nigh-invulberability']
    }
    fly() {
        console.log('Up, up, and away!');
    }
    greet(otherPerson) {
        console.log('Greetings ' + otherPerson);
    }
    jump() {
        super.jump();
        this.fly();
    }
};

const superman = new SuperHero('Clark Kent', 30, Person.eyeColors()[0], 'black');
// console.log(superman)
superman.jump();
console.log(superman.jump)


// instantiate, or create new object by adding new keyword before calling the class name like a function.
const me = new Person('Natalie', 28, 'green', 'blonde');
console.log(me);
me.setHair('red');
console.log(me)

const bob = new Person();
me.greet(bob);
me.jump();
console.log(bob);
// console.log(typeof(me));
// console.log(typeof(bob));


// class Car {
//     constructor(serialNumber) {
//         this.serialNumber = serialNumber;
//     }
//     drive() {
//         console.log('Vroom vroom!')
//     }
// }

// factory that generates car objects
// const factory = {
//     cars: [],
//     generateCar(){
//         const newCar = new Car(this.cars.length);
//         this.cars.push(newCar);
//         return newCar;
//     },
//     findCar(index) {
//         return this.cars[index];
//     }
// }

// factory.generateCar();
// factory.generateCar();
// console.log(factory);
// console.log(factory.findCar(1));

// // A factory can also be an instantiation of a class
// class Car {
//     constructor(maker, serialNumber) {
//         this.maker = maker;
//         this.serialNumber = serialNumber;
//     }
//     drive() {
//         console.log('Vroom');
//     }
// }

// class Factory {
//     constructor(company) {
//         this.company = company;
//         this.cars = [];
//     }
//     generateCar() {
//         const newCar = new Car(this.company, this.cars.length);
//         this.cars.push(newCar);
//         return newCar;
//     }
//     findCar(index) {
//         return this.cars[index];
//     }
// }

// const toyota = new Factory("Toyota");
// const bmw = new Factory('BMW');
// toyota.generateCar();
// bmw.generateCar();
// console.log(bmw.findCar(0));
// console.log(toyota.findCar(0));