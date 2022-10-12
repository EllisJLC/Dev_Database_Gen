class Employee {
  constructor(answers, role) {
    this.name = answers.name;
    this.id = answers.id;
    this.email = answers.email;
    this.role = role;
  }
  getName () {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail () {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Employee