// const studentOne = {
//   name: 'Bob',
//   age: 25,
//   sayHi: function () {
//     console.log(this);
//     console.log(`${this.name} says hello`);
//     function incrementAge() {
//       // console.log(this)
//       this.age++;
//     }
//     incrementAge();
//     const incrementWithArrow = () => {
//       console.log('Incrementing ' + this.name + ' age');
//       console.log(this.age);
//       this.age++;
//       console.log('incrementedTo ' + this.age + ' yo');
//     };
//     console.log('After incrementAge', this);
//     incrementWithArrow();
//   },
// };

// console.log(this);

// const studentTwo = {
//   name: 'Alice',
//   age: 27,
//   sayHi: () => {
//     console.log('Alice: ', this);
//   },
// };

// studentOne.sayHi();
// studentTwo.sayHi();

const studentThree = {
  name: 'Lena',
  age: '29',
  hungry: true,
  incrementAge: function () {
    this.age++;
    console.log(`HB ${this.name}, you are now ${this.age}`);
  },
  meow: function () {
    if (!this.hungry) {
      console.log('MEOW');
    } else {
      const attack = () => {
        console.log(this);
        console.log(this.name, 'is slicing things');
      };
      attack();
    }
  },
};

console.log(studentThree.meow());
console.log('gskjngskjh', studentThree.incrementAge());
