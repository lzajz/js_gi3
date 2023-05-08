class Person {
    name;
    job;
    age;
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }
    exercise() {
      console.log(` ${this.name} Is running for fun !`);
    }
    fetchJob() {
      console.log(`${this.name} is a ${this.job}`);
    }
  }
  const worker = new Person("Jaz", "Baker", 19);
  worker.fetchJob();
  
  class employed extends Person {
    constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true;
    }
    completeTask() {
      this.busy = false;
    }
    acceptNewTask() {
      this.busy = true;
    }
    offerNewTask() {
      if (this.busy === true) {
        console.log(`${this.name} is to busy`);
      } else {
        console.log(`${this.name} is ready to work `);
      }
    }
    learnLanguage(x) {
      this.languages.push(x);
    }
    listLanguages() {
      console.log(this.languages);
    }
    allInfo() {
      console.log(
        `${this.name} is a ${this.job} and she is ${this.age} and she has experience with ${this.languages}`
      );
    }
  }
  
  const coWorker = new employed("Carol", "Zombie-slasher", 55, [
    "farming",
    "cooking",
    "slashing zombies",
  ]);
  coWorker.allInfo();
  
  const coWorker2 = new employed("Katie", "Hostess", 20, [
    "serving",
    "handling with money ",
    "seating",
  ]);
  coWorker2.allInfo();