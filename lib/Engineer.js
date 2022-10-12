const Employee = require("./Employee");

class Engineer extends Employee {
  constructor (answers, role) {
    super(answers, role);
    this.name = answers.name;
    this.id = answers.id;
    this.email = answers.email;
    this.role = role;
    this.github = answers.github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;