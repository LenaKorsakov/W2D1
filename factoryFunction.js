function Person(name, age) {
  //the next line is done automatically
  //Because of the New keyword
  //const this = {};
  this.name = name;
  this.age = age;

  //the next line is done automatically
  // return this;

  this.say = function (sentence) {
    console.log(`${this.name} says: ${sentence}`);
  };

  this.growOlder = function () {
    this.age++;
    console.log(`${this.name} is now ${this.age} years old.`);
  };

  this.greet = function (person) {
    console.log('Here is the person', person);
    console.log(`${this.name} greets ${person.name}`);
  };
}

const susan = new Person('Susan', 45);
console.log(susan);

const monika = new Person('Monika', 28);
monika.say('I am learning this');

monika.greet(susan);
