class Person {
  constructor(private name: string, private age: number) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `My name is ${this.name} and my age is ${this.age}`;
  }
}

const anbreaker = new Person('anbreaker', 36);

anbreaker.getSummary();
