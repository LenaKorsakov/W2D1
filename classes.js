class Human {
  // The constructor is a method which is used to create the instance objects.
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.hasShoes = true;
  }

  talk(sentence) {
    console.log(`${this.name} says: ${sentence}`);
  }

  growOlder() {
    this.age++;
  }

  changeName(newName) {
    console.log(`old name: ${this.name}`);
    this.name = newName;
    console.log(`new name: ${this.name}`);
  }

  sayMyName() {
    this.talk(`I am the one who is ${this.name}`);
  }
}

const bob = new Human('Bob', 20);
bob.talk('I am bob');

bob.changeName('Sam');
bob.sayMyName();

class Student extends Human {
  // constructor (name, age, subject) {
  // 	this.name = name;
  // 	this.age = age;
  // 	this.subject = subject;
  // }

  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
    this.skillLevel = Math.floor(Math.random() * 11);
  }

  trains() {
    this.skillLevel += Math.floor(Math.random() * 3) + 1;
  }

  growOlder() {
    super.growOlder();
    this.talk(`It was my birthday, I'm now ${this.age} years old`);
    this.trains();
    this.talk(this.skillLevel);
    this.trains();
    this.talk(this.skillLevel);
  }
}
const totoro = new Student('Totoro', 28, 'Web Dev');
const bobo = new Student('Boboro', 22, 'Web Dev');
const chalio = new Student('Chalio', 33, 'Web Dev');

console.log(`Totoro skill level is ${totoro.skillLevel}`);

//totoro.growOlder();

bobo.growOlder();

class Classroom {
  constructor() {
    this.students = [];
    this.teacher = null;
  }

  addStudent(student) {
    this.students.push(student);
  }

  addTeacher(teacher) {
    this.teacher = teacher;
  }

  testTime() {
    for (const student of this.students) {
      this.teacher.skillCheck(student);
    }
  }
}

class Teacher extends Human {
  // constructor (name, age) {
  // 	super(name, age);
  // }

  skillCheck(student) {
    if (student.skillLevel >= 10) {
      this.talk(`Cool ${student.name}`);
    } else {
      this.talk('Training time');
      student.trains();
      student.talk(`My new skill level is ${student.skillLevel}`);
      this.skillCheck(student);
    }
  }
}

const mdn = new Teacher('MDN', Infinity);

const myClassRoom = new Classroom();
myClassRoom.addStudent(totoro);
myClassRoom.addStudent(bobo);
myClassRoom.addStudent(chalio);
myClassRoom.addTeacher(mdn);

console.log('<=== Training time! ===>');
myClassRoom.testTime();
