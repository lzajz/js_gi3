
class Person {
    #name;
    #ssn;
    constructor(name, ssn) {
      this.#name = name;
      this.#ssn = ssn;
    }
    get name() {
      return this.#name;
    }
  }
  const person3 = new Person("Kathy", 281);
  console.log(person3.ssn);
  console.log(person3.name);
  
  var person = (function () {
    let pii = {
      name: "Jackie",
      ssn: "123-45-6789",
    };
    return {
      getName: function () {
        console.log(pii.name);
      },
    };
  })();
  person.getName();