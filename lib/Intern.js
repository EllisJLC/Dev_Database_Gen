const Employee = require("./Employee");

class Intern extends Employee {
  constructor (answers, role) {
    super(answers, role);
    this.name = answers.name;
    this.id = answers.id;
    this.email = answers.email;
    this.role = role;
    this.school = answers.school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Intern;